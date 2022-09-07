import React, { useEffect } from 'react'
import '../Components/Boxs/fayl.css'
import './fayl.css'
import { Link, useParams } from 'react-router-dom'
import BoksDetails from '../Components/ApiBoks/BoksDetails'
import { useGlobalContext } from '../Context/context'
const Buisness = () => {

  let { cateqory } = useParams()
  const { data, setCat} = useGlobalContext()
  let allNew = data.slice(0, 12)
  

  useEffect(() => {
    setCat(cateqory);
  },[cateqory,setCat])


  

  return (
    <>
      <div className='All'>
        {allNew.map((item) => (
          <Link key={item.id} to={'/details/' + item.id}  >
            <BoksDetails Img={item.imageUrl} Title={item.title} id={item.id} content={item.content} Date={item.date} Author={item.author} />
          </Link>
        ))}
      </div>
    </>
  )
}

export default Buisness