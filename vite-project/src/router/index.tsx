import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { One } from "../components/one";
import { Two } from "../components/two";
import { Choose } from "../components/choose";
import { MainL } from "../components/mainL";


export const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route element={<MainL />}>
            <Route path="/one" element={<One />} />
            <Route path="/two" element={<Two />} />
            <Route path="/choose/:id" element={<Choose />} />
        </Route>
    </>
))