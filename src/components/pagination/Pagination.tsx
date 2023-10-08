"use client"
import { AlertUser } from "@/model/alertUser";
import axios from "axios";
import React, { useState, useEffect, FC } from "react";
import ReactPaginate from "react-paginate";
import Table from "./Table";
import { getAlerts } from "@/services/alert.service";

interface Props {
    url: string;
    items: {};
    getNextData: (selected: number) => Promise<AlertUser[]>;
    totalCount: number;

}

const Pagination: FC<Props> = ({ url, items, getNextData, totalCount }) => {
    const [itemss, setItems] = useState(items);
    // const [pageCount, setPageCount] = useState(0);
    const limitPage = 5;
    const pageCount = totalCount/limitPage;

    // const getNextDataPage = async (selected: number) => {
    //     const { data } = await getAlerts({ limit: 5, page: selected })
    //     return data;
    // }

    // useEffect(() => {
    //     const getData = async () => {
    //         const { headers, data } = await getAlerts({ limit: 5, page: 1 });
    //         const totalItems = headers['x-total-count']
    //         setPageCount(Math.ceil(totalItems / limitPage));
    //         setItems(data)

    //     };
    //     getData()
    // }, [])

    const handlePageClick = async (event: any) => {
        let currentPage = event.selected + 1;
        const NextData = await getNextData(currentPage)
        setItems(NextData)
    }
    return (
        <>
            <div className="py-5">
                <Table items={itemss} />
            </div>
            <div className="bottom-0">
                <ReactPaginate
                    previousLabel={'<- PREVIOUS'}
                    nextLabel={'NEXT ->'}
                    breakLabel={'...'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName="flex justify-center list-none"
                    previousClassName="px-3 py-2 text-black font-bold cursor-pointer"
                    pageClassName="px-3 py-2  text-gray-700 font-bold cursor-pointer hover:bg-gray-200 hover:rounded-md"
                    nextClassName="px-3 py-2 text-black font-bold cursor-pointer"
                    breakClassName="px-3 py-2 text-gray-700"
                    activeClassName="text-white rounded-md bg-black hover:bg-gray-900"
                />
            </div>
        </>

    )
};

export default Pagination;
