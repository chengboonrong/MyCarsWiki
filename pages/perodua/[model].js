import data from '../perodua.json';

const Car = props => (
    <div>
      <h1>{props.model}</h1>
      <img src={props.image} />
      <p>{props.price}</p>
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