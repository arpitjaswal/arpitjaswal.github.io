

const Books = ()=>{
    const books = ["kafka on the shore: murakami"]

    return (
        <>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"Google Sans",color:"gray"}}>
            {
                books.map(book=>(
                    <p>{book}</p>
                ))
            }
        </div>
        </>
    )
}

export default Books;