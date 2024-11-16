import React, { useEffect, useState } from 'react'

const ScrollToTop: React.FC = () => {
   
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
  
        <>
      {isVisible && (
        <button
          onClick={scrollToTop}
         className="fixed right-4 bottom-5 bg-yellow-500 shadow-sm inline-block px-3 py-1 md:px-4 md:py-2 rounded-xl text-lg z-50 
      hover:-translate-y-1 duration-300"
        >
         <i className="ri-arrow-up-line"></i>
        </button>
      )}
    </>
      
    

  )
}

export default ScrollToTop
