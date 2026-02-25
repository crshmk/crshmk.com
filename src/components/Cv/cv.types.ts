type CvSection = {
  header: string
  items: CvItem[] | Project[]
  overview?: string
  isAccordion?: boolean
}

type CvItem = {
  title: string
  dates: string
  location: string
  stack?: string
  bullets?: string[]
  note?: string
}

type Project = {
  title: {
    label: string
    description: string
    url: string
  }
  stack: string
  img: any
}