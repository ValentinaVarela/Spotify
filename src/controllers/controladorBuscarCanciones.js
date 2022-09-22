import { generarURI } from '../helpers/GenerarURI.js'
import { consultarCanciones } from '../services/servicioTOPTRACKS.js'
import {PETICION} from '../helpers/constantesGET.js'
import { pintarCanciones } from './controladorPintarCanciones.js'

let buscar=document.getElementById("buscar")
buscar.addEventListener("click",function(evento){
    evento.preventDefault()

    //OBTENGO EL ID DEL ARTISTA QUE BUSCA EL USUARIO
    let idArtistaSeleccionado=document.getElementById("artista").value
    let URI=generarURI(idArtistaSeleccionado)

    //LLAMANDO AL SERVICIO (ASINCRONO)
    consultarCanciones(URI,PETICION)
    .then(function(canciones){
        pintarCanciones(canciones)
    })
})