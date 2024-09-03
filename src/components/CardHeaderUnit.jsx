import React, { useState } from 'react'
import Modal from './Modal.jsx';
import { Link } from 'react-router-dom';

function CardHeaderUnit({ data }) {
    const [showModal, setShowModal] = useState(false)
    const handleDeleteUnit = () => {
        setShowModal(true);
    }
    return (
        <div className='flex flex-col sm:flex-row justify-between  max-w-sm mx-auto mb-2 shadow-lg px-1 py-1 gap-1'>
            <div className='flex flex-col items-start'>
                <p className='text-xs font-semibold text-start'>{data?.material || ''} - ({data?.lote})</p>
                <p className='text-xs font-semibold text-start  text-blue-600'>{data?.denom || ''}</p>
                <p className='text-xs font-semibold text-start'>{data?.unit || ''} - {data?.ubicacion}</p>
            </div>
            <div className='flex sm:flex-row justify-center items-center gap-1'>
                <Link to={`/details/${data?.unit}`} className='py-1 px-2 text-green-600 rounded-sm bg-transparent font-bold border text-xs'>Editar</Link>
                <button onClick={handleDeleteUnit} className='text-center py-1 px-2 bg-red-600 rounded-sm text-white text-xs'>Eliminar</button>
            </div>
            {showModal && (
                <Modal handleStatusModal={setShowModal} unit={data?.unit} denom={data?.denom} stock={data?.stock} um={data?.um}/>
            )}
        </div>
    )
}

export default CardHeaderUnit