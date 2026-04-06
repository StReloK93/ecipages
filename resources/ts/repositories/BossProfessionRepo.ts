import { api } from "../modules/useFetch";
const baseURL = "boss-profession";

export default {
   index(date: Date = new Date()) {
      return api.post<{ name: string; id: number; count: number }[]>(`${baseURL}`, { date: date });
   },

   successCurrentMonth(formData: { boss_profession_id: number; date: Date }) {
      return api.post<{ name: string; id: number; count: number }[]>(`${baseURL}/success-current-month`, formData);
   },
   aviableBossProfessions(date: Date = new Date()) {
      return api.post<{ name: string; id: number }[]>(`${baseURL}/aviable`, { date: date });
   },
};
