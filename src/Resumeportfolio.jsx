// Resume.js

import React ,{useState}from 'react';
import { Link } from 'react-router-dom';
import './tailwind.css';
import ProjectDetails from './ProjectDetails';
import Navbar from './Navbar';
import { useUser } from './UserContext';

const Resumeportfolio = ({userDataa}) => {
  const [staticData, setStaticData] =useState({
    name: 'Karan Bhatia',
    role: 'Web Developer',
    aboutMe:
      'Hello! I\'m a passionate web developer with a love for crafting beautiful and interactive user experiences. My skills extend from front-end technologies to creating robust back-end solutions.',
    education: [
      'Master of Science in Computer Science',
      'University of XYZ, 2020-2022',
    ],
    workExperience: ['Software Engineer at ABC Company', 'Frontend Developer at XYZ Tech'],
    projects: [
      {
        title: 'Project 1',
        description: 'Explore the details and impact of Project 1.',
        githubLink: 'https://github.com/yourusername/project1',
        detailsLink: '/project/project1-details',
      },
      {
        title: 'Project 2',
        description: 'Dive into the insights and significance of Project 2.',
        githubLink: 'https://github.com/yourusername/project2',
        detailsLink: '/project/project2-details',
      },
    ],
    skills: ['React', 'JavaScript', 'HTML/CSS'],
    socialLinks: [
      { name: 'Github', link: 'https://github.com/karan799' }, // Replace '#' with the actual link
      { name: 'Instagram', link: '#' }, // Replace '#' with the actual link
      { name: 'LinkedIn', link: 'www.linkedin.com/in/karan-bhatia-3a9619221' }, // Replace '#' with the actual link
      { name: 'Facebook', link: '#' }, // Replace '#' with the actual link
    ],
  });
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    console.log("toggle");
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const recipient = '2021kucp1120@iiitkota.ac.in';
  

  const handleGmailClick = () => {
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}`;
  };
  const {usernameee}=useUser()
  return (
    <>
   
    <div className="bg-white">
      
      {/* <Navbar isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu}/> */}

      {/* Main Content */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding. <a href="#" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div> */}
          <div className="text-center" id='AboutMe'>
          
            <h1 className="text-4xl font-bold tracking-tight text-teal-500 sm:text-6xl animate-pulse">{userDataa.username}{usernameee}</h1>
            <p className="text-gray-600">{staticData.role}</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">{userDataa.aboutme}</p>
            {/* <h3 className="text-3xl font-bold text-teal-500">Skills</h3>
            <div className="mt-6 text-lg leading-8 text-gray-600">
              <ul className="list-disc list-inside">
            {staticData.skills.map((skills,index)=><li key={index}>{skills}</li>)}
            
          </ul>
          </div> */}
            
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#"  onClick={handleGmailClick} className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">contact</a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">projects<span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
        </div>
      </div>
    </div>
    <div className="bg-white min-h-screen py-8">
      <div className="container mx-auto">
        

       

        {/* <section className="mb-8">
          <h2 className="text-2xl text-teal-500 mb-4">Education</h2>
          <ul>
            {staticData.education.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        </section> */}

        {/* <section className="mb-8 pppp">
          <h2 className="text-2xl text-teal-500 mb-4">Work Experience</h2>
          <ul>
            {staticData.workExperience.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        </section> */}

        <section className="mb-8" id='Projects'>
          <h2 className="text-2xl text-teal-500 mb-4">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
           <ProjectDetails/>
          </div>
        </section>

        <section className="mb-8" id="Skills">
          <h2 className="text-2xl text-teal-500 mb-4">Skills</h2>
          <ul className="list-disc list-inside">
            {userDataa.skills?.map((skills,index)=><li key={index}>{skills}</li>)}
            
          </ul>
        </section>

        <section className="mb-8">
  <h2 className="text-2xl text-teal-500 mb-4" id='Contact'>Contact</h2>
 
  <div class="bg-gray-50 p-4">
  <div className="flex items-center justify-center">
    <h2 class="md:text-2xl " >Social links</h2>
    </div>
   
  <div class="bg-gray-50 p-4 flex items-center justify-center">
   
    
    <ul class="flex flex-wrap gap-4">
        <li class="my-4"><a href="https://Github.com/Karan799" aria-label="GITHUB" target="_blank" rel="noopener"
                class="w-min flex items-center  bg-white px-1 py-1 rounded-md text-black transition hover:translate-x-2 hover:no-underline"><svg fill="none" viewBox="0 0 15 15" height="1em" width="1em" >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M7.233 4.696c0-1.727 1.4-3.127 3.127-3.127 1.014 0 1.823.479 2.365 1.175a5.246 5.246 0 001.626-.629 2.634 2.634 0 01-1.148 1.45l.002.003a5.26 5.26 0 001.5-.413l-.001.002c-.337.505-.76.95-1.248 1.313.026.177.04.354.04.53 0 3.687-2.809 7.975-7.975 7.975a7.93 7.93 0 01-4.296-1.26.5.5 0 01-.108-.748.45.45 0 01.438-.215c.916.108 1.83-.004 2.637-.356a3.086 3.086 0 01-1.69-1.876.45.45 0 01.103-.448 3.07 3.07 0 01-1.045-2.31v-.034a.45.45 0 01.365-.442 3.068 3.068 0 01-.344-1.416c0-.468.003-1.058.332-1.59a.45.45 0 01.323-.208.5.5 0 01.538.161 6.964 6.964 0 004.46 2.507v-.044zm-1.712 7.279a6.936 6.936 0 01-2.249-.373 5.318 5.318 0 002.39-1.042.45.45 0 00-.27-.804 2.174 2.174 0 01-1.714-.888c.19-.015.376-.048.556-.096a.45.45 0 00-.028-.876 2.18 2.18 0 01-1.644-1.474c.2.048.409.077.623.084a.45.45 0 00.265-.824A2.177 2.177 0 012.48 3.87c0-.168.003-.317.013-.453a7.95 7.95 0 005.282 2.376.5.5 0 00.513-.61 2.127 2.127 0 012.071-2.614c1.234 0 2.136 1.143 2.136 2.432 0 3.256-2.476 6.974-6.975 6.974z"
                  clipRule="evenodd"
                />
              </svg>
                <span class="ml-2">Github</span>
            </a>
        </li>
        
        
        <li class="my-4"><a href="https://www.linkedin.com/in/karan-bhatia-3a9619221/" aria-label="LINKEDIN" target="_blank" rel="noopener"
                class="w-min flex items-center  bg-white px-1 py-1 rounded-md text-black transition hover:translate-x-2 hover:no-underline"> <svg fill="none" viewBox="0 0 15 15" height="1em" width="1em" >
                <path
                  stroke="currentColor"
                  d="M4.5 6v5m6 0V8.5a2 2 0 10-4 0V11 6M4 4.5h1M1.5.5h12a1 1 0 011 1v12a1 1 0 01-1 1h-12a1 1 0 01-1-1v-12a1 1 0 011-1z"
                />
              </svg>
                <span class="ml-2">LinkedIn</span>
            </a>
        </li>
        {/* <li class="my-4"><a href="" aria-label="LINKEDIN" target="_blank" rel="noopener"
                class="w-min flex items-center  bg-white px-1 py-1 rounded-md text-black transition hover:translate-x-2 hover:no-underline"> 
              <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"

    >
      <path d="M20 18h-2V9.25L12 13 6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z" />
    </svg>
              <span class="ml-2">Gmail</span>
            </a>
        </li> */}
        
        
        </ul>
</div>
</div>
</section>

      </div>
    </div>
    </>
  );
};

export default Resumeportfolio;
