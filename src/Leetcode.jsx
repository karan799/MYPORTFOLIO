import React, { useEffect, useState } from 'react';

function Leetcode() {
  const [result, setResult] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://leetcodestats.cyclic.app/mentall';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'dee20b4d73mshcfbc5a8f2ae2bf5p1341d1jsnfb391bf8fbbc',
          'X-RapidAPI-Host': 'leetcode-api.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setResult(data); // Set the result in the state
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // Call the async function inside useEffect

    return () => {
      // Cleanup code if needed
    };
  }, []); // Empty dependency array means useEffect will run once on mount

  return (
    <div>
      <div>
        {Object.keys(result).length > 0 ? (
          <ul>
            {Object.entries(result).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
}

export default Leetcode;
