import './fayl.css'
import clock from '../Boxs/img/Clock.png'
import user from '../Boxs/img/User.png'



const BoksDetails = ({Img,Title,content,Date,Author,GetAll}) => {

   

   
  return (
    
      <div  className="container">
       <img className='kia' src={Img} alt="kia" />
       <p className='text1'>{Title}</p>
       <p className='border'></p>
       <p className='text2'>{content}</p>
       <div className='divicon'>
           <div>
               <img className='clock' src={clock} alt="clock" /> <span>{Date}</span>
           </div>
           <div>
               <img className='user' src={user} alt="user" /> <span>{Author}</span>
           </div>
       </div>
   </div> 

   
  )
}

export default BoksDetails