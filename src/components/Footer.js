import React from 'react';

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

import '../styles/Footer.css';

function Footer() {

  const urlGithub = `https://github.com/Imanebln`;
  const urlLinkedIn = `https://www.linkedin.com/in/imane-boulouane-0ba280199/`;
  const urlFacebook = `https://web.facebook.com/imane.bln.5`;
  const urlTwitter = `https://twitter.com/IBoulouane`;
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <LinkedInIcon onClick={() => window.open(urlLinkedIn,'_blank')}/>
            <GithubIcon onClick={() => window.open(urlGithub,'_blank')}/>
            <FacebookIcon onClick={() => window.open(urlFacebook,'_blank')}/>
            <TwitterIcon onClick={() => window.open(urlTwitter,'_blank')}/>
        </div>
        <p>
            &copy; {new Date().getFullYear()} portfolio.com
        </p>

    </div>
  )
}

export default Footer