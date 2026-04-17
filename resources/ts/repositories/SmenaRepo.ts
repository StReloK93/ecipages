import { api } from "../modules/useFetch";
import { ISmena } from "../Interfaces";
const baseURL = "smena";

export default {
   index() {
      return api.get<ISmena[]>(`${baseURL}`);
   },
   showByOrganization(organization_id: string) {
      return api.get<ISmena[]>(`${baseURL}/show/${organization_id}`);
   },
   show(id: number) {
      return api.get<ISmena>(`${baseURL}/${id}`);
   },
   store(formData: ISmena, organization_id: string) {
      return api.post<ISmena>(`${baseURL}`, { ...formData, organization_id });
   },
   update(id: number, formData: any) {
      return api.put<ISmena>(`${baseURL}/${id}`, formData);
   },
   destroy(id: number | undefined) {
      return api.delete(`${baseURL}/${id}`);
   },
};
