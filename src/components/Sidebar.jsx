import React from 'react'

export default function Sidebar(props) {
const {toggleModel, data} = props
  return (
    <div className="sidebar">
        <div className="bgOverlay" onClick={toggleModel}></div>
        <div className="sidebarContents">
        <h2>{data.title}</h2>
        <div className="descriptionContainer">
            <p className="descriptionTitle">{data.date}</p>
            <p>{data.explanation}</p>
        </div>
        <button onClick={toggleModel}>
            <i className="fa-solid fa-arrow-right"></i>
        </button>
        </div>
    </div>
  )
}
