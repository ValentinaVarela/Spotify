let URI="https://api.spotify.com/v1/artists/2w1UJL5kYJJkvjo71fQjOB/top-tracks?market=US"

let buscar=document.getElementById("buscar")
buscar.addEventListener("click",function(evento){
    evento.preventDefault()

    let artista=document.getElementById("artista").value
    console.log(artista)
    URI=`https://api.spotify.com/v1/artists/${artista}/top-tracks?market=US`
    const TOKEN="Bearer BQCtXjo_sW4MEh_epq03HvcYA2-4gcmjOuCNPBLMbOSIj50ZHQ4-nkiFNXmuxQSzu5sJAjZkqTYvy_4ZpmP5VtvfMtPhPho23N5yW4xO62ttH2CipnAJ8Rj8Tt7e2Ztm6IydexircbyetEIJFKOzf9UPbssMzkyIhRORjYzKraur0yG8DMtvZg-3nerGTbEIsQM"
    
    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN},
    }

    fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json() //garantizo formato JSON
})

.then(function(respuesta){
    console.log(respuesta) //Hago lo que quiera con respuesta
    console.log(respuesta.tracks) //accedo a un atributo de la respuesta

    //recorrer un arreglo
    let fila=document.getElementById("fila")
    fila.innerHTML=""
    respuesta.tracks.forEach(function(cancion){

        /*console.log(cancion)
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)
        console.log(cancion.popularity)
        console.log(cancion.album.name)
        console.log(cancion.album.release_date)*/

        let columna=document.createElement("div")
        columna.classList.add("col")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow")

        let audio=document.createElement("audio")
        audio.classList.add("w-100")
        audio.setAttribute("controls","controls")
        audio.src=cancion.preview_url

        let imagen=document.createElement("img")
        imagen.classList.add("w-100","h-100","img-fluid")
        imagen.src=cancion.album.images[0].url

        let titulo=document.createElement("h3")
        titulo.classList.add("tex-center")
        titulo.textContent=cancion.album.name

        let popularidad=document.createElement("h5")
        popularidad.classList.add("tex-center")
        popularidad.textContent=cancion.popularity

        let fecha=document.createElement("h3")
        fecha.classList.add("tex-center")
        fecha.textContent=cancion.album.release_date
        
        //PADRES E HIJOS
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(titulo)
        tarjeta.appendChild(popularidad)
        tarjeta.appendChild(fecha)
        tarjeta.appendChild(audio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })
})

.catch(function(respuestaError){
    console.log(respuestaError)
})
})


//RECETA PARA CONSUMIR APIS CON JS PURO


//1. si yo quiero consumir un api
//debo saber PARA DONDE IR Y A QUE SERVICIO....
//DEBO CONFIGURAR LA URI


//2. Configuro datos Especiales o DE CONTROL en el servidor


//3. Configuro la peticion
//NOTA: SOLO POST Y PUT CONFIGURAN BODY
//PARA JS LA PETICION ES UN OBJETO


//4. ARRANQUE PUES MIJO
//CONSUMA EL API