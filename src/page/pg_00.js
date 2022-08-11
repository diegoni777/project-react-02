import React from 'react';
import { Link } from 'react-router-dom';


export default class Pg_00 extends React.Component{
    state = {
        alumnos:[]
    }
    componentDidMount(){
        fetch('http://localhost/react03/public/api/get07')
        .then(response => response.json())
        .then(alumnosJson => this.setState({alumnos: alumnosJson}))
    }

    render(){
        const{alumnos}=this.state
        return(
            <div className='container'>
                <br/>
                <h2>ALUMNOS  ({alumnos.length})</h2>
                <br/>
                <p style={{textAlign:'right'}}>
                {'  '}
                <Link to='/register'>
                <button type='button' className='btn btn-outline-success btn-sm'>
                    Registrar                               
                </button>
                </Link>
                </p>
                <table className='table table-hover table-dark'>
                    <thead>
                        <th scope='col'>#</th>
                        <th scope='col'>Foto</th>
                        <th scope='col'>Alumno</th>
                        <th scope='col'>Fecha N</th>
                        <th scope='col'>Genero</th>
                        <th scope='col'>Grupo</th>
                        <th scope='col'>Otros</th>
                    </thead>
                    <tbody>
                        {alumnos.map((alumno,i)=>
                        
                        
                        <tr key={i}>
                            <th scope='row'>{i+1}</th>
                            <td>
                                <img src={alumno.img} alt={alumno.nombre}width="31px"/>
                            </td>
                            <td>{alumno.nombre}</td>
                            <td>{alumno.fn}</td>
                            <td>{alumno.genero}</td>
                            <td>{alumno.grupo}</td>
                            <td>
                                <Link to={{ pathname:'/detail',state:{id:alumno.id} }}>
                                <button type='button' className='btn btn-outline-info btn-sm'>
                                    Detalle                                
                                </button>
                                </Link>
                                {'  '}
                                <Link to={{ pathname:'/edit',state:{id:alumno.id} }}>
                                <button type='button' className='btn btn-outline-warning btn-sm'>
                                    Editar                              
                                </button>
                                </Link>
                                {'  '}
                                <Link to={{ pathname:'/delete',state:{id:alumno.id} }}>
                                <button type='button' className='btn btn-outline-danger btn-sm'>
                                    Borrar                               
                                </button>
                                </Link>
                                
                            </td>
                        </tr>
                        )}
                    </tbody>
                    
                </table>
                
            </div>
        )
    }
}