const React = require('react');
const client = require('../client');
const { Link } = require('react-router-dom');

class PageHome extends React.Component {
	constructor(props) {
		super(props);
		this.state = { productos: [], ventaDetalles: []};
	}
	componentDidMount() {
		client({ method: 'GET', path: '/api/productos' }).done(response => {
			this.setState({ productos: response.entity._embedded.productos });
		});
		client({ method: 'GET', path: '/api/ventaDetalles' }).done(response => {
			this.setState({ ventaDetalles: response.entity._embedded.ventaDetalles });
		});

	}
	render() {
		return (
			<>
				<h1>Demo App!</h1>

				<div style={{"width": "100%", "display": "flex"}}>
					<div style={{"width": "calc(100% / 3)"}}>
						<Titulo entidad="Productos" emoji="🎸" />
						<ProductoList productos={this.state.productos} />
						<Link to="/nuevo-producto">Nuevo Producto</Link>
					</div>
					<div style={{"width": "calc(100% / 3)"}}>
						<Titulo entidad="VentaDetalles" emoji="👩🏼‍🎤" />
						<VentaDetalleList ventaDetalles={this.state.ventaDetalles} />
						<Link to="/nuevo-detalle">Nuevo DetallesVentas</Link>
					</div>
					
					
				</div>




			</>
		)
	}
}

const Titulo = (props) => {
	return (
		<>
			<hr />
			<h2>{props.emoji} - {props.entidad}</h2>
			<span>Listado completo de {props.entidad.toLowerCase()}:</span>
			<hr />
		</>
	);
}


class ProductoList extends React.Component {
	render() {
		const productos = this.props.productos.map(producto =>
			<Producto key={producto._links.self.href} producto={producto} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{productos}
				</tbody>
			</table>
		)
	}
}


class VentaDetalleList extends React.Component {
	render() {
		const ventaDetalles = this.props.ventaDetalles.map(ventaDetalle =>
			<VentaDetalle key={ventaDetalle._links.self.href} ventaDetalle={ventaDetalle} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>NOMBRE CLIENTE</th>
						<th>CANTIDAD</th>
						<th>ACCIONES</th>
					</tr>
					{ventaDetalles}
				</tbody>
			</table>
		)
		
		
	}
}

class Producto extends React.Component {
	render() {
		const id = this.props.producto._links.self.href.split("/").slice(-1);
		return (
			<tr>
				<td>{this.props.producto.nombre}</td>
				<td>
					<Link to={`/ver-producto/${id}`}>Ver</Link> | 
					<Link to={`/editar-producto/${id}`}>Editar</Link>
				</td>
			</tr>
		)
	}
}


class VentaDetalle extends React.Component {
	render() {
		const id = this.props.ventaDetalle._links.self.href.split("/").slice(-1);
		
		return (
			<tr>
				
				<td>{this.props.ventaDetalle.nom_clien}</td>
				<td>{this.props.ventaDetalle.cantidad}</td>
				
				
				<td>
					<Link to={`/ver-detalleVenta/${id}`}>Ver Detalle</Link>
					
				</td>
			</tr>
		)
	}
}

module.exports = PageHome;