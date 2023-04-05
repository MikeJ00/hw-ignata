import React from "react";
import { PagesType} from "../dataState/dataState";
import {useParams} from "react-router-dom";

type PropsType ={
    pages: Array<PagesType>
}
export const Page = (props:PropsType) => {
    const params=useParams()
    console.log( Number(params.id))
    return (
        <div>
            {props.pages[Number(params.id)].about}
            {props.pages[Number(params.id)].heading}
        </div>
    );
};
