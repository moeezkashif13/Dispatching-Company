import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

import {ImBlocked, ImQuotesRight} from 'react-icons/im'

import {IoDocumentLockSharp} from 'react-icons/io5'

import {BiDollar,BiSupport} from 'react-icons/bi'
import {BsFillCreditCardFill, BsFuelPumpFill} from 'react-icons/bs'

import {TbBrandBooking} from 'react-icons/tb'
import { FaFileContract, FaTruckMoving } from "react-icons/fa";

import {FiTarget} from 'react-icons/fi'
import { useEffect } from "react";
import Head from "next/head";

const dispatchingServices = [


    {icon:<IoDocumentLockSharp/>,heading:'SPECIALIZED WITH NEW MC',paragraph:'Registering your MC with the FMCSA is mandatory for most US trucking companies. It improves safety, ensures legal compliance, and adds credibility to your business. Our experienced dispatchers can help make the registration process easier by assisting with obtaining your USDOT number, completing the application, scheduling the safety audit, and ensuring compliance. Contact us today to learn more about our services.'},


    {icon:<BsFillCreditCardFill/>,heading:'CREDIT CHECKS ON BROKER',paragraph:'At Sahmallllc Dispatch, we carefully select brokers to ensure they have good credit scores and a proven track record of timely payments. Our screening process helps customers avoid payment delays and other financial challenges in the transportation industry. We also provide ongoing financial planning and management services to help our customers succeed. Contact us to learn more about how we can help you get paid on time, every time.'},


    {icon:<TbBrandBooking/>,heading:'ADVANCE BOOKING',paragraph:'At Sahmallllc Dispatch LLC, we offer advance booking services to ensure timely and efficient transportation of goods. Planning ahead is key to providing the best possible service to our customers. Our simple booking process and wide range of vehicles make it easy to find the best solution for your transportation needs. We also provide real-time updates on the status of shipments and optimize our routes to reduce costs and environmental impact. Contact us today to learn more about our advance booking services.'},


    {icon:<FaTruckMoving/>,heading:'PARTIAL LOADS GAME',paragraph:"We specialize in providing high-quality partial loads games for box truck, hotshot, and dry van, tailored to our customers' needs. Our cutting-edge technology and data analysis tools help identify the most profitable loads, ensuring maximum efficiency and profitability. We also offer a range of value-added services, including access to industry partners, ongoing support and guidance, and weekly gross outstanding. Contact us today to learn how to increase your revenew."},

    
    {icon:<BsFuelPumpFill/>,heading:'FUEL CARD',paragraph:'We help transportation companies manage fuel expenses with our convenient and customizable fuel card services. Our partners offer branded and unbranded card options, discounts, and rewards. We work closely with customers to choose the best card and provide ongoing support. Our value-added services also include load planning and access to trusted industry partners. Contact us to streamline your operations and maximize profitability.'},


    {icon:<FaFileContract/>,heading:'CONTRACT FREE DISPATCHING',paragraph:'Sahmallllc Dispatch LLC offers high-quality dispatch services without restrictive contracts. We work closely with customers to understand their unique needs and provide support, guidance, and resources for success in the transportation industry. Our team is always available to help with load booking, back-end office support, and fuel card management. Contact us today to learn more about our services and grow your business.'},

    {icon:<FiTarget/>,heading:'FLEET MANAGMENT',paragraph:"As a dispatch company that specializes in the trucking industry, we understand that managing a fleet of trucks can be a challenging task"},



    {icon:<ImBlocked/>,heading:'NO FORCE DISPATCH',paragraph:'We Believe in no force dispatch'},





    {icon:<BiDollar/>,heading:'HIGHEST PAYING LOADS',paragraph:"At Sahmallllc Dispatch LLC, we prioritize finding the highest paying loads for our customers"},
    
    
    
    {icon:<BiSupport/>,heading:'24/7 BACK-END CUSTOMER SUPPORT',paragraph:"We provide exceptional back-end office support to our customers, helping them manage paperwork, invoicing, and other administrative tasks."},



]


