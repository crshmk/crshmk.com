import React from 'react'

import { ExternalLink } from 'react-feather'

const LinkIcon = () => <ExternalLink color="black" size={14} />

const otherEvents: CvItem[] = [
  {
    title: <span>Technical Consultant, <span className="after"><a href="https://thegdst.org/" target="_blank">2nd Technical Global Dialogue on Seafood Traceability <LinkIcon /></a></span></span>,
    dates: 'Aug 2018',
    location: 'Hong Kong',
    bullets: [
      'Collaborated to create an interoperable data model',
      'Consulted policy advisors implementing a phone app for seafood traceability in Vietnam'
    ]
  },
  {
    title: 'Consultant, Gifted and Talented Center',
    dates: '2015',
    location: 'Saigon, Vietnam',
    bullets: [
      'Wrote a full curriculum for a small startup school',
    ],
    note: 'This school has since transformed its business model; a new school took its name.'
  },
  {
    title: <span>Representative, <span className="after"><a href="https://ibo.org/about-the-ib/the-ib-by-region/ib-asia-pacific/asia-pacific-regional-conferences/" target="_blank">Asia-Pacific International Baccalaureate Conference <LinkIcon /></a></span></span>,
    dates: 'Oct 2010',
    location: 'Beijing, China',
    bullets: [
        'Represented American International School Vietnam at annual Asia-Pacific IBO conference'
      
    ]
  },
  {
    title: <span>Volunteer, <span className="after"><a href="https://himanchal.org/" target="_blank">Himanchal Education Foundation <LinkIcon /></a></span></span>,
    dates: 'Spring 2006',
    location: 'Nangi Village, Nepal',
    bullets: [
      'Taught high school students in a Himalayan village'
    ]
  }
]

export default otherEvents 