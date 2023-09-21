import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"

const useGlobalTheme = ()=>{
    const [globalTheme,setGlobalTheme]=useState({})
    const {data}=useSelector((state)=>state.websiteTemplate.getTemplate)

    useEffect(()=>{
        if(data){
            setGlobalTheme(data?.template?.theme)
        }
    },[data])
    return globalTheme
}
export default useGlobalTheme