import { Alert } from "@/model/alertModel";
import { api } from "@/utils/api";

interface alert {
    limit: number;
    page: number
}

export const getAlerts = async ({limit, page}: alert) => {
    return await api.get<Alert[]>(`/alert?_limit=${limit}&_page=${page}`);
};


export const getAlert = async (id:string) => {
    return await api.get<Alert>(`/alert/${id}`)
};

