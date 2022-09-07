import React from 'react'
import './fayl.css'
import clock from './img/Clock.png'
import user from './img/User.png'
import kia from './img/kia.jpg'



const Boxs = () => {



    return (
        <>
            
            <div className="container">
                <img className='kia' src={kia} alt="kia" />
                <p className='text1'>Omicron is a deviant, 2 pandemics are going on side by side: Eminent virologist</p>
                <p className='border'></p>
                <p className='text2'>Omicron COVID-19 variant is 'illegitimate or deviant' from the virus' pandemic progression script, eminent virologist and former chief of the Indian Council of Medical Research Dr T Jacob John has said. \"We must think of two pandemics going on side by side- Delta and close relatives and Omicron and its variants in future,\" he added. </p>
                <div className='divicon'>
                    <div>
                        <img className='clock' src={clock} alt="clock" /> <span>16 jan 2022</span>
                    </div>
                    <div>
                        <img className='user' src={user} alt="user" /> <span>Sashita Klousa</span>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Boxs