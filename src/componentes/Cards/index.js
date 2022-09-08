import "./sytle.css"

export default function Card(props){
    return (
			<div className="cards">
				<div className="left-card todos_cards">
					<div className='card_superior'>
					<div className='title'>
						<img  className='imagem_temperatura' src={props.img} alt="Avatar" />
						<div className='teste_temp'>
							<p className='temp'> {props.temp} °</p>
						</div>
					</div>
						{/* <img src={props.temp_max} alt="Avatar" />
						<img src={props.temp_min} alt="Avatar" /> */}
					</div>
	
					<div className='card_inferior'>
						<p className='local'>{props.local}</p>
					<div className="card-centro"> 
						<p>Temperatura mínima: <span>{props.min} °C</span> </p>
						<p>Temperatura máxima: <span>{props.max} °C</span> </p>
						<p>Umidade do ar: <span>{props.umidade}	% </span></p>
						<p>Índice UV: <span>{props.uv} </span></p>
						<p>Sensação térmica: <span>{props.sensacao} °C </span></p>
					</div>
					</div>
				</div>
			</div>
		);
    

}
