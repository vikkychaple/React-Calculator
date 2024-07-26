import React from 'react';
import Button from './Button';
import '../App.css';

const ButtonPanel = ({ clickHandler, mode }) => (
  <div className={`button-panel ${mode === 'scientific' ? 'scientific' : ''} d-grid gap-2`}>
    {mode === 'scientific' && (
      <>
        <Button clickHandler={clickHandler}>SIN</Button>
        <Button clickHandler={clickHandler}>COS</Button>
        <Button clickHandler={clickHandler}>TAN</Button>
        <Button clickHandler={clickHandler}>(</Button>
        <Button clickHandler={clickHandler}>)</Button>
        {/* <Button clickHandler={clickHandler}>{'{'}</Button>
        <Button clickHandler={clickHandler}>{'}'}</Button> */}
      </>
    )}
    <Button clickHandler={clickHandler}>MRC</Button>
    <Button clickHandler={clickHandler}>M-</Button>
    <Button clickHandler={clickHandler}>M+</Button>
    <Button clickHandler={clickHandler}>SET%</Button>
    <Button clickHandler={clickHandler}>MODE</Button>
    
    <Button clickHandler={clickHandler}>7</Button>
    <Button clickHandler={clickHandler}>8</Button>
    <Button clickHandler={clickHandler}>9</Button>
    <Button clickHandler={clickHandler}>/</Button>
    <Button clickHandler={clickHandler}>C</Button>
    
    <Button clickHandler={clickHandler}>4</Button>
    <Button clickHandler={clickHandler}>5</Button>
    <Button clickHandler={clickHandler}>6</Button>
    <Button clickHandler={clickHandler}>*</Button>
    <Button clickHandler={clickHandler}>+/-</Button>
    
    <Button clickHandler={clickHandler}>1</Button>
    <Button clickHandler={clickHandler}>2</Button>
    <Button clickHandler={clickHandler}>3</Button>
    <Button clickHandler={clickHandler}>-</Button>
    <Button clickHandler={clickHandler}>M/Ex</Button>
    
    <Button clickHandler={clickHandler}>0</Button>
    <Button clickHandler={clickHandler}>00</Button>
    <Button clickHandler={clickHandler}>.</Button>
    <Button clickHandler={clickHandler} className="button-plus">+</Button>
    <Button clickHandler={clickHandler} className="button-equals">=</Button>
  </div>
);

export default ButtonPanel;
