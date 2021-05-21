import React from 'react';
import styles from "../styles/Home.module.css";
import { Btn } from './Btn';

export default class Profile extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <>
        <div className="border-r-4 w-60 mt-40 ml-40 mr-40 p-5 row fixed-left">
          <div className={styles.btnSet}>
            <Btn text="Account" />
            <Btn text="Backup & Recover" target="nav_bak" />
            <Btn text="Theme" target="nav_theme" />
            <Btn text="Feedback" target = "nav_feedback" />
            <Btn text="About" target="nav_about" />
            <Btn text="Log Out" />
          </div>
        </div>
      </>
    );
  }
}