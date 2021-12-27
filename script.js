/* API Challenge notes

the user will enter the name of pokemon they want to search 
when they press the search button, the button will get the name of that pokemon if in data base (and will display character info)
take that name, and fetch the pokemon data with it
display the pokemon data in the document
*/

const baseURL = "https://pokeapi.co/api/v2/pokemon/";
// let pokemonName = 'butterfree'


function fetchPokemon() {
    let pokemon = document.getElementById("pokemonName").value;

    let url = `${ baseURL }${ pokemon }`;

   

    
fetch(url)  

.then(response => {
 //       console.log(response);
      return  response.json()
    })


       .then(jsonData => {
         console.log(jsonData.abilities[0].ability.name)


        let PokemonInfo = document.getElementById('results-returned');

        let moves = document.createElement("p")
        PokemonInfo.appendChild(moves)
        let DisplayData2 = jsonData.moves[0].move.name
        moves.innerText = DisplayData2;
        //PokemonInfo.innerText = 'coffee'
        
        let ability = document.createElement("p")
        PokemonInfo.appendChild(ability)
        let DisplayData = jsonData.abilities[0].ability.name
        ability.innerText = DisplayData
        });
    }



        let myButton = document.getElementById('lookUp');

      

//myInputBox.addEventListener('onChange')
//myButton.addEventListener('click', (event) => {
  //  console.log(event.target.value)})
  const myInput = document.getElementById('pokemonName');
 

  myInput.addEventListener('onChange', (event) => {
      userInput = event.target.value;
      console.log(event)
  });


  myButton.addEventListener('click', fetchPokemon  //run pokemon, fetch insteead
  )
  //let clearbutton = document.getElementById("results-returned") --how to clear results?

clearbutton.addEventListener('click', console.clear());
 // document.getElementById("results-returned").innerHTML = height;
 



 let PokemonInfo = document.getElementById('results-returned');

//let DisplayData =
//PokemonInfo.innerText = DisplayData  // there is an issue at this line, causing line 34 to not display on webpage

