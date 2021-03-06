import { Fragment } from 'react';
import Head from 'next/head';
import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/events-search';
import { useRouter } from 'next/router';
import { getAllEvents } from '../../helpers/api-util';
import classes from '../../components/layout/main-header.module.css';

const AllEventsPage = (props) => {
  const router = useRouter();
  const { events } = props;

  const findEventHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <Fragment>
      <Head>
        <title>All Projects</title>
        <meta name="description" content="All Reach Aid Trust Projects" />
      </Head>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const allEvents = await getAllEvents();

  return {
    props: {
      events: allEvents,
      revalidate: 10,
    },
  };
}

// export async function getStaticPaths() {
//   const allEvents = await getAllEvents();
//   const paths = allEvents.map((event) => ({ params: { slug: event.id } }));

//   return {
//     paths: paths,
//     fallback: 'blocking',
//   };
// }
export default AllEventsPage;
