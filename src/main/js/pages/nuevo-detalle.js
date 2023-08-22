const React = require('react');
const {useState, useEffect} = require('react');
const { Link,useParams } = require('react-router-dom');
const client = require('../client');

const NuevoDetallePage = () => {

    let { id } = useParams();
    const [productos, setProductos] = useState([])
    const [idProducto, setIdProducto] = useState('')
    const [cantidad, setCantidad] = useState([])
    const [nom_clien, setNom_Clien] = useState([])

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/ventaDetalles',
            entity: {              
                producto: 'http://localhost:8080/api/productos/'+idProducto,
                cantidad : cantidad,
                nom_clien:nom_clien
            },
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
           window.location = '/';
        })
    }

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/productos'
        }).done(response=>{
            let productos2 = [];
            response.entity._embedded.productos.map(producto => {
                productos2.push({value: producto._links.self.href.split('/').slice(-1), label: producto.nombre})
            })
            setProductos(productos2)
        })

    },[])

    return (
        <>
            <h1>Nuevo DetallesVentas</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor='producto'>Producto</label>
                <select name="producto" id="producto" onChange={(e)=>{setIdProducto(e.target.value)}}>
                    {productos.map(producto => {	
                        return (
                            <option key={producto.value} value={producto.value}>{producto.label}</option>
                        )
                    })}
                </select>
                
                <label htmlFor='cantidad'>Cantidad</label>
                <input type="decimal" id="cantidad" name="cantidad" onChange={(e)=>setCantidad(e.target.value)} />
                
                <label htmlFor='nom_clien'>Nombre cliente</label>
                <input type="text" id="nom_clien" name="nom_clien" onChange={(e)=>setNom_Clien(e.target.value)} />
                

                <input type="submit" value="Nuevo Detalle" />

            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevoDetallePage;