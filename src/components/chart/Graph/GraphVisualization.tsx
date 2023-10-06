"use client";
import React, { useState, useRef } from "react";
import Graph from "react-vis-network-graph";
import GraphProperties from "./TableProperties";


const GraphVisualize = () => {
    const graphRef = useRef(null);
    const [properties, setProperties] = useState<any>(null);
    const _data = {
        nodes: [
            {
                id: "AWS",
                color: "#76a5af",
                shape: 'dot',
                name: "AWS",
                label: "AWS",
                title: "AWS",
                cost: "$1000"
            },
            {
                id: "IBM",
                color: "#00cc99",
                label: "IBM",
                title: "IBM",
                cost: "$1000"
            },
            {
                id: "SQL",
                color: "#76a5af",
                title: "SQL",
                label: "SQL",
                cost: "$1000"
            },
            {
                id: "S3",
                color: "#76a5af",
                // label:"Node 2",
                title: "S3",
                label: "S3",
                cost: "$1000"
            },
            {
                id: "Azure",
                color: "#76a5af",
                // label:"Node 3",
                label: "Azure",
                title: "Azure",
                cost: "$1000"
            },
            {
                id: "MongoDB",
                color: "#76a5af",
                label: "MongoDB",
                title: "MongoDB",
                cost: "$1000"
            },
            {
                id: "ELB",
                color: "#76a5af",
                label: "ELB",
                title: "ELB",
                cost: "$1000"
            },
            {
                id: "Saas",
                color: "#e06666",
                label: "Saas",
                title: "Saas",
                cost: "$1000"
            },
            {
                id: "Notion",
                color: "#e06666",
                label: "Notion",
                title: "Notion",
                cost: "$1000"
            },
            {
                id: "Appengine",
                label: "Appengine",
                color: "#e06666",
                title: "Appengine",
                cost: "$1000"
            },
            {
                id: "Sematext",
                label: "Sematext",
                color: "#e06666",
                title: "Sematext",
                cost: "$1000"
            },
            {
                id: "Jenkins",
                label: "Jenkins",
                color: "#e06666",
                title: "Jenkins",
                cost: "$1000"
            },
            {
                id: "Githup",
                label: "Githup",
                color: "#e06666",
                title: "Githup",
                cost: "$1000"
            }
        ],
        edges: [
            { from: "AWS", to: "IBM", label: "HAS_INTER" },
            { from: "AWS", to: "SQL", label: "HAS_INTER" },
            { from: "IBM", to: "S3", label: "HAS_INTER" },
            { from: "IBM", to: "Azure", label: "HAS_INTER" },
            { from: "IBM", to: "MongoDB", label: "HAS_INTER" },
            { from: "MongoDB", to: "AWS", label: "HAS_INTER" },
            { from: "Azure", to: "MongoDB", label: "HAS_INTER" },
            { from: "MongoDB", to: "ELB", label: "HAS_INTER" },
            { from: "AWS", to: "ELB", label: "HAS_INTER" },
            { from: "ELB", to: "Saas", label: "HAS_INTER" },
            { from: "Saas", to: "Notion", label: "HAS_INTER" },
            { from: "Notion", to: "Appengine", label: "HAS_INTER" },
            { from: "Githup", to: "Jenkins", label: "HAS_INTER" },
            { from: "Sematext", to: "Appengine", label: "HAS_INTER" },
            { from: "Githup", to: "Sematext", label: "HAS_INTER" },
            { from: "Sematext", to: "AWS", label: "HAS_INTER" },
            { from: "Jenkins", to: "ELB", label: "HAS_INTER" }
        ]
    };
    const [data, setData] = useState(_data);
    const options = {
        interaction: {
            selectable: true,
            hover: true,
            backgroundColor: 'black'
        },
        manipulation: {
            enabled: true,
            initiallyActive: true,
            addNode: true,
            addEdge: true,
            /*  Adding new node to the graph */
            // addNode: (data) => {
            //   // console.log(callback,"callback")
            //   console.log("Addnode is called for dragginggg.........");
            //   console.log(data, "before main console");
            //   data.id = newId;
            //   data.image = newImage;
            //   data.label = newLabel;
            //   data.size = imgsize;
            //   data.title = newTitle;
            //   data.shape = "image";
            //   // if (typeof callback === "function") {
            //   // callback(data); // }
            //   // callback(data);
            //   setId("");
            //   setLabel("");
            //   setTitle("");
            //   setImage("");
            //   setImgsize("");
            //   console.log(data, "myData");
            //   console.log(graphRef, "mygraphical");
            // },
            // addEdge: true,
            editNode: undefined,
            editEdge: true,
            deleteNode: true,
            deleteEdge: true,
            shapeProperties: {
                borderDashes: false,
                useImageSize: false,
                useBorderWithImage: false
            },
            controlNodeStyle: {
                shape: "dot",
                size: 40,
                color: {
                    background: "#ff0000",
                    border: "#000000",
                    highlight: {
                        background: "#07f968",
                        border: "#000000"
                    },
                    borderWidth: 2,
                    borderWidthSelected: 2
                }
            },


        },
        nodes: {
            size: 25,
            shape: "dot",
            borderWidth: 1,
            borderColor: "#000000",
            color: {
                background: "#666666"
            },
        },
        edges: {
            width: 2,
            color: "#70b6f7",
            length: 200
        },
        physics: {
            enabled: true,
        },
        height: "600px"
    };
    function myFunction() {
        // Code for your onclick function goes here
        console.log("Icon image clicked!");
    }
    const handleZoomIn = () => {
        if (graphRef.current) {
            // graphRef.current.zoomIn();
        }
    };
    const handleNodeClick = (event: any) => {
        // console.log(event.nodes);
        const nodeId = event.nodes[0];
        const getProperties = data.nodes.find((node) => node.id === nodeId);
        // console.log(getProperties)
        setProperties(getProperties)
    };

    // Function to zoom out
    const handleZoomOut = () => {
        if (graphRef.current) {
            // graphRef.current.zoomOut();
        }
    };
    return (
        <div className="bg-gray-200 flex justify-center">
            <div className="z-0 w-[100%] h-[100%]">
                <Graph
                    graph={data}
                    options={options}
                    ref={graphRef}
                    events={{
                        click: handleNodeClick
                    }}
                />
                
            </div>
            {/* <GraphProperties properties={properties}/> */}
        </div>
    );
};


export default GraphVisualize;