import './App.css';
import Axios from "axios";
import { useState} from 'react';
function App() {
const[name,setName]=useState("");
const[predictedAge,setPredictedAge]=useState("");
const [showData, setShowData] = useState(false); // New state variable
function FetchData()
  {
    Axios.get(`https://api.agify.io?name=${name}`).then((res) => 
    {
      setPredictedAge(res.data.age)
      setShowData(true);
    }) 
  };
  function DisplayData()
  { return(  <div className='displaydata'>
      <h2>Name:{name}</h2>
      <h2>Predicted Age:{predictedAge}</h2>
      </div>);
  }
  return (
    <div className="App">
      <img src='https://i2-prod.dailystar.co.uk/incoming/article27230785.ece/ALTERNATES/s615/0_Young-woman-holding-picture-of-elderly-woman.jpg' alt=''/>
      <h1>AGE PREDICTION </h1>
      <input placeholder='Enter Your Name...' onChange={(event) =>{setName(event.target.value)}} />
      <button onClick={FetchData}>Predict</button>
      {showData && DisplayData()} 
</div>
  );
}

export default App;
