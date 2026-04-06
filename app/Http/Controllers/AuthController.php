<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Validator;
use Auth;
use Hash;
use DB;
use Illuminate\Validation\Rule;

class AuthController extends Controller
{

    public function user(Request $request)
    {
        return $request->user();
    }

    public function index()
    {
        return User::all();
    }


    public function show($id)
    {
        return User::find($id);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'min:3', 'max:255'],
            'login' => ['required', 'string', 'min:3', 'max:255', 'unique:users,login'],
            'role' => ['boolean'],
            'boss_professions' => ['array'],
            'organization_roles' => ['array'],
        ]);

        return DB::transaction(function () use ($data) {
            $user = User::create([
                'name' => $data['name'],
                'organization_id' => 0,
                'login' => $data['login'],
                'role' => (int) $data['role'],
                'password' => Hash::make('zzzz1111*'),
            ]);

            $bossarray = array_map(function ($professionId) {
                return [
                    'boss_profession_id' => $professionId,
                ];
            }, $data['boss_professions']);

            $user->success_roles()->createMany($bossarray);

            if (!empty($data['organization_roles'])) {
                $user->organization_roles()->createMany($data['organization_roles']);
            }

            return response()->json([
                'message' => 'User yaratildi',
                'data' => $user->load([
                    'success_roles:id,boss_profession_id,user_id',
                    'organization_roles',
                ])
            ], 201);
        });
    }

    public function update(Request $request, $id)
    {
        $user = User::find($id);
        $data = $request->validate([
            'name' => ['required', 'string', 'min:3', 'max:255'],
            'login' => [
                'required',
                'string',
                'min:3',
                'max:255',
            ],
            'role' => ['boolean'],
            'boss_professions' => ['array'],
            'organization_roles' => ['array'],
        ]);


        $bossarray = array_map(function ($professionId) {
            return [
                'boss_profession_id' => $professionId,
            ];
        }, $data['boss_professions']);

        $user->success_roles()->delete();
        $user->success_roles()->createMany($bossarray);


        $user->organization_roles()->delete();
        if (!empty($data['organization_roles'])) {
            $user->organization_roles()->createMany($data['organization_roles']);
        }

        $user->update([
            'name' => $data['name'],
            'login' => $data['login'],
            'role' => (int) $data['role'],
        ]);

        return response()->json([
            'message' => 'User yangilandi',
            'data' => $user->load([
                'success_roles:id,boss_profession_id,user_id',
                'organization_roles',
            ])
        ]);
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

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'logout'], 200);
    }



    // public function register(Request $res)
    // {

    //     $validate = Validator::make($res->all(), [
    //         'phone' => 'required|unique:users',
    //         'password' => 'required|min:6|max:255|confirmed',
    //     ], $messages = [
    //             'required' => ":attribute bo'sh bo'lmasligi kerak.",
    //             'unique' => ":attribute band.",
    //             'min' => ":attribute :min simboldan kam bo'lmasligi kerak.",
    //             'phone' => ":attribute to'gri emas",
    //             'confirmed' => ":attributelar mos kelmayabdi"
    //         ], [
    //         'phone' => "Login",
    //         'password' => 'Parol'
    //     ]);

    //     if ($validate->fails()) {
    //         return response()->json($validate->errors(), 299);
    //     }

    //     $user = User::create([
    //         'name' => $res['name'],
    //         'phone' => $res['phone'],
    //         'commerse' => [],
    //         'tableNumber' => $res['tableNumber'],
    //         'password' => Hash::make($res['password']),
    //     ]);

    //     return response()->json(true, 200);
    // }



    // public function passwordReset(Request $req)
    // {
    //     $user = Auth::user();

    //     $validate = Validator::make($req->all(), [
    //         'old' => 'required',
    //         'new' => 'required|min:6|max:255|confirmed',
    //     ], $messages = [
    //             'required' => ":attribute bo'sh bo'lmasligi kerak.",
    //             'min' => ":attribute :min simboldan kam bo'lmasligi kerak.",
    //             'confirmed' => ":attributelar mos kelmayabdi"
    //         ], [
    //         'new' => 'Parol'
    //     ]);

    //     if (Hash::check($req->old, $user->password) == false) {
    //         return response()->json([
    //             'message' => "hozirgi parol to'gri emas",
    //         ], 200);
    //     }

    //     if ($validate->fails()) {
    //         return response()->json($validate->messages(), 299);
    //     }



    //     $user->password = Hash::make($req->new);

    //     return $user->save();
    // }
}
