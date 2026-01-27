import { api } from "../modules/useFetch";
import { IChange } from "../Interfaces";
const baseURL = "change";

export default {
   index() {
      return api.get<IChange[]>(`${baseURL}`);
   },
   show(id: number) {
      return api.get<IChange>(`${baseURL}/${id}`);
   },
   store(formData: IChange) {
      return api.post<IChange>(`${baseURL}`, formData);
   },
   update(id: number, formData: any) {
      return api.put<IChange>(`${baseURL}/${id}`, formData);
   },
   destroy(id: number | undefined) {
      return api.delete(`${baseURL}/${id}`);
   },
};
