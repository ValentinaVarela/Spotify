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

export function hola(){
    
    let info = document.getElementById('historiaArtista')
    info.addEventListener('click', function(evento){
        let idArtistaSeleccionado=document.getElementById("artista").value
        switch (idArtistaSeleccionado){
            case '7E7CVSqFdLyh0K4AE9uTMo':
                let artistas=[
                    {foto: "https://firebasestorage.googleapis.com/v0/b/fotos-artistas-top-track.appspot.com/o/Pimpinela.jpg?alt=media&token=fbfda2ee-2547-48a2-bb26-6fa35c8fb6f7" , nombre: "Pimpinela" , historia: "Lucia y Joaquín Galán nacieron en Buenos Aires, de padre y madre españoles. Desde muy pequeños supieron que la música los acompañaría toda la vida. En junio de 1981, con el padrinazgo artístico de Luis Aguilé, comenzó Pimpinela, nombre de una flor del caribe que simboliza la protección y el éxito. El rasgo característico del dúo fue el de mezclar la música con la actuación, creando así un estilo totalmente innovador, y tratando en sus canciones temas de amor, desamor, historias de pareja y de la vida en general, es decir, historias cotidianas, y a veces verídicas. Ese año lanzan su álbum debut (Las Primeras Golondrinas). En 1982 llega el segundo álbum titulado (Pimpinela), que tiene el éxito de  (Olvídame y Pega la Vuelta). En 1983 llega el álbum (Hermanos). En 1984 el disco (Convivencia). Luego de conquistar Argentina y Latinoamérica, viajaron a España donde, en 1984 su éxito (Olvídame y Pega la Vuelta) había sido escuchado por cada rincón. En 1985, Pimpinela se convirtió en un trío, tras la participación de Dyango en uno de sus temas: (Por Ese Hombre). En Italia realizaron un segundo trío junto a Diego Armando Maradona, con la canción (Querida Amiga), con una versión en Español y otra en Italiano, cuyos beneficios fueron destinados a UNICEF. El gran éxito alcanzado hizo que productores de cine y televisión se fijaran en ellos y así se llevó a cabo una telenovela titulada (El Duende Azul),  de la que el dúo fue protagonista durante noventa capítulos, rodados en Buenos Aires y Miami durante 1987 y 1988."},
                    {foto: "https://firebasestorage.googleapis.com/v0/b/fotos-artistas-top-track.appspot.com/o/yuri.webp?alt=media&token=fd62b6c6-1962-4c00-80fb-7dfdf0f1a611" , nombre: "Yuri" , historia: "Yuri (6 de enero de 1964) cantante, actriz, y presentadora. Nació en Veracruz, México. su nombre de nacimiento es Yuridia Valenzuela Canseco. Su carrera artística inició desde su adolescencia. Sus padres, Humberto Valenzuela y Dulce Canseco, la apoyaron incondicionalmente. Aunque no la apoyaron en sus intenciones de ser bailarina de danza clásica, a pesar de haber ganado una beca para el Ballet Bolshoi de Rusia. Yuri formó parte de una agrupación musical llamada La Manzana Eléctrica, interpretaban canciones de Michael Jackson y Janis Joplin. Por su popularidad el grupo cambió su nombre a Yuri y La Manzana Eléctrica. Fue en esta etapa que Yuri trabó amistad con la distinguida cantante Celia Cruz, Yuri y su grupo fueron teloneros en las presentaciones de Cruz en el puerto de Veracruz. El arreglista Julio Jaramillo Arenas, del sello discográfico Gamma estaba encantando con el talento de la cantante y le ayudó a grabar su primer disco como solista. Su madre se convirtió en su representante. Luego, ella se trasladó a la capital mexicana.Su primer álbum fue: Ilumina tu vida (1978). Participó en el Festival OTI de la Canción y ganó el premio a la Revelación femenina del festival​. Yuri llegó a ser una de las artistas más populares del género pop en América Latina​. Aunque también ha probado con distintos géneros musicales, tales como: la balada, la ranchera, y la música tropical​. Durante un tiempo cantó música cristiana. La Academia Latina de Artes y Ciencias de la Grabación galardonó a Yuri con un Premio Grammy a la excelencia música. Una de sus producciones más destacadas se titula: Llena de dulzura. El disco fue calificado como Disco de Oro en toda América Latina. Fue la primera cantante latinoamericana en obtener Disco de Oro en España. En ese mismo año grabó el sencillo El pequeño panda de Chapultepec, la canción superó el millón de unidades vendidas. Su buen trabajo le permitió ser invitada al Festival Internacional de la Canción de Viña del Mar.​"},
                    {foto: "https://firebasestorage.googleapis.com/v0/b/fotos-artistas-top-track.appspot.com/o/ricardo%20arjona.jfif?alt=media&token=d0987b23-54b6-47a3-a922-a4cee4f8a36d" , nombre: "Ricardo Arjona" , historia: "Cantante guatemalteco. Ricardo Arjona llegó a este mundo el día 19 de enero de 1964 en la localidad latinoamericana de Antigua, en Guatemala. Cuando cumplió los tres años de edad su familia se trasladó a la capital del país, donde él vivió toda su infancia y pudo iniciar sus estudios académicos y musicales. A los 8 años Ricardo ya es un precoz músico que toca muy bien la guitarra. Continúa estudiando y llega a pasar por una etapa de adolescente rebelde que le lleva a tener problemas en la escuela, pero nunca deja de lado su formación musical, lo único que realmente le gusta. Aunque pasa el tiempo en ningún momento deja de pensar en hacer realidad su vocación de infancia e iniciar una carrera profesional como cantante. A los 21 años Ricardo Arjona tiene la ocasión de materializar su sueño de siempre gracias a su primer trabajo discográfico, que titula Déjame decir que te amo. Desafortunadamente esta grabación y su resultado le resultan una experiencia tan poco satisfactoria que le deciden a dejar el mundo de la música profesional Después de esto, durante cinco años orienta su vida a la realización de actividades muy diversas: trabaja como profesor, estudia la carrera de publicidad y juega a baloncesto, llegando a ser titular de la selección oficial de su país. Pero la música sigue siendo una pasión que Ricardo no puede olvidar y decide volver a intentar triunfar en la canción con el lanzamiento de su segundo disco, SOS rescátame. Desde ese momento no deja los estudios de grabación y sigue editando todas sus composiciones. Su siguiente trabajo Jesús: Verbo no sustantivo se convierte en el gran éxito que espera desde los inicios de su carrera y significa su consolidación definitiva como compositor y cantante." },
                    {foto: "https://firebasestorage.googleapis.com/v0/b/fotos-artistas-top-track.appspot.com/o/Myriam%20Hernandez.webp?alt=media&token=2f3f8a94-bca9-4873-9c22-b5f6530fc7aa" , nombre: "Myriam Hernandez" , historia: "Hija de una familia de padres muy jóvenes, de un hogar de clase media en Ñuñoa Villa Frei, Chile, Myriam fue la primera de tres hermanos y conoció la condición especial de ser hija única durante cuatro años, antes de que nacieran su hermana Pamela y su hermano Jaime. Siempre supo que quería cantar. Desde que tenía cuatro años se miraba al espejo, tomaba el cepillo de pelo como micrófono y cantaba para sus amigos; y ese deseo se pudo proyectar por primera vez a sus 10 años. Participó en un festival estudiantil donde era la más chica, y ganó. De intervención en intervención, de canto en canto, y de programa en programa, Myriam se fue convirtiendo poco a poco en una (figura), condición muy deseable para cualquier artista que aspire a una carrera dentro del mundo del espectáculo. Myriam Hernández comenzó su carrera a finales de la década de los 80s. Su álbum debut se publicó en 1988, bajo el título (Myriam Hernández). Tanto su belleza como su voz han llamado la atención de cuantos han presenciado sus actuaciones en directo. Su talento artístico, sumado a su tenacidad, ilusión y dedicación han sido sus mejores aliados para conseguir que, con su primer disco, ya fuera reconocida como una de las figuras más destacadas en la música de su país natal. En 1990 llegó su segundo disco homónimo. El público latinoamericano la conoció en el Festival Acapulco ´92 y quedó sorprendido: en un mundo en que las canciones de amor rebosan de frustraciones, rencores y ansias de revancha, los temas tiernos de Myriam eran un verdadero solaz, un buen romanticismo. Ese año lanzó el tercer (Myriam Hernández). Myriam contrajo matrimonio a los 25 años de edad con el empresario chileno Jorge Saint-Jean el 15 de agosto de 1992, quien también es su manager.El 17 de noviembre de 1994 nació su primer hijo, Jorge Ignacio, junto con el cuarto álbum (Myriam Hernández); el 10 de mayo de 1997 nació su hija Myriam Isidora.En 1998 sale a la venta (Todo el amor). Con la llegada del nuevo milenio edita el disco (+ y más). Al año siguiente sale (El amor en concierto).En 2004 sale a la calle (Huellas), que incluye el tema (Mío), con Los Nocheros. "},
                    {foto: "https://firebasestorage.googleapis.com/v0/b/fotos-artistas-top-track.appspot.com/o/Alejandra%20Guzm%C3%A1n.webp?alt=media&token=f25b9b4f-1b74-480d-acb9-e317d8dd3858" , nombre: "Alejandra Guzmán" , historia: "lejandra Gabriela Guzmán Pinal, conocida artísticamente como Alejandra Guzmán, es una cantante y actriz mexicana. Ha incursionado en la actuación de telenovelas, series y programas de televisión. Hija del cantante de rock and roll y actor Enrique Guzmán y de la actriz mexicana Silvia Pinal, es reconocida en Hispanoamérica y Estados Unidos.Nació un 9 de febrero en la ciudad de México. A los 5 años comenzó a tomar clases de ballet, tap y jazz; luego comenzó a incursionar en el ambiente artístico, haciendo comerciales, participando en telenovelas y haciendo coros. En 1988 bajo la producción de Miguel Blasco, lanza su primer disco titulado (Bye Mamá), con el cual llegó a ocupar los primeros lugares en las radios de todo el país, así como las listas en ventas. También fue nombrada (Revelación del año). En 1990 sale (Eternamente Bella), su tercer álbum, con el cual inicia una gira debutando en el Arena México, ante 17 mil personas, para continuar por toda la República Mexicana, Estados Unidos, Centro y Sudamérica, obteniendo el reconocimiento de (Cantante del Año). Luego debutó en cine con la película (Verano Peligroso). En el ’91 lanza su cuarto trabajo, titulado (Flor de Papel), y nuevamente bajo la producción de Blasco sale en 1994 un material llamado (Enorme). En 1995, Alejandra Guzmán lanza su disco “Rock Milenium: Alejandra Guzmán. En enero de 1996 estrena su álbum, (De Piel Negra).En junio de 1996 saca su séptimo disco, (Cambio de Piel), con un nuevo productor y con un tema de su propia autoría. En ese mismo año le proponen conducir una programa que se llamaría (Aire). En noviembre de 1997 saca su producción (La Guzmán), un disco realizado en vivo con tres temas inéditos y un dueto con Miguel Mateos. Los primeros meses de 1999 estuvieron dedicados a la grabación de su material titulado (Algo Natural) y su primer corte del mismo nombre obtuvo las primeras posiciones en varias ciudades de México y Estados Unidos. Este disco contiene 14 temas con nuevas fusiones de ritmos que destacan al máximo su voz." },
                    {foto: "https://firebasestorage.googleapis.com/v0/b/fotos-artistas-top-track.appspot.com/o/Feid.jpg?alt=media&token=243fa6ec-11ee-42eb-8646-e355503420e3" , nombre: "Feid" , historia: "Salomón Villada Hoyos, mejor conocido como Feid, es un artista que nació en Medellín, Colombia, el 19 de agosto de 1992.El cantautor ha logrado ganarse el cariño de sus fanáticos alrededor del mundo. Comenzó su carrera componiendo éxitos para destacados artistas latinos tales como J Balvin, Nicky Jam, CNCO, Sebastián Yatra, entre otros.Su versatilidad musical, ha llevado a Feid a colaborar con destacados artistas del momento y forma parte de un grupo élite de artistas de la nueva ola Dimelo Flow, Sech, Dalex, J Quiles y Lenny Tavarez, conocidos como miembros de “La Academia”.Una de su más reciente colaboración “Fresh Kerias” fue junto a Maluma.Feid también fue nominado a los Premios Tu Música Urbano 2020, en las categorías “Top Revelación Masculino”, “Top Dúo o Grupo” y “Canción Dúo o Grupo”.El artista empezó el 202 por todo lo alto tras recibir certificación disco platino, por las exitosas ventas de su segundo álbum de estudio “19”, el cual le otorgó su primera nominación a un GRAMMY Latino 2019 en la categoría “Mejor Álbum Urbano”. El álbum es compuesto por 15 temas, bajo el sello In-Tu Línea/UMLE, incluye los éxitos como “Sígueme Remix” junto al cantante panameño Sech, tema que ha logrado dar la vuelta al mundo y cuenta con más de 107 millones de visualizaciones en Youtube. El 19 de febrero de 2020, lanza en colaboración Manuel Turizo, “Borraxxa”. El 26 de junio se une a J Balvin, Maluma, Nicky Jam, Sech y Justin Quiles  para hacer el remix de “Porfa”. El 11 de septiembre lanza  el mixtape “Bahia Ducati”.El 25 de marzo de 2022 colabora en el single y videoclip (Mojando asientos) de Maluma. El 14 de septiembre lanza el álbum (Feliz cumpleaños Ferxxo, te pirateamos el álbum)." },
                    {foto: "https://firebasestorage.googleapis.com/v0/b/fotos-artistas-top-track.appspot.com/o/zion%20y%20lennox.jpg?alt=media&token=d805151c-4d7f-4025-8833-8bd9205619d6" , nombre: "Zion y Lennox" , historia: "Zion & Lennox, la Z y la L (Félix Ortiz y Gabriel Pizarro), oriundos de Carolina, Puerto Rico, son uno de los pilares de la música latina, el R&B, el Reggaetón y el Dance pop. Se conocieron siendo vecinos en su ciudad natal y rápidamente se hicieron amigos compartiendo los mismos gustos musicales.El inicio de su carrera quedó registrado en el año 2003, cuando participaron del álbum compilatorio “Desafío”, junto a otros artistas emergentes, y les sirvió para darse a conocer en diferentes países.En mayo de 2014 lanzaron su álbum debut “Motivando a la Yal”. Incluye el tema “Ahora”, seleccionado en 2005 por la compañía de juegos EA Sport Canadá como uno de los soundtracks del “FIFA Footbal 2005”. Ese año editan “Motivando a la Yal, Special Edition”, contando con algunas colaboraciones, entre ellas Pitbull.En 2006 se dan un respiro como dúo y trabajan en solitario. Zion editó “The Perfect Melody” en 2007 y Lennox, “La Evolución”.A finales de 2008 se reencuentran en el Coliseo de San Juan, Puerto Rico. Durante todo el año siguiente lanzaron temas sueltos en Internet.En 2010 editan su segundo álbum, “Los Verdaderos”, en el prestigioso sello Pina Records. Allí consiguen importantes colaboraciones: Daddy Yankee y J Balvin, entre otros.En 2011 participan de un compilado que lanza el sello bajo el título “La fórmula”, reuniendo a todos los artistas miembros. Incluye el tema “La Diosa de los Corazones”.El 28 de julio de 2013, en el marco del DragMania Music en Orlando, Florida, se desarrolló un confuso episodio entre Zion y el director de Pina Records, durante el cual el cantante salió golpeado en el rostro y retirado del lugar por fuerza de seguridad. Luego inició una demanda millonaria y el dúo continuó su carrera en su propio sello, Baby Records Inc.En 2014 se conoce “La botella”, primer sencillo de un nuevo álbum, y luego (Pierdo la Cabeza).En 2015 colaboran con Ricky Martin en la versión remix de (La Mordidita).El 30 de septiembre de 2016 sale “Motivan2” en el sello Warner Music Latin, incluyendo la versión remix de “Embriágame”, junto a Don Omar y las colaboraciones de Plan B, Nicky Jam, J Balvin, Farruko, Daddy Yankee, Maluma y R Kelly. En octubre visitan Argentina por primera vez." },
                    {foto: "https://firebasestorage.googleapis.com/v0/b/fotos-artistas-top-track.appspot.com/o/Dyango.jpg?alt=media&token=5693cb0e-d6b3-44ef-adf4-41e718fd9258" , nombre: "Dyango" , historia: "José Gómez Romero, Dyango, se formó musicalmente en el Conservatorio de Música de Barcelona y junto a sus compañeros de estudios recorrió Europa durante dos años interpretando diversos tipos de música. A pesar de que Dyango es un excelente interprete de violín y de trompeta, tras su primera experiencia musical decidió continuar explotando su magnifica voz cantando como solista, así, adoptó de Django Reindhart -el guitarrista de jazz gitano- el nombre artístico por el cuál le conocemos y debutó en el Festival de la Canción del Duero (1965). Después de un breve paso por Zafiro, en 1974, Dyango firmó contrato discográfico con el grupo EMI. Su primer álbum, grabado en 1975, tuvo gran éxito en Latinoamérica, en contraste con la escasa repercusión de su música en España, donde no obstante, su trabajo recibió una excelente acogida por parte de la crítica especializada. A partir de la grabación del viejo tango 'Nostalgia', en 1976, Dyango comenzó su conquista del mercado español. Tras obtener en el mismo año el premio al mejor intérprete y a la mejor canción del Festival de Benidorm con el tema, 'Si yo fuera él', su carrera resultaría imparable tanto a nivel nacional como internacional. Desde entonces, el repertorio de Dyango ha incluido los mejores boleros, tangos y rancheras, las viejas canciones de los guateques de los sesenta, decenas de éxitos propios y hasta piezas líricas. A lo largo de su carrera ha grabado dúos con artistas tan destacados como Celia Cruz, Oscar D'León, Sheena Easton, Roberto Goyeneche, Pimpinela y el tenor Jaume Aragall. Dyango ha obtenido a lo largo de su carrera 55 discos de oro y 40 de platino, que le han sido concedidos tanto en España como en diversos países latinoamericanos e incluso en Estados Unidos. De entre todos ellos, cabe citar el doble disco de platino conseguido por el álbum 'A corazón Abierto'." },
                    {foto: "https://firebasestorage.googleapis.com/v0/b/fotos-artistas-top-track.appspot.com/o/Blessd.jpeg?alt=media&token=017a60ce-2116-400f-ab1f-21ec08a8288a" , nombre: "Blessd" , historia: "El rapero Stiven Mesa Londoño, conocido artísticamente como Blessd, nació en Itagüi – Colombia el 27 de enero del año 2000; su eslogan es: “Hecho En Medellín”.En sus inicios trabajó en La Mayoritaria, un lugar de abastos alimenticios ubicada en la ciudad de Itagúi – Antioquia, entre estudio y trabajo iba consiguiendo dinero para pagar sus producciones las cuales debía ir abonando por cuotas. Comenzó su carrera en 2019 cuando se unió a JM World Music, desde entonces ha lanzado sus singles: “Mala Fama”, “Viernes social”, “Imposible”, “Mi niña”, “Dos Problemas”, entre otros sencillos. Blessd ha venido desarrollando su proyecto en medio de trabajo constante y talento, lo que le ha permitido perfeccionar su propuesta.En el 2021 daría lo que es su paso más grande en la industria musical, teniendo la oportunidad de grabar junto a Maluma el remix de la canción “Imposible”." },
                    {foto: "https://firebasestorage.googleapis.com/v0/b/fotos-artistas-top-track.appspot.com/o/karol%20G.jpg?alt=media&token=124b4a7f-7e49-4618-b44d-0ed0a392d219" , nombre: "karol G" , historia: "Karol G es la líder del movimiento femenino en el género urbano. Nació bajo el nombre de Carolina Giraldo Navarro, el 14 de febrero de 1991 en Medellín, Colombia.En 2010 fue corista de Reykon. En 2012 lanzó junto a él el tema “301”.En 2013 lanza el sencillo “Amor de Dos”, junto a Nicky Jam. Al año siguiente presenta dos nuevos temas: “Ricos Besos” y “Mañana”, junto a Andy Rivera.En 2015 graba una versión de “Mil Horas” de Los Abuelos de la Nada, a la cual titula “Ya No Te Creo”. Luego sale “Te Lo Quiero Hacer”, con De La Ghetto.En mayo de 2017 presenta “A Ella”. Algunos días más tarde lanza “Ahora Me Llama”, tema a dúo con Bad Bunny. Luego llega “Eres Mi Todo”, el 7 de julio. El 10 de agosto actúa por primera vez en Argentina, abriendo el concierto de J Balvin en el Stadium Luna Park. El 27 de octubre lanza el álbum (Unstoppable), con colaboraciones de Cosculluela, Ozuna, Bad Bunny, Kevin Roldán y Quavo.En 2018 pasan cosas buenas. Karol G participa en canciones de importantes artistas: Paty Cantú, Tini, Mau & Ricky, Antonio Orozco y Luis Fonsi. Además estrena (Pineapple) el 2 de marzo y el hit (Mi Cama) el 11 de mayo, cuyo éxito la lleva a grabar el Remix junto a Nicky Jam y J Balvin, el 13 de julio. El 14 de septiembre graba (Culpables), junto a Anuel AA. El 2 de noviembre se junta con Maluma y sacan el sencillo (Créeme).El 15 de enero de 2019 estrena (Secreto), nuevamente con su novio, Anuel Aa. El 15 de marzo debutan juntos en la gira (Culpables Tour), en Bogotá; en Argentina se presentan el 27 de abril en el Estadio Geba. El mismo día del arranque de la gira estrena, en una impactante dupla con Gloria Trevi, el sencillo (Hijoepu*#). El 5 de abril se conoce el single (Punto G), adelanto de su nuevo álbum (Ocean), a la venta el 3 de mayo. Colaboran J Balvin, Anuel Aa, Nicky Jam, Maluma, Yandel y otros. A su vez sale el documental sobre su vida, llamado (La Guerrera del Género), producido por Univisión. El 8 de noviembre, Karol G presenta el video y la canción (Tusa), junto a la rapera Nicki Minaj. En ferbrero, Karol G anuncia su show en el Estadio Luna Park para el próximo 13 de marzo." }
                ]
                console.log(artistas)
                break;
            
            default:
                break;
        }
    })
    
    
    }
    hola()