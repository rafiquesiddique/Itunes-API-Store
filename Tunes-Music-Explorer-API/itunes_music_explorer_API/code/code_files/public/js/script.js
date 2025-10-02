function getSong() {

    let songTitle = document.getElementById('songTitleTextField').value.trim()
    console.log('songTitle: ' + songTitle)
    if(songTitle === '') {
        return alert('Please enter a Song Title')
    }

    let songsDiv = document.getElementById('songs_div')
    //songsDiv.innerHTML = '<h1>Songs matching: ${songTitle} </h1> songsDiv.innerHTML = songsDiv.innerHTML + <h1>Songs matching: ${songTitle}</h1>'
    songsDiv.innerHTML = ''

    //document.getElementById("songTitleHeading").innerText = songTitle;
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let response = JSON.parse(xhr.responseText)
            var tableBody = document.getElementById("table_div");

            //refreshing the input table from the search results after every new inp
            while(tableBody.firstChild) {
              tableBody.removeChild(tableBody.firstChild);
            }  

            //set cell values by iterating over the number of results
            for(let i=0; i < response.resultCount; i++) {

              //create newRow element
              var newRow = tableBody.insertRow();

              //add cells to the row
              var cell4 = newRow.insertCell();
              var cell1 = newRow.insertCell();
              var cell2 = newRow.insertCell();
              var cell3 = newRow.insertCell();
              
              cell1.innerHTML = JSON.stringify(response.results[i].artistName);
              cell2.innerHTML = JSON.stringify(response.results[i].trackName);
              cell3.innerHTML = `<img src="${response.results[i].artworkUrl30}" />`;
              cell4.innerHTML = `<span id="add_button" style='font-size:50px;'>&#10133</span>`;

              cell4.addEventListener("click", function(){
                add(this.parentNode);
              });
         }
      }
    }
    xhr.open('GET', `/songs?title=${songTitle}`, true)
    xhr.send()
}

//function for the add button (other buttons are included here as well)
function add(row) {

  //assigning table to playlistTable variable
  let playlistTable = document.getElementById("playlist_div");

  //inserting a new row and assigning it to playlistRow
  let playlistRow = playlistTable.insertRow();

  //adding cells to rows 
  let playlistCell4 = playlistRow.insertCell();
  let playlistCell1 = playlistRow.insertCell();
  let playlistCell2 = playlistRow.insertCell();
  let playlistCell3 = playlistRow.insertCell();
  

  playlistCell1.innerHTML = row.cells[1].innerHTML;
  playlistCell2.innerHTML = row.cells[2].innerHTML;
  playlistCell3.innerHTML = row.cells[3].innerHTML;

  //adding the buttons as emojis for the remove, up and down button 
  playlistCell4.innerHTML = `<span id="remove_button" style='font-size:50px;'>&#10134</span>`;
  playlistCell4.innerHTML += `<span id="up_button" style='font-size:50px;'>&#128316</span>`;
  playlistCell4.innerHTML += `<span id="down_button" style='font-size:50px;'>&#128317</span>`;

  //code for the remove button
  playlistCell4.addEventListener("click", function(event) {
    if(event.target.id == "remove_button" ) {//checks to see if remove_button was clicked
      playlistTable.deleteRow(playlistRow.rowIndex);
    }
  });

  //code for the up button moves current row one position up the playlist
  playlistCell4.addEventListener("click", function(event) {
    if(event.target.id == "up_button" ) {//checks to see if up_button was clicked
      let currRow = event.target.parentNode.parentNode;
      let prevRow = currRow.previousElementSibling;
      if(prevRow) {
        currRow.parentNode.insertBefore(currRow, prevRow);
      }
   
    }

    });

  //code for the down button moves current row one position down the playlist
  playlistCell4.addEventListener("click", function(event) {
    if(event.target.id == "down_button" ) {//checks to see if down_button was clicked
      var nxt = playlistRow.nextElementSibling;
      if(nxt) {
        playlistRow.parentNode.insertBefore(nxt, playlistRow)
      }
    }

  });
  
  }

//Attach Enter-key Handler
const ENTER=13

function handleKeyUp(event) {
event.preventDefault()
   if (event.keyCode === ENTER) {
      document.getElementById("submit_button").click()
  }
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('submit_button').addEventListener('click', getSong)

  //add key handler for the document as a whole, not separate elements.
  document.addEventListener('keyup', handleKeyUp)
  
})

