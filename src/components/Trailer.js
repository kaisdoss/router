import React from "react";
// import ReactPlayer from "react-player";
import { Link, Route } from "react-router-dom";
import { moviesList } from "../movies";

function Trailer({ match, moviesLists, history }) {
  const myTrailer = moviesLists.filter((movie) => movie.id === match.params.id);
  console.log(moviesLists)
  console.log(history)

  // const goBack =(e)=>{

  //   history.goBack()
  // }

  return (

    <div style={{
      backgroundColor: '#000',
      width: '80%',
      height: '80%',
      marginLeft: '10%',
      marginRight: '10%'
    }} classNames="helloTrailer" >
      <h1 style={{ color: 'red', textAlign: 'center' }}>trailer: {match.params.id}</h1>
      <button style={{
        backgroundColor: 'red',
        color: 'white',
        width: '80px',
        height: '40px',
        marginLeft: '10%',
        border: 'ridge gray 2px'
      }} classNames="btnTrailer" onClick={() => history.goBack()} >back off</button>
      <h2 style={{ color: '#aaa', textAlign: 'center' }}>Story:</h2>
      <p style={{textAlign: 'center'}}    
 id="pTrailer" classNames="descriptionTrailer" > {myTrailer[0].description}</p>

      <iframe style={{
        width: "514px",
        height: "414px",
        marginLeft: '10%'
      }}

        src={myTrailer[0].trailer}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

    </div>
  );
}

export default Trailer;
