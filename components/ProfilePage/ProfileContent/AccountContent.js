import React from 'react';
import {connect} from 'react-redux';
import Link from 'next/link';
import {getUser, modifyUser} from '../../../api/user';

let qs = require('qs');
class AccountContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      account: '',
      email: '',
      name: '',
      password: '',
      pwdShow: false,
    };

    // getUser
    getUser(this.props.userId).then(userId => {
      this.setState({
        account: userId.account, 
        name: userId.name, 
        email: userId.email
    })
    }).catch(err => {
        console.error('Error while getUser', err);
    });
    this.handlePwdExpand = this.handlePwdExpand.bind(this);

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  render() {
    let color = 'red';
    let subcolor = 'blue';
    let data = qs.stringify({
      'account': this.state.account,
      'email': this.state.email,
      'name': this.state.name,
      'password': this.state.password
    })
	console.log(this.props.userId);

    return (
      <>
      {/* header */}
      <form onSubmit={this.handleSubmit}>
      <h1 className="font-bold pl-3 pr-3 pb-3 text-xl">Profile & Account</h1>
      <hr></hr>
      {/* Account Block */}
      <div className='container shadow rounded-lg p-4 my-3 flex-col flex items-center cursor-default bg-white max-w-xl w-auto'>
          <div className="container flex-row flex items-center">
            <div className={`ml-5 h-4 w-0.5 bg-${color}-500 ring-2 ring-${color}-500`}></div>
            <span className='ml-5 font-semibold overflow-hidden'>
              Account: {this.state.account}</span>
            <div className='flex-grow' />
          </div> 
        </div>

      {/* UserName Block */}
        <div className='container shadow rounded-lg p-4 my-3 flex-col flex items-center cursor-default bg-white max-w-xl w-auto'>
          <div className="container flex-row flex items-center">
            <div className={`ml-5 h-4 w-0.5 bg-${color}-500 ring-2 ring-${color}-500`}></div>
            <span className='ml-5 font-semibold overflow-hidden'>
              Username: {this.state.name}</span>
            <div className='flex-grow' />
          </div>
          <div className=' my-2.5 container flex-col flex items-center bg-white py-2'>
            <div className='container ring-2 ring-gray-200 rounded-lg p-3 px-4 my-2 flex-row flex items-center cursor-default bg-white'>
              <label className="ml-6 font-medium overflow-hidden mr-2 w-60">New UserName</label>
              <input className='text-center sm:mr-10 mx-3 sm:w-60 w-32 bg-white border-gray-200 border-b-2 p-1 outline-none focus:outline-none hover:border-red-200 focus:border-red-500 cursor-auto focus:placeholder-transparent' placeholder='Enter your username'  
              nameChange={this.handleNameChange} onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
          ></input>
            </div>
         </div>
        
        </div>

        {/* Email Part */}
        <div className='container shadow rounded-lg p-4 my-3 flex-col flex items-center cursor-default bg-white max-w-xl w-auto'>
          <div className="container flex-row flex items-center">
            <div className={`ml-5 h-4 w-0.5 bg-${color}-500 ring-2 ring-${color}-500`}></div>
            <span className='ml-5 font-semibold overflow-hidden'>Email: </span>
            <div className='flex-grow' />         
            </div>
            <div className=' my-2.5 container flex-col flex items-center bg-white py-2'>
            <div className='container ring-2 ring-gray-200 rounded-lg p-3 px-4 my-2 flex-row flex items-center cursor-default bg-white'>
              <label className="ml-6 font-medium overflow-hidden mr-2 w-60">New Email</label>
              <input className='text-center sm:mr-10 mx-3 sm:w-60 w-32 bg-white border-gray-200 border-b-2 p-1 outline-none focus:outline-none hover:border-red-200 focus:border-red-500 cursor-auto focus:placeholder-transparent' 
            emailChange={this.handleEmailChange} placeholder='Enter your email' onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
          ></input>
            </div>
         </div>
        </div>

        {/* Password Part */}
        <div className='container shadow flex-col rounded-lg p-4 my-3 flex items-center cursor-default bg-white max-w-xl w-auto'>
          <div className="container flex-row flex items-center">
            <div className={` ml-5 h-4 w-0.5 bg-${color}-500 ring-2 ring-${color}-500`}></div>
            <span className='ml-5 font-semibold overflow-hidden'>Password</span>
            <div className='flex-grow' />
            <button  className='text-center rounded-lg border-3 focus:outline-none outline-none border-black-700 bg-gray-300 text-gray-600 p-2 font-semibold hover:bg-gray-600 hover:text-white' onClick={this.handlePwdExpand}>
            {this.state.pwdShow ? "Cancel" : "Change Password"}</button>
          </div>
           { this.state.pwdShow &&
            <div className='container flex-col flex items-center bg-white py-2'>
            {
              <div className='my-2.5 container ring-2 ring-gray-200 rounded-lg p-3 px-4 flex-row flex items-center cursor-default bg-white'>
                <label className="ml-6 font-medium overflow-hidden mr-2 w-60" for="curpwd">Current Password</label>
                <input className='text-center sm:mr-10 mx-3 sm:w-60 w-32 bg-white border-gray-200 border-b-2 p-1 outline-none focus:outline-none hover:border-red-200 focus:border-red-500 cursor-auto focus:placeholder-transparent' 
                placeholder='Current Password' onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                ></input>              
              </div>
            }
            {
              <div className='my-2.5 container ring-2 ring-gray-200 rounded-lg p-3 px-4 flex-row flex items-center cursor-default bg-white'>
                <label className="ml-6 font-medium overflow-hidden mr-2 w-60 " for="newpwd">New Password</label>
                <input className='text-center sm:mr-10 mx-3 sm:w-60 w-32 bg-white border-gray-200 border-b-2 p-1 outline-none focus:outline-none hover:border-red-200 focus:border-red-500 cursor-auto focus:placeholder-transparent' 
                placeholder='New Password' onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                ></input>              
              </div>
            }
            {
              <div className='my-2.5 container ring-2 ring-gray-200 rounded-lg p-3 px-4 flex-row flex items-center cursor-default bg-white'>
                <label className="ml-6 font-medium overflow-hidden mr-2 w-60" for="newpwd">Confirm New Password</label>
                <input className='text-center sm:mr-10 mx-3 sm:w-60 w-32 bg-white border-gray-200 border-b-2 p-1 outline-none focus:outline-none hover:border-red-200 focus:border-red-500 cursor-auto focus:placeholder-transparent' 
                placeholder='New Password' onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                ></input>              
              </div>
            }
            {
              <div className="mr-auto ml-3">
              <span className='cursor-pointer text-blue-700 hover:underline sm:text-base text-xs block'>Forgot Password?</span>
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
        <Link href='/profile/account'>
          <button className='ring-2 ring-red-600 text-red-800 bg-red-200 hover:bg-red-600 hover:text-white rounded-lg shadow-md py-2 px-2.5 focus:outline-none my-3 ml-5'>
            <a>
              <span>Discard</span>
            </a>
          </button> 
        </Link>
      </form>
      </>
    );
  }

  handlePwdExpand () {
    this.setState({ pwdShow: !this.state.pwdShow, });
  }

  handleNameChange(value){
    this.setState({name: value,});
  }

  handleAccountChange(event){
    this.accEdited(event.target.value);
  }
  handleAccEdit(value){
    this.setState({account: value});
  }
  handleEmailChange(value){
    this.setState({ email: value,});

  }
  handleSubmit(event) {
    if(this.state.name == '' || this.state.account == '' || this.state.email == '')
      alert('You should enter some text');
    else {
      let data = qs.stringify({
        'account': `${this.state.account}`,
        'email': `${this.state.email}`,
        'name': `${this.state.name}`,
        'avatar_url': '',
        'password': `${this.state.password}`,
      })
      // console.log(data)
      modifyUser(this.props._id, data).then(() => {
        console.log('modify success')
      }).catch(err => {
        console.error('Error while change', err);
        window.location.reload();
      });
    }
    event.preventDefault();
  }
  
}

const mapStateToProps = state => ({
  userId: state.login.userId
});

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountContent);  // handleSubmit(event) {

