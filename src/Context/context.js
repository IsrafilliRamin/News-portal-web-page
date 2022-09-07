import React, {useEffect, useState } from 'react'
import { useContext } from 'react'


const AppContext = React.createContext()




export const AppProvider = ({children}) => {

    const [data,setData] = useState([])
    const [categoryName,setCategoryName] = useState(null)
    const [loading,setLoading] = useState(false);
   
    

    const setCat = (categoryName)=>{
        setCategoryName(categoryName);
      
    };

    useEffect(() => {
        const getData = async()=>{
       
            setLoading(true)
            const response = await fetch(`https://inshorts.deta.dev/news?category=${categoryName?categoryName:'all'}`)
            const newdata = await response.json();
            setData(newdata.data);
            setLoading(false);
        }
        getData()
    },[categoryName]);

/* useEffect(() => {
    setCat(cateqory);
  },[cateqory,setCat]) */

  return (
    <AppContext.Provider value={{data,setCat,categoryName,loading}}>
        {children}
    </AppContext.Provider>
  )
}


export const useGlobalContext = () =>{
    return useContext(AppContext)
}


// export  {AppProvider}

