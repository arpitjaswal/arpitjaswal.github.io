

const About = ()=>{


    return (
        <>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"Google Sans",color:"gray"}}>
            hello world,
            <br/>
            <br/>
            my name is arpit and i build random stuff on the internet.
            <br/>
            <br/>   
            happy coding!
        </div>
        <br/>
       <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
         {/* <iframe data-testid="embed-iframe" style={{borderRadius:"12px"}} 
         src="https://open.spotify.com/embed/playlist/3Dxxeqop20SCuJnzKw12Ze?utm_source=generator&theme=0" 
         width="40%" height="150" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe> */}
         <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameBorder="0" height="175" 
         style={{width:"100%",maxWidth:"660px",overflow:"hidden",borderRadius:"10px"}}
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
          src="https://embed.music.apple.com/us/song/i-only-smoke-when-i-drink/1798985728"></iframe>
       </div>
        </>
    )
}

export default About;