
import homePlant from "../../assets/img/home.png" 

const Home = () => {
  return (
    <section id="home" className='relative'>
        <div className=' container'>
            {/* blob1 */}
            <div className=' w-64 h-64 bg-green-900 rounded-full blur-2xl -z-10 opacity-40 absolute top-1/2 left-1/2 transform -translate-x-1/2
            -translate-y-1/2 '>
            </div>
            {/* blob2 */}
              <div className=' w-64 h-64 bg-green-900 rounded-full blur-2xl -z-10 opacity-40 absolute bottom-0 right-0'>
            </div>
            {/* main content */}
            <div className=' flex flex-col items-center gap-5 lg:flex-row'>
                {/* content */}
                <div className='w-full space-y-5 lg:w-1/2'>
                    {/* space-y-5 give space to y axis for all the content */}
                    <h1>
                        <span className='text-yellow-500'>Plants</span> make 
                        <br/>
                         positive
                        <span className='text-yellow-500'> Impact</span> on 
                        <br/>
                         your 
                        <span className='text-yellow-500'> Health & Environment</span>
                    </h1>
                    {/* buttons */}
                    <div className='flex flex-col sm:flex-row gap-2 md:gap-4 lg:pt-5 xl:pt-10' id='home-btn'>
                        <button className=' bg-yellow-500'>
                            <span>Shop Now</span>
                            <i className="ri-leaf-line"></i>
                        </button>
                        <button>
                            <span>Know More</span>
                            <i className="ri-leaf-line"></i>
                        </button>
                    </div>
                    {/* social networks */}
                    <div className=' flex items-center gap-5 text-lg lg:pt-10'>
                            <i className="ri-facebook-line text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer text-base"></i>
                            <i className="ri-twitter-line text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer text-base"></i>
                            <i className="ri-instagram-line text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer text-base"></i>
                            <i className="ri-linkedin-line text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer text-base"></i>
                    </div>
                </div>
                {/* image */}
                <div className=' w-full relative lg:w-1/2'>
                    <img src={homePlant} alt='home plant image'></img>
                    {/* leaf */}
                    <div className=' absolute -top-0 right-0 opacity-30 animate-movingY'><i className='ri-leaf-line sm:text-4xl text-6xl text-yellow-300'></i></div>
                    {/* flower */}
                    <div className=' absolute bottom-0 left-0 opacity-30 animate-rotating'><i className='ri-flower-line  sm:text-4xl text-6xl text-yellow-300'></i></div>
                    {/* plant */}
                    <div className=' absolute -top-0 -left-5 opacity-30 lg:block mt-5 animate-scalingUp'><i className='ri-plant-line  sm:text-4xl text-6xl text-yellow-300'></i></div>
                </div>
            </div>
        </div>
    </section>
  )

}

export default Home

// 39:35 