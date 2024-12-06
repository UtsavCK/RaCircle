import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom
import { supabase } from '../supabaseClient';  // Import supabase client (adjust the path if necessary)
import NavigationCard from './NavigationCard';

const navigationData = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0412e84e134d28db29ac06878e77bb4b5e1b3237977d894890cff98691fc53de?placeholderIfAbsent=true&apiKey=8973cd7007234792a068b2cece109bce",
    title: "Folklores",
    description: "A deeper look at the culture",
    path: "/folklore"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/37021c7ae00748e07d2375c7b47fafddb6b8cd3d6a7e6f7e27a517ad83bb9290?placeholderIfAbsent=true&apiKey=8973cd7007234792a068b2cece109bce",
    title: "Volunteer with us",
    description: "Join us in our cause to serve the culture",
    path: "/signup" // Initially points to signup; we'll dynamically change this
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/979f9693cdbec0a38493a5dc085c88f9da78d4219ab7ff54f0cca7f1b68a86b0?placeholderIfAbsent=true&apiKey=8973cd7007234792a068b2cece109bce",
    title: "Upcoming events",
    description: "The events that are coming up next you might be interested in.",
    path: "/calendar"
  }
];

const NavigationSection = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if the user is logged in
  const navigate = useNavigate();  // Use useNavigate hook from react-router-dom

  // Check user login status on component mount
  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser(); // Get the user using getUser() method
      setIsLoggedIn(!!user); // Set the login state based on whether a user is logged in
    };
    checkUser();
  }, []);

  const handleNavigation = (path) => {
    navigate(path);  // Navigate to the given path
  };

  // Modify navigationData based on login state
  const updatedNavigationData = navigationData.map((item) => {
    if (item.title === "Volunteer with us") {
      // Change the path based on login status
      item.path = isLoggedIn ? "/volunteer" : "/signup";
    }
    return item;
  });

  return (
    <main 
      className="flex overflow-hidden flex-col justify-center self-stretch px-6 py-11 bg-white text-zinc-800 max-md:px-5"
      role="main"
      aria-label="Navigation Section"
    >
      <nav 
        className="flex flex-wrap gap-6 justify-center items-start w-full max-md:max-w-full"
        role="navigation"
        aria-label="Main navigation"
      >
        {updatedNavigationData.map((item) => (
          <NavigationCard
            key={item.path}
            imageSrc={item.imageSrc}
            title={item.title}
            description={item.description}
            onClick={() => handleNavigation(item.path)}  // Pass onClick handler
          />
        ))}
      </nav>
    </main>
  );
};

export default NavigationSection;
