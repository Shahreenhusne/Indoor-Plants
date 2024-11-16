// import Swiper core and required modules
import { Autoplay, Pagination,  A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// assets
import review1 from "../../assets/img/review-1.jpg"
import review2 from "../../assets/img/review-2.jpg"
import review3 from "../../assets/img/review-3.jpg"
import review4 from "../../assets/img/review-4.jpg"
import leaf from "../../assets/img/leaf-3.png"


const Review = () => {
  return (
      <section id="review" className="p-10 md:p-20 mb-20 md:mb-28 relative overflow-hidden">
           {/* leaf */}
           <div className=' absolute -top-4 -left-14 opacity-65 -rotate-45'>
            <img src={leaf} alt='leaf-aboutUs' className=' w-40 md:w-52 xl:w-64'></img>

        </div>
             {/* part1 */}
             <div className='flex flex-col items-center gap-3 text-center p-10 md:p-20'>
                <h2 className=' font-lobster text-yellow-500'>Customer Review</h2>
                <p className=' max-w-2xl'>Follow instruction for more</p>
           </div>
             {/* part2 */}
             <div className=" container">
                <div className="py-12">
                <Swiper
                       modules={[ Autoplay,Pagination,  A11y]}
                       autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                       spaceBetween={30}
                       slidesPerView={1}
                       pagination={{
                        clickable: true,
                        el: '.custom-pagination', // Assign a custom class for pagination
                      }}
                      breakpoints={{
                        640: {
                          slidesPerView: 1,
                         
                        },
                        768: {
                          slidesPerView: 2,
                         
                        },
                        1024: {
                          slidesPerView: 3,
                         
                        },
                      }}
                       onSwiper={(swiper) => console.log(swiper)}
                       onSlideChange={() => console.log('slide change')}
                       >
                       <SwiperSlide>
                            <div className=" flex flex-col items-center gap-5 bg-green-900 p-6 rounded-md">
                                {/* review text */}
                                    <p className=" font-lobster">
                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere et provident distinctio, deserunt itaque esse dignissimos cum sunt quibusdam amet voluptate necessitatibus omnis obcaecati est, nam excepturi blanditiis a possimus.
                                    </p>
                                {/* image */}
                                <div className="flex items-center">
                                    <img src={review1} alt="review1" className="w-12 h-12 rounded-full"></img>
                                    <div className="ml-2">
                                      <p className="text-yellow-500 uppercase">Elisha Choche</p>
                                      <p>Designer</p>
                                     </div>
                                    <i className="ri-double-quotes-r text-4xl ml-auto"></i>
                                </div>
                                
                             </div>
                       </SwiperSlide>
                       {/* slide2 */}
                       <SwiperSlide>
                            <div className=" flex flex-col items-center gap-5 bg-green-900 p-6 rounded-md">
                                {/* review text */}
                                    <p className=" font-lobster">
                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere et provident distinctio, deserunt itaque esse dignissimos cum sunt quibusdam amet voluptate necessitatibus omnis obcaecati est, nam excepturi blanditiis a possimus.
                                    </p>
                                {/* image */}
                                <div className="flex items-center">
                                    <img src={review2} alt="review1" className="w-12 h-12 rounded-full"></img>
                                    <div className="ml-2">
                                      <p className="text-yellow-500 uppercase">Jorge Robat</p>
                                      <p>Designer</p>
                                     </div>
                                    <i className="ri-double-quotes-r text-4xl ml-auto"></i>
                                </div>
                                
                             </div>
                       </SwiperSlide>
                       {/* slide3 */}
                       <SwiperSlide>
                            <div className=" flex flex-col items-center gap-5 bg-green-900 p-6 rounded-md">
                                {/* review text */}
                                    <p className=" font-lobster">
                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere et provident distinctio, deserunt itaque esse dignissimos cum sunt quibusdam amet voluptate necessitatibus omnis obcaecati est, nam excepturi blanditiis a possimus.
                                    </p>
                                {/* image */}
                                <div className="flex items-center">
                                    <img src={review3} alt="review3" className="w-12 h-12 rounded-full"></img>
                                    <div className="ml-2">
                                      <p className="text-yellow-500 uppercase">Rahat Muhushe</p>
                                      <p>Designer</p>
                                     </div>
                                    <i className="ri-double-quotes-r text-4xl ml-auto"></i>
                                </div>
                                
                             </div>
                       </SwiperSlide>
                       {/* slide4 */}
                       <SwiperSlide>
                            <div className=" flex flex-col items-center gap-5 bg-green-900 p-6 rounded-md">
                                {/* review text */}
                                    <p className=" font-lobster">
                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere et provident distinctio, deserunt itaque esse dignissimos cum sunt quibusdam amet voluptate necessitatibus omnis obcaecati est, nam excepturi blanditiis a possimus.
                                    </p>
                                {/* image */}
                                <div className="flex items-center">
                                    <img src={review4} alt="review1" className="w-12 h-12 rounded-full"></img>
                                    <div className="ml-2">
                                      <p className="text-yellow-500 uppercase">Rose Albert </p>
                                      <p>Designer</p>
                                     </div>
                                    <i className="ri-double-quotes-r text-4xl ml-auto"></i>
                                </div>
                                
                             </div>
                       </SwiperSlide>
                       {/* slide5 */}
                       <SwiperSlide>
                            <div className=" flex flex-col items-center gap-5 bg-green-900 p-6 rounded-md">
                                {/* review text */}
                                    <p className=" font-lobster">
                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere et provident distinctio, deserunt itaque esse dignissimos cum sunt quibusdam amet voluptate necessitatibus omnis obcaecati est, nam excepturi blanditiis a possimus.
                                    </p>
                                {/* image */}
                                <div className="flex items-center">
                                    <img src={review2} alt="review1" className="w-12 h-12 rounded-full"></img>
                                    <div className="ml-2">
                                      <p className="text-yellow-500 uppercase">Jorge Robat</p>
                                      <p>Designer</p>
                                     </div>
                                    <i className="ri-double-quotes-r text-4xl ml-auto"></i>
                                </div>
                                
                             </div>
                       </SwiperSlide>
                       {/* slide6 */}
                       <SwiperSlide>
                            <div className=" flex flex-col items-center gap-5 bg-green-900 p-6 rounded-md">
                                {/* review text */}
                                    <p className=" font-lobster">
                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere et provident distinctio, deserunt itaque esse dignissimos cum sunt quibusdam amet voluptate necessitatibus omnis obcaecati est, nam excepturi blanditiis a possimus.
                                    </p>
                                {/* image */}
                                <div className="flex items-center">
                                    <img src={review1} alt="review1" className="w-12 h-12 rounded-full"></img>
                                    <div className="ml-2">
                                      <p className="text-yellow-500 uppercase">Elisha Choche</p>
                                      <p>Designer</p>
                                     </div>
                                    <i className="ri-double-quotes-r text-4xl ml-auto"></i>
                                </div>
                                
                             </div>
                       </SwiperSlide>
                       <div className="custom-pagination mt-4">
                        {/* this is to drag the pagination sign  below the slides */}
                       </div>
                </Swiper>
                </div>
             </div>

      </section>
  )
}

export default Review