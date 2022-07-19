import React, {Component} from "react";

export default class Counter extends Component {
    state = {
        counter: 0
    }

    addCounter = () => {
        // this.setState({
        //     counter: this.state.counter + 1
        // })
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    render() {
        // return (
        //     <React.Fragment>
        //         <h2>Counter {this.state.counter}</h2>
        //         <button onClick={this.addCounter}>+</button>
        //         <button onClick={() => this.setState({
        //             counter: this.state.counter -  1
        //         })}>-</button>
        //     </React.Fragment>
        // )
        // return [
        //     <h2 key={'0'}>Counter {this.state.counter}</h2>,
        //     <button key={'1'} onClick={this.addCounter}>+</button>,
        //     <button key={'2'} onClick={() => this.setState({
        //         counter: this.state.counter -  1
        //     })}>-</button>,
        // ]
        // return (
        //     <>
        //         <h2>Counter {this.state.counter}</h2>
        //         <button onClick={this.addCounter}>+</button>
        //         <button onClick={() => this.setState({
        //             counter: this.state.counter -  1
        //         })}>-</button>
        //     </>
        // )
        return (
            <div>
                <h2>Counter {this.state.counter}</h2>
                <button onClick={this.addCounter}>+</button>
                <button onClick={() => this.setState({
                    counter: this.state.counter -  1
                })}>-</button>
            </div>
        )
    }
}