const allFeatures = [

        {heading:'FLEET MANAGMENT',firstPara:"As a dispatch company that specializes in the trucking industry, we understand that managing a fleet of trucks can be a challenging task. That’s why we’re excited to offer fleet management services on our website that are specifically tailored to the needs of trucking companies.",secondPara:'Fleet management is the process of managing and optimizing a company’s fleet of vehicles, including trucks, vans, and other vehicles. Effective fleet management is essential for ensuring that your trucks are operating efficiently and safely, reducing costs, and maximizing profits.',thirdPara:'At Sahhmallllc Dispatch LLC we offer fleet management services that are customized for the trucking industry. We have years of experience working with trucking companies of all sizes, and we understand the specific challenges and needs of the industry.'},




        {heading:'NO FORCE DISPATCH',firstPara:'At our dispatch company, we are committed to providing customized services to our trucking company customers that meet their unique needs and preferences. As specialists in the dispatch industry, we use our extensive knowledge of the freight market to plan dispatches and offer the best possible rates to our customers. We believe that working according to our plans and taking our preferred loads is the best way to ensure efficient and cost-effective service.',secondPara:'However, we also understand that our customers have their own schedules and priorities, and we are always willing to work with them to accommodate their needs and preferences. We do not believe in force dispatching our customers, and we encourage them to communicate their requirements to us so that we can develop a customized plan that works for them. Our team of experienced dispatch specialists is always available to discuss our customers’ needs and requirements and to develop a plan that meets their unique needs.',thirdPara:'In summary, at our dispatch company, we provide a customized service that meets our customers’ needs and preferences while optimizing our routes, reducing empty miles, and maximizing our capacity utilization. We collaborate with our customers to develop a plan that meets their unique requirements, even if it means deviating from our preferred loads or routes. Our team of experienced dispatch specialists is always available to ensure that our customers get the most efficient and cost-effective service possible.'},



        {heading:'24/7 BACK-END CUSTOMER SUPPORT',firstPara:'We provide exceptional back-end office support to our customers, helping them manage paperwork, invoicing, and other administrative tasks. Our experienced team is available 24/7 to assist with load tracking, billing, collections, and other needs. We also offer value-added services such as load planning and optimization and access to a network of trusted industry partners to help our customers streamline their operations and reduce expenses.',secondPara:'At Sahhmallllc Dispatch LLC, we are committed to helping our customers succeed in the transportation industry. Our back-end office support team is dedicated to providing reliable and efficient support, and we offer a range of value-added services to help our customers manage their operations more effectively. Contact us today to learn more about how we can help you succeed in the transportation industry.',thirdPara:''},





        {heading:'HIGHEST PAYING LOADS',firstPara:'At Sahhmallllc Dispatch LLC, we prioritize finding the highest paying loads for our customers. Our experienced dispatchers use advanced tools and technologies to identify the most profitable opportunities for our customers, taking into account their unique needs and preferences. We also prioritize load consistency and provide transparent communication and updates to keep our customers informed.',secondPara:'We understand that finding high-paying loads can come with risks, so we take a comprehensive approach to risk management and offer value-added services like fuel cards and access to industry partners to help our customers reduce costs and maximize profitability. Contact us today to learn more about how we can help you stay competitive in the transportation industry.',thirdPara:''},



]

