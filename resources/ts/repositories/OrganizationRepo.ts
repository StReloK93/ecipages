import { api } from "../modules/useFetch";
import { InputConfig, IOrganization } from "../Interfaces";
import * as yup from "yup";
import { PrimeInputs, globalProps } from "@/modules/PrimeInputs";
const baseURL = "organizations";

export default {
   index(date: Date = new Date()) {
      return api.post<IOrganization[]>(`${baseURL}`, { date: date });
   },
   show(id: number) {
      return api.get<IOrganization>(`${baseURL}/${id}`);
   },
   aviable(date: Date = new Date()) {
      return api.post<IOrganization[]>(`${baseURL}/aviable`, { date: date });
   },
   store(formData: IOrganization) {
      return api.post<IOrganization>(`${baseURL}`, formData);
   },
   update(id: number, formData: any) {
      return api.put<IOrganization>(`${baseURL}/${id}`, formData);
   },
   destroy(id: number) {
      return api.delete(`${baseURL}/${id}`);
   },
   transports(formData: any) {
      return api.post(`${baseURL}/transports`, formData);
   },
   transportsEmployes(formData: any) {
      return api.post(`${baseURL}/transports-employes`, formData);
   },
   successCurrentMonth(formData: { organization_id: number; date: Date }) {
      return api.post<{ name: string; id: number; count: number }[]>(`${baseURL}/success-current-month`, formData);
   },
   columns: [
      { field: "name", header: "Nomi" },
      { field: "short_name", header: "Qisqa nomi" },
   ],
   inputs: [
      {
         component: PrimeInputs["InputText"],
         name: "name",
         placeholder: "Nomi",
         props: globalProps,
         schema: yup.string().trim().required("Majburiy maydon!"),
         class: ["mb-4"],
      },
      {
         component: PrimeInputs["InputText"],
         name: "short_name",
         placeholder: "Qisqa nomi",
         props: globalProps,
         schema: yup.string().trim().required("Majburiy maydon!"),
         class: ["mb-4"],
      },
   ] as InputConfig[],
};
