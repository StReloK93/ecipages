import { api } from "../modules/useFetch";
import { InputConfig, IEmployee } from "../Interfaces";
import { PrimeInputs, globalProps, selectOption } from "@/modules/PrimeInputs";
import * as yup from "yup";
const baseURL = "employes";

export default {
   index() {
      return api.get<IEmployee[]>(`${baseURL}`);
   },
   show(id: number) {
      return api.get<IEmployee>(`${baseURL}/${id}`);
   },
   store(formData: IEmployee) {
      return api.post<IEmployee>(`${baseURL}`, formData);
   },
   update(id: number, formData: any) {
      return api.put<IEmployee>(`${baseURL}/${id}`, formData);
   },
   destroy(id: number | undefined) {
      return api.delete(`${baseURL}/${id}`);
   },

   inputs: [
      {
         component: PrimeInputs["InputText"],
         name: "name",
         placeholder: "F.I.Sh",
         props: globalProps,
         schema: yup.string().trim().required("Majburiy maydon!"),
         class: ["mb-4"],
      },
      {
         component: PrimeInputs["InputText"],
         name: "table",
         placeholder: "Tabel raqami",
         props: globalProps,
         schema: yup.string().trim().required("Majburiy maydon!"),
         class: ["mb-4"],
      },
      {
         component: PrimeInputs["Select"],
         name: "lavozim_id",
         placeholder: "Lavozimi",
         generateProps: async function () {
            const { data } = await api.get("lavozim");
            this.props = selectOption(data, "name");
         },
         schema: yup.number().required("Majburiy maydon!"),
         class: ["mb-4"],
      },
   ] as InputConfig[],

   columns: [
      {
         field: "name",
         header: "F.I.Sh",
      },
      {
         field: "table",
         header: "Tabel raqami",
      },
      {
         field: "lavozim.name",
         header: "Lavozimi",
      },
   ],
};
