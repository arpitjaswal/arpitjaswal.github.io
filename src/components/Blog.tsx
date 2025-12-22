

const Blogs = ()=>{
    const blogs = [
        "hello world, wassup!",

    ]

    return (
        <>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"Google Sans",flexDirection:"column",color:"gray"}}>
            {
                blogs.map(blog=>(
                    <div>
                        {blog}
                    </div>
                ))
            }
        </div>
        </>
    )
}

export default Blogs;