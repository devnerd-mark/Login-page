import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Eye, EyeOff } from 'lucide-react'
const Form = () => {
    const [formData,setFormData] = useState({
    email:"",
    password:""
  })
  const [showPassword, setShowPassword] = useState(false)
  const [loginSuccess,setLoginSuccess] = useState(false)

  //handle form inputs changes
  const handleInputChanges = (e) =>{
    const {name,value} = e.target;
    setFormData({
      ...formData,
      [name]:value
    })
    
  }
  //handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoginSuccess(true)
  }





  return (
    <div className='grid min-h-screen place-content-center bg-gray-300 px-4 py-5 md:px-8 md:py-10'>
      <div className='container max-h-[1000px] w-full max-w-[1200px] rounded-[20px] bg-white md:grid md:grid-cols-2'>

        {/* form */}

        <form onSubmit={handleSubmit} action="" className='mx-auto grid w-full max-w-[460px] place-content-center gap-4 p-6 md:p-12'>
          {loginSuccess && <p className='mb-4 rounded-md bg-green-100 p-3 text-center text-green-700'> Logged in successfully!</p>}

        {/* logo section */}

        <div className='flex items-center gap-[18px]'>
          <img src={assets.Logo} alt="" />
          <h2 className='text-xl font-bold'>Logo</h2>
        </div>

        {/* form header */}
        <h2 className='text-3xl font-bold text-gray-800'>Welcome Back</h2>
        <p className='pb-4 pt-1 text-slate-500'>Log in to access your personalized dashboard</p>
        
        {/* Email input */}

        <div className=''>
          <label className='mb-1 block font-medium text-gray-700'>Email</label>
          <input type="email" name="email" id="" className='rounded-md border px-4 py-3 focus:ring-2 focus:ring-primary' placeholder='your@email.com' value={formData.email} onChange={handleInputChanges} required/>
        </div>


           {/* password input */}

           <div className=''>
            <label className='mb-1 block font-medium text-gray-700'>Password</label>
           
           <div className='relative'>
            <input type={showPassword ? "text" : "password"} className='rounded-md border px-4 py-3 focus:ring-2 focus:ring-primaryClr'placeholder='******'
                  name='password'
                  value={formData.password}
                  onChange={handleInputChanges}
                  required
                  autoComplete='current-password'/>
                  <button type='button' className=' absolute right-3 top1-/3 -translate-y-1/2 text-gray-500' onClick={() =>setShowPassword(!showPassword)}>{showPassword ? <Eye size={24}/> : <EyeOff size={24}/> }
                  </button>
           </div>
           </div>

          <button className="rounded-xl bg-primaryClr px-4 py-3 font-medium t transition-colors duration-200 hover:bg-primaryClr/90">
              Login
            </button>
              <p className="text-center text-gray-600">
              Don’t have an account? {" "}
             <a href="#" className='text-primaryClr hover:underline'>SignUp</a>
            </p>
             <div className="my-8 flex items-center gap-4">
              <span className="h-[1px] w-full bg-gray-300"></span>
              <p>Or</p>
              <span className="h-[1px] w-full bg-gray-300"></span>
            </div>
            <div className='flex justify-center gap-5'>
  <button className=''>
    <img src={assets.GoogleLogo} alt="" width={32} height={32}/>
    </button>  
    <button className=''>
    <img src={assets.AppleLogo} alt="" width={32} height={32}/>
    </button>       
    <button className=''>
    <img src={assets.FacebookLogo} alt="" width={32} height={32}/>
    </button>                 

            </div>

        </form>

         {/* form banner */}
         <div className='relative hidden bg-primary md:block'>
          <img src={assets.FormBanner} alt="" width={720} height={720} className='h-full object-cover'/>
          <div className="absolute left-0 top-1/2 mx-10 -translate-y-1/2 bg-white/20 px-11 py-[60px] text-white backdrop-blur-[30px]">
              <h2 className='mb-5 text-3xl font-semibold'>Welcome Back! We're Thrilled to See You Again</h2>
              <p>Pick up right where you left off and discover what's new since your last visit. Your personalized dashboard is waiting.</p>
           </div>
         </div>
      </div>
    </div>
  )
}

export default Form