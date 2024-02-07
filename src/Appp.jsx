import React, { useState, useEffect } from 'react';
// import ProjectsList from './components/ProjectsList';
import './App.css';

function App() {

  // useEffect(() => {
  //   // Fetch projects data from the backend API
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('/api/projects');
  //       const data = await response.json();
  //       setProjects(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="container">
      <div id="__next">
        <div>
          <div className="__className_5ecab9 Home_fadeIn__6AUDn">
            <nav style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ height: '80px' }}></div>
              <a href="https://drive.google.com/file/d/1OiYJ0HTMNph9Hs9b5nwE2qGnYlrM1iY-/view?usp=sharing" target="_blank" className="Home_linkContainer__wwhUX" style={{ fontWeight: 600, fontSize: '17px', letterSpacing: '1.8px', color: 'white' }}>Resume</a>
              <div style={{ width: '50px' }}></div>
              <a className="Home_linkContainer__wwhUX" href="/projects" style={{ fontWeight: 600, color: 'white' }}>Projects</a>
              <div style={{ width: '50px' }}></div>
              <a href="#contact" className="Home_linkContainer__wwhUX" style={{ fontWeight: 600, fontSize: '17px', letterSpacing: '1.8px', color: 'white' }}>Contact</a>
            </nav>
            <div className="MuiBox-root css-dzmqb6"></div>
            <div className="MuiBox-root css-2zlgry" id="im_container">
              <div id="im_class">
                <p className="MuiBox-root css-8ryw9t">I'm
                  <div style={{ display: 'inline-block' }}>
                    <div style={{ display: 'grid' }}><span className="glitch" style={{ color: 'rgb(173, 225, 170)', gridArea: '1 / 1 / -1 / -1' }} data-glitched="1">Saksham.</span></div>
                  </div>
                </p>
                <p className="MuiBox-root css-1h482xd">A final-year student and a software developer driven by a keen interest in backend development, machine learning, startups, and tackling intricate business challenges.</p>
              </div>
            </div>
            <div className="MuiBox-root css-sc4j1s"></div>
            <div className="MuiBox-root css-1l4w6pd">
              <button className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-1qumigx" tabIndex="0" type="button">
                <p className="MuiBox-root css-1kggac0">Projects</p>
                <div className="MuiBox-root css-0" style={{ width: '10px' }}></div>
                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowForwardIosIcon">
                  <path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"></path>
                </svg>
                <span className="MuiTouchRipple-root css-w0pj6f"></span>
              </button>
            </div>
            <div>
      <div className="MuiBox-root css-sc4j1s"></div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0px 10px' }}>
        <p className="MuiBox-root css-1jn8cm9">Hard Skills</p>
        <div className="MuiBox-root css-t34pg"></div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <p className="MuiBox-root css-1il69ws">Languages:</p>
            <div style={{ width: '10px' }}></div>
            <img className="MuiBox-root css-1gilair" src="https://img.shields.io/badge/C%2FC%2B%2B-011630?style=for-the-badge&amp;logo=c%2B%2B&amp;logoColor=white" style={{ borderRadius: '5px', height: '26px', width: '78px' }} />
            <img className="MuiBox-root css-1gilair" src="https://img.shields.io/badge/HTML%2FCSS-250501?style=for-the-badge&amp;logoColor=white" style={{ borderRadius: '5px', height: '26px', width: '80px' }} />
            <img className="MuiBox-root css-1gilair" src="https://img.shields.io/badge/JavaScript-2b2602.svg?style=for-the-badge&amp;logo=javascript&amp;logoColor=white" style={{ borderRadius: '5px', height: '26px', width: '100px' }} />
            <img className="MuiBox-root css-1gilair" src="https://img.shields.io/badge/TypeScript-011630.svg?style=for-the-badge&amp;logo=typescript&amp;logoColor=white" style={{ borderRadius: '5px', height: '26px', width: '100px' }} />
            <img className="MuiBox-root css-1gilair" src="https://img.shields.io/badge/Python-2b2602?style=for-the-badge&amp;logo=python&amp;logoColor=white" style={{ borderRadius: '5px', height: '26px', width: '85px' }} />
          </div>
          <div className="MuiBox-root css-9s1w6l"></div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <p className="MuiBox-root css-1il69ws">Frameworks/Libraries:</p>
            <div style={{ width: '10px' }}></div>
            <img className="MuiBox-root css-1gilair" src="https://img.shields.io/badge/Node.js-012015?style=for-the-badge&amp;logo=node.js&amp;logoColor=white" style={{ borderRadius: '5px', height: '26px', width: '85px' }} />
            <img className="MuiBox-root css-1gilair" src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&amp;logo=express&amp;logoColor=white" style={{ borderRadius: '5px', height: '26px', width: '100px' }} />
            <img className="MuiBox-root css-1gilair" src="https://img.shields.io/badge/Django-012015?style=for-the-badge&amp;logo=django&amp;logoColor=white" style={{ borderRadius: '5px', height: '26px', width: '80px' }} />
            <img className="MuiBox-root css-1gilair" src="https://img.shields.io/badge/-GraphQL-28011c?style=for-the-badge&amp;logo=graphql&amp;logoColor=white" style={{ borderRadius: '5px', height: '26px', width: '90px' }} />
            <img className="MuiBox-root css-1gilair" src="https://img.shields.io/badge/React_&amp;_React_Native-02222b?style=for-the-badge&amp;logo=react&amp;logoColor=white" style={{ borderRadius: '5px', height: '26px', width: '160px' }} />
            <img className="MuiBox-root css-1gilair" src="https://img.shields.io/badge/Flutter-021732?style=for-the-badge&amp;logo=flutter&amp;logoColor=white" style={{ borderRadius: '5px', height: '26px', width: '82px' }} />
          </div>
          <div className="MuiBox-root css-9s1w6l"></div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <p className="MuiBox-root css-1il69ws">Databases:</p>
            <div style={{ width: '10px' }}></div>
            <img className="MuiBox-root css-1gilair" src="https://img.shields.io/badge/PostgreSQL-011630?style=for-the-badge&amp;logo=postgresql&amp;logoColor=white" style={{ borderRadius: '5px', height: '26px', width: '107px' }} />
            <img className="MuiBox-root css-1gilair" src="https://img.shields.io/badge/MongoDB-012015?style=for-the-badge&amp;logo=mongodb&amp;logoColor=white" style={{ borderRadius: '5px', height: '26px', width: '94px' }} />
            <img className="MuiBox-root css-1gilair" src="https://img.shields.io/badge/Redis-250501?style=for-the-badge&amp;logo=redis&amp;logoColor=white" style={{ borderRadius: '5px', height: '26px', width: '72px' }} />
          </div>
          <div className="MuiBox-root css-9s1w6l"></div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <p className="MuiBox-root css-1il69ws">Tools:</p>
            <div style={{ width: '10px' }}></div>
            <img className="MuiBox-root css-1gilair" src="https://img.shields.io/badge/AWS-011630?style=for-the-badge&amp;logo=amazon-aws&amp;logoColor=white" style={{ borderRadius: '5px', height: '26px', width: '65px' }} />
            <img className="MuiBox-root css-1gilair" src="https://img.shields.io/badge/Git-250501?style=for-the-badge&amp;logo=git&amp;logoColor=white" style={{ borderRadius: '5px', height: '26px', width: '65px' }} />
            <img className="MuiBox-root css-1gilair" src="https://img.shields.io/badge/Docker-011630?style=for-the-badge&amp;logo=docker&amp;logoColor=white" style={{ borderRadius: '5px', height: '26px', width: '80px' }} />
            <img className="MuiBox-root css-1gilair" src="https://img.shields.io/badge/Nginx-012015?style=for-the-badge&amp;logo=nginx&amp;logoColor=white" style={{ borderRadius: '5px', height: '26px', width: '72px' }} />
          </div>
        </div>
      </div>
    </div>
            {/* Continue with the rest of your code */}
            <div className="MuiBox-root css-sc4j1s"></div>
