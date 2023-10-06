"use client"
import { AlertUser } from "@/model/alertUser";
import axios from "axios";
import React, { useState, useEffect, FC } from "react";
import ReactPaginate from "react-paginate";

interface Props {
    url: string;
}

const Pagination: FC<Props> = ({ url }) => {
    const [items, setItems] = useState<AlertUser[]>([]);
    const getData = async () => {
        const { data } = await axios.get<AlertUser[]>('http://localhost:3001/alert?_limit=5&_page=1')
        setItems(data)
    };

    const getNextDataPage = async (selected:number) => {
        const { data } = await axios.get<AlertUser[]>(`http://localhost:3001/alert?_limit=5&_page=${selected}`)
        return data;
    }

    useEffect(() => {
        getData()
    }, [])

    const handlePageClick = async (event: any) => {
        console.log(event.selected)
        let currentPage = event.selected + 1;
        const NextData = await getNextDataPage(currentPage)
        setItems(NextData)
    }
    return (
        <>
            {items.map((item) => (
                <>
                    <div>
                        <div className="p-4 my-3 flex justify-between">
                            <text>
                                <b>{item.name}</b>
                                <br />
                                <text>{item.address}</text>
                            </text>
                            <a href={`/framework/alert/${item.id}`} className="px-4 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 hover:text-white">
                                View
                            </a>
                        </div>
                    </div>
                </>
            ))}
            <div className="bottom-0">
                <ReactPaginate
                    previousLabel={'<- PREVIOUS'}
                    nextLabel={'NEXT ->'}
                    breakLabel={'...'}
                    pageCount={3}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName="flex justify-center list-none"
                    previousClassName="px-3 py-2 text-black font-bold cursor-pointer"
                    pageClassName="px-3 py-2  text-gray-700 font-bold cursor-pointer hover:bg-gray-200 hover:rounded-md"
                    nextClassName="px-3 py-2 text-black font-bold cursor-pointer"
                    breakClassName="px-3 py-2 text-gray-700"
                    activeClassName="text-white rounded-md bg-black hover:bg-black"
                />
            </div>
        </>

    )
};

export default Pagination;
