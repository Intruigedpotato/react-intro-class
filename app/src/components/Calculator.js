import React, { Component } from 'react'
import calculatorImg from './calculator.png'

class Calculator extends Component {
    constructor(){
        super();

        this.state = {
            header: "Braydon's Calculator",
            display: "0",
            operator: "",
            tempNum: 0,
            resetDisplay: false

        }
    }
    headerChanged(newValue){
        this.setState({
            header:newValue
        })
    }
    updateDisplay(num){
        var display = (this.state.display ==='0') ? num : this.state.display + num;
        this.setState({
            display: (this.state.display.length < 13) ? display : this.state.display
        })
    }
    setOperator(operator){
        if (!this.state.operator) {
            this.setState({operator:operator, temp: parseInt(this.state.display, 10), display: "0"});
        }
    }
    calculate(){
        if (this.state.operator ===""){
            return;}
         var result;
            switch(this.state.operator){
                case "+": result = this.state.temp + parseInt(this.state.display, 10);
                break;
                case "-" : result = this.state.temp - parseInt(this.state.display, 10);
                break;
                case "*" : result = this.state.temp * parseInt(this.state.display, 10);
                break;
                case  "/" : result = this.state.temp / parseInt(this.state.display, 10);
                break;
                default:
                break;
            }
            this.setState({display: String(result)});
    }
    clearDisplay(){
this.setState({header: "Braydon's Calculator",
display: "0",
operator: "",
tempNum: 0,
resetDisplay: false})
    }


    render() {
    return (
        <div id="calculator-container">
          <input id="header-input" onChange={ (e)=> this.headerChanged(e.target.value)}/>
          <h1 id="header"> {this.state.header} </h1>
          <img className="remove-highlight" src={calculatorImg} alt="calculator" />
          <div id="calculator-mask" className="remove-highlight">
            <div className="output">
              <span className="total">
                  { this.state.display}
              </span>
            </div>
      
            <div className="btn clear" onClick={()=> this.clearDisplay()}></div>
      
            <div className="btn zero" onClick={()=> this.updateDisplay("0") }></div>
            <div className="btn one" onClick={()=> this.updateDisplay("1")}></div>
            <div className="btn two" onClick={()=> this.updateDisplay("2")}></div>
            <div className="btn three" onClick={()=> this.updateDisplay("3")}></div>
            <div className="btn four" onClick={()=> this.updateDisplay("4")}></div>
            <div className="btn five" onClick={()=> this.updateDisplay("5")}></div>
            <div className="btn six" onClick={()=> this.updateDisplay("6")}></div>
            <div className="btn seven" onClick={()=> this.updateDisplay("7")}></div>
            <div className="btn eight" onClick={()=> this.updateDisplay("8")}></div>
            <div className="btn nine" onClick={()=> this.updateDisplay("9")}></div>
      
            <div className="btn equal" onClick={()=> this.calculate("=")} ></div>
            <div className="btn multiply" onClick={()=> this.setOperator("*")} ></div>
            <div className="btn divide" onClick={()=> this.setOperator("/")} ></div>
            <div className="btn subtract" onClick={()=> this.setOperator("-")} ></div>
            <div className="btn add" onClick={()=> this.setOperator("+")} ></div>
          </div>
        </div>
      )
}
}

export default Calculator