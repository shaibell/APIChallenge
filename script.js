/* API Challenge notes

the user will enter the name of pokemon they want to search 
when they press the search button, the button will get the name of that pokemon if in data base (and will display character info)
take that name, and fetch the pokemon data with it
display the pokemon data in the document
*/

fetch('https://pokeapi.co/api/v2/pokemon/')
   
.then(response => {
        console.log(response);
        return response.json()
    })
        .then(jsonData => {
            console.log(jsonData);
        });

        let buttonElement = document.getElementById(lookUp)
        

        let myButton = document.getElementById('lookUp');

myInputBox.addEventListener('onChange')
myButton.addEventListener('click', (event) => {
    console.log(event.target.value)})
