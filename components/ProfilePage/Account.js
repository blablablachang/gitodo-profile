import React from 'react';
import ProfileHome from './ProfileHome';
import AccountContent from './ProfileContent/AccountContent';

export default class Profile extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    
    return(
      <>
      <div className="grid grid-cols-7">
        <div className="col-start-2 col-span-1">
          <ProfileHome></ProfileHome>
        </div>
        <div className="col-start-3 col-end-6 col-span-4 sm:pt-40">
          <AccountContent></AccountContent>
        </div>
        <div className="col-start-6 sm:pt-40">
        <img src="https://www.w3schools.com/html/pic_trulli.jpg" className="rounded-full h-52 w-52 flex"></img>
        <button  className='text-center rounded-lg border-3 border-black-700 bg-white pt-2 pb-2 pl-3 pr-3 mt-5 ml-16 font-semibold hover:bg-gray-200 '>Upload</button>
        </div>   
      </div>
        
      </>
    );
  }
}