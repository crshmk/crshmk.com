import teflpointImg from 'src/assets/Images/teflpoint-sm.png'
import cvistImg from 'src/assets/Images/cvist-sm.png'
import ntbeachImg from 'src/assets/Images/ntbeach.png'

const recentProjects = [
  {
    title: { 
      label: 'TEFLPOINT.COM', 
      description: 'Job Platform for International Teachers',
      url: 'https://www.teflpoint.com' 
    },
    stack: 'React / Express / MySQL / Apache',
    img: teflpointImg
  },
  {
    title: {
      label: 'CVIST.COM',
      description: 'Resume Webpage Builder (Currently Beta)',
      url: 'https://www.cvist.com'
    },
    stack: 'React / Express / OpenAI / MongoDB / Nginx',
    img: cvistImg
  },
  {
    title: {
      label: 'NTBEACH.COM',
      description: 'Travel Guide for Nha Trang, Vietnam',
      url: 'https://www.ntbeach.com' 
    },
    stack: 'React',
    img: ntbeachImg
  }/*,
  {
    title: 'CHÁO BÉ TƯ',
    description: 'Vietnamese Cháo Restaurant',
    bullets: [
      'Co-founded a small Vietnamese restaurant',
      'chaobetu.com'
    ]
  }
  */
]

export default recentProjects
