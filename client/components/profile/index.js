import React, { useState, useEffect, Component } from 'react';
import { connect, Provider } from 'react-redux';
import styled from 'styled-components';
import store from '../../store';
import LogOut from './LogOut';
import axios from 'axios';
import { Md5 } from 'ts-md5/dist/md5';
import Link from 'next/link';

const Infos = styled.div`
display: flex;
padding: 20px 2.5%;
flex-wrap: wrap;
justify-content: space-evenly;

`
const MolduraFoto = styled.div`
border-radius: 10px;
overflow: hidden;
width: 20%;
min-width: 200px;
display: inline-flex;
`

export default function UserPlataform() {
  const [hero, setHero] = useState("");
  const [error, setError] = useState("");
  const state =  store.getState().loginState;
  var timestamp = Number(new Date());
  var hash = Md5.hashStr(timestamp + '3c355a8692e8e0606e7de6f0382aba9fa0558a1a487afa6c3d1c9319977fad1adf14df03');
  const marvel = "../../static/marvel.jpg";

  function getMyHero() {
     axios.get(`https://gateway.marvel.com:443/v1/public/characters/${state.heroId}?ts=${timestamp}&apikey=487afa6c3d1c9319977fad1adf14df03&hash=${hash}`, {'apiKey': '3c355a8692e8e0606e7de6f0382aba9fa0558a1a'}).then((response) => {
      setHero(response.data)})
      .catch((error) => {
        setError("Não foi possivel acessar as informações! Tente novamente mais tarde!");
      });
  };
 
  const infoHero = hero.data;
  function teste(e) {
    console.log(infoHero);
  }
  return (
      <div>
        <h1 style={{textAlign: "center"}}>Bem vindo <span style={{fontSize: ".8em"}}>{state.name ? state.name : "Nome do usuário"}</span>!</h1>
        <Infos>
        <MolduraFoto>
          <img src={marvel} alt="fotohero" />
        </MolduraFoto>
        <div style={{textAlign: "left", flexGrow:"2", paddingLeft: "20px"}}>
        <h3>Nome do seu comic</h3>
        <p>Descrição do Heroi!</p>
        </div>
        <div style={{width: "100%", textAlign:"center"}}>
          <h4>Ultimos comics lançados!</h4>
          <ul>
            <li>Comic 1</li>
            <li>Comic 2</li>
            <li>Comic 3</li>
            <li>Comic 4</li>
            <li>Comic 5</li>
          </ul>
          <button href='https://www.marvel.com/comics' target="_blank">Veja outros comics</button>
        </div>
        </Infos>
        <br />
        <br />
        <button onClick={() => teste()}>Teste</button>
        <style jsx>{`
        a {
          text-decoration: none;
          color: none;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          padding: 10px 0;
        }
        li:nth-child(odd) {
          background-color: rgba(91,102,150,1);
        }
        img {
          width: 100%;
        }
        button {
          font-family: "Times New Roman", Times, serif;
          font-weight: bold;
          font-size: 1em;
          margin-top: 10px;
          padding: 5px 10px;
          box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.3);
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          border: none;
          background: rgba(0,0,0,0.8);
          color: white;
        }
        `}
        </style>
      </div>
  )
}

