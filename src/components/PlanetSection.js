import React, { useState } from "react";
import "./PlanetSection.scss";
import styled from "styled-components";
import { Button, ButtonGroup } from "react-bootstrap";

const Div = styled.div`
	margin-top: 4%;
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

const PlanetSection = ({ data }) => {
	const [datos, setDatos] = useState(data.overview);

	return (
		<div className="container">
			<Div className="row">
				<div className="col-lg-6">
					{datos.geo && <ImageGeology src={datos.geo} alt="" />}
					<img
						src={datos.image}
						alt=""
						style={{ width: data.desktopImgWidth }}
					/>
				</div>
				<div className="col-lg-6 " role="group">
					<h1>{data.name}</h1>
					<p className="mt-4">{datos.content}</p>
					<a href={datos.source} className="link-info text-decoration-none">
						Wikipedia
					</a>

					<div className="d-grid gap-3 mt-2">
						<Button
							variant="info"
							size="lg"
							onClick={() => setDatos(data.overview)}
						>
							01 - Detalles
						</Button>
						<Button
							variant="info"
							size="lg"
							onClick={() => setDatos(data.structure)}
						>
							02 - Estructura interna
						</Button>
						<Button
							variant="info"
							size="lg"
							onClick={() => setDatos(data.geology)}
						>
							03 - Geologia
						</Button>
					</div>
				</div>
			</Div>
			<DivGrades className="row d-flex justify-content-center">
				<Divinfo className="col-lg-1 border border-secondary border-2 text-center p-3">
					<p className="text-muted">ROTACIÓN</p>
					<h4>{data.rotation}</h4>
				</Divinfo>
				<Divinfo className="col-lg-1 border border-secondary border-2 grados  text-center p-3">
					<p className="text-muted">TRASLACION</p>
					<h4>{data.revolution}</h4>
				</Divinfo>
				<Divinfo className="col-lg-1 border border-secondary  border-2  grados text-center p-3">
					<p className="text-muted">RADIO</p>
					<h4>{data.radius}</h4>
				</Divinfo>
				<Divinfo className="col-lg-1 border border-secondary  border-2  grados text-center p-3">
					<p className="text-muted">TEMP. MEDIA</p>
					<h4>{data.temperature}</h4>
				</Divinfo>
			</DivGrades>
		</div>
	);
};

export default PlanetSection;
