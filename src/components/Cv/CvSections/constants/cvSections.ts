import certifications from './sectionItems/certifications'
import degrees from './sectionItems/degrees'
import educationExperience from './sectionItems/educationExperience'
import otherEvents from './sectionItems/otherEvents'
import recentProjects from './sectionItems/recentProjects'
import softwareExperience from './sectionItems/softwareExperience'

const cvSections: CvSection[] = [
  {
    header: 'Software Experience',
    items: softwareExperience
  },
  {
    header: 'Education Experience',
    items: educationExperience
  },
  {
    header: 'Education',
    items: degrees
  },
  {
    header: 'Certifications',
    items: certifications
  },
  {
    header: 'Recent Projects',
    items: recentProjects,
    isAccordion: true 
  },
  {
    header: 'Other Events',
    items: otherEvents,
    isAccordion: true 
  }
]

export default cvSections