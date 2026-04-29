type CvSection = {
  header: string
  items: CvItem[] | Project[]
  overview?: string
  isAccordion?: boolean
}

type CvItem = {
  title: string | React.ReactNode
  dates: string
  location: string | React.ReactNode
  stack?: string
  bullets?: (string | React.ReactNode)[]
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