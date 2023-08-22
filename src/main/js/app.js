const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const PageHome = require('./pages/home');
const PageVerProducto = require('./pages/ver-producto');
const PageNuevoProducto=require('./pages/nuevo-producto');
const PageEditarProducto = require('./pages/editar-producto');
const NuevoDetallePage = require('./pages/nuevo-detalle');
const PageVerDetalle = require('./pages/ver-detalleVenta');



const router = createBrowserRouter([
	{path: '/', element: <PageHome />},
	{path: '/ver-producto/:id', element: <PageVerProducto />},
	{path: '/nuevo-producto', element: <PageNuevoProducto />},
	{path: '/editar-producto/:id', element: <PageEditarProducto />},
	{path: '/nuevo-detalle', element: <NuevoDetallePage/>},
	{path: '/ver-detalleVenta/:id', element: <PageVerDetalle />}
	
])


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react')
)
