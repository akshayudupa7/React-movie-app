import React,{useState} from "react";
import style from "styled-components";
import axios from "axios";
import MovieBox from "./MovieBox";
import MovieClick from "./MovieClick";


export const API_KEY="28fd00a4";

const Main=style.div`
display:flex;
flex-direction:column;

margin:auto;
`
const Header=style.div`
display:flex;
flex-direction:row;
justify-content:space-around ;
align-items:center;
background:linear-gradient(to bottom,#480505,#010144);
`
const Logo=style.div`
display:flex;
flex-direction:row;
color:white;
`
const Search=style.div`
display:flex;
flex-direction;row;
justify-content:space-around
`
const SearchInput=style.input`
outline:none;
border:none;
padding:5px ;
border-radius:30px 30px 30px 30px;
`
const BodyMain=style.div`
  display:flex;
  flex-direcrtion:column;
  flex-wrap:wrap;
  background:linear-gradient(to left,#ff8eaa,#373785);
 
  text-align:center;
  align-items:center;
  justify-conetnt:space-around; 
`

const NoResult=style.span`
display:flex;
align-items:center;
width:100%;
height:100vh;
justify-content:space-around;
`
const Middle=style.div`
  color:black;
  display:flex;
  justify-content:space-around;
  background:linear-gradient(to left,#ff8eaa,#373785);
`

function App() {

  let [search,setSearch]=useState("")
  let [timeClear,setTimeClear]=useState();
  let [movieList,setMovieList]=useState([]);
  let [movieId,setMovieId]=useState();

  let trigger=(event)=>{
     setSearch(event.target.value);
     let Time=setTimeout(()=>fetchApi(event.target.value),100)
      setTimeClear(Time);
     clearTimeout(timeClear)

    
    /* setTimeClear(timeApi);
     clearTimeout(timeClear)---------------   let timeApi=setTimeout(()=>,500);*/
      
  }
  let fetchApi=async(searchvalue)=>{
      let response=await axios.get(`https://www.omdbapi.com/?s=${searchvalue}&apikey=${API_KEY}`)
      setMovieList(response.data.Search)
          
  }
 
 
  return (
      <>
        <Main>
          <Header>
            <Logo>
              <h6>React Movie App</h6>
            </Logo>
            <Search>
              <SearchInput  placeholder="search" value={search} onChange={trigger} />
            </Search>
          </Header>
          <Middle>
            {movieId && <MovieClick movieId={movieId} setMovieId={setMovieId}/>}
          </Middle>
          <BodyMain>
           {movieList?(
              movieList.map((movie,index)=>(
               <MovieBox
                movie={movie}
                key={index}
                setMovieId={setMovieId}
                movieId={movieId}
                />
              )

           )):(
           
          <NoResult>no movie result</NoResult>)}
          </BodyMain>
        </Main>
      </>
  )
}

export default App;
