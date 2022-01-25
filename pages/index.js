import Head from 'next/head';
import EventList from '../components/events/EventList';
import { getFeaturedEvents } from '../helpers/api-util';

const HomePage = (props) => {
  return (
    <div id="home">
      <Head>
        <title>Reach Aid Trust</title>
        <meta name="description" content="Reach Aid Trust Projects" />
      </Head>

      <div className="center homeinfo">
        <p>
          Eget aliquet nibh praesent tristique magna sit amet purus gravida. Ut
          sem nulla pharetra diam sit amet nisl suscipit. Risus feugiat in ante
          metus dictum at. Ipsum nunc aliquet bibendum enim facilisis gravida.
          Auctor eu augue ut lectus arcu bibendum at. Sit amet mattis vulputate
          enim nulla aliquet porttitor. Semper risus in hendrerit gravida rutrum
          quisque. Feugiat sed lectus vestibulum mattis ullamcorper velit sed
          ullamcorper morbi. Malesuada fames ac turpis egestas sed tempus urna.
          Mi tempus imperdiet nulla malesuada pellentesque elit. Ut consequat
          semper viverra nam libero justo laoreet.
        </p>
      </div>
      <h1 className="center homeheader">Current Projects</h1>
      <EventList items={props.events} />
      <div className="center homeinfo">
        <p>
          Accumsan sit amet nulla facilisi morbi tempus iaculis. Scelerisque
          fermentum dui faucibus in ornare. Mattis ullamcorper velit sed
          ullamcorper morbi tincidunt ornare massa eget. Nibh tortor id aliquet
          lectus proin nibh nisl condimentum. Vehicula ipsum a arcu cursus vitae
          congue mauris. Et odio pellentesque diam volutpat commodo. Dictum
          fusce ut placerat orci nulla. Nunc mattis enim ut tellus elementum.
          Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi.
          Id ornare arcu odio ut sem. Lacus laoreet non curabitur gravida arcu.
          Lacus vestibulum sed arcu non odio.
        </p>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
      revalidate: 10,
    },
  };
}

export default HomePage;
