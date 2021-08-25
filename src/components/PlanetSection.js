import React, { useState } from "react";

import styled from "styled-components";



const Div = styled.div`
	margin-top: 7%;
	align-items: center;
	font-size: 1.4rem;
	@media (min-width: 992px) {
		margin-left: 10%;
	}
`;

const Divinfo = styled.div`
	width: 13rem;
`;
const ImageGeology = styled.img`
	z-index: 2;
	display: block;
	position: absolute;
	width: 8rem;
	margin-top: 20%;
	margin-left: 15%;
`;
const DivGrades = styled.div`
	margin-top: 5%;
`;
const PlanetSection = ({data}) => {
	const [datos, setDatos] = useState(data.overview);
    console.log(datos);
	return (
		<div className="container">
			<Div className="row">
				<div className="col-lg-6">
                    {datos.geo && <ImageGeology src={datos.geo} alt=""/>}
					<img src={datos.image} alt="" style={{width:data.desktopImgWidth}}/>
				</div>
				<div className="col-lg-6">
					<h1>{data.name}</h1>
					<p className="mt-4">{datos.content}</p>
                    <a href={datos.source} className="link-info text-decoration-none">Wikipedia</a>
					<button
						className="btn btn-outline-secondary btn-lg w-100 mt-3"
						onClick={() => setDatos(data.overview)}
					>
						01 - Detalles
					</button>
					<button
						className="btn btn-outline-secondary btn-lg w-100 mt-3"
						onClick={() => setDatos(data.structure)}
					>
						02 - Estructura interna
					</button>
					<button
						className="btn btn-outline-secondary btn-lg w-100 mt-3"
						onClick={() => setDatos(data.geology)}
					>
						03 - Geologia
					</button>
				</div>
			</Div>
			<DivGrades className="row d-flex justify-content-center">
				<Divinfo className="col-lg-1 border border-secondary border-2 text-center p-3">
					<p className="text-muted">ROTACIÓN</p>
					<h4>{data.rotation}</h4>
				</Divinfo>
				<Divinfo className="col-lg-1 border border-secondary border-2 ms-5  text-center p-3">
					<p className="text-muted">TRASLACION</p>
					<h4>{data.revolution}</h4>
				</Divinfo>
				<Divinfo className="col-lg-1 border border-secondary ms-5 border-2 text-center p-3">
					<p className="text-muted">RADIO</p>
					<h4>{data.radius}</h4>
				</Divinfo>
				<Divinfo className="col-lg-1 border border-secondary ms-5 border-2 text-center p-3">
					<p className="text-muted">TEMP. MEDIA</p>
					<h4>{data.temperature}</h4>
				</Divinfo>
			</DivGrades>
		</div>
	);
};

export default PlanetSection;
