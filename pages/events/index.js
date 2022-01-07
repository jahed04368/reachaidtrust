import Link from 'next/link';
import { Fragment } from 'react/cjs/react.production.min';
import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/events-search';
import { getAllEvents } from '../../dummy-data';
import { useRouter } from 'next/router';

const AllEventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  const findEventHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <Fragment>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </Fragment>
  );
};
export default AllEventsPage;
