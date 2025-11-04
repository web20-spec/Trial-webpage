import React from "react";
import ProfileCard from "./Components/Profile/ProfileCard";

function App() {
  return (
    <div className="flex flex-col items-center gap-6 mt-10">
      <ProfileCard 
        name="Mohsin Ali Zaidi" 
        age={22} 
        location="Pakistan" 
        image="https://randomuser.me/api/portraits/men/32.jpg"
      />
      
      <ProfileCard 
        name="Sara Khan" 
        age={24} 
        location="Lahore" 
        image="https://randomuser.me/api/portraits/women/44.jpg"
      />
    </div>
  );
}

export default App;
