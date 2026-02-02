<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Validator;
use Auth;
use Hash;


class AuthController extends Controller
{

    public function user(Request $request)
    {
        return $request->user();
    }

    public function users()
    {
        return User::all();
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'login' => 'required|string',
            'password' => 'required|string',
        ]);

        // Agar "phone" bilan login qilmoqchi bo‘lsangiz:
        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => "Login yoki parol xato!"
            ], 401);
        }

        $user = Auth::user();


        // Token rollarga qarab berilsa ham bo‘ladi
        $token = $user->createToken('auth_token', ['user'])->plainTextToken;

        return response()->json([
            'token' => $token,
            'type' => 'Bearer',
            'user' => $user,
        ]);
    }


    public function register(Request $res)
    {

        $validate = Validator::make($res->all(), [
            'phone' => 'required|unique:users',
            'password' => 'required|min:6|max:255|confirmed',
        ], $messages = [
            'required' => ":attribute bo'sh bo'lmasligi kerak.",
            'unique' => ":attribute band.",
            'min' => ":attribute :min simboldan kam bo'lmasligi kerak.",
            'phone' => ":attribute to'gri emas",
            'confirmed' => ":attributelar mos kelmayabdi"
        ], [
            'phone' => "Login",
            'password' => 'Parol'
        ]);

        if ($validate->fails()) {
            return response()->json($validate->errors(), 299);
        }

        $user = User::create([
            'name' => $res['name'],
            'phone' => $res['phone'],
            'commerse' => [],
            'tableNumber' => $res['tableNumber'],
            'password' => Hash::make($res['password']),
        ]);

        return response()->json(true, 200);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'logout'], 200);
    }


    public function passwordReset(Request $req)
    {
        $user = Auth::user();

        $validate = Validator::make($req->all(), [
            'old' => 'required',
            'new' => 'required|min:6|max:255|confirmed',
        ], $messages = [
            'required' => ":attribute bo'sh bo'lmasligi kerak.",
            'min' => ":attribute :min simboldan kam bo'lmasligi kerak.",
            'confirmed' => ":attributelar mos kelmayabdi"
        ], [
            'new' => 'Parol'
        ]);

        if (Hash::check($req->old, $user->password) == false) {
            return response()->json([
                'message' => "hozirgi parol to'gri emas",
            ], 200);
        }

        if ($validate->fails()) {
            return response()->json($validate->messages(), 299);
        }



        $user->password = Hash::make($req->new);

        return $user->save();
    }
}
