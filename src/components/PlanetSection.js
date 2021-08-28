import React, { useState } from "react";
import "./PlanetSection.scss";
import styled from "styled-components";
import { Button, Row, Col, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const DivRow = styled(Row)`
	margin-top: 4%;
	align-items: center;
	font-size: 1.4rem;
	@media (min-width: 992px) {
		margin-left: 10%;
	}
`;
const RowGrades = styled(Row)`
	margin-top: 5%;
`;

const Divinfo = styled(Row)`
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

const PlanetSection = ({ data }) => {
	const [datos, setDatos] = useState(data.overview);

	return (
		<Container>
			<DivRow>
				<Col lg={6}>
					{datos.geo && <ImageGeology src={datos.geo} alt="" />}
					<img
						src={datos.image}
						alt=""
						style={{ width: data.desktopImgWidth }}
					/>
				</Col>
				<Col lg={6}>
					<h1>{data.name}</h1>
					<p className="mt-4">{datos.content}</p>
					<a href={datos.source} className="link-info text-decoration-none">
						Wikipedia
					</a>
					
					<div className="d-grid gap-3 mt-2">
						<Button
							variant="outline-info"
							size="lg"
							onClick={() => setDatos(data.overview)}
						>
							01 - Detalles
						</Button>

						<Button
							variant="outline-info"
							size="lg"
							onClick={() => setDatos(data.structure)}
						>
							02 - Estructura interna
						</Button>
						<Button
							variant="outline-info"
							size="lg"
							onClick={() => setDatos(data.geology)}
						>
							03 - Geologia
						</Button>
					</div>
				</Col>
			</DivRow>
			
			<RowGrades className="d-grid d-flex justify-content-center">
				<Divinfo
					lg={1}
					className=" border border-secondary border-2 text-center p-3"
				>
					<p className="text-muted">ROTACIÓN</p>
					<h4>{data.rotation}</h4>
				</Divinfo>
				<Divinfo
					lg={1}
					className=" border border-secondary border-2 grados  text-center p-3"
				>
					<p className="text-muted">TRASLACION</p>
					<h4>{data.revolution}</h4>
				</Divinfo>
				<Divinfo
					lg={1}
					className=" border border-secondary  border-2  grados text-center p-3"
				>
					<p className="text-muted">RADIO</p>
					<h4>{data.radius}</h4>
				</Divinfo>
				<Divinfo
					lg={1}
					className=" border border-secondary  border-2  grados text-center p-3"
				>
					<p className="text-muted">TEMP. MEDIA</p>
					<h4>{data.temperature}</h4>
				</Divinfo>
			</RowGrades>
		</Container>
	);
};

export default PlanetSection;
