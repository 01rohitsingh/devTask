import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="w-full max-w-[390px] min-h-screen bg-white p-6">


        <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-3">
          Signin to your <br />
          PopX account
        </h1>

        <p className="text-gray-400 text-sm mb-8">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit.
        </p>

        {/* Inputs */}
        <Input
          label="Email Address"
          type="email"
          placeholder="Enter email address"
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter password"
        />

     
        <div className="mt-6">
          <Button text="Login" onClick={() => navigate("/account")} />
        </div>

      </div>
    </div>
  );
}
