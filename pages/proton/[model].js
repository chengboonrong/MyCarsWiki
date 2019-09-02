import data from '../proton.json';
import Headtitle from '../headtitle.js'; 
import Head from 'next/head';

const Package = props => (
  <li>
      <a>{props.title}</a>
  </li>
);

const Car = props => (
    <div>
      <Headtitle title={`Proton ${props.model}`}></Headtitle>
      <h1>{props.model}</h1>
      <img src={props.image} />
      <p>{props.price}</p>
      <ul>
        {props.package.map(p => (
          <li>
            <a>{p.name} - {p.price} - {p.cat}</a>
          </li>
        ))}
      </ul>
    </div>
);

  
Car.getInitialProps = async function(context) {
    const { model } = context.query;
    
    var getIndex = data.filter(d => {
        return d.model == model;
    })

    const selectedCar = getIndex[0];
    console.log(selectedCar);
    return selectedCar;
};
    
export default Car;