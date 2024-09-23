import { FaArrowRight } from "react-icons/fa";
import Footer from "../components/Footer";
import Menubar from "../components/Menubar";
import { useState } from "react";

function FAQPage() {
  const [faqIcon, setFaqIcon] = useState('faq-icon')
  return (
    <div className="font-prime_font">
      <div>
        <Menubar />
      </div>
      <div>
        <div>
          <div className="faq-heading">
            <p>Frequently Asked Questions</p>
          </div>
          <div className="mx-4 text-justify">
            <p className="text-sm">
              Did you come here for something in particular or just general
              Riker-bashing? And blowing
            </p>
          </div>
        </div>
        <div>
          <div>
            <div className="flex bg-custom_blue m-5 p-1">
              <p>is there have any option for write blog?</p>
              <div onClick={()=>setFaqIcon('faq-icon-b')} className="flex justify-center items-center w-fit">
                <div className={faqIcon}></div>
                <div className="faq-icon-two"></div>
              </div>
            </div>
            <div></div>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="flex flex-col items-center">
          <p>Can't Find An Answer To Your Question?</p>
          <div className="flex items-center my-6 w-fit border-orange_primary border-2 rounded-md py-2 px-5 text-orange_primary">
            <span className="ml-2">Contact Us</span> <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="general-footer">
        <Footer />
      </div>
    </div>
  );
}

export default FAQPage;
