import React, { useState } from 'react';
import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// eslint-disable-next-line no-unused-vars
import { parse, evaluate } from 'mathjs';


const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [memory, setMemory] = useState(0);
  const [mode, setMode] = useState('normal'); // 'normal' or 'scientific'

  const trigTable = {
    0: { sin: 0, cos: 1, tan: 0 },
    30: { sin: 0.5, cos: Math.sqrt(3) / 2, tan: Math.sqrt(3) / 3 },
    45: { sin: Math.sqrt(2) / 2, cos: Math.sqrt(2) / 2, tan: 1 },
    60: { sin: Math.sqrt(3) / 2, cos: 0.5, tan: Math.sqrt(3) },
    90: { sin: 1, cos: 0, tan: Infinity },
    // Add more values as needed
  };

  // Updated handleButtonClick function
  const handleButtonClick = (value) => {
    switch (value) {
      case '=':
        try {
          if (mode === 'scientific') {
            // Extract function and angle
            const match = input.match(/(\w+)\((\d+)\)/);
            if (match) {
              const func = match[1].toLowerCase();
              const angle = parseInt(match[2], 10);
  
              // Get the corresponding value from the table
              const result = trigTable[angle] ? trigTable[angle][func] : 'Error';
              setResult(result.toString());
            } else {
              setResult('Error');
            }
          } else {
            // Handle normal mode
            // eslint-disable-next-line
            setResult(eval(input).toString());
          }
        } catch (error) {
          setResult('Error');
        }
        break;
      case 'C':
        setInput('');
        setResult(null);
        break;
      case 'MRC':
        setInput(memory.toString());
        break;
      case 'M+':
        setMemory(memory + parseFloat(input));
        setInput('');
        break;
      case 'M-':
        setMemory(memory - parseFloat(input));
        setInput('');
        break;
      case 'SET%':
        setInput((parseFloat(input) / 100).toString());
        break;
      case 'MODE':
        setMode(mode === 'normal' ? 'scientific' : 'normal');
        break;
      case '+/-':
        setInput((parseFloat(input) * -1).toString());
        break;
      case 'SIN':
        setInput(`sin(${input})`);
        break;
      case 'COS':
        setInput(`cos(${input})`);
        break;
      case 'TAN':
        setInput(`tan(${input})`);
        break;
      default:
        setInput(input + value);
        break;
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-image">
      <div className="calculator bg-light p-4 rounded shadow">
      <div className="calculator-header">
      <h4>Vikky's calculator</h4>
        </div>
        <Display value={result || input || '0'} />
        <ButtonPanel clickHandler={handleButtonClick} mode={mode} />
      </div>
    </div>
  );
};

export default App;
