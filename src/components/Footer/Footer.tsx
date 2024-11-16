

const Footer = () => {
  return (
    <div className="bg-yellow-100 text-green-950 pt-20 pb-10 md:pt-28 relative">
        {/* newsletter */}
            <div className=" container text-white absolute top-0 right-0 left-0 -translate-y-1/2">
                <div className="bg-green-900 px-10 pt-5 pb-10 space-y-5 rounded-md">
                    <h3  className="text-xl md:text-2xl xl:text-3xl font-bold font-lobster">
                        <span className='text-yellow-500 pr-2'>Subscribe</span>
                         to  our newsletter Subscribe 
                    </h3>
                    <div className=" flex flex-col md:flex-row gap-2">
                        <input type="email" placeholder='Your Email Address' 
                        className=" w-full px-5 py-3 text-green-900 rounded-md outline-none"></input>
                        <button className="flex items-center justify-center gap-1 bg-green-950 px-5 py-3 rounded-md hover:opacity-90 duration-300">
                            <span className="font-lobster">Subscribe</span>
                            <i className='ri-send-plane-2-fill'></i>
                        </button>
                    </div>
                </div>
            </div>
        {/* social icons */}
        <div className=" container mt-16 mb-10">
            <div className=" border-b border-green-500 relative">
                <div className=" absolute top-0 left-0 right-0 transform -translate-y-1/2 max-w-36 mx-auto">
                    <div className=" bg-yellow-100 text-lg text-center space-x-2">
                        <i className="ri-facebook-fill hover:text-yellow-500 duration-300 cursor-pointer text-base"></i>
                        <i className="ri-twitter-x-line hover:text-yellow-500 duration-300 cursor-pointer text-base"></i>
                        <i className="ri-instagram-fill hover:text-yellow-500 duration-300 cursor-pointer text-base"></i>
                        <i className="ri-linkedin-fill hover:text-yellow-500 duration-300 cursor-pointer text-base"></i>
                    </div>
                </div>
            </div>
        </div>
        {/* content */}
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-4 text-center md:text-start">
            {/* item 1 */}
            <div>
                <div className="text-4xl text-green-700 inline-block text-center">
                    <i className="ri-leaf-fill"></i>
                    <p className="font-lobster text-xl sm:text-2xl">Indoor Plants</p>
                </div>
            </div>
            {/* item2 */}
            <div>
                <p className="mb-5 font-bold text-xl">Quick Links</p>
                <div className="flex flex-col gap-1">
                  <a href="#">Plants</a>
                  <a href="#">Flower</a>
                  <a href="#">Seeds</a>
                  <a href="#">Gardening</a>
                  <a href="#">Shipping</a>      
                </div>
            </div>
            {/* item3 */}
            <div>
                <p className="mb-5 font-bold text-xl">Popular Links</p>
                <div className="flex flex-col gap-1">
                  <a href="#">Tree Planting</a>
                  <a href="#">Grass Cutting</a>
                  <a href="#">Weeds Control</a>
                  <a href="#">Project</a>
                  
                </div>
            </div>
            {/* item4 */}
            <div>
                <p className="mb-5 font-bold text-xl">Contact Us</p>
                <div className="flex flex-col gap-1">
                  <a href="#">01777654O334</a>
                  <a href="#">abcd@gmail.com</a>
                  <a href="#">1234,West Baridhara Dhaka</a>
                  
                </div>
            </div>
        </div>
        {/* copyright */}
        <div className=" container">
            <p className="text-center mt-10 opacity-50">Copyright &copy; 2024 Lightcode. All rights reserverd</p>
        </div>
    </div>
  )
}

export default Footer