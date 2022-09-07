import React from 'react'
import '../Components/Boxs/fayl.css'
import './fayl.css'
import {Link} from 'react-router-dom'
import BoksDetails from '../Components/ApiBoks/BoksDetails'
import { useGlobalContext } from '../Context/context'

const All = () => {
 const {data} = useGlobalContext()
 
  
  let allNew =data.slice(0,12)
  return (
    <>
    <div className='All'>
    {allNew.map((item)=>(
     <Link key={item.id} to={'/details/'+item.id} >
      <BoksDetails Img={item.imageUrl} Title={item.title} id={item.id} content={item.content} Date={item.date} Author={item.author} />
      
      </Link>
       

    ))}
    </div>
    
    </>
  )
}

export default All












// const [all,setAll] = useState([])
  // const getAll =async ()=>{
  //   let respons = await fetch('https://inshorts.deta.dev/news?category=all')
  //   let data = await respons.json()
  //   setAll(data.data)
  // }
  // useEffect(()=>{ 
  //       getAll()
  // },[])