import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Bookmark, BookmarkCheck, Youtube } from 'lucide-react';
const DropdownTableWithProgress = ({ tableData, uniqueKey,title }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [checkboxState, setCheckboxState] = useState({});
    const [progress, setProgress] = useState(0);
    const [revision, setRevision] = useState({});
  
    // Load checkbox state from localStorage on mount
    useEffect(() => {
      const savedState = JSON.parse(localStorage.getItem(`checkboxState-${uniqueKey}`)) || {};
      setCheckboxState(savedState);
  
      const savedRevision = JSON.parse(localStorage.getItem(`revision-${uniqueKey}`)) || {};
      setRevision(savedRevision);
  
      const checkedCount = Object.values(savedState).filter(Boolean).length;
      setProgress((checkedCount / tableData.length) * 100);
    }, [tableData, uniqueKey]);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleCheckboxChange = (id) => {
      const updatedState = {
        ...checkboxState,
        [id]: !checkboxState[id],
      };
      setCheckboxState(updatedState);
      localStorage.setItem(`checkboxState-${uniqueKey}`, JSON.stringify(updatedState));
  
      const checkedCount = Object.values(updatedState).filter(Boolean).length;
      setProgress((checkedCount / tableData.length) * 100);
    };
  
    const toggleSavedForLater = (id) => {
      const updatedRevision = {
        ...revision,
        [id]: !revision[id],
      };
      setRevision(updatedRevision);
      localStorage.setItem(`revision-${uniqueKey}`, JSON.stringify(updatedRevision));
    };


  return (
    <div style={{ fontFamily: "Arial, sans-serif" }} className="w-full max-w-4xl mx-auto m-99 space-y-4 shadow-lg  bg-gray-100 m-5 cursor-pointer  p-4 border-4 border-black	">
    <div className="flex justify-between">
            <h2 className="text-2xl font-mono font-bold text-gray-800">{title}</h2>
            <button   onClick={toggleDropdown} style={{ marginBottom: "10px" }} className="transition ease-in-out delay-150  px-4 py-2 bg-web-300 text-white rounded hover:bg-web-400 focus:outline-none">
                    {/* {isOpen ? "Hide Table" : "Show Table"} */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
            </button>
    </div>

      
        <div style={{ height: "20px", width: "100%", backgroundColor: "#f3f3f3", marginBottom: "10px" }} className="">
   <div
        className={`h-full bg-gradient-to-r from-web-100 via-red-400 to-web-100 animate-gradient bg-[length:200%_100%]`}
        style={{
          width: `${progress}%`, // Dynamic width for progress
          transition: "width 0.3s ease-in-out",
        }}
      ></div>
        </div>


    
      {/* Dropdown Table */}
      {isOpen && (
        <table  className="font-mono w-full border-collapse border-4 border-black"

        >
          <thead>
            <tr className=  "bg-web-500  ">
              <th className="p-4 text-left border-4 border-black">Completed</th>
              <th className="p-4 text-left border-4 border-black">Item</th>
              <th className="p-4 text-left border-4 border-black">Video Link</th>
              <th className="p-4 text-left border-4 border-black">Revision</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item,i) => (
              <tr key={item.id} className="hover:bg-gray-200">
                <td className="p-4 border-4 border-black " >
                  <input
                    type="checkbox" 
                    checked={checkboxState[item.id] || false}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                </td>
                <td className="p-4 border-4 border-black ">{item.name}</td>
                <td className="p-4 border-4 border-black ">
                <a
                      href={item.videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-500 hover:text-blue-700"
                    >
                      <Youtube className="mr-1 h-4 w-4" />
                      Watch
                    </a>
                </td>
                <td className="p-4 border-4 border-black  "  >
                <button
                      onClick={() => toggleSavedForLater(item.id)}
                      className="p-1"
                    >
                      {revision[i+1] ? (
                        <BookmarkCheck className="h-4 w-4 text-green-500" />
                      ) : (
                        <Bookmark className="h-4 w-4" />
                      )}
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DropdownTableWithProgress;
