import React from "react";
import style from "styled-components"

const Contain=style.div`
display:flex;
flex-direction:column;
flex-wrap:wrap;
margin:20px;
background-color:black;
overflow:hidden;
text-overflow:ellipsis;
border:2px solid #fff;
padding:5px;
justify-content:center`


const BoxTitle=style.span`

font-size: 14px;
  font-weight: 400;
  color: white;
  margin: 15px 0;
  white-space: nowrap;
  width:190px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align:center;
  padding:10px 0px;
  color:white;


`
const BoxImage=style.img`
display:flex
flex-direction:row;
width:190px;
height:190px;
flex-wrap:wrap;
`
function MovieBox(props){

      
    return(
        <Contain onClick={()=>{props.setMovieId(props.movie.imdbID);
                              window.scrollTo({top:0,behavior:"smooth"})}}>
          <BoxImage src={props.movie.Poster}/>
           <BoxTitle>
            {props.movie.Title}
        
           </BoxTitle>
        </Contain>
    )
}
export default MovieBox