<div className="MuiBox-root css-2coalz"></div>
<div id="contact" style={{ textAlign: 'center' }}>
    <p className="MuiBox-root css-pthzk1">Get In Touch:</p>
    <div className="MuiBox-root css-1pg8bi"></div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-5px' }}>
        <a href="https://github.com/sakkshm26" target="_blank" className="Home_linkContainer__wwhUX" style={{ borderBottom: '1px solid rgb(52, 52, 52)', paddingBottom: '2px', fontWeight: '600' }}>GitHub</a>
        <div style={{ width: '30px' }}></div>
        <a href="https://www.linkedin.com/in/sakshamsharma630/" target="_blank" className="Home_linkContainer__wwhUX" style={{ borderBottom: '1px solid rgb(52, 52, 52)', paddingBottom: '2px', fontWeight: '600' }}>LinkedIn</a>
        <div style={{ width: '30px' }}></div>
        <a href="https://twitter.com/sakkshm_" target="_blank" className="Home_linkContainer__wwhUX" style={{ borderBottom: '1px solid rgb(52, 52, 52)', paddingBottom: '2px', fontWeight: '600' }}>Twitter</a>
    </div>
    <div className="MuiBox-root css-uanaa8"></div>
    <a className="MuiBox-root css-35ezg3"><span className="MuiBox-root css-h2jno5">Email: </span><span className="__className_5ecab9 Home_linkContainer__wwhUX MuiBox-root css-nqju2l">sakshamsharma630 [at] gmail [dot] com</span></a>
</div>
<div style={{ height: '100px' }}></div>

          </div>
        </div>
      </div>
    </div>
  );
  
}

export default App;
