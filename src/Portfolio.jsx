import { useParams } from 'react-router-dom';
import './ProjectDetails.css';  // Import the CSS file for styling
import React, { useEffect, useState } from 'react';
import {auth, db}from './config/firebase';
import {createUserWithEmailAndPassword as create,signInWithEmailAndPassword,signOut}from "firebase/auth";
import { getDocs, collection, addDoc, doc, deleteDoc } from 'firebase/firestore';
import ParticularProject from './ParticularProject';
import Resumeportfolio from './resumeportfolio';

const Portfolio = () => {
  const { username } = useParams();

  const [userData,setuserData]=useState();

  // Placeholder data (replace with actual data or fetch from an API)
  
  const collectionn=collection(db,"users");

  async function getUser(){

    try{
      const data=await getDocs(collectionn);
      
      const filteredData=data.docs.map((doc)=>(
        {
          ...doc.data(),
          id:doc.id
        }
      ));

      console.log(filteredData);
      setuserData(filteredData);
  }
    catch(err){
      console.log(err);
    }

  }

  useEffect(()=>{
    
    getUser();
  }
  ,[]);

  

  return (
    < >
      {userData?.map(function(userDataa) {
        if(userDataa.username==username)
        {
          
          return  <Resumeportfolio userDataa={userDataa}/>
        }
        
})}
    
    </>
  );
};

export default Portfolio;


