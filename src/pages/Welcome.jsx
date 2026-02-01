import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    //  Desktop wrapper (screen center)
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      {/* Mobile screen container */}
      <div className="relative w-full max-w-[390px] min-h-screen bg-white overflow-hidden">

        {/*  Decorative Dots */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 space-y-3">
          <div className="w-7 h-7  hover:bg-blue-600 cursor-pointer bg-yellow-500 text-white rounded-full flex items-center justify-center -ml-10">6</div>
          <div className="w-7 h-7  hover:bg-blue-600 cursor-pointer bg-yellow-500 text-white rounded-full flex items-center justify-center">1</div>
          <div className="w-7 h-7  hover:bg-blue-600 cursor-pointer bg-yellow-500 text-white rounded-full flex items-center justify-center ml-1">2</div>
          <div className="w-7 h-7  hover:bg-blue-600 cursor-pointer bg-yellow-500 text-white rounded-full flex items-center justify-center ml-5">3</div>
          <div className="w-7 h-7  hover:bg-blue-600 cursor-pointer bg-yellow-500 text-white rounded-full flex items-center justify-center ml-8">4</div>
          <div className="w-7 h-7  hover:bg-blue-600 cursor-pointer bg-yellow-500 text-white rounded-full flex items-center justify-center ml-11">5</div>
        </div>

        {/*  Bottom content */}
        <div className="absolute bottom-0 w-full p-6">
          <h1 className="text-2xl font-bold mb-2">
            Welcome to PopX
          </h1>

          <p className="text-gray-400 mb-6 text-sm">
            Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.
          </p>

          <div className="space-y-3">
            <div onClick={() => navigate("/signup")}>
              <Button text="Create Account" />
            </div>

            <div onClick={() => navigate("/signin")}>
              <Button
                text="Already Registered? Login"
                variant="secondary"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
