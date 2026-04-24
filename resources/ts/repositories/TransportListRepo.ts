import { api } from "../modules/useFetch";
import { InputConfig, ITransportList } from "../Interfaces";
import { PrimeInputs, globalProps, selectOption } from "@/modules/PrimeInputs";
import * as yup from "yup";
const baseURL = "transport-lists";

export default {
   index() {
      return api.get<ITransportList[]>(`${baseURL}`);
   },
   showByOrganization(organization_id: string) {
      return api.get<ITransportList[]>(`${baseURL}/show/${organization_id}`);
   },
   byTransportType(transport_type_id: number) {
      return api.get<ITransportList[]>(`${baseURL}/by/transport-type/${transport_type_id}`);
   },
   tableTransportType(transport_type_id: number) {
      return api.get<ITransportList[]>(`${baseURL}/table/transport-type/${transport_type_id}`);
   },
   show(id: number) {
      return api.get<ITransportList>(`${baseURL}/${id}`);
   },
   store(formData: ITransportList, organization_id: string) {
      return api.post<ITransportList>(`${baseURL}`, { ...formData, organization_id });
   },
   update(id: number, formData: any) {
      return api.put<ITransportList>(`${baseURL}/${id}`, formData);
   },
   destroy(id: number | undefined) {
      return api.delete(`${baseURL}/${id}`);
   },

   inputs: (organization_id: number) =>
      [
         {
            component: PrimeInputs["InputText"],
            name: "name",
            placeholder: "Nomi",
            props: globalProps,
            schema: yup.string().trim().required("Majburiy maydon!"),
            class: ["mb-4"],
         },
         {
            component: PrimeInputs["Select"],
            name: "transport_type_id",
            placeholder: "Transport turi",
            generateProps: async function () {
               const { data } = await api.get("transport-types/show/" + organization_id);
               this.props = selectOption(data, "name");
            },
            schema: yup.string().optional(),
         },
      ] as InputConfig[],

   columns: [
      {
         field: "name",
         header: "Nomi",
      },
      {
         field: "transport_type.name",
         header: "Transport turi",
      },
   ],
   filterFields: ["name"],
};
