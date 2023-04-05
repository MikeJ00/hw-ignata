import React from "react";

export const DataState:DataStateType =  {
    pages:
    [
        {
            heading:"Cycle While",
            about:"Cycle while has syntax"
        },
        {
            heading:"Cyclewwww While",
            about:"Cycle while has wwwwwwwwwwwwwwwwwsyntax"
        },
        {
            heading:"Cycleqqqqq While",
            about:"Cycle while has2222222222222222 syntax"
        },
    ]
};

export type DataStateType = {
    pages:Array<PagesType>
}
export type PagesType = {
    heading:string
    about:string
}