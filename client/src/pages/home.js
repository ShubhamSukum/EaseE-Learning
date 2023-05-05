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
                    <p>
                        Welcome to EaseE Learning, where we provide an exceptional online learning experience to 
                        students all around the world.Our mission is to empower learners of all backgrounds and ages 
                        with the knowledge and skills they need to succeed in their personal and professional lives. 
                        We believe that education should be accessible, affordable, and enjoyable, which is why we 
                        created a platform that offers high-quality courses in a wide range of topics.
                        Our platform is user-friendly and easy to navigate, allowing you to learn at your own pace, 
                        on your own schedule. You can access our courses from anywhere in the world, and our responsive 
                        support team is always available to answer your questions and provide guidance.
                        We take pride in our commitment to excellence and our dedication to our students. 
                        Join us today and take the first step towards achieving your goals with EaseE Learning.
                    </p>
                </div>

            </div>
        </section>

    </div>)
};