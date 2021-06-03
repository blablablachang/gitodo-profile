import React from 'react';
import { BiEdit } from 'react-icons/bi';
import Link from 'next/link';
/* TODO: need link api*/
export default class AccountContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    
    let color = 'red';
    let emailAddress = "xxx@gmail.com";
    let phoneNumber = "+886 912-345-678";


    return (
      <>
      <h1 className="font-bold pl-3 pr-3 pb-3 text-xl">Profile & Account</h1>
      <hr></hr>
        <div className='container shadow rounded-lg p-4 my-3 flex-row flex items-center cursor-default bg-white max-w-xl w-auto'>
          <div className={`ml-5 h-4 w-0.5 bg-${color}-500 ring-2 ring-${color}-500`}></div>
          <span className='ml-5 font-semibold overflow-hidden'>Username</span>
          <div className='flex-grow' />
          <button className='text-center rounded-lg border-3 border-black-700 bg-gray-300 text-gray-600 p-1 w-20 font-semibold hover:bg-gray-600 hover:text-white'><BiEdit className="inline pr-1" />Edit</button>
        </div>

        <div className='container shadow rounded-lg p-4 my-3 flex items-center cursor-default bg-white max-w-xl w-auto'>
          <div className="grid grid-rows-5">
            <div className={`row-span-1 row-start-1 ml-5 h-4 w-0.5 bg-${color}-500 ring-2 ring-${color}-500`}></div>
            <span className='row-span-1 row-start-1 ml-5 font-semibold overflow-hidden'>BIO Description (Optional)</span>
            <div className='flex-grow' />
          
            <div className="grid row-span-4">
            <div className=' flex sm:flex-row flex-col p-3'>
            <textarea type='textarea' className='text-left rounded-md mx-1 sm:w-96 w-64 bg-white border-gray-200 border-2 pr-2 pl-2 pb-1 pt-1 outline-none focus:outline-none hover:border-red-200 focus:border-red-500 cursor-auto focus:placeholder-transparent' 
              placeholder='Type your note' 
            ></textarea>
            </div>
          </div>
          </div>
        </div>

        <div className='container shadow rounded-lg p-4 my-3 flex-row flex items-center cursor-default bg-white max-w-xl w-auto'>
          <div className={`ml-5 h-4 w-0.5 bg-${color}-500 ring-2 ring-${color}-500`}></div>
          <span className='ml-5 font-semibold overflow-hidden'>Birthday (Optional)</span>
          <div className='flex-grow' />
        </div>

        <div className='container shadow rounded-lg p-4 my-3 flex-row flex items-center cursor-default bg-white max-w-xl w-auto'>
          <div className={`ml-5 h-4 w-0.5 bg-${color}-500 ring-2 ring-${color}-500`}></div>
          <span className='ml-5 font-semibold overflow-hidden'>Email: {emailAddress}</span>
          <div className='flex-grow' />
          <button type='submit' className='text-center rounded-lg border-3 border-black-700 bg-gray-300 text-gray-600 pr-2 pl-2 pb-1 pt-1 ml-5 font-semibold hover:bg-gray-600 hover:text-white'><BiEdit className="inline pr-1" />Change</button>
        </div>

        <div className='container shadow rounded-lg p-4 my-3 flex-row flex items-center cursor-default bg-white max-w-xl w-auto'>
          <div className={`ml-5 h-4 w-0.5 bg-${color}-500 ring-2 ring-${color}-500`}></div>
          <span className='ml-5 font-semibold overflow-hidden'>Connected Phone: {phoneNumber}</span>
          <div className='flex-grow' />
          <button className='text-center rounded-lg border-3 border-black-700 bg-gray-300 text-gray-600 pr-2 pl-2 pb-1 pt-1 ml-5 font-semibold hover:bg-gray-600 hover:text-white '><BiEdit className="inline pr-1" />Change</button>
        </div>

        <div className='container shadow rounded-lg p-4 my-3 flex-row flex items-center cursor-default bg-white max-w-xl w-auto'>
          <div className={`ml-5 h-4 w-0.5 bg-${color}-500 ring-2 ring-${color}-500`}></div>
          <span className='ml-5 font-semibold overflow-hidden'>Password</span>
          <div className='flex-grow' />
          <button  className='text-center rounded-lg border-3 border-black-700 bg-gray-300 text-gray-600 p-2 font-semibold hover:bg-gray-600 hover:text-white '>Change Password</button>
        </div>
        <button type='submit' className='ring-2 ring-green-600 bg-green-200 hover:bg-green-600 text-green-800 hover:text-white rounded-lg shadow-md p-2 focus:outline-none my-3' onClick={this.handleSubmit}>
          <span>Save</span>
        </button>
        <Link href='/'>
          <button className='ring-2 ring-red-600 text-red-800 bg-red-200 hover:bg-red-600 hover:text-white rounded-lg shadow-md py-2 px-2.5 focus:outline-none my-3 ml-5'>
            <a>
              <span>Discard</span>
            </a>
          </button>
        </Link>
      
      
      </>
    )
  }
  }