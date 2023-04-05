import Link from "next/link"
import { AiFillCaretDown } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"

export default function Navbar(){
    return(
        <div className="flex justify-center items-center text-lg xs:flex-col ">

        {/* <div className=" w-40 h-40 xs:w-24 xs:h-24 bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(/mainlogo.png)`}}>    </div> */}
    
        <div className="flex gap-x-8 xs:flex-col  mt-12 xs:-mt-2 xs:mb-10 xs:text-center xs:gap-y-4">
        
        <Link className="hover:text-[#fe0000]" style={{transition:'all 0.5s'}} href="/">Home</Link>
        
        
        <Link className="relative group" style={{transition:'all 0.5s'}} href="/services">

<div className="flex items-center gap-x-2 hover:text-[#fe0000] " style={{transition:'all 0.3s'}}>
          <p>Services</p>

        <p><AiFillCaretDown/></p>
        </div>

<div >

        <div style={{transition:'all 0.3s'}} className="pt-3   absolute xs:-left-[100%]  w-[250px]  text-[1rem] opacity-0 h-0 overflow-hidden group-hover:opacity-100 group-hover:h-auto group-hover:overflow-visible ">
          
        <div style={{transition:'all 0.3s'}}  className="group-hover:bg-[#f9f9f9] text-black py-3 flex flex-col gap-y-2">
        <Link className="px-4 py-2 hover:bg-[#f1f1f1] transition-all"   href="/services/setup-with-us"  >Setup With Us</Link>
          <Link className="px-4 py-2 hover:bg-[#f1f1f1] transition-all"   href="/services/dispatch-services"  >Dispatch Services</Link>
          <Link className="px-4 py-2 hover:bg-[#f1f1f1] transition-all"   href="/services/certificate-permit-registration"  >Cerfificate/Permit Registration </Link>
          {/* <Link className="px-4 py-2 hover:bg-[#f1f1f1] transition-all"   href="/services/new-signup"  >New Signups</Link> */}
        </div>


        </div>
        </div>



        </Link>




        <Link className="hover:text-[#fe0000]" style={{transition:'all 0.5s'}} href="/about">About</Link>
        <Link className="hover:text-[#fe0000]" style={{transition:'all 0.5s'}} href="/contact">Contact</Link>

        <Link className="hover:text-[#fe0000]" style={{transition:'all 0.5s'}} href="/truck-type">Truck type</Link>
        <Link className="hover:text-[#fe0000]" style={{transition:'all 0.5s'}} href="/faqs">FAQ's</Link>

    
        </div>
    
    {/* <div className="flex gap-x-4">
      {[1,2,3].map(()=>{
        return <span><FaFacebookF/></span>  
      })}
      
    
    </div>
     */}
    
        </div>
    )
}