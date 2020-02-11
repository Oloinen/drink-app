import React from 'react'
import { useMediaQuery} from 'react-responsive'
import ScreenMain from './scomponents/ScreenMain.jsx'
import MobileMain from './mcomponents/MobileMain.jsx'

const Main = () => {
 
const isDesktop = useMediaQuery({ minWidth: 600 })
/*const isMobile = useMediaQuery({ maxWidth: 800})*/

if (isDesktop) {
    return (
        <div><ScreenMain/> </div>
)} 

else {
    return (
        <div><MobileMain/></div>
    )}
}

export default Main;