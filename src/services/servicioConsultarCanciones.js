//RECETA PARA CONSUMIR APIS CON JS PURO

//PASO 1: Si yo quiero consumir un api debo saber para donde ir y a que servicio...debo configurar la URI
const URI="https://api.spotify.com/v1/artists/4q3ewBCX7sLwd24euuV69X/top-tracks?market=US"

//PASO 2: Si ya se para donde voy configuro datos especiales o de control en el servidor
const TOKEN="Bearer BQD8Nz2wqkDj2V8rdSd6D3UELYASWLeLj73US9IjMNG60HWNf8flv7xVvvCkqBxAlMwmK6vzKK2DOcd0zZc0lsCn5Jm-OZiaR0CpyVvLkDHwKnQB4MGqLQ7HbGMvR-aghUb63uRT_6egIay3lMWgSAEuxHn5OEHBw8H5jgok5y9FZ2UdflbriPfZ8vrhHp-9oAg"

//PASO 3: Configura la peticion, NOTA:Solo POST y PUT configuran BODY.. para JS la peticion es un objeto
const PETICION={
    method:"GET",
    headers:{Authorization:TOKEN},
}

//PASO 4:Arranque pues mijo... Consuma el API 
fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json() //Garantizo formato json
})
.then(function(respuesta){
    console.log(respuesta) //Hago lo que quiera con respuesta
    console.log(respuesta.tracks) //Accedo a un atributo de la respuesta

    //Recorro el arreglo
    respuesta.tracks.forEach(function(cancion){
        console.log(cancion)
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)
        console.log(cancion.popularity)
        console.log(cancion.album.name)
        console.log(cancion.album.release_date)
    })
})
.catch(function(respuestaError){
    console.log(respuestaError)
})