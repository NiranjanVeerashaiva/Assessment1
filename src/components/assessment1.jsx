import { useEffect, useState } from "react";
import '../css/data1.css'
const Data1 = () => {
    let [data1, setData] = useState([])
    useEffect(() => {
        let fetchdata = async () => {
            let response = await fetch("https://jsonplaceholder.typicode.com/posts")
            let data = await response.json()
            setData(data)
        }
        fetchdata()
    }, [])
    return (
        <div className="data1">
        <h1>Total data:{data1.length}</h1>
        <div className="display">
            {data1.map((x) => {
                return (
                        <div class="card" style={{ width:"18rem" }}>
                            <div class="card-body">
                                <div className="id" style={{ border: "0.1rem solid black", width: "2.2rem", borderRadius: "2rem", textAlign: "center", backgroundColor: "black", color: "white" }}>
                                    <h5 class="card-title">{x.id}</h5>
                                </div>
                                <h4 class="card-subtitle text-light" style={{margin:"0.1rem 0rem"}}><span class="text-danger">Title:</span>{x.title}</h4>
                                <p class="card-text text-light "><span class="text-danger">Body:</span>{x.body}</p>
                            </div>
                        </div>
                )
            })}
        </div>
        </div>
    );
}

export default Data1;