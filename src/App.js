import { useSelector } from "react-redux";
import "./App.css";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
import { selectPotentials } from "./redux/slices/potentialCountriesSlice";
import {selectDisplay } from "./redux/slices/displayCountrySlice";


function App() {

    let potentials = useSelector(selectPotentials)
    console.log("potentials",potentials)

    let currentDisplay= useSelector(selectDisplay);
    console.log("display",currentDisplay)

   
    return (
        <div className="App font-link">
            <Header />
            {currentDisplay ? <MainDisplay /> : <OptionDisplay />}
        </div>
    );
}

export default App;

//In the return of the functional component, 
//replace the single OptionDisplay component with a JSX statement that returns the 
//MainDisplay component if there is a currentDisplay country, or returns the OptionDisplay component if there is not a currentDisplay country.



//use the useSelector hook to read from the store 
//use the useDispatch hook to write to the store