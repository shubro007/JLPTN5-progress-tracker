import { useEffect } from "react";
import { useState } from "react"


export function Status({value,setvalue,oldstatus,index,status,setstatus}){

    // const [status, setStatus] = useState(() => {
    // const storedStatuses = JSON.parse(localStorage.getItem("status"));
        
    //     return storedStatuses?.[index] || false; // Load from localStorage or fallback
    //   });
   
    // const [checkboxStatuses, setCheckboxStatuses] = useState(() => {
    //     const storedStatuses = JSON.parse(localStorage.getItem('status')).status;
    //     return storedStatuses //? JSON.parse(storedStatuses) : [false, false, false]; // Default to 3 checkboxes unchecked
    //   });
    //   console.log(checkboxStatuses)
    //   useEffect(() => {
    //     localStorage.setItem('status', JSON.stringify({
    //         status:checkboxStatuses
    //       }));
          
    //   }, [checkboxStatuses]);
    
      // Handle checkbox toggle
      const handleCheckboxChange = () => {
        // const newStatus = !status; // Toggle the current state
        //setstatus(newStatus); // Update the local state
        
        const newarr = [...status];
        newarr[index] = !status[index]; // Update the localStorage array
        //console.log(newarr)
        localStorage.setItem("status", JSON.stringify({
            status:newarr
        })); // Save back to localStorage
        setstatus(newarr);
      };



    return(
        <div>
            
            <button type="checkbox" onClick={()=>{

                if (status[index]){

                    //setvalue(value-1)
                    handleCheckboxChange(index)
                }else{
                    
                    //setvalue(value+1)
                    handleCheckboxChange(index)
                }  
                
            }}>
                
                {/* {console.log(status)} */}
                    {oldstatus && (
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-checkbox">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 11l3 3l8 -8" />
                            <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
                            </svg>
                        </div>
                    )}
                    {!oldstatus && (
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-checkbox">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
                            </svg>                      
                              </div>
                    )}


            </button>
        </div>
    )
}