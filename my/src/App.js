import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
    state = {
        userOutput: [
           { value: ''}
        ],
        arrayOfText: []
    }

    textChangeHandler = (event) => {
        const userOutput = { ...this.state.userOutput};
        userOutput[0].value =event.target.value;
        const arrayOfText = userOutput[0].value.split('');
        this.setState({
            userOutput: userOutput,
            arrayOfText: arrayOfText
        });

    }

    deleteCharComponent = (charIndex) => {
        const chars = [...this.state.arrayOfText];
        chars.splice(charIndex,1);
        this.setState({
           arrayOfText:chars
        });
    }

  render() {

        let charComponents = null;
        charComponents = (
            <div>
                {this.state.arrayOfText.map( (el, index) =>{
                    return <CharComponent
                        content={this.state.arrayOfText[index]}
                        click={() => this.deleteCharComponent(index)}
                    />
                })}
            </div>
        );
    return (
        <div className="App">
            <ValidationComponent className='lengthOutput' changed= { (event) => this.textChangeHandler(event)} content={this.state.userOutput[0].value} length={this.state.userOutput[0].value.length}></ValidationComponent>


            <input type='text' onChange={ (event) => this.textChangeHandler(event)}></input>
            <p>{this.state.userOutput[0].value.length}</p>

            {charComponents}
            <ol>
                <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
                <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
                <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
                <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
                <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
                <li>When you click a CharComponent, it should be removed from the entered text.</li>
            </ol>
            <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>


        </div>
    );
  }
}

export default App;
