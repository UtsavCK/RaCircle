// import React from 'react'

// const Volunteer = () => {
//   return (
//     <div>Volunteer</div>
//   )
// }

// export default Volunteer

import React, { useState } from 'react'

const Volunteer = () => {
  const [showDashboard, setShowDashboard] = useState(false);

  const handleProfileClick = () => {
    setShowDashboard(!showDashboard);
  }

  return (
    <div>
      {/* Title Bar */}
      <div className="flex justify-between items-center p-4 bg-blue-600 text-white">
        <h1 className="text-2xl font-bold">Volunteer</h1>
        <div className="flex items-center space-x-4 cursor-pointer" onClick={handleProfileClick}>
          <div className="text-sm">Profile</div>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div> {/* Placeholder for profile image */}
        </div>
      </div>

      {/* Conditional Rendering */}
      <div className="p-4">
        {showDashboard ? (
          <div>
            <h2 className="text-xl font-bold mb-4">Dashboard</h2>
            <p>Welcome to your dashboard! Here you can manage your volunteer information.</p>
            {/* Add more dashboard content here */}
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold mb-4">Volunteer Section</h2>
            <p>Here you can learn more about the volunteer opportunities and how you can contribute.</p>
            {/* Add more volunteer content here */}
          </div>
        )}
      </div>
    </div>
  )
}

export default Volunteer

