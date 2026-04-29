import educationExperience from './sectionItems/educationExperience'
import recentProjects from './sectionItems/recentProjects'
import softwareExperience from './sectionItems/softwareExperience'
import degrees from './sectionItems/degrees'
import otherEvents from './sectionItems/otherEvents'

const cvSections: CvSection[] = [
  {
    header: 'Experience',
    items: softwareExperience
  },
  {
    header: 'Education',
    items: degrees
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