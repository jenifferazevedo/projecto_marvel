import React, { useState, useEffect, Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


export default class FormLogin extends Component {


  render() {
    return (
     <form>
       <label>
       <input id="user" type="text" placeholder="Usuário ou E-mail"></input>
       </label>
       <br />
       <br />
       <label>
         <input id="Senha" type="text" placeholder="Senha"></input>
       </label>
       <br />
       <br />
       <button type="submit">Log In</button>

     </form>

    )}
}