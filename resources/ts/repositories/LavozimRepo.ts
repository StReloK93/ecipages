import { api } from "../modules/useFetch";
import { InputConfig, ILavozim } from "../Interfaces";
import { PrimeInputs, globalProps, selectOption } from "@/modules/PrimeInputs";
import * as yup from "yup";
const baseURL = "lavozim";

export default {
   index() {
      return api.get<ILavozim[]>(`${baseURL}`);
   },
   show(id: number) {
      return api.get<ILavozim>(`${baseURL}/${id}`);
   },
   store(formData: ILavozim) {
      return api.post<ILavozim>(`${baseURL}`, formData);
   },
   update(id: number, formData: any) {
      return api.put<ILavozim>(`${baseURL}/${id}`, formData);
   },
   destroy(id: number | undefined) {
      return api.delete(`${baseURL}/${id}`);
   },

   inputs: [
      {
         component: PrimeInputs["InputText"],
         name: "name",
         placeholder: "Lavozim nomi",
         props: globalProps,
         schema: yup.string().trim().required("Majburiy maydon!"),
         class: ["mb-4"],
      },
      {
         component: PrimeInputs["Select"],
         name: "transport_type_id",
         placeholder: "Transport turi",
         generateProps: async function () {
            const { data } = await api.get("transport-types");
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
         field: "transport_type.name",
         header: "Transport turi",
      },
   ],
};
