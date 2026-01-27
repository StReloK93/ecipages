import { ref } from "vue";
import axios, { AxiosResponse } from "axios";
type FetchOptions = { url: string; formData?: object; method?: HttpMethod; onLoad?: Function };
type HttpMethod = "get" | "post" | "put" | "delete"; // Define allowed HTTP methods
const api = axios.create({ baseURL: "/api", headers: { "Content-Type": "application/json" } });

function useFetch<T>({ url, formData = {}, method = "get", onLoad }: FetchOptions) {
   const data = ref<T | null>(null);
   const error: any = ref(null);
   const isLoading = ref(true);

   const fetchData = async (options?: any) => {
      isLoading.value = true;
      error.value = null;

      try {
         const response: AxiosResponse = await api[method](url, options); // No need to lowercase, method is already typed
         data.value = response.data;
      } catch (err) {
         error.value = err;
      } finally {
         isLoading.value = false;
         if (onLoad) onLoad({ data: data.value, error: error.value });
      }
   };
   fetchData(formData);
   return { data, error, isLoading, fetchData };
}

function useFetchDecorator<T>(fetchFn: any) {
   const data = ref<T>();
   const isLoading = ref(false);
   const isFirstLoading = ref(true); // Dastlab true bo'ladi
   const error = ref<any>(null);

   const execute = async (...args: any[]) => {
      isLoading.value = true;
      error.value = null;

      try {
         const response = await fetchFn(...args);
         data.value = response.data;
         return response;
      } catch (err) {
         error.value = err;
         throw err;
      } finally {
         isLoading.value = false;
         isFirstLoading.value = false;
      }
   };

   return {
      data,
      isLoading,
      isFirstLoading,
      error,
      execute,
   };
}

export { useFetch, api, useFetchDecorator };
