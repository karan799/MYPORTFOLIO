import React, { useState } from 'react';
import Appp from '../Portfolio-Website/src/App';
import Portfolio from '../Portfolio';
import Templateblack from '../Templateblack';

const TemplateSelector = () => {
  
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleSelectComponent = (component) => {
    setSelectedComponent(component);
  };

  const handlePreview = () => {
    // Handle preview logic (e.g., show a modal or navigate to a preview page)
    console.log('Preview:', selectedComponent);
  };

  const handleFinalize = () => {
    // Handle finalize logic (e.g., save the choice)
    console.log('Finalize:', selectedComponent);

    // You can redirect or perform other actions after finalizing
  };

  return (
    <div className="p-8 bg-gray-800 text-white text-center">
    <h2 className="text-2xl font-bold mb-4">Choose a Component</h2>
    <div className="flex space-x-4 mb-8 justify-center">
      <button className="btn btn-blue" onClick={() => handleSelectComponent('A')}>Select Component A</button>
      <button className="btn btn-green" onClick={() => handleSelectComponent('B')}>Select Component B</button>
      <button className="btn btn-indigo" onClick={() => handleSelectComponent('C')}>Select Component C</button>
    </div>

  

    {selectedComponent && (
      <div className='text-center'>
        <button className="btn btn-red bg-white text-black font-bold rounded-full py-3 px-6 text-lg" onClick={handleFinalize}>SUBMIT</button>
        {selectedComponent === 'A' && <Appp />}
        {selectedComponent === 'B' && <Portfolio />}
        {selectedComponent === 'C' && <Templateblack />}

      </div>
    )}
  </div>
  );
};

export default TemplateSelector;
