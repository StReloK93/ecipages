import { ref, Ref } from 'vue';
import axios, { AxiosResponse } from 'axios'
type FetchOptions = { url: string; formData?: object; method?: HttpMethod; onLoad?: Function };
type HttpMethod = 'get' | 'post' | 'put' | 'delete'; // Define allowed HTTP methods
const wialonHttp = axios.create({'baseURL': '/api', 'headers': { 'Content-Type': 'application/json' }})



export function useFetch<T>({ url, formData = {}, method = 'get', onLoad }: FetchOptions) {
   const data = ref<T | null>(null);
   const error: any = ref(null);
   const isLoading = ref(true);

   const fetchData = async (options?: any) => {
      isLoading.value = true;
      error.value = null;

      try {
         const response: AxiosResponse = await wialonHttp[method](url, options); // No need to lowercase, method is already typed
         data.value = response.data;
      } catch (err) {
         error.value = err;
      } finally {
         isLoading.value = false;
         if (onLoad) onLoad({data: data.value, error: error.value})
      }
   };
   fetchData(formData)
   return { data, error, isLoading, fetchData };
}