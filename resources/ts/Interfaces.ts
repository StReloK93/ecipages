import yup from "yup";
import { Component } from "vue";

export interface IOrganization {
   name: string;
   short_name: string;
   transports: ITransport[];
   transport_types: ITransportType[];
   id?: number;
}

export interface ITransport {
   organization_id: number;
   garage_number: number;
   transport_list: ITransportList;
   transport_list_id: number;
   smena_id: number;
   start_smena_day: string;
   smena: ISmena;
   id?: number;
}

export interface ITransportList {
   name: string;
   short_name: string;
   transport_type_id: number;
   transport_type: ITransportType;
   id?: number;
}

export interface ITransportType {
   name: string;
   short_name: string;
   organization_id: number;

   id?: number;
}

export interface IChange {
   name: string;
   short_name: string;
   id?: number;
}

export interface ITab {
   title: string;
   key: any;
   content: ITransport[];
}

export interface ILavozim {
   name: string;
   short_name: string;
   transport_type_id: number;
}

export interface IGroup {
   id?: number;
   tabel: string;
   change_id: number;
   change: IChange;
   transport_id: number;
   transport?: ITransport;
   lavozim_id: number;
   lavozim: ILavozim;
   active_from: string;
}

export interface ISmena {
   id?: number;
   name: string;
   formula: {
      first: any;
      second: any;
   };
}

export interface IProps {
   [key: string]: unknown;
}

export interface InputConfig {
   component: Component;
   props: IProps | null;
   generateProps?: () => Promise<void>;
   name: string;
   placeholder?: string;
   schema: yup.AnySchema;
   class?: string[];
   value?: string | number | boolean | null | undefined;
}

export interface IEmployee {
   name: string;
   lavozim_id: number;
   organization_id: number;
   table: string;
   id?: number;
}

export interface ILavozim {
   name: string;
   transport_type_id: number;
   transport_type: ITransportType;
   id?: number;
}
