import { useFetch } from "../modules/useFetch"
import { ISmena } from "../Interfaces"
const baseURL = 'smena'


function index() {
   return useFetch<ISmena[]>({ url: `${baseURL}` })
}
function show(id: number, onLoad?: Function) {
   return useFetch<boolean>({ url: `${baseURL}/${id}`, onLoad })
}

function update(id: number, formData: ISmena, onLoad?: Function) {
   return useFetch<ISmena[]>({ url: `${baseURL}/${id}`, method: 'put', formData, onLoad })
}

function store(formData: ISmena, onLoad?: Function) {
   return useFetch<ISmena[]>({ url: `${baseURL}`, method: 'post', formData, onLoad })
}

function destroy(id: number, onLoad?: Function) {
   return useFetch<boolean>({ url: `${baseURL}/${id}`, method: 'delete', onLoad })
}

export default { index, update, store, destroy, show }