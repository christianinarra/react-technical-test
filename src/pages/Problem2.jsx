import axios from 'axios';
import React from 'react';
import Header from '../template/Header';
import { apiUrl } from '../services/apirest';

class Problem2 extends React.Component {
    
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
        let url = apiUrl + "problem-2";
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
                    <h1>Problema 2: Chess</h1>
                    <p>You have a square chess board with one queen and a number of obstacles placed on it. Determine how many squares the queen can attack.</p>
                    <p>A queen is standing on an n x n chessboard. The chess board's rows are numbered from 1 to n, going from bottom to top. Its columns are numbered from 1 to n, going from left to right. Each square is referenced by a tuple, (r, c) , describing the row, r, and column, c, where the square is located.</p>

                    {this.state.error === true &&
                        <div className="alert alert-danger" role="alert">
                            {this.state.message}
                        </div>
                    }
                    <form onSubmit={this.formSubmit}>
                        <div className="form-group">
                            <label>Input Problem 2</label>
                            <textarea id="input-2" name="input" className="form-control mt-2" rows="10" onChange={this.inputOnChange}></textarea>
                        </div>
                        <div className="form-group mt-4">
                            <label>Response Problem 2</label>                            
                            <div id="output-2" className="form-control mt-2">
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
 
export default Problem2;