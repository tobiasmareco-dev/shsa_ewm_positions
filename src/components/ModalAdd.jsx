import React, { useContext, useRef, useState } from 'react'
import { PositionContext } from '../context/PositionsContext';
function ModalAdd({ modalStatus, unit, details }) {
    const { createDetailsUnit } = useContext(PositionContext);
    const [hu, setHu] = useState('');
    const [error, setError] = useState(false)
    const [message, setMessage] = useState('');
    const [cantidad, setCantidad] = useState('');
    const cantidadInput = useRef(null);
    const huInput = useRef(null);
    const handleCreateDetail = async (e) => {
        e.preventDefault();
        if (hu == '' || cantidad == '') {
            setError(true)
            setMessage('Complete campos obligatorios')
            return;
        }
        const result = await createDetailsUnit(unit, hu, cantidad)
        if (Boolean(result?.error)) {
            setError(true);
            setMessage('HU ya se ha agregado.')
            return;
        }
        modalStatus(false);
    };

    const handleEditHU = (e) => {
        setHu(e.target.value);
        if (hu.length == 9) {
            cantidadInput.current.focus();
        }
    }

    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-1 max-w-[600px]">
                    {/*content*/}
                    <form className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none" onSubmit={handleCreateDetail}>
                        {/*header*/}
                        <div className="flex justify-center p-1 border-b border-solid border-blueGray-200 rounded-t items-center">
                            <h3 className="text-xl font-semibold text-green-500 ">
                                Agregar
                            </h3>
                        </div>
                        <div className='flex flex-col items-center justify-center opacity-40'>
                            <span className='font-bold text-xs '>{unit}</span>
                            <span className='font-bold text-xs '>{details.um}</span>
                            <p className='text-xs font-bold'>{details.denom.toLowerCase()}</p>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <div className="mb-3 pt-0">
                                <input type="number" placeholder="HU" className="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
                                    value={hu}
                                    onChange={(e) => { handleEditHU(e) }}
                                    ref={huInput}
                                    onFocus={() => setHu('')}
                                    autoFocus
                                />
                            </div>
                            <div className="mb-3 pt-0">
                                <input type="number" placeholder="CANTIDAD" className="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
                                    value={cantidad}
                                    ref={cantidadInput}
                                    onChange={(e) => setCantidad(e.target.value)}
                                />
                            </div>
                        </div>
                        {error && (
                            <p className='text-center text-red-500 font-bold text-xs'> *{message}*</p>
                        )}
                        {/*footer*/}
                        <div className="flex flex-col gap-3 items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                            <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="submit"
                                onClick={handleCreateDetail}
                            >
                                Confirmar
                            </button>
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-1 py-1 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                onClick={() => modalStatus(false)}
                                type='reset'
                            >
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default ModalAdd