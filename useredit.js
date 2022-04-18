import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
export default function Useredit() {
    const params = useParams();

    useEffect(async () => {
        let resp = await fetch(`https://61f92a85783c1d0017c449c4.mockapi.io/user/${params.id}`)
        let data = await resp.json();
        console.log(data)
    })

    return <>
        <h3>User Details - {params.id} </h3>
    </>
}