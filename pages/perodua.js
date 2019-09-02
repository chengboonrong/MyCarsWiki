import data from './perodua.json';
import Link from 'next/link';
import HeadTitle from './headtitle.js';

const Perodua = props => (
    <div>
      <HeadTitle title='Perodua cars'></HeadTitle>
      <ul>
      {props.shows.map(show => (
        <li key={show.model} style={{listStyleType: 'none'}}>
          <Link href={`/perodua/${show.model}`}>
            <a>{show.model}</a>
          </Link>
          
          <img src={show.image}></img>
        </li>
      ))}
    </ul>
    </div>
  );

Perodua.getInitialProps = async function() {
  const cars = data;
  return {
    shows: cars
  };
};
  
export default Perodua;