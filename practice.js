searchSong =() =>{
   const yourSearchingSong = document.getElementById('search-field').value;
   const url = `https://api.lyrics.ovh/suggest/:${yourSearchingSong}`;
   fetch(url)
   .then(convertDataIntoJsonData => convertDataIntoJsonData.json())
   .then(jsonData => console.log(jsonData));

}


const displayYourData = data =>{
    const takeYourDataContainer = document.getElementById('song-container');
     data.forEach(datum => {
       
       const createSectionInTheContainerDiv = document.createElement('section');
       createSectionInTheContainerDiv.className =`search-result col-md-8 mx-auto py-4`;
       createSectionInTheContainerDiv.innerHTML =`
      <div class ="col-md-9">
      <h4 class ="lyric-name"></h4>
      <h6 class =" "></h6>
      <p class =" "></p>
      <audio>
      <source src =" " type ="audio/egg">
      </audio>
      </div>

      <div class ="col-md-3"> 
      <button onclick="displayAnotherInfo()">Get Info.</button>
      </div>

       `;

       takeYourDataContainer.appendChild(createSectionInTheContainerDiv);

     })

}

const getAnotherInfo = info =>{
    const url =` `
    fetch(url)
    .then(convertFetchIntoJson => convertFetchIntoJson.json())
    .then(takeJsonData => console.log(takeJsonData))
}

const displayAnotherInfo = anotherInfoParameter =>{
    const takeAnotherInfoContainer = document.getElementById('song-lyrics');
    takeAnotherInfoContainer = anotherInfoParameter;
}

/* lysis ----->

1. connect searching text with api then fetching it
2. convert api into json data.
3. take this json data.
4. send that json data in any kind of html DOM by using HTML ID or Class And create HTML DOM in the js file.
5. finally, create more than one api and convert it into json data but do not forget connect with html Documentation.

working process --> 
1. catch searching text 2. convert json data 3. transmission it html dom by using json parameter 
4. then it check again connected tag or DOM element & create sequentially DOM its server or won station.
5. finally, it working with developer command and show output result.
