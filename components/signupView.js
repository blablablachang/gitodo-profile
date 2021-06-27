import React from 'react';
import {signIn} from '../api/user';
import { Button } from 'reactstrap';
import Router from 'next/router';
import {connect} from 'react-redux';
import {loginSuccess} from '../redux/actions/loginAction';

let qs = require('qs');

class SignupView extends React.Component{
  static getInitialProps() {}

  constructor(props) {
    super(props);

    this.state = {
      account: '',
      password: '',
      name: '',
      avatar_url: 'empty',
      email: '',
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleAccChange = this.handleAccChange.bind(this);
    this.handleMailChange = this.handleMailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return(
      <>
        <form onSubmit={this.handleSubmit}>
          <div className='sm:top-20 top-16 lg:right-7 right-2 lg:left-80 left-20 px-10 absolute w-auto'>
            <div className='container flex flex-row mx-auto items-center'>
              <h1 className='text-2xl font-semibold'></h1>
              <div className='flex-grow' />
            </div>
          </div>
          <div className='sm:pt-12 pt-20 lg:ml-40 lg:mr-10 md:ml-20 ml-1 mr-1 p-5'>
            <div className='container flex flex-col shadow bg-white rounded-lg py-5'>
              <h1 className='text-2xl font-semibold mx-auto my-5'>Get yourself an account!</h1>
              <div className='container flex flex-col ring-2 ring-gray-200 mx-auto sm:w-96 w-auto rounded-lg p-2 mb-5'>
                <span className='ml-5 my-2'>Account</span>
                <input type='text' className='text-left mx-5 my-3 bg-white border-gray-200 border-b-2 p-1 outline-none focus:outline-none hover:border-red-200 focus:border-red-500 cursor-auto focus:placeholder-transparent' 
                value={this.state.account} onChange={this.handleAccChange} required></input>
                <span className='ml-5 my-2'>Password</span>      
                <input type='password' className='text-left mx-5 my-3 bg-white border-gray-200 border-b-2 p-1 outline-none focus:outline-none hover:border-red-200 focus:border-red-500 cursor-auto focus:placeholder-transparent' 
                value={this.state.password} onChange={this.handlePassChange} required></input>
                <span className='ml-5 my-2'>Email</span>      
                <input type='text' className='text-left mx-5 my-3 bg-white border-gray-200 border-b-2 p-1 outline-none focus:outline-none hover:border-red-200 focus:border-red-500 cursor-auto focus:placeholder-transparent' 
                value={this.state.email} onChange={this.handleMailChange} required></input>
                <span className='ml-5 my-2'>Username</span>      
                <input type='text' className='text-left mx-5 my-3 bg-white border-gray-200 border-b-2 p-1 outline-none focus:outline-none hover:border-red-200 focus:border-red-500 cursor-auto focus:placeholder-transparent' 
                value={this.state.name} onChange={this.handleNameChange} required></input>
                <Button className='ring-2 ring-blue-500 mx-5 my-2 rounded-md py-2 bg-blue-200 text-blue-800 hover:bg-blue-600 hover:text-white'>Sign in</Button>
              </div>
              <p className='text-sm text-gray-500 sm:w-96 text-center mx-auto sm:px-1 px-5'>Sign up to GitoDo means you agree to GitoDo&apos;s Terms of Service and
              acknowledge that GitoDo&apos;s Privacy Policy applies to you.</p>
            </div>
          </div>
        </form>
      </>
    );
  }

  handleAccChange(event) {
    this.setState({account: event.target.value});
  }

  handlePassChange(event) {
    this.setState({password: event.target.value});
  }

  handleMailChange(event) {
    this.setState({email: event.target.value});
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }
  
  handleSubmit(event) {
    /* TODO: add wrong login  */

    let data = qs.stringify({
      'account': this.state.account,
      'password': this.state.password,
      'email': this.state.email,
      'name': this.state.name,
      'avatar_url': 'http://140.114.91.242:3000/upload_1df0a74177f39b7bb53160b68e500564.jpg',
    });
    signIn(data).then(() => {
      Router.push({
        pathname: '/login',
      }, `/login`);
    }).catch(err => {
      console.error('Error while signUp', err);
      window.location.reload();
    });
    event.preventDefault();
  }
}

const mapStateToProps = state => ({
  userId: state.login.userId
});

const mapDispatchToProps = {
  loginSuccess: loginSuccess
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupView);