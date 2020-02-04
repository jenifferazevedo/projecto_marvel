import React, { useState, useEffect, Component } from 'react';
import { connect, Provider } from 'react-redux';
import styled from 'styled-components';
import store from '../../store';
import LogOut from './LogOut';
import axios from 'axios';
import { Md5 } from 'ts-md5/dist/md5';
import Link from 'next/link';

const Infos = styled.div`
padding: 20px 2.5%;
text-align: center;

`
const MolduraFoto = styled.div`
border-radius: 10px;
overflow: hidden;
width: 20%;
min-width: 200px;
margin: 0 auto;
`

export default function UserPlataform() {
  const [hero, setHero] = useState("");
  const [error, setError] = useState("");
  const state =  store.getState().loginState;
  var timestamp = Number(new Date());
  const marvel = "../../static/marvel.jpg";
  var hash = Md5.hashStr(timestamp + '4444e8da031d1f20ea9c6c70d5ba93ab955640f0bb2d6a9a4b2848060e6062abe2d67b5c');


  function getMyHero() {
  axios.get(`https://gateway.marvel.com:443/v1/public/characters/${state.heroId}?ts=${timestamp}&apikey=bb2d6a9a4b2848060e6062abe2d67b5c&hash=${hash}`).then((response) => { setHero(response.data)})
  .catch((error) => {setError("Please, do again the log in!");});
  };
  getMyHero();
  return (
      <div>
        <h1 style={{textAlign: "center"}}>Welcome <span style={{fontSize: ".8em"}}>{state.name ? state.name : "Nome do usuário"}</span>!</h1>
        <p  style={{textAlign: "center"}}>{error}</p>
        <Infos>
        <MolduraFoto>
          <img src={hero.data ? hero.data.results[0].thumbnail.path + "." + hero.data.results[0].thumbnail.extension : marvel} alt="fotohero" />
        </MolduraFoto>
        <div style={{ paddingLeft: "20px"}}>
        <h3>{hero.data ? hero.data.results[0].name : "Character name"}</h3>
        <p>{hero.data ? hero.data.results[0].description : "Description"}</p>
        </div>
        <div style={{width: "100%", textAlign:"center"}}>
          <h4>Last comics</h4>
          <ul>
            <li>{hero.data ? hero.data.results[0].comics.items[3].name : "Comic #"}</li>
            <li>{hero.data ? hero.data.results[0].comics.items[2].name : "Comic #"}</li>
            <li>{hero.data ? hero.data.results[0].comics.items[1].name : "Comic #"}</li>
            <li>{hero.data ? hero.data.results[0].comics.items[0].name : "Comic #"}</li>
            <li>{hero.data ? hero.data.results[0].comics.items[4].name : "Comic #"}</li>
          </ul>
          <button href='https://www.marvel.com/comics' target="_blank">Know more comic!</button>
        </div>
        </Infos>
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

