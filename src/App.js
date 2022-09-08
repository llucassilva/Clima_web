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
  const [cidadebh, setcidadebh] = useState("");

  useEffect(() => {
    async function buscarClimasp() {
      const resposta = await api.get(
        "http://api.weatherapi.com/v1/forecast.json?key=870e327d30f5486e914120742220509&q=Sao%20Paulo&days=1&aqi=no&alerts=no"
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
        "http://api.weatherapi.com/v1/forecast.json?key=870e327d30f5486e914120742220509&q=Rio%20de%20Janeiro&days=1&aqi=no&alerts=no"
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
    async function buscarClimabh() {
      const resposta = await api.get(
        "http://api.weatherapi.com/v1/forecast.json?key=870e327d30f5486e914120742220509&q=Brasilia&days=1&aqi=no&alerts=no"
      );
      const climabh = resposta.data;
      setcidadebh(
        <Card
          img={climabh.current.condition.icon}
          temp={climabh.current.temp_c}
          local={climabh.location.name}
          temp_max="assets/up-arrow.png"
          temp_min="assets/down-arrow.png"
          min={climabh.forecast.forecastday[0].day.mintemp_c}
          max={climabh.forecast.forecastday[0].day.maxtemp_c}
          umidade={climabh.current.humidity}
          uv={climabh.current.uv}
          sensacao={climabh.current.feelslike_c}
        />
      );
    }
    buscarClimasp();
    buscarClimarj();
    buscarClimabh();
  }, []);

  console.log(cidadesp);
  console.log(cidadebh);
  return(
    <div>
      <Header />
      <hr className='linha-topo'></hr>
      <div className='alegria'>
        {cidadesp} 
        {cidaderj}
        {cidadebh}
      </div>
      
      <Footer />
    </div>
  );

}
  
export default App;
