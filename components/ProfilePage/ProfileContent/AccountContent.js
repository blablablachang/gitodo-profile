import React from 'react';
import { BiEdit } from 'react-icons/bi';
import Link from 'next/link';

export default class AccountContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pwdShow: false,
      admShow: false,
      emailShow: false,
      phoneShow: false,
    };
    this.handlePwdExpand = this.handlePwdExpand.bind(this);
    this.handleAdmExpand = this.handleAdmExpand.bind(this);
    this.handleEmailExpand = this.handleEmailExpand.bind(this);
    this.handlePhoneExpand = this.handlePhoneExpand.bind(this);
  }
  handlePwdExpand () {
    this.setState({ pwdShow: !this.state.pwdShow, });
  }
  handleAdmExpand () {
    this.setState({ admShow: !this.state.admShow, });
  }
  handleEmailExpand () {
    this.setState({ emailShow: !this.state.emailShow, });
  }
  handlePhoneExpand () {
    this.setState({ phoneShow: !this.state.phoneShow, });
  }

  render() {
    
    let color = 'red';
    let userName = "hey-yo";
    let userEmail = "xxx@gmail.com";
    let phoneNumber = "+886 912-345-678";


    return (
      <>
      {/* header */}
      <h1 className="font-bold pl-3 pr-3 pb-3 text-xl">Profile & Account</h1>
      <hr></hr>
      {/* UserName Block */}
        <div className='container shadow rounded-lg p-4 my-3 flex-col flex items-center cursor-default bg-white max-w-xl w-auto'>
          <div className="container flex-row flex items-center">
            <div className={`ml-5 h-4 w-0.5 bg-${color}-500 ring-2 ring-${color}-500`}></div>
            <span className='ml-5 font-semibold overflow-hidden'>Username:  {userName}</span>
            <div className='flex-grow' />
            <button className='text-center rounded-lg border-3 border-black-700 bg-gray-300 text-gray-600 p-1 w-20 font-semibold hover:bg-gray-600 hover:text-white'
            onClick={this.handleAdmExpand}><BiEdit className="inline pr-1" />Edit</button>
          </div>
        { this.state.admShow &&
            <div className='container flex-col flex items-center bg-white py-2'>
            {
              <div className='container ring-2 ring-gray-200 rounded-lg p-3 px-4 my-2 flex-row flex items-center cursor-default bg-white'>
                <div className={` ml-5 h-4 w-0.5 bg-${color}-500 ring-2 ring-${color}-500`}></div>
                <label className="ml-5 font-medium overflow-hidden mr-2 w-60" for="curpwd">New UserName</label>
                <input className="border-2 rounded-md border-gray-300 ml-3 pl-2" placeholder={userName} id="curpwd" type="text" name="curPwd"></input>
              </div>
            }
            {
              <div className="mr-auto ml-3">
              <button type='submit' className='ring-2 ring-green-600 bg-green-200 hover:bg-green-600 text-green-800 hover:text-white rounded-lg shadow-md pl-2 pr-2 pt-1 pb-1 focus:outline-none my-3' onClick={this.handleSubmit}>
                <span>Change My UserName</span>
              </button>
              </div>
            }
        </div>
        }
        </div>

        {/* Bio Description */}
        <div className='container shadow rounded-lg p-4 my-3 flex items-center cursor-default bg-white max-w-xl w-auto'>
          <div className="grid grid-rows-5">
            <div className={`row-span-1 row-start-1 ml-5 h-4 w-0.5 bg-${color}-500 ring-2 ring-${color}-500`}></div>
            <span className='row-span-1 row-start-1 ml-5 font-semibold overflow-hidden'>BIO Description (Optional)</span>
            <div className='flex-grow' />
          
            <div className="grid row-span-4">
            <div className=' flex sm:flex-row flex-col p-3'>
            <textarea type='textarea' className='text-left rounded-md mx-1 sm:w-96 w-64 bg-white border-gray-200 border-2 pr-2 pl-2 pb-1 pt-1 outline-none focus:outline-none hover:border-red-200 focus:border-red-500 cursor-auto focus:placeholder-transparent' 
              placeholder='Write something about yourself...' 
            ></textarea>
            </div>
          </div>
          </div>
        </div>

        {/* Email Part */}
        <div className='container shadow rounded-lg p-4 my-3 flex-col flex items-center cursor-default bg-white max-w-xl w-auto'>
          <div className="container flex-row flex items-center">
            <div className={`ml-5 h-4 w-0.5 bg-${color}-500 ring-2 ring-${color}-500`}></div>
            <span className='ml-5 font-semibold overflow-hidden'>Email:  {userEmail}</span>
            <div className='flex-grow' />
            <button type='submit' className='text-center rounded-lg border-3 border-black-700 bg-gray-300 text-gray-600 pr-2 pl-2 pb-1 pt-1 ml-5 font-semibold hover:bg-gray-600 hover:text-white'
            onClick={this.handleEmailExpand}><BiEdit className="inline pr-1" />Edit</button>
          </div>
          { this.state.emailShow &&
            <div className='container flex-col flex items-center bg-white py-2'>
            {
              <div className='container ring-2 ring-gray-200 rounded-lg p-3 px-4 my-2 flex-row flex items-center cursor-default bg-white'>
                <div className={` ml-5 h-4 w-0.5 bg-${color}-500 ring-2 ring-${color}-500`}></div>
                <label className="ml-5 font-medium overflow-hidden mr-2 w-60" for="curpwd">New Email</label>
                <input className="border-2 rounded-md border-gray-300 ml-3 pl-2" placeholder={userEmail} id="curpwd" type="text" name="curPwd"></input>
              </div>
            }
            {
              <div className="mr-auto ml-3">
              <button type='submit' className='ring-2 ring-green-600 bg-green-200 hover:bg-green-600 text-green-800 hover:text-white rounded-lg shadow-md pl-2 pr-2 pt-1 pb-1 focus:outline-none my-3' onClick={this.handleSubmit}>
                <span>Change</span>
              </button>
              </div>
            }
        </div>
        }
        </div>

        {/* Phone Part */}
        <div className='container shadow rounded-lg p-4 my-3 flex-col flex items-center cursor-default bg-white max-w-xl w-auto'>
          <div className="container flex-row flex items-center">
            <div className={`ml-5 h-4 w-0.5 bg-${color}-500 ring-2 ring-${color}-500`}></div>
            <span className='ml-5 font-semibold overflow-hidden'>Connected Phone:  {phoneNumber}</span>
            <div className='flex-grow' />
            <button className='text-center rounded-lg border-3 border-black-700 bg-gray-300 text-gray-600 pr-2 pl-2 pb-1 pt-1 ml-5 font-semibold hover:bg-gray-600 hover:text-white '
            onClick={this.handlePhoneExpand}><BiEdit className="inline pr-1" />Change</button>
          </div>
          { this.state.phoneShow &&
            <div className='container flex-col flex items-center bg-white py-2'>
            {
              <div className='container ring-2 ring-gray-200 rounded-lg p-3 px-4 my-2 flex-row flex items-center cursor-default bg-white'>
                <div className={` ml-5 h-4 w-0.5 bg-${color}-500 ring-2 ring-${color}-500`}></div>
                <label className="ml-5 font-medium overflow-hidden mr-2 w-60" for="curpwd">New Connected Phone</label>
                <input className="border-2 rounded-md border-gray-300 ml-3 pl-2" placeholder={phoneNumber} id="curpwd" type="tel" name="curPwd"></input>
              </div>
            }
            {
              <div className="mr-auto ml-3">
              <button type='submit' className='ring-2 ring-green-600 bg-green-200 hover:bg-green-600 text-green-800 hover:text-white rounded-lg shadow-md pl-2 pr-2 pt-1 pb-1 focus:outline-none my-3' onClick={this.handleSubmit}>
                <span>Change</span>
              </button>
              </div>
            }
        </div>
        }
        </div>
        

        {/* Password Part */}
        <div className='container shadow flex-col rounded-lg p-4 my-3 flex items-center cursor-default bg-white max-w-xl w-auto'>
          <div className="container flex-row flex items-center">
            <div className={` ml-5 h-4 w-0.5 bg-${color}-500 ring-2 ring-${color}-500`}></div>
            <span className='ml-5 font-semibold overflow-hidden'>Password</span>
            <div className='flex-grow' />
            <button  className='text-center rounded-lg border-3 border-black-700 bg-gray-300 text-gray-600 p-2 font-semibold hover:bg-gray-600 hover:text-white' onClick={this.handlePwdExpand}>
            {this.state.pwdShow ? "Cancel" : "Change Password"}</button>
          </div>
           { this.state.pwdShow &&
            <div className='container flex-col flex items-center bg-white py-2'>
            {
              <div className='container ring-2 ring-gray-200 rounded-lg p-3 px-4 my-2 flex-row flex items-center cursor-default bg-white'>
                <div className={` ml-5 h-4 w-0.5 bg-${color}-500 ring-2 ring-${color}-500`}></div>
                <label className="ml-5 font-medium overflow-hidden mr-2 w-60" for="curpwd">Current Password</label>
                <input className="border-2 rounded-md border-gray-300 ml-3 pl-2" placeholder="enter current password" id="curpwd" type="password" name="curPwd"></input>
              </div>
            }
            {
              <div className='container ring-2 ring-gray-200 rounded-lg p-3 px-4 my-2 flex-row flex items-center cursor-default bg-white'>
                <div className={` ml-5 h-4 w-0.5 bg-${color}-500 ring-2 ring-${color}-500`}></div>
                <label className="ml-5 font-medium overflow-hidden mr-2 w-60 " for="newpwd">New Password</label>
                <input className="border-2 rounded-md border-gray-300 ml-3 pl-2" placeholder="enter new password" id="newpwd" type="password" name="newPwd"></input>
              </div>
            }
            {
              <div className='container ring-2 ring-gray-200 rounded-lg p-3 px-4 my-2 flex-row flex items-center cursor-default bg-white'>
                <div className={` ml-5 h-4 w-0.5 bg-${color}-500 ring-2 ring-${color}-500`}></div>
                <label className="ml-5 font-medium overflow-hidden mr-2 w-60" for="newpwd">Confirm New Password</label>
                <input className="border-2 rounded-md border-gray-300 ml-3 pl-2" placeholder="confirm new password" id="newpwd" type="password" name="newPwd"></input>
              </div>
            }
            {
              <div className="mr-auto ml-3">
              <button type='submit' className='ring-2 ring-green-600 bg-green-200 hover:bg-green-600 text-green-800 hover:text-white rounded-lg shadow-md pl-2 pr-2 pt-1 pb-1 focus:outline-none my-3' onClick={this.handleSubmit}>
                <span>Save</span>
              </button>
              </div>
            }
        </div>
        }
        </div>

        {/* Account Page Save or Discard */}
        <button type='submit' className='ring-2 ring-green-600 bg-green-200 hover:bg-green-600 text-green-800 hover:text-white rounded-lg shadow-md p-2 focus:outline-none my-3' onClick={this.handleSubmit}>
          <span>Save</span>
        </button>
        <Link href='/profile'>
          <button className='ring-2 ring-red-600 text-red-800 bg-red-200 hover:bg-red-600 hover:text-white rounded-lg shadow-md py-2 px-2.5 focus:outline-none my-3 ml-5'>
            <a>
              <span>Discard</span>
            </a>
          </button>
        </Link>
      
      </>
    );
  }
}