import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillPinterest,
  AiFillTwitterCircle,
  AiFillTwitterSquare,
  AiOutlineTwitter,
} from "react-icons/ai";
import Logo from "./Logo";
import SocialIcons from "./SocialIcons";

function Footer() {
  return (
    <div className="">
      <div className="text-center flex flex-col md:flex-row lg:justify-evenly justify-center items-center">
        <div className="w-52 text-center flex flex-col items-center md:flex-row md:items-start">
          <Logo />
          <p className="my-4">
            Did you come here for something in particular or just general Riker
          </p>
        </div>
        <div className="my-6">
          <h4 className="font-semibold">Blogs</h4>
          <div className="text-gray-400 flex flex-col">
            <a href="" className="my-1">
              Travel
            </a>
            <a href="" className="my-1">
              Technology
            </a>
            <a href="" className="my-1">
              Lifestyle
            </a>
            <a href="" className="my-1">
              Fashion
            </a>
            <a href="" className="my-1">
              Business
            </a>
          </div>
        </div>
        <div className="my-6">
          <h4 className="font-semibold">Quicks Links</h4>
          <div className="flex flex-col text-gray-400">
            <a href="" className="my-1">
              FAQ
            </a>
            <a href="" className="my-1">
              Terms & Conditions
            </a>
            <a href="" className="my-1">
              Support
            </a>
            <a href="" className="my-1">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="flex flex-col mx-4">
          <h4 className="font-semibold">Subscribe For Newsletter</h4>
          <div className="mt-6">
            <form action="">
              <input type="email" placeholder="Your Email" className="bg-cyan-100 rounded lg:rounded-l p-2" />
              <button className="bg-orange_primary text-white p-2 lg:rounded-r rounded-md lg:w-24 w-56 my-4">
                Subscribe
              </button>
            </form>
          </div>
          <div className="my-5">
            <div className="flex">
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-24">
        <div className="w-3/4 h-1 bg-gray-200 my-5"></div>
        <div className="font-semibold text-gray-400">
          Designed & Developed by Team POVA
        </div>
      </div>
    </div>
  );
}

export default Footer;
