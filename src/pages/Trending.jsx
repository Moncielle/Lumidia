import useGetData from '../hooks/useGetData'
import Loading from '../components/common/Loading'
import Card from '../components/Card'

const Trending = () => {
  const data = useGetData('https://api.themoviedb.org/3/movie/popular?api_key=1271682cfb8fb295ba15c7bdb1488526&language=es-MX')
  console.log(data)

  return (
    <div className='trending'>
      <h1>Tendencias</h1>
      <div className='containerCard'>
        {
          data.length === 0
            ? <Loading />
            : data.map((info) => (
              <Card key={info.id} poster={info.poster_path} vote={info.vote_average} date={info.relase_date} {...info} />
            ))
        }
      </div>
    </div>
  )
}

export default Trending
