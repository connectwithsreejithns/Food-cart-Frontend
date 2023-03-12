import React from 'react'
import './Poster.css'

const Poster = () => {
  return (
    <div className="poster-wrap">
            <div className="cover"><i class="material-icons">favorite</i>
              <div id="quote">
              <h2 id='q'>Nothing Bring People</h2>
              <h1 id='q1'>TOGETHER</h1>
              <h2 id="q">Like Good Food</h2>
              </div>
            </div>
            


            <img className='poster' src={require('../../images/e.jpg')} alt="" />
            
    </div>
  )
}

export default Poster
