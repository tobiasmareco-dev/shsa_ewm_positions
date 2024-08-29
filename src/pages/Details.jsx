import React from 'react'
import { useParams } from 'react-router-dom'
import DetailsUnit from '../components/DetailsUnit'
import MenuHeader from './MenuHeader'

function Details() {
    const { number } = useParams();
    return (
        <main className='container mx-auto px-1'>
            <MenuHeader />
            <DetailsUnit unit={number} />
        </main>
    )
}

export default Details