{/* <div className='container flex-col flex items-center bg-white py-2'>
          
  <div className='container ring-2 ring-gray-200 rounded-lg p-3 px-4 my-2 flex-row flex items-center cursor-default bg-white'>
    <div className={` ml-5 h-4 w-0.5 bg-${subcolor}-500 ring-2 ring-${subcolor}-500`}></div>
    <label className="ml-5 font-medium overflow-hidden mr-2 w-60" for="curAcc">New Account</label>
    </div>
            
</div> */}

  {/* Bio Description */}
  {/* <div className='container shadow rounded-lg p-4 my-3 flex items-center cursor-default bg-white max-w-xl w-auto'>
    <div className="grid grid-rows-5">
      <div className={`row-span-1 row-start-1 ml-5 h-4 w-0.5 bg-${color}-500 ring-2 ring-${color}-500`}></div>
      <span className='row-span-1 row-start-1 ml-5 font-semibold overflow-hidden'>BIO Description (Optional)</span>
      <div className='flex-grow' />
    
      <div className="grid row-span-4">
      <div className=' flex sm:flex-row flex-col p-3'>
      <textarea type='textarea' className='container text-left rounded-md mx-1 sm:w-96 w-auto bg-white border-gray-200 border-2 pr-2 pl-2 pb-1 pt-1 outline-none focus:outline-none hover:border-red-200 focus:border-red-500 cursor-auto focus:placeholder-transparent' 
        placeholder='Write something about yourself...' 
      ></textarea>
      </div>
    </div>
    </div>
  </div> */}

  {/* Phone Part */}
  {/* <div className='container shadow rounded-lg p-4 my-3 flex-col flex items-center cursor-default bg-white max-w-xl w-auto'>
    <div className="container flex-row flex items-center">
      <div className={`ml-5 h-4 w-0.5 bg-${color}-500 ring-2 ring-${color}-500`}></div>
      <span className='ml-5 font-semibold overflow-hidden'>Connected Phone:  {phoneNumber}</span>
      <div className='flex-grow' />
      <button className='text-center rounded-lg border-3 focus:outline-none outline-none border-black-700 bg-gray-300 text-gray-600 pr-2 pl-2 pb-1 pt-1 ml-5 font-semibold hover:bg-gray-600 hover:text-white '
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
  </div> */}