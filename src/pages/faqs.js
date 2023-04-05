import Footer from "@/Components/Footer";
import HeroSect from "@/Components/HeroSect";
import LoadingScreen from "@/Components/LoadingScreen";
import Navbar from "@/Components/Navbar";
import Head from "next/head";
import { useEffect } from "react";

import {AiOutlineArrowLeft} from 'react-icons/ai'


const allFAQS = [

        {heading:'How do I get started with your dispatch service?',paragraph:"Getting started with our dispatch service is easy. Simply reach out to us via phone or email, to discuss your needs. We'll gather the necessary information and documentation. Once we have the required information, we will assign you a dedicated personal dispatcher who will serve as your primary point of contact during transportation. The dispatcher will be available to assist you throughout your journey, providing crucial support and guidance. Our team is committed to ensuring that the dispatch process is as seamless and efficient as possible for our clients."},



        {heading:'How much does your dispatch service cost?',paragraph:'We have different packages and plans depending on your truck types & fleet size. To get a quote send us an email or give us a call'},



        {heading:'Can I choose my own loads or do I have to take yours?',paragraph:'As a carrier, you have complete control over the loads that you accept. We present you with available loads, but the final decision on which loads to take is entirely up to you. Our dispatchers work closely with carriers to understand their preferences and capacity, and we strive to match them with the most suitable loads that meet their criteria. At our dispatch service, we value transparency and open communication, and we work with our carriers to ensure their success.'},



        {heading:'What type of trucks do you dispatch?',paragraph:'We can dispatch all types of trucks but we specialize in Open trailers, Dry Van, Reefer, Box truck and Hot shot.'},


        {heading:'How do I know that I can trust your dispatch service?',paragraph:'Sahmallllc Dispatch LLC has been registered with the Secretary of State of Wyoming as a truck dispatch company for a considerable amount of time, and we have established ourselves as a trusted player in the transportation industry. We pride ourselves on being transparent with our clients and do not charge any upfront fees for our services. As a potential client you can try our dispatch service for a week without any obligation and we are confident that you will be satisfied with the level of service we provide. Additionally, we can provide you with references from our current customers to showcase our track record and reputation in the industry. At our dispatch service, we value professionalism and strive to establish a trusting relationship with each of our clients.'},


        {heading:'How do you handle situations where the Truck breaks down or has a mechanical issue?',paragraph:'Sahmallllc Dispatch LLC has been registered with the Secretary of State of Wyoming as a truck dispatch company for a considerable amount of time, and we have established ourselves as a trusted player in the transportation industry. We pride ourselves on being transparent with our clients and do not charge any upfront fees for our services. As a potential client you can try our dispatch service for a week without any obligation and we are confident that you will be satisfied with the level of service we provide. Additionally, we can provide you with references from our current customers to showcase our track record and reputation in the industry. At our dispatch service, we value professionalism and strive to establish a trusting relationship with each of our clients.'},



        {heading:'What happens if a load is delayed or canceled?',paragraph:'Unfortunately, delays and cancellations can occur in the transportation industry due to various factors, such as weather conditions or unforeseen circumstances. In the event that a load is delayed or canceled, we work closely with our carriers and clients to find a suitable solution that meets their needs. Our dispatchers maintain open communication with carriers and clients to ensure timely updates and provide alternative options, such as rescheduling the shipment or finding another load within little to no down time.'},



        {heading:'How can I get paid for my loads?',paragraph:'Sahmallllc Dispatch LLC does not have its own MC, but instead relies on the MC of its carrier to book loads. When a load is delivered, the payment is received by the carrier, either directly from the broker or through their factoring company.'},



        {heading:'Do you offer dispatch services for LTL shipments?',paragraph:'Yes, we are specialized in getting LTL loads especially for SB, HT & DRY VANs so that we can maximize your earning.'},


        {heading:"What's the per mile rate you are offering?",paragraph:'The per mile rate actually depends on the market conditions and your truck type. For that you can send us an email or can give us a call to get a quote.'},


        {heading:"You can send us an email or can give us a call to get a quote. How we'll pay you?",paragraph:'We accept all the major debit & credit cards. You can also pay us by direct deposit.'},


]


export default function FAQS(){


    useEffect(()=>{

        document.querySelectorAll('.openFAQ').forEach(eachFAQ=>{
            eachFAQ.addEventListener("click",(event)=>{


                document.querySelectorAll('.openFAQ').forEach(elem=>{
                    
                    elem.nextElementSibling.classList.add('h-0')
                    elem.nextElementSibling.classList.add('opacity-0')
                    elem.nextElementSibling.classList.remove('py-8')
                    elem.querySelector('.arrowIcon').classList.remove('rotate-180')


                })

                
                eachFAQ.nextElementSibling.classList.remove('opacity-0')
                eachFAQ.nextElementSibling.classList.remove('h-0')
                eachFAQ.nextElementSibling.classList.add('py-8')

            eachFAQ.querySelector('.arrowIcon').classList.add('rotate-180')

                
                

                
            })
        })


    },[])
    


    return(

<>

<Head>
    <title>FAQ'S - Sahhmallllc</title>
</Head>

        <div>



            <div >



<HeroSect  heading="FAQ'S" />




<div className="py-16">

        <p className="text-center font-bold text-4xl mb-8">FAQ'S</p>


<div className="flex flex-col gap-y-4 px-commonPadding max-w-[1650px] 1xl:mx-auto xs:px-[16px]">


{allFAQS.map((eachFAQ)=>{

    return <div >

<div className="flex cursor-pointer openFAQ" >

    <div style={{transition:'all 0.5s'}} className="bg-blue-500 h-16 w-16 xs:h-12 xs:w-12 xs:text-xl arrowIcon  text-2xl text-white flex justify-center items-center">
        <AiOutlineArrowLeft/>
    </div>

    <div className="w-full flex items-center pl-6 xs:pl-3 font-bold border-b-2 border-blue-500">

    <p className="xs:text-xs">{eachFAQ.heading}</p>

    </div>

    

    </div>


<p style={{  transition: 'all 0.4s ease-out'}} className=" opacity-0 h-0 overflow-hidden FAQParagraph pl-[5.3rem] xs:pl-[0rem]  font-semibold text-[1rem] xs:text-sm leading-7">{eachFAQ.paragraph}</p>



    </div>



})}



</div>





</div>




{/*  */}

<Footer/>


{/*  */}




            </div>

</div>

</>

    )


}