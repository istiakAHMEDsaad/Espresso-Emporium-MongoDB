import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';
import footerBanner from '../assets/footer.png';

const Footers = () => {
  return (
    <>
      <footer className=' bg-stone-100 text-base-content p-10 flex flex-col md:flex-row '>
        {/* --> Left Side <-- */}
        <div className='basis-[65%]'>
          <div className='space-y-4'>
            {/* Logo */}
            <img className='w-10' src='/expresso.png' alt='logo' />
            {/* Title */}
            <h2 className='font-rancho md:text-3xl text-2xl text-brown antialiased'>
              Espresso Emporium
            </h2>
            {/* Paragraph */}
            <p className='lg:w-3/4 leading-7 antialiased'>
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            {/* Icons */}
            <div className='flex text-2xl text-brown gap-2'>
              <span>
                <FaFacebook></FaFacebook>
              </span>
              <span>
                <FaTwitter></FaTwitter>
              </span>
              <span>
                <FaInstagram></FaInstagram>
              </span>
              <span>
                <FaLinkedin></FaLinkedin>
              </span>
            </div>

            <p className='font-rancho text-3xl text-brown drop-shadow-md'>
              Get in Touch
            </p>

            <div className='flex flex-col gap-y-2'>
              <p className='flex items-center gap-2 text-brown'>
                <FaPhoneAlt></FaPhoneAlt>+88 01950382372
              </p>
              <p className='flex items-center gap-2 text-brown'>
                <IoMdMail></IoMdMail>istiakahmedsaad.official@gmail.com
              </p>
              <p className='flex items-center gap-2 text-brown'>
                <FaLocationDot></FaLocationDot>72, Wall street, King Road, Dhaka
              </p>
            </div>
          </div>
        </div>

        {/* --> Right Side <-- */}
        <div className='basis-[35%]'>
          <form className='flex flex-col gap-3'>
            <h6 className='font-rancho text-3xl text-brown font-bold'>
              Connect with Us
            </h6>
            <input
              type='text'
              placeholder='Name'
              className='input w-full'
            />
            <input
              type='text'
              placeholder='Email'
              className='input w-full'
            />
            <textarea
              placeholder='Message'
              className='textarea textarea-bordered textarea-lg w-full'
            ></textarea>
            <button className='w-[9rem] py-3 border border-brown rounded-full text-brown hover:bg-brown hover:text-white active:scale-95 transition-all'>Send Message</button>
          </form>
        </div>
      </footer>

      {/* Copy Right */}
      <div className='relative'>
        <img
          className='lg:h-10 h-16 w-full object-cover'
          src={footerBanner}
          alt='footer banner'
        />
        {/*  left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] */}
        <p className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-white w-full text-center'>
          Copyright Istiak Ahmed Saad ! All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footers;
