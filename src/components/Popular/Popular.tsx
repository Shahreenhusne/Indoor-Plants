
import Plant1 from "../../assets/img/cart-1.png"
import Plant2 from "../../assets/img/cart-2.png"
import Plant3 from "../../assets/img/cart-3.png"
import Plant4 from "../../assets/img/cart-4.png"

const Popular = () => {
  return (
    <section id='popular' className='bg-green-900 p-10 md:p-20'>
           {/* part1 */}
           <div className='flex flex-col items-center gap-3 text-center pb-10 md:pb-20'>
                <h2 className=' font-lobster text-yellow-500'>Your Choice Plant</h2>
                <p className=' max-w-2xl'>Follow instruction for more</p>
           </div>
           <div className='container w-full mt-20 grid grid-cols-1 gap-x-8 gap-y-36 md:grid-cols-2  xl:grid-cols-4'>
             {/* card1 */}
             <div className='card bg-green-950 p-10  pt-24 rounded-md relative'>
                {/* card extra class for hover effect */}
                <img src={Plant1} alt='Plant1' className=' w-56  absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500'></img>
                <p>Nephrolepis exaltata</p>
                <h3>Boston Fern</h3>
                <div className='text-yellow-500 text-sm py-3'>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-half-fill'></i>
                    <i className='ri-star-line text-gray-400'></i>
                    <i className='ri-star-line text-gray-400'></i>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='text-xl'>$5</p>
                    <button className='bg-yellow-500 px-2 py-1 rounded-md text-xl'>
                        <i className='ri-shopping-cart-fill'></i>
                    </button>
                </div>
             </div>
            {/* card2 */}
            <div className='card bg-green-950 p-10  pt-24 rounded-md relative'>
                {/* card extra class for hover effect */}
                <img src={Plant2} alt='Plant1' className=' w-56  absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500'></img>
                <p>Ficus elasica</p>
                <h3>Rubber Plant</h3>
                <div className='text-yellow-500 text-sm py-3'>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-half-fill'></i>
                    <i className='ri-star-line text-gray-400'></i>
                    <i className='ri-star-line text-gray-400'></i>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='text-xl'>$5</p>
                    <button className='bg-yellow-500 px-2 py-1 rounded-md text-xl'>
                        <i className='ri-shopping-cart-fill'></i>
                    </button>
                </div>
            </div>
            {/* card3 */}
            <div className='card bg-green-950 p-10  pt-24 rounded-md relative'>
                {/* card extra class for hover effect */}
                <img src={Plant3} alt='Plant1' className=' w-56  absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500'></img>
                <p>Spathiphyllum walliisii</p>
                <h3>Peace Lilly</h3>
                <div className='text-yellow-500 text-sm py-3'>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-half-fill'></i>
                    <i className='ri-star-line text-gray-400'></i>
                    <i className='ri-star-line text-gray-400'></i>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='text-xl'>$5</p>
                    <button className='bg-yellow-500 px-2 py-1 rounded-md text-xl'>
                        <i className='ri-shopping-cart-fill'></i>
                    </button>
                </div>
            </div>
            {/* card4 */}
            <div className='card bg-green-950 p-10  pt-24 rounded-md relative'>
                {/* card extra class for hover effect */}
                <img src={Plant4} alt='Plant1' className=' w-56  absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500'></img>
                <p>Adenium obesum</p>
                <h3>Desert Rose</h3>
                <div className='text-yellow-500 text-sm py-3'>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-half-fill'></i>
                    <i className='ri-star-line text-gray-400'></i>
                    <i className='ri-star-line text-gray-400'></i>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='text-xl'>$5</p>
                    <button className='bg-yellow-500 px-2 py-1 rounded-md text-xl'>
                        <i className='ri-shopping-cart-fill'></i>
                    </button>
                </div>
            </div>
           </div>
    </section>
  )
}

export default Popular