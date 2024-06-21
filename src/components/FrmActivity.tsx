import React from "react";
import { useReducer } from "react";

export default function FrmActivity(props: any){

    const [listado, setListado] = useReducer((state: any, newState: any) => ({...state, ...newState}), {
        actividades: [
            {
                id: 1,
                nombre: 'Actividad 1',
                estado: 'Por hacer'
            },
            {
                id: 2,
                nombre: 'Actividad 2',
                estado: 'Haciendo'
            },
            {
                id: 3,
                nombre: 'Actividad 3',
                estado: 'Completo'
            }
        ]
    });

    const cerrarModal = () => {
        props.setFrmActive(false);
    }

    const guardarRegistro = () => {

        cerrarModal();
    }

    return (
        <div>
            <form className='max-h-[3rem] mb-6 flex flex-row justify-center items-center'>
                <label className='font-semibold mr-4 text-white uppercase'>Nombre de la actividad: </label>
                <input type="text" className='mr-4 h-[2rem] rounded-lg px-2 min-w-[30vw]' />
                
                <button 
                className='px-4 h-[2rem] py-2 bg-green-500 mr-4
                rounded-xl font-semibold uppercase text-center text-black flex justify-center items-center'
                onClick={ guardarRegistro }
                >
                    Guardar 
                </button>
                <button 
                className='px-4 h-[2rem] py-2 bg-red-500 
                rounded-xl font-semibold uppercase text-center text-black flex justify-center items-center'
                onClick={ cerrarModal }
                >
                    Cancelar 
                </button>
            </form>
        </div>
    )
}