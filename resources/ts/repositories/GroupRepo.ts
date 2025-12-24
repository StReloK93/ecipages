import { useFetch } from "../modules/useFetch"
import { IGroup } from "../Interfaces"
const baseURL = 'groups'


function index() {
   return useFetch<IGroup[]>({ url: `${baseURL}` })
}

function getGroupsByTransportId(transport_id: number, onLoad?: Function) {
   return useFetch<IGroup[]>({ url: `${baseURL}/by/${transport_id}`, onLoad: onLoad })
}

export default { index, getGroupsByTransportId }