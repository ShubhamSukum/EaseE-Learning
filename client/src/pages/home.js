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

        <section style={{background: "#2c3e50"}}>
            <div className="footer">

                <div className="footer-content">
                    <div className="icons"> 
                        <a href="https://www.facebook.com/">Facebook</a>                    
                        <a href="https://www.instagram.com/">Instagram</a>
                        <a href="https://twitter.com/">Twitter</a>
                        <a href="https://www.linkedin.com/">Linked IN</a>
                    </div>
                </div>

                <div className="footer-content">
                    <h2>About US </h2><br/><br/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam sapiente, at libero quae, non delectus enim dolor eum error molestias repellat maiores ullam. Voluptatum ipsa porro officia et ducimus nihil ullam maxime, mollitia similique omnis optio quia soluta neque, sed vel officiis minus alias provident eius excepturi blanditiis facere! Ex.</p>
                </div>

            </div>
        </section>

    </div>)
};