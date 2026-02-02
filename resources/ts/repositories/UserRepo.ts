import { api } from "@/modules/useFetch";
import type { IUser } from "@/Interfaces";
async function login(formData: { login: string; password: string }) {
   const result = await api.post<{ user: IUser; type: "Bearer"; token: string }>("login", formData);

   api.defaults.headers.common["Authorization"] = `Bearer ${result.data.token}`;
   localStorage.setItem("token", result.data.token);
   return result;
}

async function getAuthUser() {
   const result = await api.get<IUser>("user", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
   });

   if (result.status === 200) {
      api.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
   }
   return result;
}

async function logout() {
   return await api.post(
      "logout",
      {},
      {
         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      },
   );
}
export default { login, getAuthUser, logout };
