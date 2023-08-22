const React = require('react');
const client = require('../client');
const { Link, useParams} = require('react-router-dom');
const {useState, useEffect} = require('react');



const PageVerDetalle = (props) => {

    // const id = props.match.params.id;
    let { id } = useParams();
    const [detalles, setDetalles] = useState({});

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/ventaDetalles/' + id
        }).done(response => {
            setDetalles(response.entity);
        });
    }, []);


    return (
        <>
            <h1>Ver Detalle de Venta</h1>
            <table>
                <tr>
                    <th>Nombre Cliente</th>
                    <td>{detalles.nom_clien}</td>
                </tr>
                
                <tr>
                    <th>Cantidad</th>
                    <td>{detalles.cantidad}</td>
                </tr>
            </table>

            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = PageVerDetalle;