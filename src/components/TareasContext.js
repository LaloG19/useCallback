import { createContext, useReducer } from "react";

const initialState = {
  tareas: [
    { id: 1, nombre: "Tarea 1", estado: "Por hacer" },
    { id: 2, nombre: "Tarea 2", estado: "Haciendo" },
    { id: 3, nombre: "Tarea 3", estado: "Completado" },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "agregar":
      return { ...state, tareas: [...state.tareas, action.payload] };
    case "mover":
      return {
        ...state,
        tareas: state.tareas.map((tarea) =>
          tarea.id === action.payload.id
            ? { ...tarea, estado: action.payload.nuevoEstado }
            : tarea
        ),
      };
    case "eliminar":
      return {
        ...state,
        tareas: state.tareas.filter((tarea) => tarea.id !== action.payload.id),
      };
    default:
      throw new Error("Acción no manejada");
  }
}

// Creación del contexto
const TareasContext = createContext();

// Componente proveedor
function TareasProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TareasContext.Provider value={{ state, dispatch }}>
      {children}
    </TareasContext.Provider>
  );
}

export { TareasContext, TareasProvider };
