import React from 'react'

import content, { Content } from './content'

type Feature = Content['projects'][number]['features'][number]
type Project = Content['projects'][number]

const Feature = ({ feature }: { feature: Feature }) =>
  <li className="feature before">{feature}</li>

const makeFeature = (feature: Feature, i: number ) => 
  <Feature key={i} feature={feature} />

const MenuVNProject = ({ project }: { project: Project }) => (
  <div className="mvn-project">
    <h3><project.Icon size={11} /> {project.name}</h3>
    <ul>
      {project.features.map(makeFeature)}
    </ul>
  </div>
)

const projects = content.projects.map((project: Project, i: number) => 
  <MenuVNProject key={i} project={project} />
)

const MenuVNProjects = () => (
  <div className="projects">
    <h3>Functionality for each includes:</h3>
    {projects}
  </div>
)

export default MenuVNProjects