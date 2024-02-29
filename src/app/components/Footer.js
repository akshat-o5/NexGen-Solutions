import Link from 'next/link';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-purple-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">NexGen Solutions</h2>
            <p className="mt-2">Your one-stop solution for digital needs</p>
          </div>
          <div className="flex mt-4 md:mt-0">
            <Link href="/privacypolicy" className="mr-4 hover:text-gray-900">Privacy Policy</Link>
            <Link href="/tnc" className="mr-4 hover:text-gray-900">Terms & Conditions</Link>

          </div>
          <div className="flex mt-4 md:mt-0">
            <Link href="#" className="mr-4 text-xl hover:text-blue-400"><FaLinkedin /></Link>
            <Link href="#" className="text-xl hover:text-pink-400"><FaInstagram /></Link>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm">&copy; {new Date().getFullYear()} NextGen Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
