import React from 'react';
import AccountContent from './ProfileContent/AccountContent';

export default class Profile extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    
    return(
      <>
      <div className="lg:ml-40 md:ml-28">
        <div className="lg:ml-40 sm:ml-32 mx-20 w-auto xs:px-10 pt-28 container flex-col flex">
          <AccountContent></AccountContent>
        </div>   
      </div>
        
      </>
    );
  }
}



