import React from 'react';
import { Link } from 'react-router-dom';

function ParticularProject({projectData}) {
  return (
    <>
       <div className="bg-white p-6 rounded-lg shadow-md mb-4 transition hover:translate-x-2 hover:no-underline">
              <h3 className="text-xl font-semibold  text-black mb-2">{projectData?.name}</h3>
              <p className="text-gray-700 mb-2">{projectData?.description}</p>
              <p className="text-teal-500">
              GitHub: <a href={projectData?.livelink} target="_blank" rel="noopener noreferrer">Project 1</a>

              </p>
              <Link to= {`project/${projectData?.id}`} className="btn-primary mt-4">
                Details
              </Link>
            </div>
      
    </>
  );
}

export default ParticularProject;
