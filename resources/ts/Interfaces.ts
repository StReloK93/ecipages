export interface IOrganization {
   name: string,
   name_ru: string,
   id?: number,
}

export interface ITransport {
   organization_id: number,
   garage_number: number,
   transport_list: ITransportList,
   transport_list_id: number,
   smena_id: number,
   start_smena_day: string
   smena: ISmena,
   id?: number,
}

export interface ITransportList {
   name: string,
   name_ru: string,
   transport_type_id: number,
   transport_type: ITransportType,
   id?: number,
}

export interface ITransportType {
   name: string,
   name_ru: string,
   id?: number,
}

export interface IChange {
   name: string,
   name_ru: string,
   id?: number,
}


export interface ITab {
   title: string,
   key: any,
   content: ITransport[]
}

export interface ILavozim {
   name: string,
   name_ru: string,
   transport_type_id: number,
}

export interface IGroup {
   id?: number
   tabel: string
   change_id: number
   change: IChange
   transport_id: number
   transport?: ITransport
   lavozim_id: number
   lavozim: ILavozim
   active_from: string
}

export interface ISmena{
   id?: number 
   name: string
   formula: {
      first: any
      second: any
   }
}