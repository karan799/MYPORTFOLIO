import { collection, getDocs } from 'firebase/firestore';
import React from 'react';

function Skills() {
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
    <div>
      
    </div>
  );
}

export default Skills;
