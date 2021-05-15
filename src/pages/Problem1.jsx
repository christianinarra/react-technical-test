import axios from 'axios';
import React from 'react';
import Header from '../template/Header';
import { apiUrl } from '../services/apirest';

class Problem1 extends React.Component {
    
    state={
        form:{
            "input":""
        },
        output:[],
        error:false,
        message:""
    }

    formSubmit(e){
        e.preventDefault();
    }
    
    inputOnChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    formLoginSubmit = async () => {
        let url = apiUrl + "problem-1";
        await axios.post(url, this.state.form)
        .then( response => {
            if (response.data.error === false){
                this.setState({
                    error: false,
                    output: response.data.output
                });                
            }else{
                this.setState({
                    error: true,
                    message: response.data.output
                });
            }            
        }).catch(error => {
            this.setState({
                error: true,
                message: "Conexion error"
            });
        });
    }

    render() { 
        return (
            <React.Fragment>
                <Header />
                <div className="container mt-5">
                    <h1>Problema 1: Liga de Padel</h1>
                    <p>Los organizadores de las ligas de pádel de Hill Valley no conocen los ordenadores, de manera que siguen anotando los resultados de cada enfrentamiento en un cuaderno, algo increíble teniendo en cuenta que las ligas que manejan pueden tener hasta 2000 parejas distintas.</p>
                    <p>Al final de la temporada, terminan teniendo tanto lío, que no saben qué pareja es la ganadora de cada categoría. Por si eso fuera poco, durante el invierno, bien debido a las inclemencias meteorológicas o a lesiones de los participantes, algunos de los partidos de cada jornada no se disputan. El problema es que los jugadores no lo avisan, por lo que los organizadores no apuntan nada en el cuaderno. Afortunadamente, se sabe que todas las parejas han llegado a jugar algún partido.</p>

                    {this.state.error === true &&
                        <div className="alert alert-danger" role="alert">
                            {this.state.message}
                        </div>
                    }
                    <form onSubmit={this.formSubmit}>
                        <div className="form-group">
                            <label>Input Problem 1</label>
                            <textarea id="input-1" name="input" className="form-control mt-2" rows="10" onChange={this.inputOnChange}></textarea>
                        </div>
                        <div className="form-group mt-4">
                            <label>Response Problem 1</label>                            
                            <div id="output-1" className="form-control mt-2">
                                {this.state.output !== '' &&
                                    <pre>{JSON.stringify(this.state.output,undefined, 2)}</pre>
                                }                                
                            </div>
                        </div>                        
                        <input type="submit" className="btn btn-primary mt-4" value="Submit Input" onClick={this.formLoginSubmit} />
                    </form>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Problem1;