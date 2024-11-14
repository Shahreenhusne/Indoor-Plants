import React from 'react'

const Service = () => {
  return (
    <div className='bg-white text-green-900 py-20'>
        <div className=' container w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {/* card1 */}
            <div className=' border border-green-900 p-5 cursor-pointer rounded-lg hover:shadow-2xl hover:-translate-y-1 duration-300 space-y-5'>
                <div className=' flex items-center gap-5'>
                    <i className='ri-truck-line text-3xl md:text-4xl xl:text-5xl'></i>
                    <p className='md:text-lg font-bold'>
                        Fast<br/>
                        Delivery
                    </p>
                </div>
                <p className=' font-lobster'>
                Your goods at your doorway in the shortest amount of time 
                </p>
            </div>
              {/* card2 */}
              <div className=' border border-green-900 p-5 cursor-pointer rounded-lg hover:shadow-2xl hover:-translate-y-1 duration-300 space-y-5'>
                <div className=' flex items-center gap-5'>
                    <i className='ri-plant-line text-3xl md:text-4xl xl:text-5xl'></i>
                    <p className='md:text-lg font-bold'>
                        Original<br/>
                        Plants
                    </p>
                </div>
                <p className=' font-lobster'>
                An enormous pile of several indoor and outdoor plant varieties  
                </p>
            </div>
              {/* card3 */}
              <div className=' border border-green-900 p-5 cursor-pointer rounded-lg hover:shadow-2xl hover:-translate-y-1 duration-300 space-y-5'>
                <div className=' flex items-center gap-5'>
                    <i className='ri-customer-service-line text-3xl md:text-4xl xl:text-5xl'></i>
                    <p className='md:text-lg font-bold'>
                        Customer<br/>
                        Service
                    </p>
                </div>
                <p className=' font-lobster'>
                24/7 customer service from skilled and knowledgeable experts 
                </p>
            </div>
              {/* card4 */}
              <div className=' border border-green-900 p-5 cursor-pointer rounded-lg hover:shadow-2xl hover:-translate-y-1 duration-300 space-y-5'>
                <div className=' flex items-center gap-5'>
                    <i className='ri-money-dollar-circle-line text-3xl md:text-4xl xl:text-5xl'></i>
                    <p className='md:text-lg font-bold'>
                        Affordable<br/>
                        Price
                    </p>
                </div>
                <p className=' font-lobster'>
                Good-quality, reasonably priced plants 
                </p>
            </div>
        </div>
    </div>
  )
}

export default Service