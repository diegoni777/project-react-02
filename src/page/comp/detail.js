import React from "react";
import { Link } from "react-router-dom";

export default class Detail extends React.Component{
    state={
        alumno:[],
    }

    componentDidMount(){
        fetch('http://localhost/react03/public/api/get04/'+this.props.location.state.id)
        .then(response => response.json())
        .then(alumnoJson => this.setState({alumno: alumnoJson}))
    }
    render(){
        const {alumno}=this.state
        return(
            <center>
                <br/>
                <h1>Detalle del Alumno</h1>
                <br/>
                <div className="card mb-3" style={{maxWidth:"540px",color:"#000000"}}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={alumno.img} className="card-img"alt={alumno.nombre}></img>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{alumno.app},{alumno.nombre}</h5>
                            <p className="card-text">
                                <b>Fecha N:</b>{alumno.fn}<br/>
                                <b>Genero:</b>{(alumno.genero===0)?'Femenino':'Masculino'}<br/>
                                <b>Grupo:</b>{alumno.id_grupo}<br/>
                            </p>
                            <p className="card-text"> 
                                <small className="text-mute">
                                    Ultima actualización Hace: <br/> {alumno.created_at}
                                </small>
                            </p>
                        </div>
                    </div>
                    </div>
                    
                </div>
                <br/>
                <br/>
                <Link to="/">
                <button type='button' className='btn btn-outline-light'>
                    regresar                             
                </button>
                </Link>
            </center>
        )
    }
}