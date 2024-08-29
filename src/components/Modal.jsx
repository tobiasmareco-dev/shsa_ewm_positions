import { useContext } from "react";
import { PositionContext } from "../context/PositionsContext";
export default function Modal({ handleStatusModal, unit, denom }) {
    const { deletePositionHeader } = useContext(PositionContext);
    const handleDeleteUnitHeader = () => {
        deletePositionHeader(unit);
        handleStatusModal(false);
    }
    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-1 mx-1 max-w-[300px] ">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex justify-center p-1 border-b border-solid border-blueGray-200 rounded-t">
                            <h3 className="text-xl font-semibold text-red-500 ">
                                Atencion!!
                            </h3>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                Desea eliminar los datos de la UNIT <span className="font-bold text-xs text-red-900">{unit} - {denom}</span>
                            </p>
                        </div>
                        {/*footer*/}
                        <div className="flex flex-col gap-3 items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-1 py-1 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                onClick={handleDeleteUnitHeader}
                            >
                                Confirmar
                            </button>
                            <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => handleStatusModal(false)}
                            >
                                Cancelar
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}