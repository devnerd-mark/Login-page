import { useState } from "react"
import {assets} from '../assets/assets'
import { Eye, EyeOff } from "lucide-react"

const Form = () => {
  const [formData, setFormData] = useState({
    email: '',
    password:''
  })
  const [showPassword, setShowPassword]= useState(false)
  const [loginSuccess, setLoginSuccess]= useState(false)
  // handleInputChange
  const handleInputChange=(e)=>{
    const {name, value}=e.target;
    setFormData((prev)=>({
      ...prev,
      [name]:value,
    }))
  };
  //handleSubmite

const handleSubmite=(e)=>{
  e.preventDefault()
  setLoginSuccess(true)
}
  return (
    <div className="grid place-content-center bg-gray-300 px-4 py-5 md:px-8 md:py-10">
      <div className="container bg-white rounded-3xl w-full grid grid-cols md:grid-cols-2">

        {/**form */}

        <form onSubmit={handleSubmite} className="grid w-full place-content-center gap-4 p-6 md:p-12">
          {loginSuccess && (<p className="mb-3 bg-green-100 text-green-700 p-3 text-center rounded-md">Logged in successfully</p>)}

          {/**logo */}


          <div className="flex items-center gap-4">
          <img src={assets.Logo} alt="" />
          <h2 className="text-xl font-bold">Logo</h2>
        </div>

        {/**logo */}
        <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
        <p className="pb-4 mt-1 text-slate-500">Log in to access your personalized dashboard</p>

        {/**email */}
        <div>
          <label className="mb-1 block text-gray-700 font-semibold">Email</label>
          <input type="email"
          name="email" className="grid w-full border rounded-md px-4 py-3 "placeholder="your@email"
          value={formData.email}
          onChange={handleInputChange}
          required
           />
        </div>
        {/**password */}
        <div className="">
          <label className="mb-1 block font-medium text-gray-700">Password</label>
          <div className="relative">
            <input type={showPassword ? "text" : "password"}
          name="password" className="grid w-full rounded-md border px-4 py-3" placeholder="***"
          value={formData.password}
          onChange={handleInputChange}
          required
           />
           <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 flex items-center inset-y-0" onClick={()=> setShowPassword(!showPassword)}>
            {showPassword ? < Eye size={22} /> : <EyeOff size={22}/>}
           </button>
          </div>
        </div>
        {/**login button */}
        <button type="submit" className="rounded-md w-full font-medium hover:bg-blue-400 px-4 py-3">Login</button>
        <div className=" flex items-center gap-4 ">
          <span className="h-0.5 w-full bg-gray-500"></span>
          <p>Or</p>
          <span className="h-0.5 w-full bg-gray-500"></span>

        </div>

        {/**sign up */}
        <p className="text-center text-gray-600">Don’t have an account?{' '} <a href="" className="hover:underline">SignUp</a></p>

        {/**icons */}
        <div className="flex justify-center gap-5">
          <button>
            <img src={assets.GoogleLogo} alt="" width={32} height={32}/>
          </button>
          <button>
            <img src={assets.AppleLogo} alt="" width={32} height={32}/>
          </button>
          <button>
            <img src={assets.FacebookLogo} alt="" width={32} height={32}/>
          </button>

        </div>
        </form>


        {/*BANNER */}

        <div className="relative bg-primary rounded-md">
          <img src={assets.FormBanner} alt=""  className="h-full w-full rounded-md object-cover"/>
          <div className=" mb-5 absolute top-1/2 mx-10 -translate-y-1/2 bg-white/20 px-16 py-8 ">
            <h2 className="mb-5 font-semibold text-3xl text-white backdrop-blur-8xl"> Welcome Back! We're Thrilled to See You Again</h2>
            <p>Pick up right where you left off and discover what's new since your
              last visit. Your personalized dashboard is waiting.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Form