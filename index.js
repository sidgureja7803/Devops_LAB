function getSongs()
{
  setTimeout(function()
             {
               console.log("Song 1");
             }, 2000)
}

function getMoreSongs()
{
  setTimeout(function()
             {
               console.log("Song 2");
             }, 1200)
} 

getSongs();
getMoreSongs();