import Navbar from "./Navbar";

export default function HeroSect({heading,backgroundImage}){

return <div className=" relative bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(https://716help.com/wp-content/uploads/2017/11/Semi-Truck-Blind-Spots.jpg)`}}>


<div className="text-white px-commonPadding  xs:px-mobileCommonPadding pb-20"  style={{backgroundColor:'rgba(8, 47, 109,0.9)'}} >


<Navbar/>


<p className={`text-7xl xs:text-5xl font-bold mt-32  ${heading.length>13&&'w-1/2'} `}>{heading}</p>


    </div>

    </div>

}