import React, { useContext, useRef, useState } from 'react'
import { PositionContext } from '../context/PositionsContext';

function CreateUnitHeader() {
    const { createPositionHeader } = useContext(PositionContext);
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const inputRef = useRef(null);

    const handleClearInput = (e) => {
        setValue('');
        inputRef.current.focus();
    }
    const handleUnitSubmit = async (e) => {
        e.preventDefault();
        if ((value != '')) {
            if (value.length == 10) {
                setError(false)
                const res = await createPositionHeader(value);
                if (Boolean(res?.error)) {
                    setError(true);
                    return;
                }
                return;
            }
        }
        setError(true);
    }

    const handleActiveInput = (e) => {
        inputRef.current.removeAttribute('inputMode');
        inputRef.current.focus();
    }

    return (
        <div className='container mx-auto'>
            <h3 className='text-center font-bold text-md'>Introducir UNIT</h3>
            <form onSubmit={handleUnitSubmit} className='flex flex-col justify-center items-center'>
                <div className=" py-1 flex justify-start items-start gap-2">
                    <button className='p-1 font-bold relative -left-10' onClick={(e) => { handleActiveInput(e) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                        </svg>
                    </button>
                    <input type="text" className="bg-green-50 border border-green-500 text-green-900  text-sm rounded-md focus:ring-green-500 focus:border-green-500 block w-full p-1 " placeholder="UNIT"
                        autoComplete='off'
                        id='unit'
                        value={value}
                        onChange={(e) => setValue(e.target.value)} ref={inputRef} autoFocus
                        inputMode='none'
                    />
                    <button onClick={(e) => handleClearInput(e)} type='reset' className='bg-red-500 text-white font-bold rounded-full items-center w-8 h-full justify-center text-center'>X</button>
                </div>
                <button type="submit" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-thin rounded-lg text-sm px-2 py-1 text-center ">Buscar datos</button>
            </form>
            {error && <>
                <p className='text-red-800 font-bold text-center'>*Unit no valida*</p>
            </>}
        </div>
    )
}

export default CreateUnitHeader