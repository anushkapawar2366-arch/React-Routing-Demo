import React from "react"
import { Link } from "react-router-dom"
export default function Product()
{
    return(
        <>
        <section>
        <h3>Welcome to Product  page</h3>
        <ul type="none">
            <li ><Link to='/product/fridge'>Smart fridge</Link></li>
            <li>< Link to='/product/Airconditioner'>Air conditioner</Link></li>
            <li><Link to='/product/tv'>sony TV </Link></li>
            <li><Link to='/product/ac'>AC </Link></li>
        </ul>
        </section>
        </>
    )
}