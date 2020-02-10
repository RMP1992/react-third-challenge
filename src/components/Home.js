import React from 'react'


function Home(props) {
    return (
        <div id="imgAndHeading">
            <div>
                <img src={props.img} alt={props.alt} id="picture"/> 
            </div>
            <div id="storyhead">
                <h3>{props.story}</h3>
                
                <h4>{props.newspaper}</h4>
            </div>
        </div>
    )
}
export default Home