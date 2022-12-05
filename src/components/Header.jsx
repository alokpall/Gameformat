
import React from 'react'
import img from '../image/135.webp'
import img1 from '../image/133.webp'
import img2 from '../image/134.webp'
import img3 from '../image/132.webp'
import img4 from '../image/136.webp';


const Header = () => {
  return (
    <div className="Container flex float-right mx-auto md:flex-row flex-col  object-fill float-left float-right shadow-3xl bg-white rounded-2xl md:flex">
      <div clasName="left py-2 border border-slate-300">

        <div className='left border border-slate-300 ml-4 mt-2  md:flex-row flex-col'>
          <div>

            <img src={img} alt="" className="w-64  ml-auto  mr-auto  mt-6  leading-7 rounded-1 drop-shadow-lg"></img>

          </div>

          <div>
            <p className='text-l font-medium ml-10 text-slate-600 '>
              ENTRY TICKET

            </p>
            <h3 className='text-l font-bold ml-10 '>
              Dubai:Burj Khalifa Level 124 and 125
              <div>Entry Ticket</div>
              <div>

                <span class="fa fa-star checked text-yellow-300 mt-8 "></span>
                <span class="fa fa-star checked text-yellow-300 mt-8"></span>
                <span class="fa fa-star checked text-yellow-300 mt-8"></span>
                <span class="fa fa-star checked text-yellow-300 mt-8"></span>
                <span class="fa fa-star checked text-yellow-100"></span>
                <text class="text-l font-semibold ml-2">4.5</text>
                <text class="text-sm font-medium mt-0.5">(36,938 <text1 class="text-xs font-medium">reviews</text1>)</text>

              </div>
              <h2 className='text-l tex-sm flex font-bold'>
                From AED 149<text class=""></text><span class="text-sm font-semibold mt-0.5 tracking-wide ml-1">per person</span>
              </h2>



            </h3>
          </div>



        </div>
        <div className='left1 border border-slate-200 ml-4 mt-2 border-outline'>
          <img src={img1} alt="" className="w-64  ml-auto mr-auto mt-6 leading-7 rounded-l drop-shadow-lg"></img>
          <p className='text-l font-medium text-slate-600 ml-10'>
            ADVENTURE
          </p>
          <h3 className='text-l font-bold ml-10'>
            Dubai:Desert Safari,Quad Bike,
            <div>Camel Ride & All Khayma Camp</div>


            <div>
              <span class="fa fa-star checked text-yellow-300 mt-3 "></span>
              <span class="fa fa-star checked text-yellow-300 mt-3 "></span>
              <span class="fa fa-star checked text-yellow-300 mt-3 "></span>
              <span class="fa fa-star checked text-yellow-300 mt-3 "></span>
              <span class="fa fa-star checked text-yellow-300"></span>
              <text class="text-l font-semibold ml-2">4.9</text>
              <text class="text-sm font-medium mt-0.5">(8,923 <text1 class="text-xs font-medium">reviews</text1>)</text>

            </div>
            <span class="line-through font-medium">
              From AED 198.08
            </span>
            <h2 className='text-l flex font-bold text-red-600'>
              From AED 5,666<text class="text-sm font-semibold mt-0.5 tracking-wide ml-1 ">per person</text>
            </h2>
          </h3>





        </div>
        <div className='left2 border border-slate-200 ml-4 mt-2'>
          <img src={img2} alt="" className="w-64 mr-auto ml-auto  mt-6  leading-7  rounded-l drop-shadow-lg  "></img>
          <p className='text-l font-medium ml-10 text-slate-600'>
            ENTRY TICKET
          </p>
          <h3 className='text-l font-bold ml-10'>
            Dubai:The View At The Palm
            <div>Observatory Entry Ticket</div>
            <div>
              <span class="fa fa-star checked text-yellow-300 mt-8 "></span>
              <span class="fa fa-star checked text-yellow-300 mt-8"></span>
              <span class="fa fa-star checked text-yellow-300 mt-8"></span>
              <span class="fa fa-star checked text-yellow-300 mt-8"></span>
              <span class="fa fa-star checked text-yellow-200"></span>
              <text class="text-l font-semibold ml-2">4.7</text>
              <text class="text-sm font-medium mt-0.5">(1,309 <text1 class="text-xs font-medium">reviews</text1>)</text>

            </div>
            <h2 className='text-l flex font-bold'>
              From AED 70<text class=""></text><span class="text-sm font-semibold mt-0.5 tracking-wide ml-1">per person</span>
            </h2>



          </h3>



        </div>
        <div className='left-3 border border-slate-200 ml-4 mt-2'>
          <img src={img3} alt="" className="w-64 mr-auto ml-auto mt-6  leading-7  rounded-l  "></img>
          <p className='text-l font-medium text-slate-600 ml-10'>
            WATER ACTIVITY
          </p>
          <h3 className='text-l font-bold ml-10'>
            DubaiMarina: Yacht Tour with
            <div>Breakfast or BBQ</div>


            <div>
              <span class="fa fa-star checked text-yellow-300 mt-3 "></span>
              <span class="fa fa-star checked text-yellow-300 mt-3 "></span>
              <span class="fa fa-star checked text-yellow-300 mt-3 "></span>
              <span class="fa fa-star checked text-yellow-300 mt-3 "></span>
              <span class="fa fa-star checked text-yellow-100"></span>
              <text class="text-l font-semibold ml-2">4.6</text>
              <text class="text-sm font-medium mt-0.5">(4,275 <text1 class="text-xs font-medium">reviews</text1>)</text>

            </div>
            <span class="line-through font-medium">
              From AED 198.08
            </span>
            <h2 className='text-l flex font-bold text-red-600'>
              From AED 147.91<text class="text-sm font-semibold mt-0.5 tracking-wide ml-1 ">per person</text>
            </h2>
          </h3>





        </div>
        <div className='left4 border border-slate-200 ml-4 mt-2'>
          <img src={img4} alt="" className="w-64 mr-auto ml-auto mt-6  leading-7  rounded-l  "></img>
          <p className='text-l font-medium ml-10 text-slate-600'>
            ENTRY TICKET
          </p>
          <h3 className='text-l font-bold ml-10'>
            Dubai:Aquarium & Burj Khalifa
            <div>Level 124 or125 Combo Ticket</div>
            <div>
              <span class="fa fa-star checked text-yellow-300 mt-8 "></span>
              <span class="fa fa-star checked text-yellow-300 mt-8"></span>
              <span class="fa fa-star checked text-yellow-300 mt-8"></span>
              <span class="fa fa-star checked text-yellow-300 mt-8"></span>
              <span class="fa fa-star checked text-yellow-100"></span>
              <text class="text-l font-semibold ml-2">4.5</text>
              <text class="text-sm font-medium mt-0.5">(12,591 <text1 class="text-xs font-medium">reviews</text1>)</text>

            </div>
            <h2 className='text-l flex font-bold'>
              From rupess 5,666<text class=""></text><span class="text-sm font-semibold mt-0.5 tracking-wide ml-1">per person</span>
            </h2>



          </h3>



        </div>
        </div>
        </div>
        
  ) 
}
      












export  default Header; 