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
    getApi()
});





// -------------------------------------------------------->
// FUNCIONES:
//Función simulación de API
const api = () => { //
    return new Promise((resolve, reject) => {
        let usersArray = [] //Array usuarios vacío
        let isOk = true //Variable para obtener un booleano.
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




//Función que invoca a la Api
const getApi = async() =>{
    try{ //try no acepta argumentos 
        const user = await api();
        createUserCard(user);
        console.log("Pinta el objeto");
    } catch (error){
        console.log(error)
    }
}



//Función crear card
function createUserCard(user){ //Desestructuración ({name, email}) -> como parámetro
    usersContainer.innerHTML = ''; //Vacía la card antes de repintarla

    const fragment = document.createDocumentFragment();//Crea el fragmento

    //Card de usuario
    const userCard = document.createElement('DIV');
    userCard.classList.add("userCard")
    //Lista de datos
    const ulUserInfo = document.createElement('UL');
    ulUserInfo.classList.add("userInfo")
    //Datos
    const liName = document.createElement('LI');
    liName.classList.add("userLi")
    liName.textContent = `Nombre: ${user[0].name}`//nombre (se puede tomar de desestructuración)
    
    const liEmail = document.createElement('LI');
    liEmail.classList.add("userLi")
    liEmail.textContent = `Nombre: ${user[0].email}` //email (se puede tomar de desestructuración)

    //Colocación
    fragment.append(userCard)// -> Añade la card al fragmento   //usersContainer.append(userCard)
    userCard.append(ulUserInfo)
    ulUserInfo.append(liName, liEmail)
}

usersContainer.append(fragment); //Inserta el fragmento (la card) en el contenedor de usuario. 



// -------------------------------------------------------->
// INVOCACIONES:

