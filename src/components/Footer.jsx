import React from 'react'

export default function Footer(props) {

    const {showModel, toggleModel,data} = props;
  return (
    <footer>
        <div className="bgGradient"></div>
        <div>
            <h2>APOD PROJECT</h2>
            <h1>{data.title}</h1>
        </div>
        <button onClick={toggleModel}>
            <i className="fa-solid fa-circle-info "></i>
        </button>
    </footer>
 
  )
}
