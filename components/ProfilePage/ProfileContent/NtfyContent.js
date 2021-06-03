import React from 'react';

export default class AccountContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {open: false};
  }

  render() {
    
    let color = 'red';

    return (
      <>
      <h1 className="font-bold pl-3 pr-3 pb-3 text-xl">Notification</h1>
      <hr></hr>
        <div className='container shadow rounded-lg p-4 my-3 flex-row flex items-center cursor-default bg-white max-w-xl w-auto'>
          <div className={`ml-5 h-4 w-0.5 bg-${color}-500 ring-2 ring-${color}-500`}></div>
          <span className='ml-5 font-semibold overflow-hidden'>Username</span>
          <div className='flex-grow' />
          <button className='text-center rounded-lg border-3 border-black-700 bg-white pl-3 pr-3 w-20 font-semibold hover:bg-gray-200 '>Edit</button>
        </div>

      </>
    )
  }

  }