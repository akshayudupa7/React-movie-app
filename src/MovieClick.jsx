import axios from "axios";
import React ,{useState,useEffect} from "react";
import {API_KEY} from "./App";
import style from "styled-components"
const Info=style.div`
display:flex;
flex-direction:row;
margin-top:20px;
background-color:#000;
padding:10px;
border:2px solid #fff;

`
const InfoImage=style.img`
display:flex;
width:150px;
height:150px;
`
const InfoDetails=style.div`
    display:flex;
    flex-direction:column;
`
const InfoBody=style.div`
display:flex;
flex-direction:column;
margin-left:20px;
font-size:14px;
font-weight:600;
color:#fff;
line-height:1.3em;
`

function MovieClick(props){

    let [movieResult,setMovieResult]=useState();
 
 
    useEffect(()=>{
    

         let MovieApi=async()=>{
        let response=await axios.get(`https://www.omdbapi.com/?i=${props.movieId}&apikey=${API_KEY}`)
        console.log(response.data)
        setMovieResult(response.data)
         }
      
        
         MovieApi();
        
    }
   ,[props.movieId])
   console.log(props.movieId);
   console.log(movieResult);
    return(
        <Info> 
         <InfoImage src={movieResult?.Poster} alt="this is image"/>
         <InfoBody>
         <InfoDetails>
         Title: {movieResult?.Title}
         </InfoDetails>
         <InfoDetails>
         Year: {movieResult?.Year}
         </InfoDetails>
         <InfoDetails>
         Rated: {movieResult?.Rated}
         </InfoDetails>
         <InfoDetails>
         Released: {movieResult?.Released}
         </InfoDetails>
         <InfoDetails>
         RunTime: {movieResult?.Runtime}
         </InfoDetails>
         <InfoDetails>
         Country: {movieResult?.Country}
         </InfoDetails>
         <InfoDetails>
         Genre: {movieResult?.Genre}
         </InfoDetails>
         <InfoDetails>
         Language: {movieResult?.Language}
         </InfoDetails>
         </InfoBody>
        </Info>
    )
}
export default MovieClick
