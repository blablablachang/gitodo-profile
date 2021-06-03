import React from 'react';
import Link from 'next/link';

export default class Profile extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    
    return(
      <>
        <div className="col-start-2 col-span-1 sm:pt-40 pt-32 ml-5 sm:w-44 w-auto mr-5">
          <nav className='container flex-col flex bg-white shadow rounded-t-lg rounded-b-lg'>
            <Link href='/account'>
              <a className="rounded-t-lg border-b-2 border-gray-100 bg-white font-semibold hover:bg-gray-200 hover:text-black p-3 text-left">
                  Profile & Account
              </a>
            </Link>
            <Link href='/theme'>
              <a className="border-b-2 border-gray-100 bg-white font-semibold hover:bg-gray-200 hover:text-black p-3 text-left">
                    Theme
              </a>
            </Link>
            <Link href='/notification'>
              <a className="border-b-2 border-gray-100 bg-white font-semibold hover:bg-gray-200 hover:text-black p-3 text-left">
                  Notification
              </a>
            </Link>
            <Link href='/'>
              <a className="rounded-t-lg border-b-2 border-gray-100 bg-white font-semibold hover:bg-gray-200 hover:text-black p-3 text-left">
                  Log Out
              </a>
            </Link>
          </nav>
        </div>
          
      
      </>
    );
  }
}