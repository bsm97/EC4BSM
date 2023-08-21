const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const PageHome = require('./pages/home');
const PageProductoNuevo = require('./pages/ProductoNuevo');
const PageFacturaNuevo = require('./pages/FacturaNuevo');
const PageLugarNuevo = require('./pages/LugarNuevo');
const PageFacturaVer = require('./pages/FacturaVer');
const PageFacturaEdit = require('./pages/FacturaEdit');
const PageProductosEdit = require('./pages/ProductosEdit');
const PageLugarEdit = require('./pages/LugarEdit');


const router = createBrowserRouter([
	{path: '/', element: <PageHome />},
	{path: '/producto-new', element: <PageProductoNuevo />},
	{path: '/factura-new', element: <PageFacturaNuevo/>},
	{path: '/lugar-new', element: <PageLugarNuevo />},
	{path: '/factura-ver/:id', element: <PageFacturaVer />},
	{path: '/factura-edit/:id', element: <PageFacturaEdit />},
	{path: '/producto-edit/:id', element: <PageProductosEdit />},
	{path: '/lugar-edit/:id', element: <PageLugarEdit />},

])


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react')
)
