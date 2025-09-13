import teflpointImg from '@src/assets/images/teflpoint-sm.png'
import cvistImg from '@src/assets/images/menu.jpeg'
import ntbeachImg from '@src/assets/images/ntbeach.png'

const recentProjects: Project[] = [
    {
    title: {
      label: 'MenuVN',
      description: 'Food Ordering App and Associated Software',
      url: '/projects/menuvn'
    },
    stack: 'React / React Native / Express / MongoDB / Nginx',
    img: cvistImg
  },
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
