import educationExperience from './sectionItems/educationExperience'
import recentProjects from './sectionItems/recentProjects'
import softwareExperience from './sectionItems/softwareExperience'
import degrees from './sectionItems/degrees'
import otherEvents from './sectionItems/otherEvents'

const cvSections = [
  {
    header: 'Recent Projects',
    items: recentProjects
  },
  {
    header: 'Software Experience - Full Stack Web Development',
    items: softwareExperience
  },
  {
    header: 'Previous Career - Administrator and Teacher at International Schools',
    overview: 'I traveled to over 40 countries and lived in a few. I was able to do this by working as a teacher and administrator in international schools. Contracts at international schools are normally for one or two years. Most positions span an academic year between summers.',
    items: educationExperience
  },
  {
    header: 'Education',
    items: degrees
  },
  {
    header: 'Other Events',
    items: otherEvents
  }
]

export default cvSections