import React from 'react'
import { Link } from 'react-router-dom'

const edCareer = "My first career was in private international education. I was a teacher, administrator, and finally consultant in Korea, Nepal, Myanmar, Saudi Arabia, and Vietnam. I taught advanced history at international schools and developed academic programs. I wrote curricula, worked with accrediting organizations, hired, trained, and evaluated staff, and aided with general policy. It was an enjoyable and rewarding career."

const softwareCareer = "In 2014 I transitioned from education to software. I initially worked as an independent freelancer. In 2016 a furniture factory hired me as a software engineer. I created a B2B catalog and a number of administrative tools to aid operations."

const apple = "In 2018 I moved back to the US and took a contract position as a Software Engineer at Apple.  I led the React development and the front end architecture. I also mentored junior developers new to web development. It was a very successful project; the initial concept became a robust production app with a large user base. My boss got a significant promotion. The app still runs at a subdomain of apple.com."

const now = [
  <span key="1">A series of independent projects from Vietnam followed. I'm finishing up a year-long</span>,
  <span key="2"> <Link to="/projects/menuvn">project</Link> </span>,
  <span key="3">creating software for a startup in Saigon providing food delivery. I've returned to the US. I'd like to find a new position here at home.</span>
]

const blurbs: React.ReactNode[] = [
  edCareer,
  softwareCareer,
  apple,
  now
]

export default blurbs