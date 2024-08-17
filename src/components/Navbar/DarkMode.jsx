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
            localStorage.setItem("theme", "light");
        }
    },[theme])
    

  return (
    <div
    className="relative flex items-center"
    >
        {/* light */}
        <FaRegLightbulb 
        onClick={()=> setTheme(theme === "light"? "dark" : "light")}
        className={`w-12 cursor-pointer transition-all duration-300 absolute right-0  ${theme === "dark"? "hidden": "block"}`}
        />

        {/* dark */}
        <FaLightbulb 
        onClick={()=> setTheme(theme === "light"? "dark" : "light")}
        className={`w-12 cursor-pointer transition-all duration-300 absolute right-0 ${theme === "light"? "hidden": "block"}`}
        /> 

    </div>
  )
}

export default DarkMode