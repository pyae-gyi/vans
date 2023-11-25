import React from "react"
import {Outlet} from "react-router-dom"
import HostNav from "./HostNav"
const HostLayout = () => {
    return <>
        <HostNav />
        <Outlet />
    </>
}

export default HostLayout;