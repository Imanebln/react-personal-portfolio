import React from 'react'
import '../styles/Home.css';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is Imane Boulouane</h2>
        <div className='prompt'> 
        <p>A software developer with passion for learning and creating.</p>
        <LinkedInIcon />
        <EmailIcon />
        <GithubIcon />
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, NPM, Yarn,
              Ionic, BootStrap, MaterialUI.
            </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>
              .NET, ASP.NET Core, EF Core, Java Spring, MS SQL,
              MySQL, MongoDB, Firebase
            </span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>
              JavaScript, TypeScript, C#, Java, C/C++, PHP, Python
            </span>
          </li>
        </ol>

      </div>
      
    </div>
  )
}

export default Home