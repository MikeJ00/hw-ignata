import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'
import {Page} from "./pages/Page";
import {DataState} from "./dataState/dataState";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
}

function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>
                <Route path={"/"} element={<Navigate to={"/pre-junior"}/>}/>
                {/*роутинг будут писать студенты*/}
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу /pre-junior*/}
                {/*<Route ...*/}

                {/*роуты для /pre-junior, /junior, /junior-plus*/}
                <Route path={"/pre-junior"} element={<PreJunior/>}/>
                <Route path={"/junior"} element={<Junior/>}/>
                <Route path={"/junior-plus"} element={<JuniorPlus/>}/>
                <Route path={"/page/:id"} element={<Page pages={DataState.pages} />}/>
                {/*<Route ...*/}
                {/*<Route ...*/}
                {/*<Route ...*/}

                {/*роут для несуществующей страницы должен отрисовать <Error404 />*/}
                <Route path={"/*"} element={<Error404/>}/>
                {/*<Route ...*/}
            </Routes>
        </div>
    )
}

export default Pages
