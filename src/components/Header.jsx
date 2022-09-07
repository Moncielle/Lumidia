import Logo from '../assets/logo.png'
import SearchBottom from './common/SearchBottom'

const Header = () => {
  return (
    <div className='header'>
      <img src={Logo} alt='lumidia series' className='logo' />
      <SearchBottom />
    </div>
  )
}

export default Header
