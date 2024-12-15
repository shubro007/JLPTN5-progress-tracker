import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Bookmark, BookmarkCheck, Youtube } from 'lucide-react';

const initialItems = [
  { id: '1', topic: 'React Hooks', videoLink: 'https://youtu.be/example1', completed: false, savedForLater: false },
  { id: '2', topic: 'Next.js Routing', videoLink: 'https://youtu.be/example2', completed: false, savedForLater: false },
  { id: '3', topic: 'TypeScript Basics', videoLink: 'https://youtu.be/example3', completed: false, savedForLater: false },
  { id: '4', topic: 'CSS Grid Layout', videoLink: 'https://youtu.be/example4', completed: false, savedForLater: false },
];

export function LearningProgressTracker() {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState(initialItems);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Load data from localStorage
    const savedItems = localStorage.getItem('learningItems');
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);

  useEffect(() => {
    // Save data to localStorage
    localStorage.setItem('learningItems', JSON.stringify(items));

    // Calculate progress
    const completedCount = items.filter(item => item.completed).length;
    setProgress((completedCount / items.length) * 100);
  }, [items]);

  const toggleCompleted = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const toggleSavedForLater = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, savedForLater: !item.savedForLater } : item
    ));
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">Learning Progress</h2>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-2 bg-blue-500 text-white rounded"
      >
        {isOpen ? 'Hide' : 'Show'} Learning Items
        {isOpen ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
      </button>
      {isOpen && (
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-left">Status</th>
                <th className="p-2 text-left">Save</th>
                <th className="p-2 text-left">Topic</th>
                <th className="p-2 text-left">Video Link</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="p-2">
                    <input
                      type="checkbox"
                      checked={item.completed}
                      onChange={() => toggleCompleted(item.id)}
                    />
                  </td>
                  <td className="p-2">
                    <button
                      onClick={() => toggleSavedForLater(item.id)}
                      className="p-1"
                    >
                      {item.savedForLater ? (
                        <BookmarkCheck className="h-4 w-4 text-green-500" />
                      ) : (
                        <Bookmark className="h-4 w-4" />
                      )}
                    </button>
                  </td>
                  <td className="p-2">{item.topic}</td>
                  <td className="p-2">
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

