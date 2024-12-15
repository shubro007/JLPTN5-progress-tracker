import { useEffect, useState } from "react"
import { Clock } from 'lucide-react';
import { JLPTResources } from "./Resources";

const date1 = new Date('2024-12-20');  // Example date 1
export function Daysleft(){
     
    const currentDate =new Date(Date.now());
    const differenceInDays =( date1 - currentDate )/ (1000 * 60 * 60 * 24);
    
    return (
    
     
      <div className="grid grid-cols-2" >
    
      
      <div className="bg-black text-yellow-400 p-6 brutalist-border border-black">
      <div className="flex items-center gap-4 mb-6">
        <Clock className="w-8 h-8 text-white" strokeWidth={3} />
        <h2 className="text-2xl font-bold text-white uppercase tracking-wider">
          Time Remaining
        </h2>
      </div>
        <div className="text-8xl font-bold tabular-nums">
        {Math.floor(differenceInDays)}
        </div>
        <div className="text-3xl uppercase mt-2 font-bold">
          {differenceInDays === 1 ? 'day' : 'days'}
        </div>
      </div>
        
    <JLPTResources></JLPTResources>
   
    </div>
   
    
            
      
    )
}

