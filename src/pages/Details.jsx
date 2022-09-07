import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGlobalContext } from '../Context/context';
import clock from '../Components/Boxs/img/Clock.png'
import user from '../Components/Boxs/img/User.png'


let localdata = JSON.parse(localStorage.getItem('data'))
let locdata = JSON.parse(localStorage.getItem('newdata'))

const Details = () => {
  const navigate = useNavigate()
  let { name } = useParams();

  var [detailData, setDetailData] = useState()
  const { data } = useGlobalContext()
  const setData = () => {


    const detail = data?.find((news) => {
      return news.id === name
    })

    setDetailData(detail)
  }


  useEffect(() => {
    if (data.length === 0) {return};
    setData();
  })


  if (detailData) {
    localStorage.setItem('data', JSON.stringify(detailData))

  } else {
    detailData = localdata

  }

  if(data){
    localStorage.setItem('newdata',JSON.stringify(data))
  }else{
    data[7].imageUrl = locdata[7].imageUrl
  }

 

  return (
    <>
      <div className='detailscontainer'>
        <div className="containerimg">
          <img className='conimg' src={detailData?.imageUrl} alt="" />
          <div className="author">
            <div className='imd'> <img className='clock' src={clock} alt="clokc" /> <span>{detailData?.date}</span></div>
            <div className='imd'> <img className='user' src={user} alt="user" /> <span>{detailData?.author}</span></div>
          </div>
        </div>
        <div className="textconta">
          <h3 className='htitle'>{detailData?.title}</h3>
          <div className="border1"></div>
          <p className='contex'>{detailData?.content}</p>
          <p className='contex'>{detailData?.content}</p>
        </div>
      </div>
      <div className="similarnews">
        <h2 className='h2h'>Similar news</h2>
        <div className="containersimilar">

          <div className="similarbox" onClick={()=> {
            navigate(`/details/${data[0*Math.random()].id}`)
            }}>
            <img className='similarimg' src={data[0*Math.random()]?.imageUrl} alt="" />
            <p className='para'>{data[0*Math.random()]?.title}</p>
            <div className="author">
              <div className='imd'> <img className='clock1' src={clock} alt="clokc" /> <span className='sp'>{detailData?.date}</span></div>
              <div className='imd'> <img className='user1' src={user} alt="user" /> <span className='sp1'>{detailData?.author}</span></div>
            </div>
          </div>
          <div className="similarbox"  onClick={()=> {
            navigate(`/details/${data[1].id}`)
            }}>
            <img className='similarimg' src={data[1]?.imageUrl} alt="" />
            <p className='para'>{data[1]?.title}</p>
            <div className="author">
              <div className='imd'> <img className='clock1' src={clock} alt="clokc" /> <span className='sp'>{detailData?.date}</span></div>
              <div className='imd'> <img className='user1' src={user} alt="user" /> <span className='sp1'>{detailData?.author}</span></div>
            </div>
          </div>
          <div className="similarbox" onClick={()=> {
            navigate(`/details/${data[2].id}`)
            }}  >
            <img className='similarimg' src={data[2]?.imageUrl} alt="" />
            <p className='para'>{data[2]?.title}</p>
            <div className="author">
              <div className='imd'> <img className='clock1' src={clock} alt="clokc" /> <span className='sp'>{detailData?.date}</span></div>
              <div className='imd'> <img className='user1' src={user} alt="user" /> <span className='sp1'>{detailData?.author}</span></div>
            </div>
          </div>

        </div>
      </div>


    </>
  )
}
export default Details