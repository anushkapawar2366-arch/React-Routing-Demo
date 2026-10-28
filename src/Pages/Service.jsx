import React from "react"
import {Link,useNavigate} from 'react-router-dom';
export default function Service()
{
   let navVar=useNavigate();
    return(
        <>
         <div>
         <h1>Welcome to Service Page</h1>
         <h4>Programmatic Navigation here</h4>
         <br/>
         <button onClick={()=>{navVar("/home")}}>Go Home</button> 
         </div>
         <br/><br/>
         <div>
         <h4>Services we offer</h4> 
         <p>Design time navigation here
         <Link to="/contactus">Go Contact</Link></p> 
         </div>
        </>
    )
}