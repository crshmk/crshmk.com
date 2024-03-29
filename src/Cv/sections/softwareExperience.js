import React from 'react'

const current = {
  title: ['Web Application Developer'],
  subhead: ['', 'Nha Trang, Vietnam'],
  dates: '2022 - present',
  tools: 'React, Node / Express, MySQL, Nginx, Ubuntu',
  bullets: [
    'Created various privately owned applications'
  ]
}

const ally = {
  title: ['Senior Javascript Engineer', 'Ally Financial'],
  subhead: ['', 'remote'],
  dates: 'Sep 2021 - Mar 2022',
  tools: 'React',
  bullets: [
    'Maintained a feature of ally.com'
  ]
}

const apple = {
  title: ['Software Engineer', 'Apple (on-site contractor)'],
  subhead: ['', 'Austin, Texas'],
  dates: 'Oct 2018 - Aug 2021',
  tools: 'React, Express, GraphQL',
  bullets: [
    <span>Led front end development of successful internal application from MVP through launch and growth <span className="bullet-date">(10/2018 - 1/2021)</span></span>,
    'Mentored junior developers new to Javascript',
    <span>Maintained internal website <span className="bullet-date">(5/2021 - 8/2021)</span></span>
  ]
}

const lusty = {
  title: ['Software Engineer', 'W. Lusty & Sons Furniture'],
  subhead: ['', 'Nha Trang, Vietnam'],
  dates: 'Jun 2016 - Mar 2018',
  tools: 'Vue, PHP, Apache, Ubuntu',
  bullets: [
    'Developed wlustyandsons.com from concept to production',
    'Developed applications to manage furniture catalogue, customer accounts, and internal operations'
  ]
}

const freelance = {
  title: ['Freelance Web Developer'],
  subhead: ['', 'Nha Trang, Vietnam'],
  dates: 'Jan 2014 - Oct 2018',
  tools: 'Vue or jQuery, PHP, MySQL, Apache, Ubuntu',
  bullets: [
    'Ran a small web development business as owner-operator'
  ]
}

const softwareExperience = {
  title: 'Software Experience',
  items: [current, ally, apple, lusty, freelance]
}

export default softwareExperience