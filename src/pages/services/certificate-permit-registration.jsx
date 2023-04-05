import Footer from "@/Components/Footer";
import HeroSect from "@/Components/HeroSect";
import Navbar from "@/Components/Navbar";
import Head from "next/head";
import { useEffect } from "react";
import { AiFillCreditCard } from "react-icons/ai";
import { BsFillClipboard2CheckFill, BsPersonVcardFill } from "react-icons/bs";
import { FaFileContract } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";


const ourServices = [

    {icon:<FaFileContract/>,heading:'NEW MC REGISTRATION',paragraph:'We Provide MC Registration services    '},

    {icon:<BsPersonVcardFill/>,heading:'TWIC CRAD',paragraph:'We Provide TWIC CARD permit Registration services'},


    {icon:<TbCertificate/>,heading:'HAZMAT CERTIFICATE',paragraph:'We Provide Hamzart Certificate Registration services'},


    {icon:<BsFillClipboard2CheckFill/>,heading:'OD PERMITS',paragraph:'We Provide over Dimension permit Registration services'},


]


const teamExperience = [

    {text:'120',secondText:'CLIENT GROSS'},
    {text:'200',secondText:'ACTIVE TRUCKS'},
    {text:'70',secondText:'EMPLOYEES'},
    {text:'50',secondText:'MC CLIENT'},
    {text:'60',secondText:'EXPERIENCE'},
    
    

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
  
  


export default function CertificatePermitRegistration(){

    useEffect(()=>{

        animateValue();
       

        

    },[])

    return(

        <>

<Head>
    <title>Certificate Permit Registration - Sahhmallllc</title>
</Head>

        <div>

            <HeroSect heading="Certificate Permit Registration" />

{/*  */}
        <div className="py-24">


        <p className="uppercase text-center text-5xl  font-bold xs:text-4xl mb-10">Services</p>

        <div className="flex gap-x-6 px-commonPadding xs:px-mobileCommonPadding flex-wrap gap-y-8 justify-center">


            {ourServices.map((eachService)=>{
                return <div style={{transition:'all 0.3s'}} className=" hover:scale-105   w-[267px] py-12 rounded-lg border  border-[#e5e5e5] flex flex-col items-center group">
                    
                    <div style={{transition:'all 0.3s'}} className="w-24 h-24 bg-[#2575FC] border-2 border-[#2575FC] rounded-full flex justify-center items-center text-5xl text-white group-hover:bg-transparent group-hover:text-[#2575FC]  ">

                        {eachService.icon}

                    </div>


                    <p className="uppercase font-bold text-xl mt-5 mb-5">{eachService.heading}</p>

                <p className="font-semibold text-center" style={{color:'rgba(0,0,0,0.6)'}}>{eachService.paragraph}</p>


                </div>
            })}


        </div>



        </div>
{/*  */}


            <div className="pt-24 pb-32 bg-[#f7f7f7]">

                <div className="text-center text-[#14346c]">

            <p className="text-4xl font-bold xs:text-2xl">OUR TEAMS EXPERIENCE</p>
<p className="font-semibold mt-4 mb-10 xs:px-8 xs:text-sm">Our team's experience and successful actions are the guarantee that your MC gets the desired results</p>
                </div>

            <div className="flex flex-wrap gap-5 justify-center">



             {teamExperience.map((eachStat)=>{ 
                return <div style={{transition:'all 0.3s'}} className=" hover:scale-110 w-[245px] shadow-2xl bg-white py-14 text-center  text-[#14346c]">

<p  className="textCheck font-extrabold   text-5xl" data-val={eachStat.text}>0+</p>

<p className="uppercase mt-3 font-semibold">{eachStat.secondText}</p>

                </div>
            })}
        

            </div>




            </div>




{/*  */}


<Footer/>


{/*  */}


        </div>
    
    </>
    
    
    )


}