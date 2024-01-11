
import Link from "next/link";

export default function Footer(){

return(

        
        <div className="relative ">


<div className=" flex items-center relative  px-commonPadding xs:px-mobileCommonPadding h-[450px]  text-white py-16 xs:py-0 xs:h-[550px] bg-cover bg-center bg-no-repeat " 

style={{backgroundImage:`url(https://www.skydispatch.net/wp-content/uploads/2022/01/adir-Cargo-Insurance-1.jpg)`}}


>

<div className="absolute  left-0 top-0 w-full h-full" style={{backgroundColor:'rgba(8, 47, 109,0.75)'}}></div>





        <div className="w-full  z-20">
        
        <div className="flex  xs:flex-col xs:items-center xs:text-center justify-between text-lg">
        
        <div>
            <p>Monday-Sunday: 24/7</p>
            <p>Available</p>
        </div>

    <div className="text-xl">compliance@sahhmallllc.online</div>

    <div className="text-right xs:text-center">
            <p>30 N Gould St</p>
            <p>Sheridan,WY 82801
</p>
        </div>


        </div>


<div className="text-center check:pb-8 font-bold text-4xl xs:text-3xl mt-4 mb-28 xs:mb-60">
Contact Us - Muhammad Saad Anjum 03123020912 - Arsalan Shoaib 03114112223

</div>


<div className="absolute w-full bg-[#082F6D] bottom-0 left-0 px-commonPadding flex xs:flex-col text-[1rem]  xs:text-sm  xs:gap-y-4  py-6">


    <div className="xs:text-center">
    Copyright © 2023 SAHHMALL DISPATCH | Powered by SAHHMALL DISPATCH
    </div>


    <div className="ml-auto flex xs:flex-col xs:ml-0 xs:text-center gap-x-8 xs:gap-y-2">

            <Link className="underline" href="/">Home</Link>
            <Link className="underline" href="/services">Services</Link>
            <Link className="underline" href="/about">About</Link>
            <Link className="underline" href="/contact">Contact</Link>
            <Link className="underline" href="/truck-type">Truck type</Link>
            <Link className="underline" href="/faqs">FAQ's</Link>


    </div>



</div>





        </div>
</div>





        </div>



)


}
