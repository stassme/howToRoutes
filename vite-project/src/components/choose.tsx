import { useParams } from "react-router-dom"

export const Choose = () => {
    const { id } = useParams()
    return (
        <>
            <h1>Choose {id} </h1>
        </>
    )
}
