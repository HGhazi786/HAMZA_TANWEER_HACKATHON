import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLocationArrow
} from "react-icons/fa";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import Link from 'next/link';
import Image from "next/image";

export default function Footers() {
  return (
    <div className="bg-brown text-orange-50 font-serif bottom-0 relative">
      <div className="py-5 md:mx-24 lg:mx-24 xl:mx-24 mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-x-32 gap-y-8">
        <div className="mt-8">
          <Link href={"/"}>
            <Image src="/logo.png" alt="logo" width={200} height={100} />
          </Link>
        </div>
        <div>
          <h1 className="text-xl font-bold py-4">Our message</h1>
          <p>
            Welcome to our bakery, where sweet delights await. Indulge in our
            crafted treats made with love. Thank you for choosing us to be a
            part of your moments and celebrations.
          </p>
          <div className="flex text-4xl py-4 space-x-4">
            <Link href={"#"}>
              <FaFacebookF className="bg-orange-50 text-brown rounded-full p-2 hover:bg-orange-200" />
            </Link>
            <Link href={"#"}>
              <FaInstagram className="bg-orange-50 text-brown rounded-full p-2 hover:bg-orange-200" />
            </Link>
            <Link href={"#"}>
              <FaYoutube className="bg-orange-50 text-brown rounded-full p-2 hover:bg-orange-200" />
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold py-4">Opening Hours</h1>
          <ul>
            <li className="flex justify-between">
              <p>Monday</p>
              <p>11:00 21:00</p>
            </li>
            <li className="flex justify-between">
              <p>Tuesday</p>
              <p>11:00 21:00</p>
            </li>
            <li className="flex justify-between">
              <p>Wednesday</p>
              <p>11:00 21:00</p>
            </li>
            <li className="flex justify-between">
              <p>Thursday</p>
              <p>11:00 21:00</p>
            </li>
            <li className="flex justify-between">
              <p>Friday</p>
              <p>11:00 21:00</p>
            </li>
            <li className="flex justify-between">
              <p>Saturday</p>
              <p>11:00 21:00</p>
            </li>
            <li className="flex justify-between">
              <p>Sunday</p>
              <p>11:00 21:00</p>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-bold py-4">Contact Us</h1>
          <ul className="space-y-4">
            <li>
              <FiPhoneCall className="inline-block mr-2" />
              <span>0 800 123 456 88</span>
            </li>
            <li>
              <FaLocationArrow className="inline-block mr-2" />
              <span>30 Hampton Road Southampton, NY 11968</span>
            </li>
            <li>
              <FiMail className="inline-block mr-2" />
              info@ovenSecreat.com
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center text-sm p-4 ">
        Copyright © 2023 Bakery Jamstack Theme by Hamza Tanweer
      </p>
    </div>
  );
}
