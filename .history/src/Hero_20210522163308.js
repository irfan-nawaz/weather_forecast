import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./index.css";
import calculateChanceOfRain from './helper/util';
import './App.css';
import Slider from './components/slider';
import AmountOfRainChart from './components/amountOfRainChart';
import ChanceOfOfRainChart from './components/chanceOfRainChart'



const Hero = ({ handleLogout }) => {
  return (
    <section className="hero">
      <nav>
        <h2>Welcome</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>
          <div className="App">
      <Navbar />
      <Main />
      <Footer />
    </div>
    </section>
  );
};

class Hero extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pressure: 1010,
            temperature: 15,
            isApiDataReady: false,
            isDoneCalculating: false,
            amountsOfRainPerDay: [],
            upper: [],
            mean: [],
            lower: []
        };

        this.updateChanceOfRainValues = this.updateChanceOfRainValues.bind(this);
        this.onSliderPressureChange = this.onSliderPressureChange.bind(this);
        this.onSliderTemperatureChange = this.onSliderTemperatureChange.bind(this);
    }

    componentDidMount() {
        fetch('http://private-4945e-weather34.apiary-proxy.com/weather34/rain')
            .then(response => {
                response.json().then(json => {
                    this.setState({
                        amountsOfRainPerDay: Array.from(json[0].days.map(val => val.amount)),
                        isApiDataReady: true
                    });

                    this.updateChanceOfRainValues();

                })
            })
    }

    onSliderPressureChange(val) {
        this.setState({pressure: val});
        this.updateChanceOfRainValues();
    }
    onSliderTemperatureChange(val) {
        this.setState({temperature: val});
        this.updateChanceOfRainValues();
    }

    updateChanceOfRainValues() {
        const days = this.state.amountsOfRainPerDay;
        const p1 = new Promise(resolve => resolve(this.setState({
                lower: Array.from(days.map(day => calculateChanceOfRain(this.state.pressure, this.state.temperature, day)[0])),
                mean: Array.from(days.map(day => calculateChanceOfRain(this.state.pressure, this.state.temperature, day)[1])),
                upper: Array.from(days.map(day => calculateChanceOfRain(this.state.pressure, this.state.temperature, day)[2])),
            })));
        p1.then(this.setState({isDoneCalculating: true}));
    }

    render() {

        return (
            <div className="App">
                <div className="App-header">
                    <h2>Weather Charts</h2>
                    <small>by Roland Castillo</small>
                </div>
                <div className="App-content">
                    <div className="App-sliders">
                        <Slider
                            name="pressure"
                            min="970"
                            max="1030"
                            step="10"
                            default="1010"
                            label="Pressure [hPa]"
                            options={[970,980,990,1000,1010,1020,1030]}
                            onChange={this.onSliderPressureChange}
                        />
                        <Slider
                            name="temperature"
                            min="10"
                            max="35"
                            step="5"
                            default="15"
                            label="Temperature [C]"
                            options={[10,15,20,25,30,35]}
                            onChange={this.onSliderTemperatureChange}
                        />
                    </div>
                    <div className="App-charts">
                        {this.state.isDoneCalculating && <ChanceOfOfRainChart lower={this.state.lower} mean={this.state.mean} upper={this.state.upper} />}
                        {this.state.isApiDataReady && <AmountOfRainChart data={this.state.amountsOfRainPerDay} />}
                    </div>
                </div>
            </div>
        );
    }
}

export default Hero;
