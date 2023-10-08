import Pagination from "@/components/pagination/Pagination";
import { AlertUser } from "@/model/alertUser";
import { getAlerts } from "@/services/alert.service";


export const metadata = {
    title: "Alert",
    description: "",
};

const limit = 5;
const firstPage = 1;

async function getNextData(selected: number) {
    "use server"
    const { data } = await getAlerts({ limit: limit, page: selected })
    return data;
}

export default async function Page() {
    const { data, headers } = await getAlerts({ limit: limit, page: firstPage })
    const totalItems = headers['x-total-count']
    return (
        <div>
            <h1 className="font-bold text-2xl text-gray-600">Alert</h1>
            <div className="py-4 text-gray-600 ml-3">
                <Pagination
                    url="http://localhost:3001"
                    items={data} getNextData={getNextData}
                    totalCount={totalItems} />
            </div>
        </div>
    )
};

