import Image from "next/image";
import Navbar from "./components/Navbar";
import Hire from "./components/Hire";
import About from "./components/About";
import Connect from "./components/Connect";


export default function Home() {
  return (
    <main>
      <div>
        <Navbar heading="Elevate Your Business with NexGen Solutions" content="Experience the difference with NexGen Solutions. Let's embark on this journey together and unlock the full potential of your business."/>
      </div>
      <div className="my-5 bg-gray-200">
        <Hire/>
      </div>
      <hr />
      <div className="my-5 bg-gray-200">
        <About/>
      </div>
      <hr />
      <div className="my-5 bg-gray-200">
        <Connect/>
      </div>
      
      
    </main>
  );
}
