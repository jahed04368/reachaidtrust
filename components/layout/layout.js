import { Fragment } from 'react';
import MainHeader from './main-header';
import Navbar from './navbar';
import classes from './main-header.module.css';

function Layout(props) {
  return (
    <Fragment>
      {/* <MainHeader /> */}
      {/* <div> */}
      <Navbar />
      <div className={classes.space} />
      {/* </div> */}
      <main>{props.children}</main>
    </Fragment>
  );
}
export default Layout;
