import React from "react";
import axios from 'axios'

import './App.css';
class App extends React.Component {
    state = { advice: '' };
    componentDidMount() {
        this.ferchAdvice();
    }
    ferchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then(response => {
                const { advice } = response.data.slip

                console.log(response.data.slip.advice);
                this.setState({ advice })
            })
            .catch((error) => {
                console.log(error);
                this.setState({ advice: '' })
                console.log(error);
            });
    }


    render() {
        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">{this.state.advice}</h1>
                    <button className="button" onClick={this.ferchAdvice}>
                        <span> GIVE ME ADVICE</span>
                    </button>
                </div>
            </div>

        );
    };
}

export default App;