import React from 'react'

export default function Main(props) {
  const {data} = props
  console.log(data.media_type);

  return (
    <>
     {data.media_type =="image" ? (  
      <div className="imgContainer">
            <img src={data.url} alt={data.title} className="bgImage" />
      </div>) : 
      (
      <div className="videoContainer">
        <iframe width="960"  
            src={data.url} 
            title={data.title} 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen="">
        </iframe>
      </div>
     ) 


     }
    </>
   


  )
}
