import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyDq5Bnj_e6KKyCZ7w_VBec_WnBh0gW_sIs";

const MyComponent = () => {
  const [generatedContent, setGeneratedContent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const prompt =
          'Write 5 points about project-"Movie Recommender System" which we can write in our resume in bullet points ,we want exactly 5 lines only,make more emphasis on technology used,Specify the exact tech stack the tech stack is-{Python,NLP, Colab, Numpy,Pandas,Web Scraping}';

        const result = await model.generateContent(prompt);
        const response = await result.response;
        let text = response.text().split('\n');
        text = text.map(point => point.replace(/- /, '').trim());
        
        setGeneratedContent(text);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  return (
    <div>
      <h1>Generated Content:</h1>
      <ul>
        {generatedContent.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
