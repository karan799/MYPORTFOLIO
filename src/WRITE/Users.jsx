import React, { useEffect, useState } from 'react';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../config/firebase';
import { GoogleGenerativeAI } from "@google/generative-ai";
import {  useNavigate } from 'react-router-dom';


const API_KEY = "AIzaSyDq5Bnj_e6KKyCZ7w_VBec_WnBh0gW_sIs";

import { useUser} from '../UserContext';
import Select from 'react-select';

const UserForm = () => {
  const {usernameee}=useUser();
  console.log(usernameee);
  const navigate = useNavigate();


  const [aboutMe, setAboutMe] = useState("i am java developer");
  const [password, setPassword] = useState("helloooo");
  const [projects, setProjects] = useState([
    "/resume/JeeEHE4xoA6wXf3Cpkxa",
    "/resune/XGRSFkjSuiThcDoplfk5"
  ]);
  const [skills, setSkills] = useState([]);
  const [username, setUsername] = useState("bhatia");
  const [newProjectName, setNewProjectName] = useState("");
  const [newProjectDescription, setNewProjectDescription] = useState("");
  const [generatedContent, setGeneratedContent] = useState([]);
  const [isButtonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    // This block of code will run when the component mounts
    // and whenever the value of isButtonClicked changes
    if (isButtonClicked) {
      const fetchData = async () => {
        try {
          const genAI = new GoogleGenerativeAI(API_KEY);
          const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  
          const prompt =
            `Write 5 points about project-"${newProjectName}" which we can write in our resume in bullet points ,we want exactly 5 lines only,make more emphasis on technology used,Specify the exact tech stack the tech stack is-{Python,NLP, Colab, Numpy,Pandas,Web Scraping}`;
  
          const result = await model.generateContent(prompt);
          const response = await result.response;
          let text = response.text().split('\n');
          text = text.map(point => point.replace(/- /, '').trim());
          
          setNewProjectDescription(text)
        } catch (error) {
          console.error('Error:', error);
        }
      };
      setButtonClicked(false);
  
      fetchData();
      
    }
  }, [isButtonClicked]);

  const handleAboutMeChange = (e) => setAboutMe(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleProjectsChange = (e) => setProjects(e.target.value.split(','));
  const handleSkillsChange = (selectedSkills) => setSkills(selectedSkills);
  const handleUsernameChange = (e) => setUsername(e.target.value);

  const handleGenerateDescription = (projectName) => {
    // Placeholder function for AI description generation
   setButtonClicked(true);
  };
  const handleAddProject = () => {
    // Add a new project to the projects array
    setProjects([...projects, { name: newProjectName, description: newProjectDescription }]);
    console.log(projects);
    // Clear the input fields after adding a project
    setNewProjectName("");
    setNewProjectDescription("");
  };




 

  const skillOptions = [
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
    { value: "javascript", label: "JavaScript" },
    { value: "react", label: "React" },
    { value: "vue", label: "Vue.js" },
    { value: "angular", label: "Angular" },
    { value: "nodejs", label: "Node.js" },
    { value: "express", label: "Express.js" },
    { value: "mongodb", label: "MongoDB" },
    { value: "sql", label: "SQL" },
    { value: "python", label: "Python" },
    { value: "django", label: "Django" },
    { value: "flask", label: "Flask" },
    { value: "tensorflow", label: "TensorFlow" },
    { value: "pytorch", label: "PyTorch" },
    { value: "scikit-learn", label: "scikit-learn" },
    { value: "numpy", label: "NumPy" },
    { value: "pandas", label: "Pandas" },
    { value: "matplotlib", label: "Matplotlib" },
    { value: "seaborn", label: "Seaborn" },
    { value: "d3js", label: "D3.js" },
    { value: "git", label: "Git" },
    { value: "docker", label: "Docker" },
    { value: "kubernetes", label: "Kubernetes" },
    { value: "aws", label: "Amazon Web Services (AWS)" },
    { value: "azure", label: "Microsoft Azure" },
    { value: "google-cloud", label: "Google Cloud Platform" },
    { value: "data-analysis", label: "Data Analysis" },
    { value: "machine-learning", label: "Machine Learning" },
  ];
  

  const handleSubmit = async(e) => {
    e.preventDefault();
    navigate(`/templateSelector`)

// Add a new document in collection "cities"
// await setDoc(doc(db, "movies", {username}),  {
//   navLinks: [
//     {
//       id: "about",
//       title: "About",
//     },
//     {
//       id: "work",
//       title: "Work",
//     },
//     {
//       id: "contact",
//       title: "Contact",
//     },
//   ],
//   file: "filee",
//   services: [
//     { title: "guttu", icon: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Tech-Stack/C.png" },
//     { title: "C++", icon: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Tech-Stack/CPP.png" },
//     { title: "Python", icon: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Tech-Stack/Python.png" },
//     { title: "Java", icon: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Tech-Stack/Java.png" },
//   ],
//   technologies: [
//     { name: "HTML 5", icon: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Tech/HTML.png" },
//     { name: "CSS 3", icon: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Tech/CSS.png" },
//     { name: "JavaScript", icon: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Tech/Javascript.png" },
//     { name: "Rect JS", icon: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Tech/ReactJS.png" },
//     { name: "Tailwind CSS", icon: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Tech/TailwindCSS.png" },
//     { name: "Node JS", icon: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Tech/NodeJS.png" },
//     { name: "Three JS", icon: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Tech/ThreeJS.png" },
//     { name: "git", icon: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Tech/Git.png" },
//   ],
//   experiences: [
//     {
//       title: "AI/ML Intern",
//       company_name: "EduSkill Foundation | AWS Academy | AICTE",
//       icon: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Experiences/EduSkill.png",
//       iconBg: "#161329",
//       date: "Sep 2023 - Nov 2023",
//       points: [
//         "Acquired hands-on knowledge of AWS Cloud Foundation, delving into cloud infrastructure, services, and deployment.",
//         "also gaining a solid foundation in Machine Learning, covering topics like algorithms, data analysis, and model building.",
//       ],
//     },
//     {
//       title: "Mathwork Ai Virtual Intern",
//       company_name: "Mathwork | AICTE",
//       icon: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Experiences/MathWorks.png",
//       iconBg: "#161329",
//       date: "May 2023 - Sep 2023",
//       points: [
//         "Completed virtual internship, gaining a strong foundation in MATLAB, including data analysis and processing.",
//         "Acquired practical skills in image and signal processing, including segmentation, batch processing, and spectral analysis.",
//         "Developed expertise in machine learning models for clustering, classification, and regression, and customized deep learning techniques for image classification.",
//       ],
//     },
//     {
//       title: "Artificial Intelligence Intern",
//       company_name: "Edunet Foundation | IBM SkillsBuild | AICTE",
//       icon: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Experiences/Edunet.png",
//       iconBg: "#161329",
//       date: "June 2023 - July 2023",
//       points: [
//         "Engineered a comprehensive Mental Health Fitness Tracker ML model utilizing Python and scikit-learn.",
//         "Maximized the model's performance by refining model parameters and employing ensemble methods, yielding an outstanding accuracy percentage of 98.50%.",
//         "Leveraged 12 regression algorithms to attain precise outcomes in analyzing and predicting mental fitness levels across 150+ countries.",
//       ],
//     },
//   ],
//   projects: [
//     {
//       name: "WeatherPedia",
//       description: "Web-based platform that allows users to access weather information for their location by entering it in the search field",
//       tags: [
//         { name: "Javascript", color: "blue-text-gradient" },
//         { name: "HTML", color: "green-text-gradient" },
//         { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
//         { name: "Weather API by API Ninjas", color: "yellow-text-gradient" },
//       ],
//       image: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Projects/WeatherPedia.png",
//       source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
//     },
//     {
//       name: "Terminal Like Portfolio Website",
//       description: "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
//       tags: [
//         { name: "HTML", color: "blue-text-gradient" },
//         { name: "css", color: "green-text-gradient" },
//         { name: "Javascript", color: "pink-text-gradient" },
//       ],
//       image: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Projects/TerminalPW.png",
//       source_code_link: "https://github.com/lohitkolluri/lohitkolluri.github.io",
//     },
//     {
//       name: "Mental Health Fitness Tracker",
//       description: "ML model that utilizes regression techniques to provide insights into mental health and make predictions based on the available data.",
//       tags: [
//         { name: "Machine Learning", color: "blue-text-gradient" },
//         { name: "Jupyter Notebook", color: "green-text-gradient" },
//         { name: "Regression Algorithms", color: "pink-text-gradient" },
//       ],
//       image: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Projects/MHFT.png",
//       source_code_link: "https://github.com/lohitkolluri/mental_health_fitness_tracker",
//     },
//     {
//       name: "PayloadMaster",
//       description: "Tool to automate payload creation using the Metasploit framework",
//       tags: [
//         { name: "shell", color: "blue-text-gradient" },
//       ],
//       image: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Projects/PayloadMaster.png",
//       source_code_link: "https://github.com/lohitkolluri/PayloadMaster",
//     },
//     {
//       name: "CompileVortex",
//       description: "Tool to automate payload creation using the Metasploit framework",
//       tags: [
//         { name: "Javascript", color: "blue-text-gradient" },
//         { name: "CSS", color: "green-text-gradient" },
//         { name: "HTML", color: "pink-text-gradient" },
//       ],
//       image: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Projects/CompileVortex.png",
//       source_code_link: "https://github.com/lohitkolluri/CompileVortex",
//     },
//     {
//       name: "Sketcher",
//       description: "Convert an input image to a pencil sketch using OpenCV and Matplotlib libraries.",
//       tags: [
//         { name: "OpenCV", color: "blue-text-gradient" },
//         { name: "Matplotlib", color: "green-text-gradient" },
//         { name: "Python", color: "pink-text-gradient" },
//       ],
//       image: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Projects/Sketcher.png",
//       source_code_link: "https://github.com/lohitkolluri/SketchiFy",
//     },
//   ],
// });

    console.log("Form submitted with the following data:");
    console.log("About Me:", aboutMe);
    console.log("Password:", password);
    console.log("Projects:", projects);
    console.log("Skills:", skills.map(skill => skill.value).join(', '));
    console.log("Username:", username);
  };

  return (
    <form className="max-w-md mx-auto my-8" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-600">About Me:</label>
        <input className="w-full border-2 border-gray-300 p-2" type="text" value={aboutMe} onChange={handleAboutMeChange} />
      </div>
      {/* <div className="mb-4">
        <label className="block text-gray-600">Password:</label>
        <input className="w-full border-2 border-gray-300 p-2" type="password" value={password} onChange={handlePasswordChange} />
      </div> */}
      {/* <div className="mb-4">
        <label className="block text-gray-600">Projects (comma-separated):</label>
        <input className="w-full border-2 border-gray-300 p-2" type="text" value={projects.join(',')} onChange={handleProjectsChange} />
      </div> */}
      
      <div className="mb-4">
        <label className="block text-gray-600">New Project Name:</label>
        <input className="w-full border-2 border-gray-300 p-2" type="text" value={newProjectName} onChange={(e) => setNewProjectName(e.target.value)} />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">New Project Description:</label>
        <textarea className="w-full border-2 border-gray-300 p-2" value={newProjectDescription} onChange={(e) => setNewProjectDescription(e.target.value)} />
      </div>
      <button className="bg-indigo-500 text-white p-2" type="button" onClick={handleAddProject}>Add Project</button>
      <button className="bg-green-500 text-white p-2 ml-2" type="button" onClick={() => handleGenerateDescription(newProjectName)}>Generate Description</button>

      <div className="mb-4">
        <label className="block text-gray-600">Skills:</label>
        <Select
          isMulti
          options={skillOptions}
          value={skills}
          onChange={handleSkillsChange}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">Username:</label>
        <input className="w-full border-2 border-gray-300 p-2" type="text" value={username} onChange={handleUsernameChange} />
      </div>
      <button className="bg-blue-500 text-white p-2" type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
