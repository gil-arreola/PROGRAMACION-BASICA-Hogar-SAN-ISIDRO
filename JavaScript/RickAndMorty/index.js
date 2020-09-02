const contenedor = document.getElementById('peliculas')
const button = document.getElementById('button')
const buscador = document.getElementById('buscador')

button.addEventListener('click', () => {
  contenedor.innerHTML = 'loading...'

  fetch(`http://www.omdbapi.com/?apikey=7d2a2a83&s=${buscador.value}`)
    .then(res => {
      contenedor.innerHTML = ''
      return res.json()
    })
    .then(datos => {
      datos.Search.map(movie => {
        contenedor.innerHTML += `
        <div>
          <h1>${movie.Title}</h1>
          <img src="${movie.Poster}"/>
        </div>
        `
      })
    })


})
