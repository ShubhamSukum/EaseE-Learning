import { useParams } from "react-router-dom";

export const Courses=()=>{
    const params = useParams();
    console.log(params.compName);
    return <div>{params.compName}</div>
};