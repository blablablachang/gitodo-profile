import React from 'react';
import Router from 'next/router'

export default class BranchItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleBranch = this.handleBranch.bind(this);
    this.RGBToHex = this.RGBToHex.bind(this);
  }

  render() {
    /* FIXME: share people and branch from status */
    const {color_RGB, is_main, title} = this.props.Line;
    const branch_color = this.RGBToHex(color_RGB[0], color_RGB[1], color_RGB[2]);
    const stylebranch = {
      backgroundColor: branch_color,
      '--tw-ring-color': branch_color
    }
    let branchFrom = this.props.mother.title;
    if(branchFrom) {
      branchFrom = branchFrom.replace(/ /g, "\u00a0");
    }
    return (
      <>
        <div className='container shadow rounded-lg p-3 py-5 px-4 my-3 sm:flex-row flex-col flex items-center cursor-pointer bg-white' onClick={this.handleBranch}>
          <div className='container flex-row flex items-center'>
            <div className={`sm:ml-5 h-4 w-0.5 ring-2`} style={stylebranch}></div>
            <span className='ml-5 font-semibold overflow-hidden text-lg'>{title}</span>
          </div>
          <div className='sm:flex-grow'/>
          <div className='container flex-row flex items-center mr-0'>
          <div className='sm:flex-grow'/>
          {
            this.props.Line.sharer ?
            (this.props.Line.sharer.length >= 1 && 
            <div className='hover-trigger relative sm:mx-2 mx-1'>
              <span className='material-icons pt-2 text-gray-400 group-hover:text-gray-500'>supervised_user_circle</span>
              {/*<span className='backdrop-filter backdrop-blur-sm bg-opacity-90 rounded-lg p-1 px-2 text-sm bg-gray-800 text-white absolute top-10 right-2 z-10 hover-target'>{this.props.Line.sharer[1-1]}</span>*/}
            </div>) : ''
          }
          {
            this.props.Line.sharer ?
            (this.props.Line.sharer.length >= 2 && 
            <div className='hover-trigger relative sm:mx-2 mx-1'>
              <span className='material-icons pt-2 text-gray-400 group-hover:text-gray-500'>supervised_user_circle</span>
              {/*<span className='backdrop-filter backdrop-blur-sm bg-opacity-90 rounded-lg p-1 px-2 text-sm bg-gray-800 text-white absolute top-10 right-2 z-10 hover-target'>{this.props.Line.sharer[2-1]}</span>*/}
            </div>) : ''
          }
          {
            this.props.Line.sharer ?
            (this.props.Line.sharer.length >= 3 && 
            <div className='hover-trigger relative sm:mx-2 mx-1'>
              <span className='material-icons pt-2 text-gray-400 group-hover:text-gray-500'>supervised_user_circle</span>
              {/*<span className='backdrop-filter backdrop-blur-sm bg-opacity-90 rounded-lg p-1 px-2 text-sm bg-gray-800 text-white absolute top-10 right-2 z-10 hover-target'>{this.props.Line.sharer[3-1]}</span>*/}
            </div>) : ''
          }
          {
            this.props.Line.sharer ?
            (this.props.Line.sharer.length > 3 && 
            <div className='hover-trigger relative sm:mx-2 mx-1'>
              <span className='text-white text-xs bg-gray-400 rounded-full p-1'>+{this.props.Line.sharer.length-3}</span>
            </div>) : ''
          }
          {
            is_main == false &&
            <div className='relative hover-trigger sm:mx-2 mx-1 pt-2'>
              <span className='material-icons text-red-400'>call_split</span>
              <span className={'backdrop-filter backdrop-blur-sm bg-opacity-90 rounded-lg p-1 px-2 text-sm bg-gray-800 text-white absolute top-10 right-2 w-40 text-center z-10 hover-target'}>Branch&nbsp;From<br/>{branchFrom}</span>
            </div>
          }
          <div className='hover-trigger relative sm:mx-2 mx-1 pt-2'>
            <span className='material-icons text-green-600'>attribution</span>
            <span className='backdrop-filter backdrop-blur-sm bg-opacity-90 rounded-lg p-1 px-2 text-sm bg-gray-800 text-white absolute top-10 right-2 text-center z-10 hover-target'>Owner{' ' + this.props.owner}</span>
          </div>
          </div>
        </div>
      </>
    );
  }

  handleBranch () {
    Router.push({
      pathname: '/[branchName]',
      query: { branchName: this.props.Line.title, id: this.props.Line._id },
    }, `/${this.props.Line.title}`);
  }

  RGBToHex(r,g,b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    return "#" + r + g + b;
  }

  /*
  import Router from 'next/router'

      this.state = {
      dropdown: false
    };

    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.handleBranchEdit = this.handleBranchEdit.bind(this);
    this.handleBranchDelete = this.handleBranchDelete.bind(this);

  componentWillUnmount() {
    window.removeEventListener('click', this.closeMenu)
  }

  openMenu(syntheticEvent){
    syntheticEvent.stopPropagation()
    this.setState({dropdown: !this.state.dropdown}, () => {
      if(this.state.dropdown) {
        window.addEventListener('click', this.closeMenu)
      }
    });
  }

  closeMenu() {
    this.setState({dropdown: false}, () => {
      window.removeEventListener('click', this.closeMenu)
    });
  }

  <div className='relative'>
            <button onClick={this.openMenu} className={`sm:ml-5 ml-2 mr-5 outline-none focus:outline-none pt-2 text-gray-500 hover:text-gray-700`}>
              <span className='material-icons'>more_horiz</span>
            </button>
            {this.state.dropdown ? (
              <div className='backdrop-filter backdrop-blur-md bg-opacity-40 absolute top-5 right-2 bg-white shadow-lg py-2 my-6 mx-4 rounded-lg text-black ring-2 ring-gray-500 z-30'>
                <button onClick={this.handleBranchEdit} className='block focus:outline-none outline-none'><div className='px-3 py-1 hover:bg-gray-500 hover:text-white w-20 text-left'>Edit</div></button>
                <button onClick={this.handleBranchDelete} className='block focus:outline-none outline-none'><div className='px-3 py-1 text-red-500 hover:bg-red-500 hover:text-white w-20 text-left'>Delete</div></button>
              </div>
            ) : (null)}
          </div>

  handleBranchEdit () {
    // TODO: with api
    console.log('Edit: ' + this.props.id);
    // Dynamic Routing
    Router.push({
      pathname: '/[branchName]',
      query: { branchName: this.props.branchName, id: this.props.id },
    }, `/${this.props.branchName}`);
  }

  handleBranchDelete () {
    // TODO: with api
    console.log('Delete: ' + this.props.id);
  }
  */
}