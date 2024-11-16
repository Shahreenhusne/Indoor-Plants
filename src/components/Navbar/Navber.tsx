import  { useEffect, useState } from 'react'
import leaf1 from "../../assets/img/leaf-1.png"
import leaf2 from "../../assets/img/leaf-2.png"
const Navber = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    
     useEffect(() => {
    
    const handleScrollBtn= () => {
       // Show button if scrolled down 100px or more
      if (window.scrollY > 100) {
        setIsVisible(true);
      } 
      else {
        setIsVisible(false);
      }

    }

      window.addEventListener('scroll', handleScrollBtn);

    // Cleanup the event listener
    return () => window.removeEventListener('scroll', handleScrollBtn);
    },[])

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
      };


  return (
    <header id='navbar' className={`bg-green-950 ${isVisible? 'border-b border-yellow-500': "border-none"} fixed w-full top-0 left-0 z-50`}>
        <nav className='container flex items-center justify-between h-16 sm:h-20'>
            {/* website name */}
            <div className='font-lobster sm:text-2xl'>Indoor Plants</div>
            {/* nav-menu */}
            <div id='nave-menu' className={`absolute top-0 ${isOpen? "left-0" : "left-[-100%]"} min-h-[80vh] w-full bg-green-950/80 backdrop-blur-sm flex items-center justify-center duration-300 overflow-hidden lg:static lg:min-h-fit lg:bg-transparent lg:w-auto`}>
                <ul className='flex flex-col items-center gap-8 lg:flex-row'>
                    <li>
                        <a href="#home" className={`${isOpen ? "left-[-100%]" : "left-0"} active:text-yellow-500`} onClick={toggleNavbar}>Home</a>
                    </li>
                    <li>
                        <a href="#aboutUs" className={`${isOpen ? "left-[-100%]" : "left-0"} active:text-yellow-500`} onClick={toggleNavbar}>About</a>
                    </li>
                    <li>
                        <a href="#popular" className={`${isOpen ? "left-[-100%]" : "left-0"} active:text-yellow-500`} onClick={toggleNavbar}>Popular</a>
                    </li>
                    <li>
                        <a href="#review" className={`${isOpen ? "left-[-100%]" : "left-0"} active:text-yellow-500`} onClick={toggleNavbar}>Review</a>
                    </li>
                </ul>
                 {/* leafs */}
                <div className=' absolute top-0 -left-8 rotate-180 opacity-90 lg:hidden'>
                    <img src={leaf1} alt='leaf-image' className=' w-32'></img>
                </div>
                <div className=' absolute bottom-0 -right-8 -rotate-90 opacity-90 lg:hidden'>
                    <img src={leaf2} alt='leaf-image' className=' w-32'></img>
                </div>
            </div>
            {/* hamburger */}
            <div className='text-xl sm:text-3xl cursor-pointer z-50 lg:hidden'  onClick={toggleNavbar} >
                <i className={`${isOpen?"ri-close-large-line":"ri-menu-fill"}`}></i>
            </div>
        </nav>
    </header>
  )
}

export default Navber;