import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyDq5Bnj_e6KKyCZ7w_VBec_WnBh0gW_sIs";

const MyComponent = () => {
// The empty dependency array ensures that the effect runs only once when the component mounts

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
