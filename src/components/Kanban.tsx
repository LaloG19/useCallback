import React, { useContext } from "react";
import { TareasContext } from "./TareasContext";

const Kanban: React.FC = () => {
  const { state, dispatch }: any = useContext(TareasContext);

  const moverTarea = (
    id: number,
    nuevoEstado: "Por hacer" | "Haciendo" | "Completado"
  ) => {
    dispatch({ type: "mover", payload: { id, nuevoEstado } });
  };

  const eliminarTarea = (id: number) => {
    dispatch({ type: "eliminar", payload: { id } });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "70vh",
        width: "70vw",
      }}
    >
      <div
        style={{
          width: "30%",
          backgroundColor: "#ffcccc",
          padding: "1rem",
          overflowY: "scroll",
          scrollbarWidth: "none",
        }}
      >
        <h2 className="mb-4 text-center font-bold uppercase border-b-2 border-black pb-3">
          Por hacer
        </h2>
        {state.tareas
          .filter((tarea: any) => tarea.estado === "Por hacer")
          .map((tarea: any) => (
            <div
              key={tarea.id}
              className="transition-all duration-500 hover:cursor-pointer pb-2 rounded-lg hover:bg-[#e5adad] mb-3"
            >
              <span className="w-full flex justify-center items-center bg-[#e5adad]">
                {tarea.nombre}
              </span>
              <div className="flex justify-evenly items-center w-full my-3">
                <button
                  onClick={() => eliminarTarea(tarea.id)}
                  className="w-[35%] font-semibold bg-red-600 px-2 py-1 rounded-lg"
                >
                  Eliminar
                </button>
                <button
                  onClick={() => moverTarea(tarea.id, "Haciendo")}
                  className="bg-blue-400 px-2 py-1 font-semibold max-w-[45%] w-[45%] truncate rounded-lg"
                >
                  Mover -{">"}
                </button>
              </div>
            </div>
          ))}
      </div>
      <div
        style={{
          width: "30%",
          backgroundColor: "#ccffcc",
          padding: "1rem",
          overflowY: "scroll",
          scrollbarWidth: "none",
        }}
      >
        <h2 className="mb-4 text-center font-bold uppercase border-b-2 border-black pb-3">
          Haciendo
        </h2>
        {state.tareas
          .filter((tarea: any) => tarea.estado === "Haciendo")
          .map((tarea: any) => (
            <div
              key={tarea.id}
              className="transition-all duration-500 hover:cursor-pointer pb-2 rounded-lg hover:bg-[#aeecae] mb-3"
            >
              <span className="w-full flex justify-center items-center">
                {" "}
                {tarea.nombre}{" "}
              </span>
              <div className="flex justify-evenly items-center w-full my-3">
                <button
                  onClick={() => eliminarTarea(tarea.id)}
                  className="w-[35%] font-semibold bg-red-600 px-2 py-1 rounded-lg"
                >
                  Eliminar
                </button>
                <button
                  onClick={() => moverTarea(tarea.id, "Completado")}
                  className="bg-blue-400 px-2 py-1 font-semibold max-w-[45%] w-[45%] truncate rounded-lg"
                >
                  Completado -{">"}
                </button>
              </div>
            </div>
          ))}
      </div>
      <div
        style={{
          width: "30%",
          backgroundColor: "#ccccff",
          padding: "1rem",
          overflowY: "scroll",
          scrollbarWidth: "none",
        }}
      >
        <h2 className="mb-4 text-center font-bold uppercase border-b-2 border-black pb-3">
          Completado
        </h2>
        {state.tareas
          .filter((tarea: any) => tarea.estado === "Completado")
          .map((tarea: any) => (
            <div
              key={tarea.id}
              className="flex flex-wrap justify-evenly items-center gap-1 transition-all duration-500 hover:cursor-pointer pb-2 rounded-lg hover:bg-[#babaff] mb-3 "
            >
              <span className="w-full flex justify-center items-center bg-[#babaff] rounded-lg">
                {" "}
                {tarea.nombre}{" "}
              </span>
              <button
                onClick={() => eliminarTarea(tarea.id)}
                className="w-[35%] font-semibold bg-red-600 px-2 py-1 rounded-lg my-3"
              >
                Eliminar
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Kanban;
