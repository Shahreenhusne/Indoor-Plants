
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Navbar = () => {
  return (
    <div className=' shadow-md bg-black'>
       <div className="bg-primary py-2">
         <div className=' container flex justify-between items-center'>
         <div>
            <a href="#" className="font-thin text-xl sm:text-xl text-white">
           IndorPlants
            </a>
          </div>
          <div className="flex justify-between items-center gap-4 text-white">
             <div>Home</div>
             <div>About</div>
             <div>Popular</div>
             <div>Review</div>
          </div>
          <div className="flex justify-between items-center gap-4">
            {/* search bar */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px]  group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
              />
              <FaSearch  className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            {/* order button */}
            <button className="bg-gradient-to-r  from-primary to-[#2b8e7a] transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group">
                <span className="group-hover:block hidden transition-all duration-200">
                  Order
                </span>
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            {/* Darkmode Switch */}
             <DarkMode />
          </div>

         </div>
       </div>

    </div>
  )
}

export default Navbar