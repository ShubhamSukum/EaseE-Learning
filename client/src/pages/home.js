import { useEffect, useState } from "react";
import Axios from "axios";
import '../App.css'
import logo from '../images/logoBG.png';
import {Link} from "react-router-dom";

export const Home = () => {
    const [category, allCatergory] = useState([]);
    const [testi, allTesti] = useState([]);

    useEffect(() => {
        Axios.get("https://easee-learning.onrender.com/courseCategories").then((res) => {
            allCatergory(res.data);
        })
    }, []);

    useEffect(() => {
        Axios.get("https://easee-learning.onrender.com/getTesti").then((res) => {
            allTesti(res.data);
        })
    }, []);

    return (
        <>

            <section>
                <div className="headings">
                    <img src={logo} alt="logo" className="logoStyle" ></img>
                    <h1 style={{ color: "black" , marginBottom: "5vh"}}> EaseE-LEARNING</h1>
                    <h1 style={{ marginBottom: "10vh" }}>Empowering Education with Effortless Course Management</h1>
                    <p>We're simplifying learning with our intuitive course management system.</p>
                    <button>CHECK OUR COURSE CATAGORIES</button>
                </div>
            </section>


            <section style={{ background: "#f5f5f5", paddingTop: "30px", paddingBottom: "5px" }}>
                <h1 className="cat">Course Catagory</h1>
                <center><span><hr className="hr" /></span></center>
                <div className="category">
                    {
                        category.map((cat, index) => {
                            return (
                                <div key={index} className="category-content">
                                    <img src={cat.imageURL} alt={cat.compName} />
                                    <p>{cat.compName}</p>
                                    <Link to={"/component/" + cat.compName}><button>Explore More</button></Link>
                                </div>
                            )
                        })
                    }
                </div>
            </section>

            <section>
                <h1 style={{ marginTop: "40px" }}>Testimonials</h1>
                <center><span><hr className="hr" style={{ marginBottom: "70px" }} /></span></center>
                <div style={{ background: "#0082e6" }}>
                    <div className="testimonials">
                        {
                            testi.map((t, index) => {
                                return (
                                    <div key={index} className="test-data">
                                        <h2>{t.judge}</h2><br />
                                        <p>{t.words}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            <section style={{ background: "#2c3e50" }}>
                <div className="footer">
                    <div className="footer-content">
                        <div className="icons">
                            <div>
                                <i className="fa fa-facebook-square"></i>
                                <a href="www.facebook.com">Facebook</a>
                            </div>

                            <div>
                                <i className="fa fa-instagram"></i>
                                <a href="www.instagram.com">Instagram</a>
                            </div>

                            <div>
                                <i className="fa fa-twitter-square"></i>
                                <a href="www.twitter.com">Twitter</a>
                            </div>

                            <div>
                                <i className="fa fa-linkedin-square"></i>
                                <a href="www.linkedin.com">Linked IN</a>
                            </div>

                        </div>
                    </div>
                    <div className="footer-content">
                        <h2>About US </h2><br />
                        <p>Our course management system is designed to provide an intuitive and user-friendly interface for instructors and students. With our platform, instructors can easily create and manage courses, including adding syllabus, assignments, quizzes, and resources. They can also track student progress and grades to ensure that everyone is staying on track. Students can easily browse and enroll in courses, access course materials, and communicate with their instructors and peers. </p>
                    </div>
                </div>
            </section>
        </>
    )
};