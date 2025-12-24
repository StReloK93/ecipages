import { useFetch } from "../modules/useFetch"
import { ITransportType } from "../Interfaces"
const baseURL = 'transport-types'

function index() {
   return useFetch<ITransportType[]>({ url: `${baseURL}` })
}

function store(formData: ITransportType, onload?: Function) {
   return useFetch<ITransportType[]>({ url: `${baseURL}`, formData: formData, method: 'post', onLoad: onload })
}

function update(id: number, formData: any, onLoad?: Function) {
   return useFetch<ITransportType[]>({ url: `${baseURL}/${id}`, formData: formData, method: 'put', onLoad: onLoad })
}

function destroy(id: number | undefined, onload?: Function) {
   return useFetch<ITransportType[]>({ url: `${baseURL}/${id}`, method: 'delete', onLoad: onload })
}
export default { index, store, update, destroy }