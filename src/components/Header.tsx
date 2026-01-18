import { Routes,Route,useNavigate, Navigate } from "react-router-dom";
import { useState,useEffect } from "react";
import About from "./About"
import Contact from "./Contact";
import Blogs from "./Blog";
import Projects from "./Projects";
import Books from "./Books";
import { FcHome } from "react-icons/fc";
import { FcOpenedFolder } from "react-icons/fc";

import useWindowDimensions from "../hooks/useWindowDimensions";


const Header  = ()=>{
    const tabs = ["about","projects","books","blog","contact"];
    const navigate = useNavigate();
    const { width } = useWindowDimensions();
    const [isMobile,setIsMobile] = useState(false);
    const [isOpen,setIsOpen] = useState(true)
  useEffect(() => {
    if (width < 600) {
      setIsMobile(true)
    } else if (width < 1200) {
     setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [width]);
  
    return (
        <>
            <div>
                {isMobile?(<>
             
                    {
                        isOpen?(
                            <>
                                <div style={{display:"flex",justifyContent:"center"}}>
                              
                                <FcHome size={70} onClick={()=>{
                                    console.log("home")
                                    setIsOpen(prev=>!prev)
                                }}/>
                            </div>
                            </>
                        ):(
                            <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                                  <FcOpenedFolder size={70} onClick={()=>{
                                    console.log("folder")
                                    setIsOpen(prev=>!prev)
                                }}/>
                                <div style={{
                                    display:"flex",
                                    height:"100%",
                                    justifyContent:"center",
                                    alignItems:"flex-start",
                                    backgroundColor:"gray",
 position: "fixed",
    top: "8%",
    left: 0,
    zIndex: 999,
    width: "100%"
                                }}> <div className="whole-header" style={{width:"20vw",display:"flex",justifyContent:"space-evenly",alignItems:"center",flexDirection:"column"}}>
                    {tabs.map((element)=>(
                        <p style={{cursor:"pointer",fontFamily:"BBH Hegarty",color:"red",fontWeight:"100"}} onClick={()=>{
                            const path = "/"+element;
                            navigate(path)
                            setIsOpen(prev=>!prev)
                        }}>{element}</p>
                    
                    ))}

                </div></div>
                            </div>
                            
                        )
                    }
                  
                </>
                ):(
                    <div style={{width:"100vw",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
                <div className="whole-header" style={{width:"20vw",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
                    {tabs.map((element)=>(
                        <p style={{cursor:"pointer",fontFamily:"BBH Hegarty",color:"red",fontWeight:"100"}} onClick={()=>{
                            const path = "/"+element;
                            navigate(path)
                        }}>{element}</p>
                    
                    ))}

                </div>
            </div>
                )}
            </div>
            <Routes>
                <Route path="/" element={<Navigate to="/about" replace={true} />} />
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