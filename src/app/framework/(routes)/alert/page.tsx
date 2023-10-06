import Pagination from "@/components/pagination/Pagination";
import { AlertUser } from "@/model/alertUser";
import axios from "axios";
import Link from "next/link";
import ReactPaginate from "react-paginate";

export const metadata = {
    title: "Alert",
    description: "",
};

export default async function Page() {
    const { data } = await axios.get<AlertUser[]>('http://localhost:3001/alert')
    return (
        <div>
            <h1 className="font-bold text-2xl text-gray-600">Alert</h1>
            <div className="py-4 text-gray-600 ml-3">
                {/* {data.map((user) => (
                    <>
                        <div className="p-4 my-3">
                            <Link href={`/framework/alert/${user.id}`}>
                                <b>{user.id}</b>
                            </Link>
                        </div>
                    </>
                ))} */}
                <Pagination url="http://localhost:3001"/>
            </div>
        </div>
    )
}