function animateValue() {
    let valueDisplays = document.querySelectorAll(".textCheck");


    valueDisplays.forEach((valueDisplay) => {

let interval = parseInt(valueDisplay.getAttribute("data-val")) >100 ? 5000 : 3000
        
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue+' +';
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

  }



export default function DispatchServices(){


    useEffect(()=>{

        animateValue()


    },[])


    return(

<>

<Head>
    <title>Dispatch Services - Sahhmallllc</title>
</Head>

<div>

<div className=" relative bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(https://716help.com/wp-content/uploads/2017/11/Semi-Truck-Blind-Spots.jpg)`}}>


<div className="text-white px-commonPadding  xs:px-mobileCommonPadding pb-20"  style={{backgroundColor:`rgba(0,0,0,0.7)`}}>


<Navbar/>




<p className="text-7xl xs:text-5xl font-bold mt-32 ">DISPATCH SERVICES</p>


    </div>

    </div>



<div className="py-16 bg-[#F3F3F3] px-commonPadding xs:px-mobileCommonPadding">


<div className="text-center font-bold">
    <p className="text-4xl font-extrabold xs:text-3xl">OUR DISPATCH SERVICES</p>
    <p className="text-lg mt-2 mb-10 xs:text-sm">Keeping Your Business Moving So You Can Focus on Driving.</p>
</div>


<div className="flex flex-wrap justify-center gap-x-7 gap-y-7">

{dispatchingServices.map((eachService)=>{
    return <div className="w-[555px] self-start  bg-white px-4 py-6 flex  xs:flex-col  rounded-lg group" >


<div style={{minWidth:'80px',minHeight:'80px',transition:'all 0.3s'}} className=" rounded-full flex justify-center items-center xs:mx-auto xs:mb-10 text-4xl group-hover:text-white group-hover:bg-[#2164cb] shadow-2xl self-start">

        {eachService.icon}

</div>

    <div className="pl-6 font-bold text-[#111633]">
        <p style={{transition:'all 0.3s'}} className="uppercase text-xl font-extrabold group-hover:text-[#2164cb] ">{eachService.heading}</p>

<p className="mt-4 leading-6 xs:text-sm">{eachService.paragraph}</p>

    </div>


    </div>
})}



</div>





</div>


{/*  */}

<div className="px-commonPadding xs:px-mobileCommonPadding  py-32 flex flex-col gap-y-16">

{allFeatures.map((eachFeature)=>{
    return  <div >

    <div className="text-center text-[#0778ff] font-extrabold mb-6 text-4xl xs:text-3xl">{eachFeature.heading}</div>
    
    
    
    <div className="flex flex-col w-3/4 xs:w-full  text-[#00000099] gap-y-10">
    
    <p className="font-semibold  text-lg xs:[1rem]">{eachFeature.firstPara}</p>
    
    
    <p className="pr-28 xs:pr-4 text-lg xs:[1rem]">{eachFeature.secondPara}</p>

        {eachFeature.thirdPara&&    <p className="pr-28 xs:pr-4 text-lg xs:[1rem]">{eachFeature.thirdPara}</p>}


    
    
    </div>
    
    </div>
})}





{/*  */}


</div>


{/*  */}


<div className="bg-[#F7F9FB]">

<div className="px-commonPadding xs:px-mobileCommonPadding max-w-[1600px] 1xl:mx-auto  py-28 flex xs:flex-col gap-x-16">

    <div className="w-1/2 xs:w-full "  >

        <div className="flex items-center">
            <div className="h-1 w-16 bg-orange-500"></div>
            <p className="text-xl ml-4 xs:text-lg  font-bold">Know Who We Are </p>
        </div>

    <p className="font-extrabold text-4xl xs:text-3xl my-5">WHAT TO EXPECT FROM OUR TRUCK DISPATCH SERVICES</p>

    <p className="text-lg">It’s an approach that brings together the best of financial planning and the best of investment management.</p>


<div className="flex gap-x-5 pt-2 ">

    <div className="w-2  bg-[#e9edf0] "></div>

    <div >

<p className="text-4xl"><ImQuotesRight/></p>

<p className="text-lg text-[#111633] mt-5 mb-8">A business strategy is the means by which it sets out to achieve desired ends. You have ideas, goals, and dreams. We have a culturally diverse, forward thinking team looking for talent like you.</p>

<p className="text-lg text-[#111633] pb-4">Its an approach that the bring to gather the best financial planning top and the best investment management</p>

    </div>



</div>



    </div>





    <div className="w-1/2 xs:w-full h-[400px] xs:h-[220px]   " >

            <img className="xs:h-full"  src="https://www.skydispatch.net/wp-content/uploads/2023/04/51c8df5e9f99a0fa70387b89e009db8f.jpg" alt="" />

    </div>


</div>



</div>


{/*  */}


<div className="bg-[#F9F9FF] 2xl:pt-28 ">

<div className="h-[350px]  text-[#333333] flex  xs:flex-col xs:px-0 xs:h-auto xs:py-8 xs:gap-y-4 items-center justify-between  px-36 bg-cover bg-no-repeat bg-center" style={{backgroundImage:`url(https://www.skydispatch.net/wp-content/uploads/2023/04/funfact_img.png)`}}>


    <div>
        <p className="text-6xl textCheck font-semibold relative" data-val="120">120<span className="text-3xl"> +</span></p>
        <p className="uppercase  text-lg font-semibold">Client Gross</p>
    </div>

    <div>
        <p className="text-6xl textCheck font-semibold relative" data-val="200">200<span className="text-3xl"> +</span></p>
        <p className="uppercase  text-lg font-semibold">Active trucks</p>
    </div>


    <div>
        <p className="text-6xl textCheck font-semibold relative" data-val="70">70<span className="text-3xl"> +</span></p>
        <p className="uppercase  text-lg font-semibold">Employees</p>
    </div>


    <div>
        <p className="text-6xl textCheck font-semibold relative" data-val="50">50<span className="text-3xl"> +</span></p>
        <p className="uppercase  text-lg font-semibold">MC Client</p>
    </div>

    <div>
        <p className="text-6xl textCheck font-semibold relative" data-val="6">6<span className="text-3xl"> +</span></p>
        <p className="uppercase  text-lg font-semibold">Experience</p>
    </div>


</div>
</div>



{/*  */}


<Footer/>


{/*  */}


</div>

</>


        
    )

}