import { useFetch, api } from "../modules/useFetch";
import { ITransportType } from "../Interfaces";
import { PrimeInputs, globalProps } from "@/modules/PrimeInputs";
import * as yup from "yup";

const baseURL = "transport-types";

export default {
   index() {
      return api.get(`${baseURL}`);
   },
   showByOrganization(organization_id: string) {
      return api.get(`${baseURL}/show/${organization_id}`);
   },
   show(id: number) {
      return api.get(`${baseURL}/${id}`);
   },
   store(formData: ITransportType, organization_id: string) {
      return api.post(`${baseURL}`, { ...formData, organization_id });
   },
   update(id: number, formData: any) {
      return api.put(`${baseURL}/${id}`, formData);
   },
   destroy(id: number | undefined) {
      return api.delete(`${baseURL}/${id}`);
   },

   inputs: (organization_id: string) => [
      {
         component: PrimeInputs["InputText"],
         name: "name",
         placeholder: "Nomi",
         props: globalProps,
         schema: yup.string().trim().required("Majburiy maydon!"),
         class: ["mb-4"],
      },
   ],

   columns: [
      {
         field: "name",
         header: "Nomi",
      },
   ],
};
