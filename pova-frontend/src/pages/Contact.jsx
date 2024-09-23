import Footer from "../components/Footer";
import Menubar from "../components/Menubar";
import SocialIcons from "../components/SocialIcons";

function Contactpage() {
  return (
    <div className="font-prime_font">
      <div>
        <Menubar />
      </div>
      <div className=" flex flex-col items-center gap-10">
        <div className="mt-20">
          <p className="font-semibold text-4xl">
            <span className="bg-orange_primary px-2 text-white">Contact</span> Us
          </p>
        </div>
        <div className="lg:flex mb-28 justify-center">
          <div className="mx-20">
            <form action="">
              <div className="flex flex-col lg:flex-row">
                <input type="text"  placeholder="Name" className="border-contact_input  py-4 px-8 border-2 mb-7 mr-7 rounded-md"/>
                <input type="Email" placeholder="Email" className="border-contact_input py-4 px-8  border-2 rounded-md"/>
              </div>
              <div className="my-5 border-contact_input py-4 border-2 rounded-md">
                <input type="text" className="pl-8" placeholder="Subject" />
              </div>
              <div>
                <textarea placeholder="Type Your Message" cols="65" rows="8" name="" id="" className="border-contact_input pl-8 py-4 border-2 rounded-md"></textarea>
              </div>
              <button className="bg-orange_primary mt-4 text-white p-3 rounded-lg">Send message</button>
            </form>
          </div>
          <div className="w-1/4">
            <p className="mb-16">
              Dynamically underwhelm integrated outsourcing via timely models.
              Rapidiously reconceptualize visionary imperatives without.
            </p>
            <div>
              <p className="mb-3">info.@pova.com</p>
              <p className="mb-3">+233000000000</p>
              <p className="mb-9">Accra, Ghana</p>
            </div>
            <div>
              <SocialIcons/>
            </div>
          </div>
        </div>
      </div>
      <div className="general-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Contactpage;
