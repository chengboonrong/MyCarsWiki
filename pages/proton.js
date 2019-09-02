import data from './proton.json';
import Link from 'next/link';
import Head from 'next/head';
import HeadTitle from './headtitle.js';

const Proton = props => (
    <div>
      <HeadTitle title='Proton cars'></HeadTitle>
      <p> This is Proton page </p>
      <ul>
      {props.shows.map(show => (
        <li key={show.model}>
          <Link href={`/proton/${show.model}`}>
            <a>{show.model}</a>
          </Link>
          <img src={show.image}></img>
        </li>
      ))}
    </ul>
    </div>
);

Proton.getInitialProps = async function() {
  const cars = data;
  return {
    shows: cars
  };
};
  
export default Proton;