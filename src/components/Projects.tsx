

const Projects = ()=>{
    const projects = ["portfolio"]

    return (
        <>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"Google Sans",color:"gray"}}>
            {
                projects.map(project=>(
                    <p>{project}</p>
                ))
            }
        </div>
        </>
    )
}

export default Projects;