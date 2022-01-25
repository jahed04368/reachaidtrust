import { Fragment } from 'react';
import MainHeader from './main-header';
import Navbar from './navbar';
import classes from './main-header.module.css';
import Footer from './footer';

function Layout(props) {
  return (
    <Fragment>
      {/* <MainHeader /> */}
      {/* <div> */}
      <Navbar />
      <div className={classes.space} />
      {/* </div> */}
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}
export default Layout;
