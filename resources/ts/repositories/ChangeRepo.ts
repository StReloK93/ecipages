import { useFetch } from "../modules/useFetch"
import { IChange } from "../Interfaces"
const baseURL = 'change'


function index(onLoad?: Function) {
   return useFetch<IChange[]>({ url: `${baseURL}`, onLoad })
}
function show(id: number, onLoad?: Function) {
   return useFetch<boolean>({ url: `${baseURL}/${id}`, onLoad })
}

function update(id: number, formData: IChange, onLoad?: Function) {
   return useFetch<IChange[]>({ url: `${baseURL}/${id}`, method: 'put', formData, onLoad })
}

function store(formData: IChange, onLoad?: Function) {
   return useFetch<IChange[]>({ url: `${baseURL}`, method: 'post', formData, onLoad })
}

function destroy(id: number, onLoad?: Function) {
   return useFetch<boolean>({ url: `${baseURL}/${id}`, method: 'delete', onLoad })
}

export default { index, update, store, destroy, show }