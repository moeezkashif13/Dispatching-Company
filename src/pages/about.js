import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Head from "next/head";

export default function About(){

    return(
<>
<Head>
    <title>About - Sahhmallllc</title>
</Head>

    <div>



<div className=" relative bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(https://www.skydispatch.net/wp-content/uploads/2021/11/colibri-demo-video-cover.jpg)`}}>


<div className="text-white px-commonPadding  xs:px-mobileCommonPadding pb-20"  style={{backgroundColor:`rgba(8, 47, 109,0.8)`}}>


<Navbar/>




<p className="text-7xl xs:text-5xl font-bold mt-32 ">ABOUT US</p>


    </div>

    </div>





{/*  */}


<div className=" relative bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(https://www.skydispatch.net/wp-content/uploads/2021/11/snow-light-sunset-road-traffic-night-232-pxhere-com.jpg)`}}>


<div className="text-white px-commonPadding  py-32 xs:py-16 flex xs:flex-col xs:px-mobileCommonPadding "  style={{backgroundColor:`rgba(0,0,0,0.8)`}}>

<div className="flex xs:flex-col gap-x-16 max-w-[1600px] 1xl:mx-auto">

<div className="w-1/2 xs:w-full">

        <p className="text-xl font-semibold">SHORT STORY</p>
        <h1 className="text-4xl font-bold mt-4 mb-8">ABOUT SAHMALLLLC DISPATCH</h1>

        <div className="flex flex-col text-lg font-semibold gap-y-8">

<p>1. In business since 2017, Skv Dispatch is currently dispatching
more than 200 carriers (including Dry van, Reefer, Power only, Cdl Hotshot, Flatbed, Box Truck etc) with the competitive rates in the market.</p>


<p>2. Sahmallllc Dispatch pays their dispatchers by commission; this is a
results oriented position. Each dispatcher will have up to 3-5
trucks for a more personalized relationship with your drivers.
Additionally, the dispatchers have excellent team leads to
ensure our success.
</p>


<p>3. We uses all the premium load boards, more importantly
we direct shippers and brokers they have formed
relationships with over the years, to ensure your drivers are
loaded with the best paying loads, with little to no down time.</p>

<p>4. You are free to terminate the agreement for any reason.</p>

<p>5. You are able to set your own schedule, with no “forced dispatch.”</p>



        </div>


</div>



<div className="w-1/2 xs:w-full xs:mt-6">
    

            <div className="h-[350px]  bg-cover bg-no-repeat bg-center" style={{backgroundImage:`url(https://www.skydispatch.net/wp-content/uploads/2022/01/adir-Cargo-Insurance-1.jpg)`}}></div>
            <div className="h-[350px] mt-10  bg-cover bg-no-repeat bg-center" style={{backgroundImage:`url(https://www.skydispatch.net/wp-content/uploads/2022/01/slide6-1024x544.jpg)`}}></div>



</div>

</div>


    </div>

    </div>




{/*  */}



<div className="text-white px-commonPadding xs:px-mobileCommonPadding pt-24 pb-12 bg-[#100F48]"  >


<p className="font-semibold text-lg" >NOT CONVINCED YET?</p>

<p className="font-semibold text-4xl mt-4 mb-16">WHY CHOOSE US</p>



<ul className="pl-20 xs:pl-8 list-disc flex flex-col text-lg gap-y-2">
    <li>We make sure your trucks stay loaded, you focus only on driving and earning more and more.</li>
    <li>We look for the best loads available on the load board that suit your requirements.
</li>
    <li>We handle all your paperwork.
</li>
    <li>We negotiate pricing on your behalf.
</li>
    <li>We look for loads at the minimum to zero deadhead miles so that you never have to struggle to get loads.
</li>
    <li>We schedule your weeks as per your requirements.
</li>
    <li>A dedicated dispatcher is available 24/7 to make sure you never find it hard to get the best available loads.
</li>
    <li>We handle all your Invoices.
</li>
    <li>We take care of the broker setup.
</li>

</ul>




    </div>
    




{/*  */}


<Footer/>




    </div>
    </>


)

}