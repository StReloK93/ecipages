import { useFetch } from "../modules/useFetch"
import { IOrganization, ITransport, ITab } from "../Interfaces"
import { computed } from "vue"
const baseURL = 'organizations'


function index(onload?: Function) {
   return useFetch<IOrganization[]>({ url: `${baseURL}`, onLoad: onload })
}

function store(formData: IOrganization, onload?: Function) {
   return useFetch<ITransport[]>({ url: `${baseURL}`, formData: formData, method: 'post', onLoad: onload })
}

function transports(formData: any, onLoad?: Function) {
   const { data, fetchData, isLoading } = useFetch<ITransport[]>({ url: `${baseURL}/transports`, formData, method: 'post', onLoad })

   const currentTransports = computed(() => {
      const result: ITab[] = []

      data.value?.forEach((car) => {
         const current = result.find((item) => item.key == car.transport_list.transport_type.id)
         if (current) {
            current.content.push(car)
         }
         else {
            result.push({
               title: car.transport_list.transport_type.name,
               key: car.transport_list.transport_type.id,
               content: [car]
            })
         }
      })

      return result.sort((a,b) => a.key - b.key)
   })


   


   return { data, fetchData, currentTransports, isLoading }
}

function update(id: number, formData: any) {
   return useFetch<ITransport[]>({ url: `${baseURL}/${id}`, formData: formData, method: 'put' })
}

function destroy(id: number | undefined, onload?: Function) {
   return useFetch<ITransport[]>({ url: `${baseURL}/${id}`, method: 'delete', onLoad: onload })
}

export default { index, transports, store, update, destroy }