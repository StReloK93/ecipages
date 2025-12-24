import { useFetch } from "../modules/useFetch"
import { ITransport } from "../Interfaces"
const baseURL = 'transports'


function show(id: number, onLoad: Function) {
   return useFetch<ITransport>({ url: `${baseURL}/${id}`, onLoad })
}

function update(id: number, formData: ITransport, onLoad: Function) {
   return useFetch<ITransport[]>({ url: `${baseURL}/${id}`, method: 'put', formData, onLoad })
}

function store(formData: ITransport, onLoad: Function) {
   return useFetch<ITransport[]>({ url: `${baseURL}`, method: 'post', formData, onLoad })
}

function destroy(id: number, onLoad: Function) {
   return useFetch<boolean>({ url: `${baseURL}/${id}`, method: 'delete', onLoad })
}

export default { show, update, store, destroy }