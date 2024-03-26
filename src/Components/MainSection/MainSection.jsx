
import './mainSection.css'
import { Outlet } from 'react-router-dom'  


const MainSection = ({incrementCartCount}) => {

    return (

        <div className="mainSection">
            <Outlet context={incrementCartCount} />
        </div>
    )


}


export default MainSection;