import { FaEdit } from "react-icons/fa";
import Menubar from "../components/Menubar";
import Footer from "../components/Footer";
import { AiOutlineArrowDown, AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function WriteBlog() {
  return (
    <div className="font-prime_font">
      <div>
        <div>
          <Menubar />
        </div>
        <div className="bg-custom_blue_sec flex flex-col justify-center items-center p-20">
          <div className="flex items-center mb-8 text-2xl bg-orange_primary py-2 px-5 text-white">
            <FaEdit /> <span className="ml-2">Write on PovaNote</span>
          </div>
          <div className="text-center">
            <p className="font-semibold mb-5">
              Write on PovaNote is very simple
            </p>
            <p>Go to your mail and start typing your article with title &</p>
            <p className="mb-5">
              categories, attached your image/video file (if have).
            </p>
            <p className="font-semibold">Type your personal information.</p>
            <p className="mb-5">
              (Name, Occupation, Address, Social media links)
            </p>
            <p>
              Send it on:{" "}
              <span className="ml-1 font-semibold">
                blog.notebook@gmail.com
              </span>
            </p>
          </div>
          <div>
            <button className="border-orange_primary border-2 p-2 rounded-md mt-8">
              Go To Your Mail
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center my-20">
        <div className="bg-orange_primary p-2 text-white text-2xl font-semibold">
          <p>How Can You Earn By Writing On Medium</p>
        </div>
        <div className="flex w-2/4 text-center mt-10">
          <div className="">
            <p className="font-semibold my-5">By Ad Revenue</p>
            <p>
              Dynamically underwhelm integrated outsourcing via timely models.
              Rapidiously reconceptualize visionary imperatives without 24/365
              catalysts for change. Completely streamline functionalized models
              and out-of-the-box functionalities.
            </p>
          </div>
          <div className="mx-5">
            <p className="font-semibold my-5">By Affiliate Programme</p>
            <p>
              Dynamically underwhelm integrated outsourcing via timely models.
              Rapidiously reconceptualize visionary imperatives without 24/365
              catalysts for change. Completely streamline functionalized models
              and out-of-the-box functionalities. Authoritatively target
              proactive vortals vis-a-vis exceptional results. Compellingly
              brand.
            </p>
          </div>
        </div>
        <div className="my-20 text-center">
          <p className="mb-4 font-semibold text-xl">Want To Know More?</p>
          <div className="flex items-center justify-center text-orange_primary">
            <a href="" className="mx-1">Go To FAQ Page</a>
            <AiOutlineArrowRight/>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default WriteBlog;
