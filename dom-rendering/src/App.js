import {useState} from 'react';

function App() {

  const [state, setstate] = useState(null);

  console.log('changes')

  let carName = 'BMW';

  // const [change, setchange] = useState(null);

  // setchange(carName)


  const name = () => {
    console.log('inside name method')
    carName = 'Benze';
  }

  const handleThis = (event) => {

    setstate(event.target.value)
    console.log('car Name', carName)

  }

  return (

    <div>
      <p>Hello word</p>

      <input type="text" name="username" onChange={handleThis} placeholder="Enter your Name" />

      <p>This is from state : {state}</p>

      {/* <p>Car name is {change}</p> */}

      <button onClick={name}  type="submit">Click me</button>
      

    </div>
  );
}

export default App;
