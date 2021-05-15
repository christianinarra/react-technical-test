import axios from 'axios';
import React from 'react';
import Header from '../template/Header';
import { apiUrl } from '../services/apirest';

class Problem3 extends React.Component {
    
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
        let url = apiUrl + "problem-3";
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
                    <h1>Problema 3: String value</h1>
                    <p>Jane loves strings more than anything. She has a string t with her, and value of string s over function f can be calculated as given below.</p>
                    <p><code>f(s) = |s| x Number of times s occurs in t</code></p>

                    {this.state.error === true &&
                        <div className="alert alert-danger" role="alert">
                            {this.state.message}
                        </div>
                    }
                    <form onSubmit={this.formSubmit}>
                        <div className="form-group">
                            <label>Input Problem 3</label>
                            <textarea id="input-3" name="input" className="form-control mt-2" rows="10" onChange={this.inputOnChange}></textarea>
                        </div>
                        <div className="form-group mt-4">
                            <label>Response Problem 3</label>                            
                            <div id="output-3" className="form-control mt-2">
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
 
export default Problem3;