
import plant1 from "../../assets/img/plant-1.png"
import plant2 from "../../assets/img/plant-2.png"
import leaf from "../../assets/img/leaf-3.png"
import { useEffect } from "react";
import ScrollReveal from  "scrollreveal";

const About: React.FC = () => {

    useEffect(() => {
        // Initialize ScrollReveal
        const sr = ScrollReveal({
          distance: '400px',
          duration: 2500,
          delay: 300,
          reset: true, // Animation will repeat on scroll
        });
    
        // Target elements for reveal
        sr.reveal('.title', { origin: 'top', interval: 300 });
        sr.reveal('.image1', { origin: 'left', delay: 1000, interval: 400 }); 
        sr.reveal('.image1-content', { origin: 'left',delay: 1000, interval: 500 }); 
        sr.reveal('.image2', { origin: 'right', delay: 1000, interval: 600 }); 
        sr.reveal('.image2-content', { origin: 'right',delay: 1000, interval: 700 }); 
      }, []);


  return (
    <section id='aboutUs' className=' relative overflow-hidden mb-20 md:mb-28'>
        {/* leaf */}
        <div className=' absolute -top-8 -right-14 opacity-65'>
            <img src={leaf} alt='leaf-aboutUs' className=' w-40 md:w-52 xl:w-64'></img>

        </div>
        {/* part1 */}
        <div className='title flex flex-col items-center gap-3 text-center m-10 md:m-20 '>
            <h2 className=' font-lobster text-yellow-500'>About Us</h2>
            <p className=' max-w-2xl'>Follow instruction for more</p>
        </div>
        {/* part2 */}
        <div className=' container space-y-10 xl:space-y-0'>
            {/* item1 */}
            <div className='image1 flex flex-col lg:flex-row items-center gap-5'>
                {/* image */}
               <div className='w-full lg:w-1/2'>
                    <img src={plant1} alt='about-us-plant-01' className='w-full sm:w-2/3 lg:w-full  mx-auto'></img>
               </div>
               {/* content */}
                <div className='image1-content w-full lg:w-1/2'>
                    <div className='space-y-5'>
                        <h3>
                            Make your <span className='text-yellow-500'>organic</span>
                            <br/>
                            garden
                        </h3>
                        <p className='text-slate-300 font-lobster'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae sed consequuntur enim officia! Blanditiis assumenda amet, libero animi harum voluptatem inventore ea numquam hic dolorum nam ipsum, voluptas perspiciatis?</p>
                    </div>
                </div>
            </div>

            {/* item2 */}
            <div className='image2 flex flex-col lg:flex-row-reverse items-center gap-5'>
                {/* image */}
               <div className='w-full lg:w-1/2'>
                    <img src={plant2} alt='about-us-plant-01' className='w-full sm:w-2/3 lg:w-full  mx-auto'></img>
               </div>
               {/* content */}
                <div className='image2-content w-full lg:w-1/2'>
                    <div className='space-y-5'>
                        <h3>
                           Come with us <span className='text-yellow-500'>to grow up</span>
                            <br/>
                            your plants
                        </h3>
                        <p className='text-slate-300 font-lobster'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae sed consequuntur enim officia! Blanditiis assumenda amet, libero animi harum voluptatem inventore ea numquam hic dolorum nam ipsum, voluptas perspiciatis?</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About