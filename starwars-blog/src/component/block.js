import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { SWCard } from "./swcard"


export const Block = (props) => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <div className="container pt-3 ">
                <h1 className="text-danger text-capitalize">{props.title}</h1>
                <div className="row flex-nowrap overflow-auto">
                    {store[props.title].length===0?<div>Loading...</div>:
                    store[props.title].map((item, index)=>{
                        return <SWCard key={index} type={props.title} data={item} position={`${index}`}/>
                    })}

                </div>
            </div>
        </>
    );
}
export default Block;