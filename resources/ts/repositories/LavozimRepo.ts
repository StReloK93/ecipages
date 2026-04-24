import { api } from "../modules/useFetch";
import { InputConfig, ILavozim } from "../Interfaces";
import { PrimeInputs, globalProps, selectOption } from "@/modules/PrimeInputs";
import * as yup from "yup";
const baseURL = "lavozim";

export default {
   index() {
      return api.get<ILavozim[]>(`${baseURL}`);
   },
   showByOrganization(organization_id: string) {
      return api.get<ILavozim[]>(`${baseURL}/show/${organization_id}`);
   },
   show(id: number) {
      return api.get<ILavozim>(`${baseURL}/${id}`);
   },
   store(formData: ILavozim, organization_id: string) {
      return api.post<ILavozim>(`${baseURL}`, { ...formData, organization_id });
   },
   update(id: number, formData: any) {
      return api.put<ILavozim>(`${baseURL}/${id}`, formData);
   },
   destroy(id: number | undefined) {
      return api.delete(`${baseURL}/${id}`);
   },

   inputs: (organization_id: number) =>
      [
         {
            component: PrimeInputs["Select"],
            name: "transport_type_id",
            placeholder: "Transport turi",
            generateProps: async function () {
               const { data } = await api.get("transport-types/show/" + organization_id);
               this.props = selectOption(data, "name");
            },
            schema: yup.number().required("Majburiy maydon!"),
            class: ["mb-4"],
         },
         {
            component: PrimeInputs["InputText"],
            name: "name",
            placeholder: "Lavozim nomi",
            props: globalProps,
            schema: yup.string().trim().required("Majburiy maydon!"),
            class: ["mb-4"],
         },
      ] as InputConfig[],

   columns: [
      {
         field: "transport_type.name",
         header: "Transport turi",
      },
      {
         field: "name",
         header: "Lavozim nomi",
      },
   ],
   filterFields: ["name"],
};
