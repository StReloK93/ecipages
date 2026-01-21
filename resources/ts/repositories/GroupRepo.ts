import { useFetch, api } from "../modules/useFetch";
import { IGroup } from "../Interfaces";
const baseURL = "groups";

function index() {
   return api.get<IGroup[]>(`${baseURL}`);
}

function getGroupsByTransportId(transport_id: number) {
   return api.get<IGroup[]>(`${baseURL}/by/${transport_id}`);
}

export default { index, getGroupsByTransportId };
