import { Outlet } from "react-router-dom"
import { Bar } from "./bar"


export const MainL = () => {
    fetch('https://jsonplaceholder.typicode.com/')
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    return (
        <>
            <Bar />
            <Outlet />
        </>
    )
}
