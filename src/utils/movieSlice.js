import {createSlice} from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:[],
        popularMovies:[],
        topRatedMovies:[],
        upcomingMovies:[],
        horrorMovies:[],
        trailerVideo:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies = action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies = action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        },
        addHorrorMovies:(state,action)=>{
            state.horrorMovies=action.payload;
        }
    }
})

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies,addHorrorMovies,addUpcomingMovies} =movieSlice.actions;
//addNowPlayingMovies is action

export default movieSlice.reducer;