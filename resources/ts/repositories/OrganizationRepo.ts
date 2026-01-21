import { api } from "../modules/useFetch";
import { InputConfig, IOrganization } from "../Interfaces";
import * as yup from "yup";
import { PrimeInputs, globalProps } from "@/modules/PrimeInputs";
const baseURL = "organizations";

export default {
   index() {
      return api.get<IOrganization[]>(`${baseURL}`);
   },
   show(id: number) {
      return api.get<IOrganization>(`${baseURL}/${id}`);
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
