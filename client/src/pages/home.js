import {useEffect,useState} from "react";
import Axios from "axios";

export const Home=()=>{
    const [category,allCatergory]=useState([]);
    const [testi,allTesti]=useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:3001/categories").then((res)=>{
            allCatergory(res.data);
        })
    },[]);

    useEffect(()=>{
        Axios.get("http://localhost:3001/getTesti").then((res)=>{
            allTesti(res.data);
        })
    },[]);

    return(
    <div>
        <div className="catogories-css">
            {
                category.map((cat,index)=>{
                    return(
                        <div key={index}>
                            <div>
                                <img src={cat.imageURL} alt={cat.compName} />
                            </div>
                            <p>{cat.compName}</p>
                            <a href={"/component/"+cat.compName}><button>button</button></a>
                        </div>
                    )
                })
            }
        </div>

        <p style={{fontSize:"2.5vh",fontWeight:"bolder"}}>TESTIMONIALS</p>

        <div className="testi-css">
            {
                testi.map((t,index)=>{
                    return(
                        <div key={index}>
                            <p ><strong>{t.judge}</strong></p>
                            <p>{t.words}</p>
                        </div>
                    )
                })
            }
        </div>

    </div>)
};