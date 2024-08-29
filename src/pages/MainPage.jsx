import React, { useContext } from 'react'
import { PositionContext } from '../context/PositionsContext'
import CreateUnitHeader from '../components/CreateUnitHeader';
import CardHeaderUnit from '../components/CardHeaderUnit';
function MainPage() {
    const { positions } = useContext(PositionContext);
    return (
        <>
            <CreateUnitHeader/>
            {positions.map(pos=>{
                return <CardHeaderUnit data={pos} key={pos.unit}/>
            })}
        </>
    )
}

export default MainPage