import React from 'react'

import { FaLightbulb } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";


const DarkMode = () => {
    const [theme, setTheme]= React.useState(
        localStorage.getItem("theme")? localStorage.getItem("theme"): "light"
    );

    const element = document.documentElement; // html element
    
    React.useEffect(()=>{
        if (theme === "dark") {
            element.classList.add("dark")
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark")
            localStorage.setItem("theme", "ligth");
        }
    },[theme])
    

  return (
    <div
    className="relative"
    >
        {/* light */}
        <FaRegLightbulb 
        onClick={()=> setTheme(theme === "light"? "dark" : "light")}
        className={`w-12 cursor-pointer transition-all duration-300 absolute right-0 z-10 ${theme === "dark"? "opacity-0": "opacity-100"}`}
        />

        {/* dark */}
        <FaLightbulb 
        onClick={()=> setTheme(theme === "light"? "dark" : "light")}
        className={`w-12 cursor-pointer transition-all duration-300 }`}
        /> 

    </div>
  )
}

export default DarkMode