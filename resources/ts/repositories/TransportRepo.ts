import { api } from "../modules/useFetch";
import { InputConfig, ITransport } from "../Interfaces";
import { PrimeInputs, globalProps, selectOption } from "@/modules/PrimeInputs";
import * as yup from "yup";
const baseURL = "transports";

export default {
   index() {
      return api.get<ITransport[]>(`${baseURL}`);
   },
   showByOrganization(organization_id: string) {
      return api.get<ITransport[]>(`${baseURL}/show/${organization_id}`);
   },
   show(id: number) {
      return api.get<ITransport>(`${baseURL}/${id}`);
   },
   store(formData: ITransport, organization_id: string) {
      return api.post<ITransport>(`${baseURL}`, { ...formData, organization_id });
   },
   update(id: number, formData: any) {
      return api.put<ITransport>(`${baseURL}/${id}`, formData);
   },
   destroy(id: number | undefined) {
      return api.delete(`${baseURL}/${id}`);
   },

   inputs: (organization_id: number) =>
      [
         {
            component: PrimeInputs["Select"],
            name: "transport_list_id",
            placeholder: "Transport turi",
            generateProps: async function () {
               const { data } = await api.get("transport-lists/show/" + organization_id);
               this.props = selectOption(data, "name");
            },
            schema: yup.number().required("Majburiy maydon!"),
            class: ["mb-4"],
         },
         {
            component: PrimeInputs["InputText"],
            name: "garage_number",
            placeholder: "Garaj raqami",
            props: globalProps,
            schema: yup.string().trim().required("Majburiy maydon!"),
            class: ["mb-4"],
         },
         {
            component: PrimeInputs["Select"],
            name: "smena_id",
            placeholder: "Smena turi",
            generateProps: async function () {
               const { data } = await api.get("smena/show/" + organization_id);
               this.props = selectOption(data, "name");
            },
            schema: yup.number().required("Majburiy maydon!"),
            class: ["mb-4"],
         },
         {
            component: PrimeInputs["DatePicker"],
            name: "start_smena_day",
            placeholder: "Smena birinchi kuni",
            props: { ...globalProps, dateFormat: "yy-mm-dd" },
            schema: yup.date().required("Majburiy maydon!"),
            class: ["mb-4"],
         },
      ] as InputConfig[],

   columns: [
      {
         field: "transport_list.name",
         header: "Transport turi",
      },
      {
         field: "garage_number",
         header: "Garaj raqami",
      },
      {
         field: "smena.name",
         header: "Smena nomi",
      },
      {
         field: "start_smena_day",
         header: "Smena boshlanish kuni",
      },
   ],

   filterFields: ["garage_number", "transport_list.name"],
};
