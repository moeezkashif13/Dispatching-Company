import Footer from "@/Components/Footer"
import HeroSect from "@/Components/HeroSect"
import Head from "next/head"
import { useForm } from "react-hook-form"
import { FaFacebookF } from "react-icons/fa"

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useEffect, useState } from "react"
import axios from "axios"
import Loader from "@/Components/Loader"


const supportedMimeTypes = ['image/jpeg', 'image/png', 'application/pdf'];



const details = [

    {text:'company name',type:'string',},
    {text:'MC',type:'number'},
    {text:'US Dot',type:'string'},
    {text:'EIN',type:'number-special-format'},
    {text:'Address',type:'string',},
    {text:'City',type:'string',},
    {text:'State',type:'string',},
    {text:'Zip',type:'number 5 digits',},
    {text:'Company Email',type:'string',},
    {text:'Company Phone No',type:'phone number',},
    {text:'Personal No',type:'phone number',},
    {text:'Insurance Company Name',type:'string',},
    {text:'Factoring Company Name',type:'string',},
    {text:'Truck No',type:'number',},
    {text:'Driver Name',type:'string',},
    {text:'Driver Number',type:'phone number',},
    {text:'Trailer Number',type:'string',},


// {uploadFieldText:'MC Authority',uploadField:'test field'},
// {uploadFieldText:'W9-Form',uploadField:'test field'},
// {uploadFieldText:'NOA / Void Check',uploadField:'test field'},
// {uploadFieldText:'Copy of Insurance',uploadField:'test field'},

]

const schema = yup.object({

[details[0].text] : yup.string().min(8,"Company name must be greater than 8 characters").required(),

[details[1].text] : yup.string().matches(/^\d{7}$/, 'Must be exactly 7 digits')
.required('MC must be a number'),

[details[2].text] : yup.string().required("Please enter valid US Dot"),


[details[3].text] : yup.string().matches(/^\d{2}-\d{7}$/, 'Please enter a valid EIN number')
.required('EIN number is required'),


[details[4].text] : yup.string().required("Please enter valid address"),


[details[5].text] : yup.string().required("Please enter valid city"),


[details[6].text] : yup.string().required("Please enter valid state"),


[details[7].text] : yup.string().matches(/^\d{5}$/, 'Must be exactly 5 digits')
.required('Zip code must be a number'),


[details[8].text] : yup.string().email('Please enter a valid email').required('Email is required'),


[details[9].text] : yup.string().matches(
    /^(\+1|1)?[-. ]?(\(\d{3}\)|\d{3})[-. ]?\d{3}[-. ]?\d{4}$/,
    'Please enter a valid 10 digit US phone number'
  )
  .required('Phone number is required'),


  [details[10].text] : yup.string().matches(
    /^(\+1|1)?[-. ]?(\(\d{3}\)|\d{3})[-. ]?\d{3}[-. ]?\d{4}$/,
    'Please enter a valid 10 digit US phone number'
  )
  .required('Phone number is required'),
  

  [details[11].text] : yup.string().required("Please enter insurance company name"),

[details[12].text] : yup.string().required("Please enter factoring company name"),


// [details[13].text] : yup.string().matches(/^\d{5}$/, 'Must be exactly 5 digits')
// .required('Enter valid truck number'),

[details[13].text] : yup.string().min(1,"Truck Number should be from 1 to 5 digits").max(5,"Truck Number should be from 1 to 5 digits")
.required('Enter valid truck number'),


[details[14].text] : yup.string().required("Please enter driver name"),


[details[15].text] : yup.string().matches(
    /^(\+1|1)?[-. ]?(\(\d{3}\)|\d{3})[-. ]?\d{3}[-. ]?\d{4}$/,
    'Please enter a valid 10 digit US phone number'
  )
  .required('Phone number is required'),


//   [details[16].text] : yup.string().matches(/^\d{5}$/, 'Must be exactly 5 digits')
//   .required('Enter valid trailer number'),

[details[16].text] : yup.string().min(1,"Trailer Number should be from 1 to 5 digits").max(5,"Trailer Number should be from 1 to 5 digits")
.required('Enter valid truck number'),


//   [details[17].uploadFieldText]: yup.mixed().test('fileType', 'Unsupported file format', value => {
//     // if (!value) return true; // Allows empty file uploads
//         return supportedMimeTypes.includes(value[0]?.type);

//   })
//   .required('File is required'),

//   [details[18].uploadFieldText]: yup.mixed().test('fileType', 'Unsupported file format', value => {
//     // if (!value) return true; // Allows empty file uploads
//         return supportedMimeTypes.includes(value[0]?.type);

//   })
//   .required('File is required'),

//   [details[19].uploadFieldText]: yup.mixed().test('fileType', 'Unsupported file format', value => {
//     // if (!value) return true; // Allows empty file uploads
//     return supportedMimeTypes.includes(value[0]?.type);

//   })
//   .required('File is required'),

//   [details[20].uploadFieldText]: yup.mixed().test('fileType', 'Unsupported file format', value => {
//         console.log(value);
//     // if (!value) return true; // Allows empty file uploads
//     return supportedMimeTypes.includes(value[0]?.type);
//   })
//   .required('File is required'),







  }).required();

  
  
