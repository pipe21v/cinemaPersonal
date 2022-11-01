let peliculas=[
    {
        nombre:"Halloween la noche final",
        duracion:111,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemafelipe-abcbf.appspot.com/o/2a1af5b13bec-hwe_cineco_2-poster_480x670.jpg?alt=media&token=b0fd1541-f06e-48a7-bced-9ed7a54a4528"
    },
    {
        nombre:"La noche del apocalipsis",
        duracion:91,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemafelipe-abcbf.appspot.com/o/17b1b97755f4-poster_480x670.png?alt=media&token=d142dc65-ae63-4d0a-9ed4-cf8fbe585d6a"
    },
    {
        nombre:"Sonrie",
        duracion:115,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemafelipe-abcbf.appspot.com/o/ba08a64d79b2-smile_cineco_2-poster_480x670.jpg?alt=media&token=e6244463-4560-42b1-8403-59b797737848"
    },
    {
        nombre:"Tadeo jones",
        duracion:90,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemafelipe-abcbf.appspot.com/o/ad5d84a0269f-tad3_cineco_2-poster_480x670.jpg?alt=media&token=0eea548e-81f9-461e-9dab-6c56763a55b4"
    },
    {
        nombre:"Wakanda por siempre",
        duracion: 161,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemafelipe-abcbf.appspot.com/o/cc8fdbb388a4-480x670.jpg?alt=media&token=2d5c80f8-b1aa-4a5c-aa5d-28558c344d64"
    },
    {
        nombre:"Gato con Botas 2",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemafelipe-abcbf.appspot.com/o/6556104b4e3a-480x670.png?alt=media&token=b2e96ae2-8444-4056-a606-5512613e3133"
    },
    {
        nombre:"Avatar el camino del agua",
        duracion:150,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemafelipe-abcbf.appspot.com/o/9fe9cf28c779-480x670.png?alt=media&token=f84f60d5-7917-45a3-84cc-31907646591f"
    },
    {
        nombre:"Amenaza explosiva",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemafelipe-abcbf.appspot.com/o/6893d3af31b3-hh_poster-dsktp_480x670.jpg?alt=media&token=a0a09071-3565-4c55-8527-488b958f5ac4"
    },
    {
        nombre:"Amenaza explosiva",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemafelipe-abcbf.appspot.com/o/6893d3af31b3-hh_poster-dsktp_480x670.jpg?alt=media&token=a0a09071-3565-4c55-8527-488b958f5ac4"
    },
    {
        nombre:"Amenaza explosiva",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemafelipe-abcbf.appspot.com/o/6893d3af31b3-hh_poster-dsktp_480x670.jpg?alt=media&token=a0a09071-3565-4c55-8527-488b958f5ac4"
    },
    {
        nombre:"Amenaza explosiva",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemafelipe-abcbf.appspot.com/o/6893d3af31b3-hh_poster-dsktp_480x670.jpg?alt=media&token=a0a09071-3565-4c55-8527-488b958f5ac4"
    },
    {
        nombre:"Amenaza explosiva",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemafelipe-abcbf.appspot.com/o/6893d3af31b3-hh_poster-dsktp_480x670.jpg?alt=media&token=a0a09071-3565-4c55-8527-488b958f5ac4"
    },
    {
        nombre:"Amenaza explosiva",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemafelipe-abcbf.appspot.com/o/6893d3af31b3-hh_poster-dsktp_480x670.jpg?alt=media&token=a0a09071-3565-4c55-8527-488b958f5ac4"
    },
]

let fila=document.getElementById("fila")

peliculas.forEach(function(pelicula){
    console.log(pelicula.poster)

    let foto=document.createElement("img")
    foto.src=pelicula.poster
    foto.classList.add("img-fluid","w-100")

    fila.appendChild(foto)
})