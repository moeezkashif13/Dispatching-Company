import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Head from "next/head";
import Link from "next/link";


const ourServices = [


    {image:'https://www.skydispatch.net/wp-content/uploads/2022/01/Screenshot-2022-01-18-211227-1.jpg',heading:'ADVANCE BOOKING',paragraph:"We do advance booking so you don't have to wait after delivering the load."},


    {image:'https://www.skydispatch.net/wp-content/uploads/2022/01/Screenshot-2022-01-18-211017.jpg',heading:'HIGHEST PAY POSSIBLE',paragraph:'Rate negotiation ensures you receive the highest pay possible.'},



    {image:'https://www.skydispatch.net/wp-content/uploads/2022/01/Screenshot-2022-01-18-224251.jpg',heading:'BACK-OFFICE SUPPORT',paragraph:'Invoicing and back-office support included 24/7 available.'},



    {image:'https://www.skydispatch.net/wp-content/uploads/2022/01/Screenshot-2022-01-18-224348-1.jpg',heading:'CREDIT CHECKS ON BROKERS& SHIPPERS',paragraph:'We will always have look on credits checks on brokers and shippers'},



    {image:'https://www.skydispatch.net/wp-content/uploads/2022/01/Screenshot-2022-01-18-224632-1.jpg',heading:"YOU'RE NOT ON YOUR OWN",paragraph:"Assistance available for all driving situations, we're here for you."},



    {image:'https://www.skydispatch.net/wp-content/uploads/2022/01/Screenshot-2022-01-18-224926-1.jpg',heading:'FASTEST PAY POSSIBLE',paragraph:'Fatoring with RTIS Financial or the company of your coice'},



]


export default function Services(){


    return(

        <>

<Head>
    <title>Services - Sahhmallllc</title>
</Head>

        <div>

<div className=" relative bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(https://716help.com/wp-content/uploads/2017/11/Semi-Truck-Blind-Spots.jpg)`}}>
                


                <div className="text-white px-commonPadding  xs:px-mobileCommonPadding pb-20"  style={{backgroundColor:`rgba(8, 47, 109,0.9)`}}>
                
                
                <Navbar/>
                
                
                
                
                <p className="text-7xl xs:text-5xl font-bold mt-32 ">SERVICES</p>
                
                
                    </div>
                
                    </div>


{/*  */}

<div className="bg-[#ECECEC] px-commonPadding xs:px-mobileCommonPadding py-24">


<div className="font-bold">
    <p className="text-sm">WE OFFER MANY SERIVCES</p>
    <p className="text-4xl mt-3 mb-8">OUR SERVICES</p>
</div>


        <div className="flex flex-wrap 2xl:gap-x-8 justify-between gap-y-16">

{ourServices.map((eachService)=>{
    return <div className="w-[349px] xs:w-full">

                <div className="w-full h-[386px]" >

                    <img src={eachService.image} className="w-full h-full object-cover object-center" alt="" />

                </div>

                <p className="font-bold text-2xl mt-5">{eachService.heading}</p>
<p className="mt-2 mb-5 text-lg">{eachService.paragraph}</p>

    <Link href="/contact" className="bg-[#4169e1] px-8 py-2 inline font-semibold text-white text-lg">
    Click Here
    </Link>


    </div>
})}


        </div>





</div>

{/*  */}


    <div className="h-[550px] xs:h-[400px] relative border-b-4 flex flex-col items-center justify-center  font-semibold bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(https://www.skydispatch.net/wp-content/uploads/2022/01/slide6.jpg)`}}>

<div className="absolute w-full h-full top-0 left-0 " style={{backgroundColor:'rgba(8, 47, 109,0.8)'}}></div>

<div className=" text-center z-20">

    <p style={{color:'rgba(255, 255, 255, 0.65)'}}>SAVE MONEY AND TIME</p>

<p className="text-white text-[2.5rem] xs:text-2xl  xs:w-full xs:px-6 mx-auto w-[80%] leading-[50px] font-extrabold mt-5 mb-10 text-center">BOOK NOW AND GET OUR ANY SERVICE</p>


<Link href="/contact" className="cursor-pointer px-8 py-3 bg-white hover:bg-[#2C37AE] hover:text-white font-bold transition-all">Call us Today</Link>

</div>


    </div>




{/*  */}

<Footer/>

{/*  */}





        </div>
    

    </>
    
    
    )


}