export default function SetupWithUs(){


    const { register, handleSubmit, watch, formState: { errors } } = useForm(

        {
            resolver: yupResolver(schema),
            mode:"onChange"

        }

    );

        const [previewCheck,setPreviewCheck] = useState({
            firstPreview:'',
            secondPreview : ''
        })

        const [showLoader,setShowLoader] = useState(false);
        const [message,setMessage] = useState("")

    const onSubmit = (data)=>{

        setShowLoader(true);

        
                    axios.post("/api/backend-signup-form",{
            data:{
                ...data,
            }
        }).then(resp=>{

            setShowLoader(false)
            setMessage("Form has been submitted successfully")
        }).catch(err=>{
            
            setShowLoader(false)
            setMessage("There is an error in submitting the form")

        })

    //     const image = data["MC Authority"][0]

    //     let reader = new FileReader()
    // reader.readAsDataURL(image)
    // const dataURI = reader.onload = () => {
      
    //     return reader.result
        
    // }







        // let arr = []

        // Object.keys(data).forEach((keyName,i)=>{
        //     console.log(keyName);
        //      details.forEach(eachDetail=>{
        //         if(eachDetail.uploadFieldText==keyName){
        //             console.log('yesssss');
        //             arr.push({[eachDetail.uploadFieldText]:data[keyName][0]})
        //     // return {check:tempObj[keyName]}

        //         }
        //     })    
        // })

        // console.log(...arr);


    };

    


    return(

        <>
        
        <Head>
    <title>Setup With Us - Sahhmallllc</title>
</Head>

        <div className="relative">

{showLoader&&

<div className="w-full flex justify-center items-center z-30 h-full fixed" style={{backgroundColor:'rgba(0,0,0,0.8'}}>

        <Loader/>
</div>

}


<HeroSect heading="SETUP WITH US" /> 



<div className="bg-[#e7e7e7]">


    <div className="px-commonPadding  xs:px-mobileCommonPadding pt-6 pb-20">


<h1 className="text-3xl font-bold">CONTACT US</h1>

<p className="text-lg mt-4 mb-2">Fields marked with an <span className="text-xl text-red-500">*</span> are required</p>


<form enctype="multipart/form-data" onSubmit={handleSubmit(onSubmit)} className="px-20  xs:px-0 max-w-[1800px] 1xl:mx-auto  ">

<div className="flex flex-wrap xs:flex-col gap-x-5">

{details.map((eachDetail,index)=>{
return   <div className=" mb-6 xs:mb-6 " style={{flexBasis:'32%'}}>

{eachDetail.text&&
<>

<p className="font-semibold text-lg mb-2.5 capitalize">{eachDetail.text} <span className="text-red-500 text-xl">*</span></p>


<input {...register(eachDetail.text)}   type={"text"} className="w-full bg-[#f7f7f7] px-4 focus:bg-white transition-all py-3 font-semibold text-[#787878] outline-none" placeholder={`Enter Your ${eachDetail.text} Here`} />


{(eachDetail.text=="EIN"&&errors["EIN"]?.message.length>0)&&  <p className="font-semibold text-[1rem] text-green-500 mt-2">EIN must be in this format : 00-0000000</p>}

{errors[eachDetail.text]?.message&&<p className="font-semibold text-[1rem] text-red-500 mt-2">{errors[eachDetail.text]?.message}</p>}




</>

// : <>


// <p className="font-semibold text-lg mb-2.5 capitalize">{eachDetail.uploadFieldText} <span className="text-red-500 text-xl">*</span></p>

// <input {...register(eachDetail.uploadFieldText)}   type="file" accept={supportedMimeTypes}    className="w-full bg-[#f7f7f7] px-4 focus:bg-white transition-all py-3 font-semibold text-[#787878] outline-none"  />

// {/* {errors[eachDetail.uploadFieldText]?.message&&<p className="font-semibold text-lg text-red-500 mt-2">{errors[eachDetail.text]?.message}</p>} */}

// {errors[eachDetail.uploadFieldText]?.message&&<p className="font-semibold text-lg text-red-500 mt-2">{errors[eachDetail.uploadFieldText]?.message}</p>}

// </>


}




</div>

})}

</div>


{/* <div className="bg-purple-500">

        <p>Name <span>*</span></p>

    <textarea rows={12} className="w-full bg-pink-500 px-4 focus:bg-white transition-all py-3 font-semibold text-[#787878] outline-none" placeholder="Enter Your Name Here" ></textarea>

    </div> */}

<div className="flex justify-center mt-4">

<input type="submit" value="Submit" className=" bg-black text-white inline px-8 text-lg py-1.5 cursor-pointer font-semibold"/>

</div>

<p className="mt-6 font-semibold text-2xl">{message}</p>



</form>


{/* <button value="Submit" type="submit"  className="bg-black text-white inline px-7 py-1.5 cursor-pointer font-semibold" >Button</button> */}




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