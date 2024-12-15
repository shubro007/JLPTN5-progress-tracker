import React from 'react';
import { ExternalLink, BookOpen, FileText, Calendar } from 'lucide-react';





export function JLPTResources() {
  return (
    <div className="bg-white p-8 brutalist-border">
      <div className="flex items-center ">
        <ExternalLink className="w-10 h-10 text-black" strokeWidth={3} />
        <h2 className="text-2xl font-bold text-black uppercase tracking-wider">
          Official Resources
        </h2>
      </div>
      
      <div className="grid gap-4">
       
          <a
            className="block pt-5 transition-transform hover:-translate-y-1 brutalist-border bg-cyan-400"
          >
            <div className="flex items-start gap-4">
              <div className="text-black">
              <Calendar className="w-8 h-8" strokeWidth={3} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black uppercase flex items-center gap-2">
                JLPT Official Website
                  <ExternalLink className="w-5 h-5" />
                </h3>
                <p className="text-black font-bold mt-2">Registration, test information, and updates</p>
              </div>
            </div>
          </a>
   
      </div>
      

    </div>
  );
}