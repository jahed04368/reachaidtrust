import classes from './main-header.module.css';
import Link from 'next/link';
import { useState, useEffect, Fragment } from 'react';
function Footer(params) {
  const [socialMedia, setSocialMedia] = useState();

  const emptySocialMedia = () => {
    if (socialMedia !== undefined) setSocialMedia(undefined);
  };
  const clickHandler = (event) => {
    event.preventDefault();

    console.log(event.target);
    console.log(socialMedia);
    const sm = event.target.id;
    setSocialMedia(sm);
    if (socialMedia === 'facebook') window.open('https://facebook.com');
    if (socialMedia === 'instagram') window.open('https://www.instagram.com/');
    if (socialMedia === 'twitter') window.open('https://twitter.com/');
    if (socialMedia === 'linkedin') window.open('https://linkedin.com/');
    emptySocialMedia();
  };

  return (
    <footer className="border-t border-gray-200">
      <div className={classes.footer}>
        <div className="container flex flex-wrap items-center justify-center px-4 py-8 mx-auto  lg:justify-between">
          <div className="flex flex-wrap justify-center">
            <ul className="flex items-center space-x-4">
              <Link href="/">Home</Link>
              <Link href="/events">Projects</Link>
              <Link href="/about-us">About</Link>
              <Link href="/contact-us">Contact</Link>
            </ul>
          </div>
          <div className="flex justify-center mt-4 lg:mt-0">
            <a className="ml-3">
              <svg
                onClick={clickHandler}
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6 text-blue-600"
                viewBox="0 0 24 24"
                id="facebook"
              >
                <path
                  onClick={clickHandler}
                  d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                  id="facebook"
                ></path>
              </svg>
            </a>

            <a className="ml-3" onClick={clickHandler}>
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6 text-blue-300"
                viewBox="0 0 24 24"
                id="twitter"
              >
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                  id="twitter"
                ></path>
              </svg>
            </a>

            <a className="ml-3" onClick={clickHandler}>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6 text-pink-400"
                viewBox="0 0 24 24"
                id="instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path
                  d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                  id="instagram"
                ></path>
              </svg>
            </a>

            <a className="ml-3" onClick={clickHandler}>
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-6 h-6 text-blue-500"
                viewBox="0 0 24 24"
                id="linkedin"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  id="linkedin"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
