import './App.css';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Card from './componentes/Cards';
import {useEffect, useState} from 'react';
import React from 'react';
import api from "./services/api";






function App(){
  const   [cidadesp, setcidadesp] = useState("");
  const [cidaderj, setcidaderj] = useState("");
  const [cidadedf, setcidadedf] = useState("");

  useEffect(() => {
    async function buscarClimasp() {
      const resposta = await api.get(
        "https://api.weatherapi.com/v1/forecast.json?key=870e327d30f5486e914120742220509&q=sao%20paulo&days=1&aqi=no&alerts=no"
      );
      const climasp = resposta.data;
      setcidadesp(
        <Card
          img={climasp.current.condition.icon}
          temp={climasp.current.temp_c}
          local={climasp.location.name}
          temp_max="assets/up-arrow.png"
          temp_min="assets/down-arrow.png"
          min={climasp.forecast.forecastday[0].day.mintemp_c}
          max={climasp.forecast.forecastday[0].day.maxtemp_c}
          umidade={climasp.current.humidity}
          uv={climasp.current.uv}
          sensacao={climasp.current.feelslike_c}
        />
      );
    }
    async function buscarClimarj() {
      const resposta = await api.get(
        "https://api.weatherapi.com/v1/forecast.json?key=870e327d30f5486e914120742220509&q=Rio%20de%20Janeiro&days=1&aqi=no&alerts=no"
      );
      const climarj = resposta.data;
      setcidaderj(
        <Card
          img={climarj.current.condition.icon}
          temp={climarj.current.temp_c}
          local={climarj.location.name}
          temp_max="assets/up-arrow.png"
          temp_min="assets/down-arrow.png"
          min={climarj.forecast.forecastday[0].day.mintemp_c}
          max={climarj.forecast.forecastday[0].day.maxtemp_c}
          umidade={climarj.current.humidity}
          uv={climarj.current.uv}
          sensacao={climarj.current.feelslike_c}
        />
      );
    }
    async function buscarClimadf() {
      const resposta = await api.get(
        "https://api.weatherapi.com/v1/forecast.json?key=870e327d30f5486e914120742220509&q=Brasilia&days=1&aqi=no&alerts=no"
      );
      const climadf = resposta.data;
      setcidadedf(
        <Card
          img={climadf.current.condition.icon}
          temp={climadf.current.temp_c}
          local={climadf.location.name}
          temp_max="assets/up-arrow.png"
          temp_min="assets/down-arrow.png"
          min={climadf.forecast.forecastday[0].day.mintemp_c}
          max={climadf.forecast.forecastday[0].day.maxtemp_c}
          umidade={climadf.current.humidity}
          uv={climadf.current.uv}
          sensacao={climadf.current.feelslike_c}
        />
      );
    }
    buscarClimasp();
    buscarClimarj();
    buscarClimadf();
  }, []);

  console.log(cidadesp);
  console.log(cidadedf);
  return(
    <div>
      <Header />
      <hr className='linha-topo'></hr>
      <div className='alegria'>
        {cidadesp} 
        {cidaderj}
        {cidadedf}
      </div>
      
      <Footer />
    </div>
  );

}
  
export default App;
