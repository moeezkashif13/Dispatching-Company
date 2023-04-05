import Footer from "@/Components/Footer";
import HeroSect from "@/Components/HeroSect";
import Navbar from "@/Components/Navbar";
import Head from "next/head";
import Link from "next/link";


const TruckTypes = [


    {image:'https://www.skydispatch.net/wp-content/uploads/2023/04/df5925dac1b7267280b4b434549608b0-1024x576.jpg',heading:'DRY VAN',paragraph:'Dry vans play a crucial role in safeguarding the goods of clients as they traverse the roads of the United States. To ensure optimal outcomes for clients, it is imperative to have an affable and trustworthy dry van dispatcher in your corner. At Logity Dispatch, we pride ourselves on our ability to cultivate strong and enduring relationships with drivers, a feat we have achieved through years of dedicated effort. With us, you can be sure that your clients’ cargo will be well taken care of, every step of the way.'},

{image:'https://www.skydispatch.net/wp-content/uploads/2023/04/refer.jpg',heading:'REFER',paragraph:'Behind the word mountains, far from the countries Vokalia and Conson antia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies'},


{image:'https://www.skydispatch.net/wp-content/uploads/2023/04/step-deck.jpg',heading:'STEP DECK',paragraph:'Dry vans play a crucial role in safeguarding the goods of clients as they traverse the roads of the United States. To ensure optimal outcomes for clients, it is imperative to have an affable and trustworthy dry van dispatcher in your corner. At Logity Dispatch, we pride ourselves on our ability to cultivate strong and enduring relationships with drivers, a feat we have achieved through years of dedicated effort. With us, you can be sure that your clients’ cargo will be well taken care of, every step of the way.'},



{image:'https://www.skydispatch.net/wp-content/uploads/2023/04/flatbed-trucks-1.png',heading:'FLATBED',paragraph:'Behind the word mountains, far from the countries Vokalia and Conson antia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies'},


{image:'https://www.skydispatch.net/wp-content/uploads/2023/04/74127-01-6290db4179e16073337532.jpg',heading:'POWER ONLY',paragraph:'Dry vans play a crucial role in safeguarding the goods of clients as they traverse the roads of the United States. To ensure optimal outcomes for clients, it is imperative to have an affable and trustworthy dry van dispatcher in your corner. At Logity Dispatch, we pride ourselves on our ability to cultivate strong and enduring relationships with drivers, a feat we have achieved through years of dedicated effort. With us, you can be sure that your clients’ cargo will be well taken care of, every step of the way.'},


{image:'https://www.skydispatch.net/wp-content/uploads/2023/04/flatbed.jpg',heading:'HOTSHOT',paragraph:'Behind the word mountains, far from the countries Vokalia and Conson antia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies'},


{image:'https://www.skydispatch.net/wp-content/uploads/2023/04/BOxc.jpg',heading:'BOX TRUCK',paragraph:'Dry vans play a crucial role in safeguarding the goods of clients as they traverse the roads of the United States. To ensure optimal outcomes for clients, it is imperative to have an affable and trustworthy dry van dispatcher in your corner. At Logity Dispatch, we pride ourselves on our ability to cultivate strong and enduring relationships with drivers, a feat we have achieved through years of dedicated effort. With us, you can be sure that your clients’ cargo will be well taken care of, every step of the way.'},




]



export default function TruckType(){


    return(

        <>

<Head>
    <title>Truck Type - Sahhmallllc</title>
</Head>

        <div>

<HeroSect heading="TRUCK TYPE"  />



{/*  */}



<div>

        <div className="px-commonPadding xs:px-[12px] flex xs:flex-col gap-x-12 py-16 bg-[#3B5A89] items-center">

<div className="w-1/2 xs:w-full">

        <div className="w-full h-[320px] xs:h-[180px] 2xl:h-[550px] rounded-3xl bg-cover bg-no-repeat bg-center" style={{backgroundImage:`url(https://www.skydispatch.net/wp-content/uploads/2023/04/Capture.png)`}}></div>



</div>



<div className="w-1/2 xs:w-full flex flex-col text-white pr-32 xs:pr-0">

            <p className="text-[2.8rem] xs:text-3xl xs:mt-5 xs:text-center font-bold leading-[55px] ">MORE THAN 50+ COMPANIES HAVE TRUSTED US FOR QUALITY</p>

        <p className="text-lg xs:text-sm xs:text-center xs:my-4 my-7">We are glad to be a part of countless success stories by providing the best quality software solutions to our clients.</p>

<div className="flex font-semibold xs:justify-center xs:text-sm">
    <Link href="/contact" className="px-10 xs:px-4 py-4 xs:py-2  bg-blue-500 border-2 cursor-pointer border-transparent">CONTACT US</Link>
    <Link href="/contact" className="px-10 xs:px-4 py-4 xs:py-2  border-blue-500 border-2 cursor-pointer rounded-lg ml-8 transition-all hover:bg-[#111E33] hover:border-none">LEARN MORE</Link>
</div>



</div>



        </div>



</div>



{/*  */}


        <div>


        {TruckTypes.map((eachTruckType,index)=>{

            return <div className={`flex xs:flex-col  h-[530px] xs:h-auto ${index%2==0?'':'flex-row-reverse '} `}>

                <div className="w-1/2 xs:w-full xs:h-[300px] "> 
                    <img src={eachTruckType.image} className="w-full h-full object-cover object-center " alt="" />
                </div>



                <div className=" w-1/2 xs:w-full bg-[#2164CB] flex flex-col justify-center px-32 xs:px-6 xs:py-8 text-white">
                    
                    
                <p>WE DISPATCH</p>

<p className="my-4 font-bold text-black text-4xl">{eachTruckType.heading}</p>

<p className="text-[1rem] leading-7">{eachTruckType.paragraph}</p>


<Link href="/contact" className="bg-blue-500 font-semibold self-start px-7 py-3 rounded-3xl cursor-pointer hover:bg-[#1F3AD3] transition-all mt-4">Read More</Link>

</div>



            </div>

        })}


        </div>




{/*  */}


<Footer/>


{/*  */}


        </div>

</>


    )


}