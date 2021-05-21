import React from 'react';
import { Btn } from './Btn';

export default class Profile extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <>
        <div className="sm:pt-40 pt-32 sm:ml-24 ml-5 sm:w-44 w-auto mr-5">
          <nav className='container flex-col flex bg-white shadow rounded-t-lg rounded-b-lg'>
            <Btn text="Account" multiclass='rounded-t-lg border-b-2'/>
            <Btn text="Backup & Recover" target="nav_bak" multiclass='border-b-2'/>
            <Btn text="Theme" target="nav_theme" multiclass='border-b-2' />
            <Btn text="Feedback" target = "nav_feedback" multiclass='border-b-2'/>
            <Btn text="About" target="nav_about" multiclass='border-b-2'/>
            <Btn text="Log Out" multiclass='rounded-b-lg'/>
          </nav>
        </div>
      </>
    );
  }
}