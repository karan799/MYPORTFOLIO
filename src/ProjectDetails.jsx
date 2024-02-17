// ProjectDetails.js

import { useParams } from 'react-router-dom';
import './ProjectDetails.css';  // Import the CSS file for styling
import React, { useEffect, useState } from 'react';
import {auth, db}from './config/firebase';
import {createUserWithEmailAndPassword as create,signInWithEmailAndPassword,signOut}from "firebase/auth";
import { getDocs, collection, addDoc, doc, deleteDoc } from 'firebase/firestore';
import ParticularProject from './ParticularProject';
import { projects } from './Portfolio-Website/src/constants';

const ProjectDetails = () => {
  const { projectId } = useParams();
projects
  const [projectData,setprojectData]=useState();

  // Placeholder data (replace with actual data or fetch from an API)
  const projectDataa = {
    id: projectId,
    title: 'Sample Project',
    liveLink: 'https://www.example.com',
    image: 'path-to-your-image.jpg',  // Replace with actual image path
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',  // Replace with a detailed project description
  };
  const collectionn=collection(db,"resume");

  async function getMovies(){

    try{
      const data=await getDocs(collectionn);
      
      const filteredData=data.docs.map((doc)=>(
        {
          ...doc.data(),
          id:doc.id
        }
      ));

      console.log(filteredData);
      setprojectData(filteredData);
  }
    catch(err){
      console.log(err);
    }

  }

  useEffect(()=>{
    
    getMovies();
  }
  ,[]);

  return (
    < >
      {projects?.map(function(projectDataa) {
    return  <ParticularProject projectData={projectDataa}/>;
})}
    
    </>
  );
};

export default ProjectDetails;

