import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import Link from 'next/link'
import {FaFacebookF} from 'react-icons/fa'

import Image from 'next/image'
import Head from 'next/head'



const ourServices = [


  {image:'https://www.skydispatch.net/wp-content/uploads/2022/01/Capture-6.png',heading:'CONTRACT FREE',paragraph:"We don't blind our carriers, so they're free to leave us for any reason."},


  {image:'https://www.skydispatch.net/wp-content/uploads/2022/01/Screenshot-2022-01-18-211017.jpg',heading:'HIGHEST PAY POSSIBLE',paragraph:'Rates negotiation ensures you receive the highest pay possible'},


  {image:'https://www.skydispatch.net/wp-content/uploads/2022/01/03.jpg',heading:'FASTEST PAY POSSIBLE',paragraph:'Factoring with RTS Financial or the company of your choice.'},


]


const testimonials = [

  {image:'https://www.skydispatch.net/wp-content/uploads/2023/03/black-man-truck-driver-in-the-cab-of-his-commercia-2022-03-04-02-10-50-utc-scaled-1-1024x683.jpg',paragraph:'I can truly say, this team of dispatchers dose their job when it comes to finding loads. I’m constantly booked up until my 34 off duty HOS. They communicate every detail on every level when it comes to the broker and load.',name:'DENNIS BURKE'},



  {image:'https://www.skydispatch.net/wp-content/uploads/2023/03/img_0547-814b2cf8add31d570c1085e969ac2a281d81f38f-1024x767.jpeg',paragraph:'Very professional and attentive to my business needs. Always provide me with loads and work with me to ensure that I’m well taken care of.',name:'CAROL EBONY'},


  {image:'https://www.skydispatch.net/wp-content/uploads/2023/03/truck-driver-lifestyle-guide.jpg',paragraph:'Nice service, all the team members are always there for me. I can always call then when i need assitance, and they always help me. Great job.',name:'TYLER GARZA'},


  {image:'https://www.skydispatch.net/wp-content/uploads/2023/03/dot-driver-2308-1024x779.webp',paragraph:'The best truck dispatcher in USA they solved all my problems, and the attention was excellent.',name:'ROSE GABRIELLE'},


]





export default function Home() {
  return (
<>

<Head>
    <title>Homepage - Sahhmallllc</title>
    
</Head>


<div>



      <div className=" relative bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(https://716help.com/wp-content/uploads/2017/11/Semi-Truck-Blind-Spots.jpg)`}}>


<div className="text-white px-commonPadding xs:px-mobileCommonPadding"  style={{backgroundColor:`rgba(8, 47, 109,0.9)`}}>
{/* NAVBAR */}

<Navbar/>

{/* NAVBAR */}

    <div className="w-2/3 xs:w-full mt-32 xs:mt-16">

<div className='font-bold'>
      <p className='text-2xl xs:text-lg'>WELCOME TO SAHMALLLLC DISPATCH</p>

    <h1 className='text-6xl  leading-[70px] xs:text-4xl mt-7 mb-3 xs:my-4 '>LET'S TOUCH THE SAHMALLLLC</h1>
    </div>

    <p className='leading-6 font-semibold 2xl:w-2/3 2xl:text-2xl xs:text-[1rem]'>Sahmallllc Dispatch LLC, based in Sheridan Wyoming, specializes in providing excellent dispatch services to Operator owners/ Carriers all over the USA. We offer an experienced and specialized team who are working effectively to improve the gross incomes of our clients We aim to provide our clients with the best loads and negotiate with brokers to get the best rates.</p>

<div className='mt-10 pb-40 xs:pb-20'>
    <Link href="/contact" className='px-9 py-2 transition-all text-lg  bg-[#202F87] hover:bg-[#1229DB] '>Book Now</Link>
    </div>


    </div>

    </div>


      </div>





  <div className='bg-cover bg-center bg-no-repeat  text-white' style={{backgroundImage:`url(https://716help.com/wp-content/uploads/2017/11/Semi-Truck-Blind-Spots.jpg)`}}>


<div className='px-commonPadding xs:px-mobileCommonPadding pt-16 pb-32' style={{backgroundColor:'rgba(0,0,0,0.7)'}}>

<h1 className='text-5xl xs:text-4xl font-bold mb-12 xs:mb-6'>OUR SERVICES </h1>


<div className='flex justify-between xs:flex-col xs:gap-y-16  max-w-commonMaxWidth 1xl:mx-auto '>

  {ourServices.map((eachService)=>{
    return   <div className='w-[349px] xs:w-full'>

    <div className='h-[420px]   '>
      <img   className='w-full h-full object-cover object-center ' src={eachService.image}  />
    </div>

<p className='text-3xl font-semibold mt-6 xs:mt-4 xs:mb-2'>{eachService.heading}</p>

<p className='text-[1rem] xs:text-sm xs:pr-0 mb-8 pr-20'>{eachService.paragraph}</p>


<Link className='bg-[#1229DB] px-10  font-semibold py-2.5 ' href='/services'>Click Here</Link>


</div>
  })}




</div>


</div>

  </div>




  <div className='bg-cover bg-center bg-no-repeat  text-white' style={{backgroundImage:`url(https://www.skydispatch.net/wp-content/uploads/2022/01/01.jpg)`}}>


<div className='px-commonPadding xs:px-mobileCommonPadding  pt-16 pb-32 xs:pb-16' style={{backgroundColor:'rgba(8, 47, 109,0.85)'}}>


    <h1 className=' text-5xl font-bold mb-14'>Testimonials</h1>


<div className='flex flex-wrap gap-10 xs:flex-col max-w-commonMaxWidth 1xl:mx-auto  '>
  {testimonials.map((eachTestimonial,index)=>{
    return <div className={`flex  xs:flex-col self-start  w-[580px]  xs:w-full gap-x-4  ${index%2!=0?'mt-28 xs:mt-0':''}  `} >

          <div className='min-w-[200px]  h-[160px] xs:h-[250px]'>
            <img src={eachTestimonial.image} className='w-full h-full object-cover object-center'   />
          </div>

          <div className='flex flex-col justify-evenly xs:text-center'>
            <p className='xs:my-4'>{eachTestimonial.paragraph}</p>
            
            
            <p>{eachTestimonial.name}</p>


          </div>


    </div>
  })}

</div>



</div>



</div>





<div className='bg-cover bg-center bg-no-repeat  relative text-white flex flex-col justify-center items-center h-[600px] xs:h-[400px]' style={{backgroundImage:`url(https://www.skydispatch.net/wp-content/uploads/2021/11/02-1.jpg)`}}>

<div className='z-20 absolute top-0 left-0 w-full h-full' style={{backgroundColor:'rgba(0,0,0,0.85)'}}></div>

<div className=' z-30 flex flex-col items-center'>
<div className=' font-bold text-center'>
  <p className='text-xl'>BEST DISPATCH SERVICES</p>
<p className='text-4xl mt-4 mb-10'>PREMIUM-QUALITY SERVICES</p>
</div>

<div >
    <Link href="/contact" className='px-9 py-2 transition-all text-lg  bg-[#202F87] hover:bg-[#1229DB] '>Email us</Link>
    </div>
    </div>

</div>

<Footer/>




</div>

</>



  )
}
