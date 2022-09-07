import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import ManageSearchIcon from '@mui/icons-material/ManageSearch'
import HomeIcon from '@mui/icons-material/Home'

export default function SearchBottom () {
  const [value, setValue] = useState('home')
  const navigate = useNavigate()

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    if (value === 'search') {
      navigate('/search')
    } else {
      navigate('/')
    }
  }, [value, navigate])

  return (
    <BottomNavigation sx={{ width: 100, height: 80, backgroundColor: '#2d2f4e' }} fontSize='large' value={value} onChange={handleChange}>
      <BottomNavigationAction
        style={{ color: 'white', fontSize: 'large' }}
        label='Tendencias'
        value='home'
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        style={{ color: 'white', fontSize: 'large' }}
        label='Search'
        value='search'
        icon={<ManageSearchIcon />}
      />
    </BottomNavigation>
  )
}
