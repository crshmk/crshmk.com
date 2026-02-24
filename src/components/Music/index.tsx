import React from 'react'

import './music.css'

import FadeIn from '@components/FadeIn'

const gear = [
  'American PRS',
  'Custom shop Les Paul',
  'American Tele',
  'Mesa Single Rectifier',
  'Mesa Transatlantic 30',
  'Vox AC30'
]

const gearItems = gear.map((item, i) => 
  <li key={i} className="before">{item}</li>
)

const Music = () => {
  return (
    <FadeIn>
    <div className="music hide-menu-active">
      <div className="header">
        <h2>Experienced Guitarist for Hire</h2>
      </div>
      <div>
        <h4>Improv / Jam</h4>
        <p>Most of my gig work has involved no practice at all. I can hop on stage and go.</p>
        <h4>Ear Training</h4>
        <p>I've had enough formal ear training to hear a progression once or twice and roll with it.</p>
        <h4>Lifetime of experience</h4>
        <p>I've been playing music my whole life. I've gigged all sorts of places.</p>
        <h4>Quality Gear</h4>
        <p>Current rig options include:</p>
        <ul>
          {gearItems}
        </ul>
      </div>
      <div className="video">
        <p>Here are a couple of Hendrix examples from my last jam band in Nha Trang:</p>
        <div className="videos">

        <video
          controls
          preload="metadata"
        >
          <source src="./chris-guitar.mp4" type="video/mp4" />
          Grab a browser that supports the video tag.
        </video>
           <video
          controls
          preload="metadata"
        >
          <source src="./blues-with-nikita.mp4" type="video/mp4" />
          Grab a browser that supports the video tag.
        </video>
        </div>

      </div>
    
    </div>
    </FadeIn>
  )
}

export default Music
