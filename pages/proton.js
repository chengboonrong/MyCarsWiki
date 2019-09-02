import data from './proton.json';
import Link from 'next/link';
import Head from 'next/head';
import HeadTitle from './headtitle.js';

const Proton = props => (
    <div>
      <HeadTitle title='Proton cars'></HeadTitle>
      <ul>
      {props.shows.map(show => (
        <li key={show.model} style={{listStyleType: 'none'}} >
          <Link href={`/proton/${show.model}`}>
            <a>{show.model}</a>
          </Link>
          <img src={show.image} width='280' height='120'></img>
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