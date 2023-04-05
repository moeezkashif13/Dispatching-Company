import Footer from "@/Components/Footer";
import HeroSect from "@/Components/HeroSect";
import Navbar from "@/Components/Navbar";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import { FaFacebookF } from "react-icons/fa";

export default function Contact(){

    const [contactForm,setContactForm] = useState({

        name:"",
        email : "",
        message : ""

    })

    useEffect(()=>{

            // axios.post("/api/backend-contact-form",{

                
            //         data:{
            //             name:'Test Check',
            //             email : "testcheck@gmail.com",
            //             message : "Test Check Test Check Test Check Test Check Test Check Test Check Test Check Test Check Test Check"
            //         },
                
            // }
            

            // )


    },[])


    const submitForm = async ()=>{

        

        await axios.post("/api/backend-contact-form",{

            data:{
                name:contactForm.name,
                email : contactForm.email,
                message : contactForm.message
            },
        
    }
    

    )

    }


    return(

        <>

<Head>
    <title>Contact - Sahhmallllc</title>
</Head>

        <div>


<HeroSect heading="CONTACT" /> 



{/*  */}
<div className="px-commonPadding xs:px-mobileCommonPadding pt-20 pb-16">

<p className="text-5xl font-bold mb-16 xs:text-4xl">GET IN TOUCH</p>


<div className="flex xs:flex-col xs:gap-y-10 gap-x-12" >


{[1,2,3].map(()=>{
    return <div className="flex-grow ">

        <span className="text-[#2970e1] text-6xl"><FaFacebookF/></span>

<p className="uppercase text-3xl font-extrabold mt-6 mb-1">E-Mail</p>

<p className="font-semibold" style={{color:`rgba(0, 0, 0, 0.6)`}}>sales@skydispatch.net</p>


    </div>
})}



</div>




</div>
{/*  */}


<div className="bg-[#e7e7e7]">


    <div className="px-commonPadding  xs:px-mobileCommonPadding pt-6 pb-20">


<h1 className="text-3xl font-bold">CONTACT US</h1>

<p className="text-lg mt-4 mb-2">Fields marked with an <span className="text-xl text-red-500">*</span> are required</p>


<div className="px-20  xs:px-0 max-w-[1800px] 1xl:mx-auto ">
{/*  */}
     <div className=" mb-10 xs:mb-6">

        <p className="font-semibold text-lg mb-2.5">Name <span className="text-red-500 text-xl">*</span></p>

    <input onChange={(event)=>setContactForm(oldVal=>{
        return {
            ...oldVal,
            name: event.target.value
        }
    })} type={"text"} className="w-full bg-[#f7f7f7] px-4 focus:bg-white transition-all py-3 font-semibold text-[#787878] outline-none" placeholder="Enter Your Name Here" />

    </div>
{/*  */}


<div className=" mb-10">

        <p className="font-semibold text-lg mb-2.5">Email <span className="text-red-500 text-xl">*</span></p>

    <input onChange={(event)=>setContactForm(oldVal=>{
        return {
            ...oldVal,
            email: event.target.value
        }
    })} type={"text"} className="w-full bg-[#f7f7f7] px-4 focus:bg-white transition-all py-3 font-semibold text-[#787878] outline-none" placeholder="Enter Your Email Here" />

    </div>



{/*  */}


<div className=" mb-10">

        <p className="font-semibold text-lg mb-2.5">Message <span className="text-red-500 text-xl">*</span></p>

    <textarea onChange={(event)=>setContactForm(oldVal=>{
        return {
            ...oldVal,
            message: event.target.value
        }
    })} rows={15} className="resize-none w-full bg-[#f7f7f7] px-4 focus:bg-white transition-all py-3 font-semibold text-[#787878] outline-none" placeholder="Type your message here"></textarea>

    </div>


{/* <div className="bg-purple-500">

        <p>Name <span>*</span></p>

    <textarea rows={12} className="w-full bg-pink-500 px-4 focus:bg-white transition-all py-3 font-semibold text-[#787878] outline-none" placeholder="Enter Your Name Here" ></textarea>

    </div> */}



<div onClick={submitForm} className="bg-black text-white inline px-7 py-1.5 cursor-pointer font-semibold">Submit</div>





</div>




    </div>



</div>






{/*  */}


{/* <div className="px-commonPadding xs:px-mobileCommonPadding bg-[#e7e7e7] pb-8">


        <div className="w-full h-[450px] 3xl:h-[600px]">


        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.33400709334!2d74.26671811466399!3d31.459996957269492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919017ec14c4291%3A0x66ecebd97ec18b29!2sIqbal%20Clinics!5e0!3m2!1sen!2s!4v1680439042624!5m2!1sen!2s" width={"100%"} height={"100%"} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


        </div>


</div> */}


{/*  */}



<Footer/>



{/*  */}









        </div>


</>


    )


}