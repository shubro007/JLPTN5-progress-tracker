import React, { useEffect } from "react";
import { useState } from "react";
import { Status } from "./Status";



let j = 0;

export const Comp = ({ step, description,data }) => {

  const [status, setstatus] = useState(() => {
    const storedStatuses = JSON.parse(localStorage.getItem("status")).status;
        
        return storedStatuses
      });
  console.log(status)


  const max = data.length-1;
  const [value,setvalue] = useState(0);
  const percentage = (value / max) * 100;
  const [isVisible, setIsVisible] = useState(false);
  

  // Toggle dropdown visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
    <div className="flex items-center justify-between bg-gray-800 rounded-lg p-4 w-full max-w-md text-white">
      {/* Step Description */}
      <div className="flex-1 text-sm font-medium">
        <strong>Step {step}:</strong> {description}
      </div>

      {/* Progress Bar Container */}
      <div className="flex items-center gap-2 w-1/3">
        <div className="relative w-full bg-gray-700 rounded-lg h-2">
          {/* Progress Bar */}
          <div
            className="absolute top-0 left-0 h-2 bg-red-500 rounded-lg"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        {/* Progress Text */}
        <span className="text-xs font-bold">
          {value}/{max}
        </span>
      </div>
      <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          onClick={toggleVisibility}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
</svg>

        </button>
    </div>
    {isVisible && (
        <div className="w-full max-w-md bg-gray-800 rounded-lg p-4">
      <table  className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          {data[0].map((header, index) => (
            <th key={index}  scope="col" className="px-6 py-3">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>

        {data.slice(1).map((row, rowIndex) => (
          <tr key={rowIndex}>
            
            <td scope="col" className="px-6 py-3">
              {console.log(status[j])}
              <Status value={value} setvalue={setvalue} oldstatus={status[j++]} index={j} status={status} setstatus={setstatus}></Status>
              
            </td>
            
            
            {row.slice(1).map((cell, cellIndex) => (
              <td key={cellIndex} scope="col" className="px-6 py-3">{cell}</td>
            ))}
          </tr>
          
        ))}
      </tbody>
    </table>
        </div>
      )}


    </div>
      
  );
};

