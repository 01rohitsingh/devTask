import { FaCamera } from "react-icons/fa";
import profileImg from "../assets/download.jpg";

export default function Account() {
  return (
    /* Desktop wrapper */
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      {/* Mobile container */}
      <div className="w-full max-w-[390px] min-h-screen bg-white">

        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-sm font-semibold text-gray-800">
            Account Settings
          </h2>
        </div>

        {/* Profile section */}
        <div className="relative px-6 py-5 border-b border-dashed border-gray-500">
          <div className="flex items-center gap-4">

            {/* Profile Image */}
            <div className="relative">
              <img
                src={profileImg}
                alt="profile"
                className="w-14 h-14 rounded-full object-cover"
              />

              {/* Camera Icon */}
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#6C25FF] rounded-full border-2 border-white flex items-center justify-center">
                <FaCamera className="text-white text-[10px]" />
              </div>
            </div>

            {/* Name + Email */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Marry Doe
              </h3>
              <p className="text-xs text-gray-500">
                Marry@gmail.com
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat.
          </p>
        </div>

      </div>
    
    </div>
  );
}
