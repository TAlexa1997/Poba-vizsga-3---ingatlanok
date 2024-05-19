import React from "react";
import MyNav from "../components/MyNav";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function BasicLayout(){
    return(
        <>
        <MyNav/>
        <Outlet/>
        <Footer/>
        </>
    )
}