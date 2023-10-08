const Table = ({ items }: any) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="pb-4 bg-transparent">
                <label className="sr-only">Search</label>
                <div className="relative mt-1">
                    <input type="text" id="table-search" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search for items" />
                </div>
            </div>
            <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Cif
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Address
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Gender
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Job
                        </th>
                        <th scope="col" className="px-6 py-3">
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item: any) => (
                        <tr key={item.id} className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-4">{item.cif}</td>
                            <td className="px-6 py-4">{item.name}</td>
                            <td className="px-6 py-4">{item.address}</td>
                            <td className="px-6 py-4">{item.gender}</td>
                            <td className="px-6 py-4">{item.job}</td>
                            <td className="px-6 py-4"><a href={`/framework/alert/${item.id}`}>View</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
};

export default Table;