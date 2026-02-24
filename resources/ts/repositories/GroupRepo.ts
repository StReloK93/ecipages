import { api } from "../modules/useFetch";
import { IGroup } from "../Interfaces";
const baseURL = "groups";

export default {
   index() {
      return api.get<IGroup[]>(`${baseURL}`);
   },
   byTransport(transport_id: number) {
      return api.get<IGroup[]>(`${baseURL}/transport/${transport_id}`);
   },
   byTransportChange(transport_id: number, change_id: number) {
      return api.post<IGroup[]>(`${baseURL}/transport/change`, { transport_id, change_id });
   },
   show(id: number) {
      return api.get<IGroup>(`${baseURL}/${id}`);
   },
   async store(formData: { lavozim_id: number; transport_id: number; employe_id: number; change_id: number }) {
      return await api.post<IGroup>(`${baseURL}`, formData);
   },
   update(id: number, formData: any) {
      return api.put<IGroup>(`${baseURL}/${id}`, formData);
   },
   destroy(id: number | undefined) {
      return api.delete(`${baseURL}/${id}`);
   },
};
