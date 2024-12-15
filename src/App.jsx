import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Comp} from './components/Comp'
import DropdownTableWithProgress from './components/Drop'
import { LearningProgressTracker } from './components/Drop2'
import tableData from './components/data'
import { Daysleft } from './components/Daysleft'
import { Image } from './components/Image'



function App() {
  const [count, setCount] = useState(0)
  const data = [
    ["Status","Topic", "Youtube", "Revision"], // Header row
    [false,"Vocabulary", 25, "Japan"],
    [false,"Grammar", 30, "Spain"],
    
  ];
  
  
  
  // localStorage.setItem('status',JSON.stringify({
  //   status:[false,false]
  // }))  
  // useEffect(()=>{
  //   var statuses = JSON.parse(localStorage.getItem('status')).status;
  //   if (!statuses) {
  //     // If the item does not exist, set it with a default value
  //     localStorage.setItem('status',JSON.stringify({
  //       status:[false,false]
  //     }))

  //     //console.log("not found"); 
  //   }
  //   console.log(statuses)
  //   for (let i=1,j=0; i<data.length; i++,j++){
  //     data[i][0] = statuses[j];
  //   }
  // },[])


  

  return (
    <div className='grid grid-cols-1   lg:grid-cols-2         xl:grid-cols-3'>
      <img src='door2.jpg' className='fixed inset-y-0 left-0 z-50  bg-black w-1/2 h-screen animate-slideRight'></img>
      <img src='door2.jpg' className='fixed inset-y-0 right-0 z-50   bg-black w-1/2 h-screen animate-slideLeft'></img>

      <div className=' col-span-1  '>

        <div className='sticky top-0'>
          <div className="  bg-web-300 text-white p-10 text-center ">
          
            <h1 className="text-4xl font-bold font-mono mb-2">JLPT  Progress Tracker</h1>
            <h1 className=" rotate-45 text-yellow-400 text-5xl font-mono animate-pulseText ">
                  N5
                </h1>
            <p className="text-xl font-mono">Your one-stop resource for mastering Japanese using 'Minna no Nihongo'</p>
            </div>

        <div className=""><Daysleft ></Daysleft></div>

        <div className=''>
          <Image></Image>
        </div>
        </div>
        
       </div> 

       
    <div className="col-span-1 relative h-full w-full bg-cover bg-repeat bg-center  grid place-items-center animate-movingBackground overflow-y-auto lg:col-span-1  xl:col-span-2"
    style={{ backgroundImage: 'url(jap-pattern.jpg)',
      backgroundAttachment: "fixed",
    
    }}>
      {/* <h1>hello</h1>
      <Comp
        step={1}
        description="Chapter 1"
        data={data}
      /> */}
{/* <div className="absolute inset-0 bg-black bg-opacity-90 z-10"></div> */}

      

      {tableData.map((element) => (
      <DropdownTableWithProgress    key={element.id}
      uniqueKey={element.id}
      tableData={element.tableData}
      title={element.title} />
  ))}
      {/* <LearningProgressTracker></LearningProgressTracker> */}

    </div>
    
    </div>
  );
}

export default App
