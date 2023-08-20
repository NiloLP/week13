import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import client from '../client';

const React = require('react');

export const PageVerBanda = () => {

    let { id } = useParams();
    const [banda, setBanda] = useState({});

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/bandas/' + id,
        }).done((response) => {
            setBanda(response.entity);
        })
    }, []);

    return (
        <>
            <h1>Ver Banda</h1>
            <table border={"1"}>
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <td>{banda.nombre}</td>
                    </tr>
                </tbody>
            </table>
            <hr />
            <table border={"1"}>
                <thead>
                    <tr>
                        <th colSpan={"2"}>Integrantes</th>
                    </tr>
                    <tr>
                        <th>Nombre</th>
                        <th>Instrumento</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>musico...</td>
                        <td>instrumento</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}