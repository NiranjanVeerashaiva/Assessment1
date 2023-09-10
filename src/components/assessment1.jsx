import { useEffect, useState } from "react";
import '../css/data1.css'
const Data1 = () => {
    let [data1,setData]=useState([])
    useEffect(()=>{
        let fetchdata=async()=>{
            let response=await fetch("https://jsonplaceholder.typicode.com/posts")
            let data=await response.json()
            setData(data)
        }
        fetchdata()
    },[])
    return ( 
        <div className="display">
            <h1>Total data:{data1.length}</h1>
            {data1.map((x)=>{
                return(
                    <div className="data1">
                        <p><span style={{fontWeight:"bold"}}>ID:{x.id}</span></p>
                        <p><span style={{color:"blue"}}>Title: </span>{x.title}</p>
                        <p><span style={{color:"blue",marginTop:"-6px"}}>Body: </span>{x.body}</p>
                    </div>
                )
            })}
        </div>
     );
}
 
export default Data1;