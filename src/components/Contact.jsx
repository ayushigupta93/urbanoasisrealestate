import React from 'react'
import { toast } from 'react-toastify';
import {motion} from "framer-motion"

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "a5451eb7-52e6-47cb-8275-bba4d55a296e");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("");
        toast.success("Form Submitted Successfully")
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message)
        setResult("");
      }
    };


  return (
<motion.div 
 initial={{ opacity: 0, x:-200 }}   // Fixed typo here
 transition={{ duration: 1 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}



className=' text-center p-6 py-20 lg:px-32 w-full overflow-hidden' 
    id='Contact'>
         <h1 className='text-3x1 sm:text-3xl md:text-6xl font-bold mb-2'>Contact <span
           className='underline underline-offset-4 decoration-1 
           under font-light'> With Us</span>
         </h1> 
   <p className=  ' text-center md:text-3xl text-gray-500 max-w-* mb-12'>
       Ready to MAke a Move? Lets's Build Your Future Together
     </p>


     <form onSubmit={onSubmit}  className=' max-w-2xl mx-auto text-gray-600 pt-8'>
        <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 text-left'>
                 Your Name
                 <input className='w-full border border-gray-300 rounded py-3 
                    px-4 mt-2' type='text' name='Name' placeholder='Your Name' required/>
            </div>
            <div className='w-full md:w-1/2 text-left md:pl-4'>
                 Your Email
                 <input className='w-full border border-gray-300 rounded py-3 
                    px-4 mt-2' type='email' name='Email' placeholder='Your Email' required/>
            </div>
        </div>
        <div className='my-6 text-left '>
           Message
           <textarea className='w-full border border-gray-600 rounded py-5
           px-5 mt-2 h-200 resize-none' name='Message' placeholder='Message' required ></textarea>
        </div>
        <button className='bg-blue-500 text-white px-7 py-4 rounded' >
            {result? result: "Send Message"}</button>
     </form>
      
</motion.div>
  )
}

export default Contact
