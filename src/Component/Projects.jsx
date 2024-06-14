// import React from 'react';
// import ProjectCard from './ProjectCard';
// import '../Styles/ProjectsStyles.css'; // Import the CSS file

// const Projects = ({ projects }) => (
//   <section className="projects-container" id="projects">
//     <h2 className="projects-title">My Projects</h2>
//     <div className="projects-grid">
//       {projects.map((project, index) => (
//         <ProjectCard key={index} project={project} />
//       ))}
//     </div>
//   </section>
// );

// export default Projects;



import React from 'react'


import pjtHeaderImg from '../assets/pjtHeaderImg.jpg'

function Projects() {
  return (
    <div className='projectContainer' >
      <div className='pjtHeaderImg' >
          <img style={{height:"80vh", width:"20%"}} src={pjtHeaderImg} alt="" />
      </div>
      <div>
         <div className="pjtHeader">
               <h4>--Project--</h4>
              
         </div>
         <div className="pjtDesc">
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus est itaque ipsum sunt architecto, repudiandae amet, adipisci cum officiis obcaecati odio voluptate? Esse dolor, placeat facere hic ut optio porro.</p>
         </div>
      </div>
    </div>
  )
}

export default Projects

