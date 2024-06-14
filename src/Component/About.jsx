import React from 'react'
import '../Styles/AboutStyle.css'
import pjtHeaderImg from '../assets/pjtHeaderImg.jpg'

function About() {
  return (
    <div className='projectContainer' id="about" >



      <div className='Aboutdiv'>

        <div className="pjtDesc">
          <h2 style={{ textAlign: 'center', fontFamily: "Fantasy", color: "Blue", fontSize: "250%" }}> About </h2> <br /> <br />
          <h3 style={{ textAlign: "justify", textIndent: "50px", fontFamily: "Courier New" }}> Sk Abdus Shahid, a skilled MERN Stack developer known for his dedication and innovation.
            Currently shaping digital landscapes at Inforoot Solutions Pvt. Ltd., he excels in React Js development,
            contributing to BugbustersLab website's success. With a solid foundation in React js and Express js from his tenure at
            VaultofCode, Sk Abdus Shahid seamlessly blends creativity with technical expertise. Holding a Master's in Computer
            Application and a Bachelor's in Computer Application, his academic prowess is matched by his practical skills.
            Sk Abdus Shahid's passion extends beyond code; he's a polyglot, a machine learning enthusiast, and a force for innovation
            in the tech world. </h3>
        </div>
      </div>

      <div className='pjtHeaderImg' >
        <img style={{ height: "60vh" }} src={pjtHeaderImg} alt="" />
      </div>

    </div>
  )
}

export default About

// import React from "react";

// import styles from "../Styles/About.module.css";
// import serverIcon from '../assets/serverIcon.png'
// import uiIcon from '../assets/uiIcon.png'
// import cursorIcon from '../assets/cursorIcon.png'
// import pjtHeaderImg from '../assets/pjtHeaderImg.jpg'

// export const About = () => {
//   return (
//     <section className={styles.container} id="about">
//       <h2 className={styles.title}>About</h2>
//       <div className={styles.content}>
//         <img
//         style={{padding:"10px"}}
//           src={pjtHeaderImg}
//           alt="Me sitting with a laptop"
//           className={styles.aboutImage}
//         />
//         <ul className={styles.aboutItems}>
//           <li className={styles.aboutItem}>
//             <img src={cursorIcon} alt="Cursor icon" />
//             <div className={styles.aboutItemText}>
//               <h3>Frontend Developer</h3>
//               <p>
//                 I'm a frontend developer with experience in building responsive
//                 and optimized sites
//               </p>
//             </div>
//           </li>
//           <li className={styles.aboutItem}>
//             <img src={serverIcon} alt="Server icon" />
//             <div className={styles.aboutItemText}>
//               <h3>Backend Developer</h3>
//               <p>
//                 I have experience developing fast and optimised back-end systems
//                 and APIs
//               </p>
//             </div>
//           </li>
//           <li className={styles.aboutItem}>
//             <img src={uiIcon} alt="UI icon" />
//             <div className={styles.aboutItemText}>
//               <h3>UI Designer</h3>
//               <p>
//                 I have designed multiple landing pages and have created design
//                 systems as well
//               </p>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </section>
//   );
// };

