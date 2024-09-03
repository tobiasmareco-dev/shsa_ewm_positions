import React, { useContext, useEffect, useRef, useState } from 'react'
import { PositionContext } from '../context/PositionsContext'
import ModalAdd from './ModalAdd';

function DetailsUnit({ unit }) {
    const [modalAdd, setModalAdd] = useState(false);
    const { getDetailsUnit, details, positions, deleteDetailItem } = useContext(PositionContext);
    const headerUnit = positions?.filter(item => item.unit == unit);
    const res = getDetailsUnit(unit);
    const handleDeleteDetail = (hu) => {
        deleteDetailItem(hu);
    }
    return (
        <>
            <section className='relative flex justify-end right-2'>
                <button className='bg-sky-900 text-white font-bold py-1 px-3 ' onClick={() => { setModalAdd(true) }}>Agregar HU</button>
            </section>
            {details?.length > 0 ?
                (<>
                    <h3 className='font-bold text-center pt-2 text-sky-700'>Lista de HU cargadas.</h3>
                    <div className='flex flex-col space-y-1 justify-start pb-2'>
                        <p className='text-xs font-semibold opacity-55'>MATERIAL: {headerUnit[0]?.material} - {headerUnit[0]?.denom}</p>
                        <p className='text-xs font-semibold opacity-55'>LOTE: {headerUnit[0]?.lote}</p>
                        <span className='font-bold text-green-700'>STOCK: {Number(headerUnit[0]?.stock).toLocaleString('es-ES')} {headerUnit[0]?.um}</span>
                    </div>
                </>
                ) : (<h3 className='text-center font-bold text-gray-300 py-2'>No existen HU cargadas.</h3>)}
            {details?.map((detail) => {
                return (
                    <div key={detail.id} className='flex items-center justify-between gap-2 bg-gray-200 px-1 py-[1.5px] space-y-1 text-sm max-w-sm mx-auto'>
                        <p className='font-semibold'>{detail.hu}</p>
                        <p>{detail.cantidad}</p>
                        <button className='text-xl rounded-full text-white bg-red-600 py-1 px-3 font-bold h-7 w-7 items-center flex justify-center' type='reset' onClick={() => handleDeleteDetail(detail?.hu)}>X</button>
                    </div>
                )
            })}
            <p className={`text-center font-semibold ${Number(res).toLocaleString('es-ES') === Number(headerUnit[0]?.stock).toLocaleString('es-ES') ? 'text-green-700' : 'text-red-700'}`}>TOTAL HU: {(res).toLocaleString('es-ES')}</p>
            {modalAdd && (
                <ModalAdd modalStatus={setModalAdd} unit={unit} details={headerUnit[0]} />
            )}
        </>
    )
}

export default DetailsUnit