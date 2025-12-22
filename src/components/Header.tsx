import { Routes,Route,useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import About from "./About"
import Contact from "./Contact";
import Blogs from "./Blog";
import Projects from "./Projects";
import Books from "./Books";

const Header  = ()=>{
    const tabs = ["about","projects","books","blog","contact"];
    const navigate = useNavigate();
    const notHovered = {cursor:"pointer",fontFamily:"BBH Hegarty",color:"red",fontWeight:"100"}
    const Hovered = {cursor:"pointer",fontFamily:"BBH Hegarty",color:"red",fontWeight:"100"}
    const [isHovered,setIsHovered] = useState(false);

    return (
        <>
            <div style={{width:"100vw",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
                <div className="whole-header" style={{width:"40vw",display:"flex",justifyContent:"space-evenly",alignItems:"center",backgroundColor:"lightgray", borderRadius:"12px",marginBottom:"25px"}}>
                    {tabs.map((element)=>(
                        <p style={isHovered?Hovered:notHovered} onClick={()=>{
                            const path = "/"+element;
                            navigate(path)
                        }}
                        onMouseEnter={()=>{
                            setIsHovered(true);
                        }}
                        onMouseLeave={()=>{
                            setIsHovered(false);
                        }}>{element}</p>
                    
                    ))}

                </div>
            </div>
            <Routes>
                <Route path="/" element={<Navigate to="/about" replace={true} />} />
                <Route path="/about" element={<About/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/books" element={<Books/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/blog" element={<Blogs/>} />
            </Routes>
        </>
    )
}


export default Header;