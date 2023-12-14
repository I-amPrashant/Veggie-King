import React from 'react'
import logo from "../assets/icons/logo.svg"
import twitter from "../assets/icons/twitter-icon.svg"
import facebook from "../assets/icons/facebook-icon.svg"
import instagram from "../assets/icons/instagram-icon.svg"

export default function Footer({scrollToSection}) {
  return (
    <>
    <div className='px-3 pt-6 pb-10 sm:px-8 grid grid-cols-1 sm:grid-cols-3 bg-[#E0E0E0] gap-8'>
            <div id="logo_wrapper">
                <img src={logo} alt="logo_pic"/>
            </div>

            <div id="link_wrapper">
                    <ul className='list-none flex flex-col md:flex-row gap-4 tracking-wider'>
                        <li className='font-semibold text-base uppercase cursor-pointer'><a onClick={()=> scrollToSection('about')}>about us</a></li>
                        <li className='font-semibold text-base uppercase cursor-pointer'><a onClick={()=> scrollToSection('menu')}>menu</a></li>
                        <li className='font-semibold text-base uppercase cursor-pointer'><a onClick={()=> scrollToSection('contact')}>contact</a></li>
                    </ul>
            </div>

            <div id="icon_side" className='flex flex-col gap-5'>
                    <p className='text-gray-600'>Stay up to date with our new openings, upcoming events, seasonal specials and promotions. Check our socials</p>
                    <div className='flex gap-4'>
                        <img src={twitter} alt="twitter_icon" />
                        <img src={facebook} alt="facebook_icon" />
                        <img src={instagram} alt="instagram_icon" />
                    </div>
            </div>
    </div>

    <div id="copyright" className=' bg-[#E0E0E0] border-t-2 border-gray-600 border-opacity-20 py-5 px-3 sm:px-16 text-gray-600'>
    © 2023 The Veggie King
    </div>
    </>
  )
}
