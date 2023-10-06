import { AlertUser } from "@/model/alertUser";
import axios, {AxiosResponse} from "axios";
import { notFound } from "next/navigation";

export const metadata = {
    title: "Alert",
    description: "Alert"
};

export default async function Page ({params}: {params: {id: string}}) {
    const { data} = await axios.get<AlertUser>(`http://localhost:3001/alert/${params.id}`)

    if (!data) {
        notFound()
    };
    return (
        <div>
            <h1 className="font-bold text-2xl text-gray-700">
                {data.id}
            </h1>
            <ul className="list-none py-4 text-gray-600">
                <li>{data.name}</li>
                <li>{data.cif}</li>
                <li>{data.gender}</li>
                <li>{data.address}</li>
                <li>{data.job}</li>
            </ul>
        </div>
    )
}