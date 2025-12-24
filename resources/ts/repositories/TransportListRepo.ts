import { useFetch } from "../modules/useFetch"
import { ITransportList } from "../Interfaces"
const baseURL = 'transport-lists'

function index() {
   return useFetch<ITransportList[]>({ url: `${baseURL}` })
}

function store(formData: ITransportList, onload?: Function) {
   return useFetch<ITransportList>({ url: `${baseURL}`, formData: formData, method: 'post', onLoad: onload })
}

function update(id: number, formData: any,  onLoad?: Function) {
   return useFetch<ITransportList>({ url: `${baseURL}/${id}`, formData: formData, method: 'put' , onLoad})
}

function destroy(id: number | undefined, onload?: Function) {
   return useFetch({ url: `${baseURL}/${id}`, method: 'delete', onLoad: onload })
}
export default { index, store, update, destroy }