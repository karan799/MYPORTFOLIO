import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './tailwind.css';

const Resume2 = () => {
  // State to store static data
  const [staticData, setStaticData] = useState({
    name: 'Your Full Name',
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
      { name: 'Github', link: '#' }, // Replace '#' with the actual link
      { name: 'Instagram', link: '#' }, // Replace '#' with the actual link
      { name: 'LinkedIn', link: '#' }, // Replace '#' with the actual link
      { name: 'Facebook', link: '#' }, // Replace '#' with the actual link
    ],
  });

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <header className="text-center mb-4">
        <h1 className="text-3xl font-bold">{staticData.name}</h1>
        <p className="text-xl text-gray-600">{staticData.role}</p>
      </header>

      <section className="max-w-3xl mx-auto mb-8">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-2">About Me</h2>
          <p>{staticData.aboutMe}</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto mb-8">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Education</h2>
          <ul>
            {staticData.education.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-3xl mx-auto mb-8">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Work Experience</h2>
          <ul>
            {staticData.workExperience.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-3xl mx-auto mb-8">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Projects</h2>
          <ul>
            {staticData.projects.map((project, index) => (
              <li key={index} className="mb-4">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="mb-2">{project.description}</p>
                <div className="flex">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    GitHub Link
                  </a>
                  <Link
                    to={project.detailsLink}
                    className="ml-4 text-blue-500 hover:underline"
                  >
                    Details
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-3xl mx-auto mb-8">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Skills</h2>
          <ul className="flex flex-wrap">
            {staticData.skills.map((skill, index) => (
              <li key={index} className="mr-4 mb-2 bg-gray-200 p-2 rounded">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-3xl mx-auto">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Social Links</h2>
          <ul className="flex">
            {staticData.socialLinks.map((link, index) => (
              <li key={index} className="mr-4">
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Resume2;

