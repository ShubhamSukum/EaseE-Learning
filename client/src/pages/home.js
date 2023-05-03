import {useEffect,useState} from "react";
import Axios from "axios";

export const Home=()=>{
    const [category,allCatergory]=useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:3001/categories").then((res)=>{
            allCatergory(res.data);
        })
    },[]);

    return(
    <div>
        {
            category.map((cat)=>{
                return(
                    <div>
                        <div>
                            <img src={cat.imageURL} alt={cat.compName}/>
                        </div>
                        <p>{cat.compName}</p>
                    </div>
                )
            })
        }
    </div>)
};