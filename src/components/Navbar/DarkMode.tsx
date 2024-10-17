import { useEffect, useState } from "react"
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
   
    const element = document.documentElement;  // Refers to the entire <html> element.


    console.log(element)
    useEffect( () => {
       if(theme=="dark"){
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
       }
       else{
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
       }
    }
,[theme])

   
    

  return (
    <div className="relative">   
    </div>
  )
}

export default DarkMode