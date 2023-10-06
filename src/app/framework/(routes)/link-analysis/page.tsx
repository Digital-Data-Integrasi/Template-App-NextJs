import dynamic from "next/dynamic";
import GraphView from "@/components/chart/Graph";
// import GraphVisualize from "@/components/chart/Graph/GraphVisualization";

const GraphVisualize = dynamic(() =>import('@/components/chart/Graph/GraphVisualization'),{
    loading: () => <p>Loading...</p>
})

export const metadata = {
    title: "Link Analysis",
    description: "",
};

export default function Page() {
    return (
        <div>
            <h1 className="font-bold text-2xl text-gray-600">Link Analysis</h1>
            <div className="flex space-x-3">
                <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-black bg-gray-200 rounded " placeholder="Search Analysis" required />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Search
                </button>
            </div>
            <div className="py-4 text-gray-600 max-h-screen">
                {/* <GraphView /> */}
                <GraphVisualize />
            </div>
        </div>
    )
}