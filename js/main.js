/*
PSEUDO-CÓDIGO
Entrada: API
const api = () => {
    //Hacer nueva promesa  
        //Variable isOk 
        //Transcurridos x segundos (setTiemOut)
            //si isOk true resolve data (objeto) Crea el objeto
            //si isOk false reject error
}


const consultaApi = () =>{
    //Resolución de la promesa 
    //Llamar a la funcion api 
        //.then -> resolve
        //.catch -> reject
}
*/




// -------------------------------------------------------->
// VARIABLES:
//Llamada al DOM
const buttonAskInfo = document.querySelector('#buttonAskInfo')
const usersContainer = document.querySelector('#usersContainer')



// -------------------------------------------------------->
// EVENTOS:
//Evento click en botón -> pinta card
buttonAskInfo.addEventListener("click", () => { 
    //Ejecutará la función pintar card
});





// -------------------------------------------------------->
// FUNCIONES:
//Entrada: API
const api = () => { //
    return new Promise((resolve, reject) => {
        let usersArray = [] //Array usuarios vacío
        let isOk //Variable para obtener un booleano.
        setTimeout(() => { //Activa el retardo
            if (isOk){
                resolve(
                    usersArray = [{ id: 1, name: "Pepe", email: "pepe@email.com" }]
                )}
            else {
                reject(
                    "Error: No hay datos disponibles"
                )}
        }, 2000)
    })
}

//funcion que invoca a la api
const getApi = () =>{
    api()
        .then((answer) =>{
            //pintarCard
            console.log("Pinta el objeto")
        })
        .catch((error) =>{
           error
        })
}




// -------------------------------------------------------->
// INVOCACIONES:
