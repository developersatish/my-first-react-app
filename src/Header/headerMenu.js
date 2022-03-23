
import { Link } from "react-router-dom";
import { Popover } from '@headlessui/react';
import DropdownMenu from './dropdown-menu';
export default function HeaderMenu() {
  return (
    <>
      <Popover className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <Link to="/" className='text-base font-medium text-gray-500 hover:text-gray-900'>Home</Link>
            <Link to="appointment" className='text-base font-medium text-gray-500 hover:text-gray-900'>Appointment</Link>
            <Link to="about" className='text-base font-medium text-gray-500 hover:text-gray-900'>About</Link>
            <Link to="contact" className='text-base font-medium text-gray-500 hover:text-gray-900'>Contact</Link>
            <Link to="event" className='text-base font-medium text-gray-500 hover:text-gray-900'>Event</Link>
            <Link to="gitprofile" className='text-base font-medium text-gray-500 hover:text-gray-900'>Git Profile</Link>
            <DropdownMenu />
          </div>
        </div>
      </Popover>
    </>
  )
}
