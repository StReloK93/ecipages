import { useFetch } from "../modules/useFetch";
import { IChange } from "../Interfaces";
const baseURL = "change";

export default {
   index(onLoad?: Function) {
      return useFetch<IChange[]>({ url: `${baseURL}`, onLoad });
   },
   update(id: number, formData: IChange, onLoad?: Function) {
      return useFetch<IChange[]>({ url: `${baseURL}/${id}`, method: "put", formData, onLoad });
   },
   store(formData: IChange, onLoad?: Function) {
      return useFetch<IChange[]>({ url: `${baseURL}`, method: "post", formData, onLoad });
   },
   destroy(id: number, onLoad?: Function) {
      return useFetch<boolean>({ url: `${baseURL}/${id}`, method: "delete", onLoad });
   },
   show(id: number, onLoad?: Function) {
      return useFetch<boolean>({ url: `${baseURL}/${id}`, onLoad });
   },
};
