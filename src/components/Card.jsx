import posterNotFound from '../assets/poster-NotFound.jpg'

const Card = ({ title, poster, vote, overview, date }) => {
  // funcion para obtener solo el año de la publicación de la pelicula
  const getYear = (year) => {
    const date = new Date(year)
    const dateNew = date.getFullYear()
    return dateNew
  }

  const getColor = (vote) => {
    if (vote >= 8) {
      return 'green'
    } else if (vote >= 6) {
      return 'orange'
    } else {
      return 'red'
    }
  }
  return (
    <div className='card'>
      <img className='poster' src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : posterNotFound} alt={title} />
      <div className='movie-info'>
        <h3>{title}</h3>
        <span className='{getColor(vote)}'>{vote}</span>
      </div>
      <div className='overview'>
        <h3>{title}</h3>
        <p>{overview}</p>
        <span>{getYear(date)}</span>
      </div>
    </div>
  )
}

export default Card
