export const LOGO =
 "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

 export const USER_AVATAR=
 "https://avatars.githubusercontent.com/u/93866205?v=4"


 export const USERR=
 "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"

 export const apiOptions = {
    method:"GET",
    headers:{
        accept:"application/json",
        Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjM2NDg0NTMzZGQ4OWViNzVhNWUzODlkNDEwYmI2OCIsIm5iZiI6MTc0MDY4MDM2MS42MjYsInN1YiI6IjY3YzBhY2E5OGMzODZjNGU1YmM4ZTRkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GbTFzqdS6FSKICnHJS1OuaXPNm0XRaTUdWC-CSyTZ7E"
    },
 }
 
//If you want to protect your tmdb apikey and openai apikey the use process.env.REACT_APP_TMDB_KEY or process.env.REACT_APP_OPENAI_KEY use directly dont put this process.env thing in string "Bearer" + process.env.REACT_APP_TMDB_KEY and directly key in process.env.REACT_APP_OPENAI_KEY.

 export const openAIKey="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";
 
 export const bg_url = "https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg"

 export const img_cdn_url ="https://image.tmdb.org/t/p/w500";

 export const supportedLanguages = [{identifier:"en",name:"English"},
    {identifier:"kannada",name:"Kannada"},
    {identifier:"hindi",name:"Hindi"},
 ]