export function pintarCanciones(canciones){
    let fila=document.getElementById("fila")
    fila.innerHTML=""

    canciones.tracks.forEach(function(cancion){

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
}