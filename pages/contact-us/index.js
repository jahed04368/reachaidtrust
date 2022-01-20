import { Fragment } from 'react';
import Head from 'next/head';
import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/events-search';
import { useRouter } from 'next/router';
import { getAllEvents } from '../../helpers/api-util';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

const ContactUs = (props) => {
  const emailInputRef = useRef();
  const contactInputRef = useRef();
  const [message, setMessage] = useState();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredInfo = contactInputRef.current.value;

    const reqBody = {
      email: enteredEmail,
      text: enteredInfo,
    };
    fetch('/api/contactreachaid', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    setMessage('Thank you for getting in touch. We will get back to you soon');
  }
  if (message) {
    return (
      <div>
        <br />
        <h2 className="center">{message}</h2>
      </div>
    );
  }
  return (
    <Fragment>
      <Head>
        <title>All Events</title>
        <meta name="description" content="Find a lot of good events" />
      </Head>
      <div className="center">
        <h1>The Home Page</h1>
        <form onSubmit={submitFormHandler}>
          <div>
            <label htmlFor="email">Your Email Address</label>
            <input
              placeholder="example@gmail.com"
              required
              type="email"
              htmlFor="email"
              id="email"
              ref={emailInputRef}
            />
          </div>
          <div>
            <label htmlFor="contactinfo">Your Feedback</label>
            <textarea
              required
              placeholder="Your text here"
              rows="5"
              id="contactinfo"
              ref={contactInputRef}
            />
          </div>
          <button>Send Feedback</button>
        </form>
      </div>
    </Fragment>
  );
};

// export async function getStaticProps() {
//   const allEvents = await getAllEvents();

//   return {
//     props: {
//       events: allEvents,
//       revalidate: 10,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const allEvents = await getAllEvents();
//   const paths = allEvents.map((event) => ({ params: { slug: event.id } }));

//   return {
//     paths: paths,
//     fallback: 'blocking',
//   };
// }
export default ContactUs;
