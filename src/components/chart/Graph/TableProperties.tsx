import React from "react";


const GraphProperties = (properties: any) => {
    console.log(properties.properties)
    return (
        <div className="w-[30%] p-4 bg-white">
            <h2>Node Information</h2>
            <table>
                <tbody>
                    <tr>
                        <td>ID:</td>
                        <td>{properties.properties.id}</td>
                    </tr>
                    <tr>
                        <td>Label:</td>
                        <td>{properties.properties.label}</td>
                    </tr>
                    {/* Add more rows for other node properties */}
                </tbody>
            </table>
        </div>
    )
};

export default GraphProperties;