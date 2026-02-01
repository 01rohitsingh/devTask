import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  return (
    /* Desktop Wrapper */
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      
      {/* Mobile Screen Container */}
      <div className="w-full max-w-[390px] min-h-screen bg-white p-6 flex flex-col justify-between">

        {/* Top Content */}
        <div>
          
          <div className="mb-6">
            <div className="relative inline-block">
              
            
              <div className="absolute -top- -right-4 w-8 h-8 bg-yellow-400 text-white text-xl font-bold rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer">
                1
              </div>

              {/* Heading */}
              <h1 className="text-2xl font-bold text-gray-900 leading-tight">
                Create your <br />
                PopX account
              </h1>
            </div>
          </div>

          {/* Inputs */}
          <Input label="Full Name*" placeholder="Enter Your Name" />
          <Input label="Phone number*" placeholder="Enter Your Phone Number" />
          <Input label="Email address*" placeholder="Enter Your Email" />
          <Input label="Password*" type="password" placeholder="Enter Your Password" />
          <Input label="Company name" placeholder="Enter Your Company Name" />

          {/* Radio Section */}
          <p className="text-sm font-medium text-gray-900 mb-3">
            Are you an Agency?*
          </p>

          <div className="flex gap-6 mb-4">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="agency"
                defaultChecked
                className="accent-[#6C25FF]"
              />
              Yes
            </label>

            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="agency"
                className="accent-[#6C25FF]"
              />
              No
            </label>
          </div>
        </div>

        {/* Button */}
        <Button
         text="Create Account"
          onClick={() => navigate("/account")}
        ></Button>
      </div>
    </div>
  );
}
