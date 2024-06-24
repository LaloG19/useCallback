import { useState, useCallback, useContext } from "react";
import { TareasContext } from "./TareasContext";

function FrmActivity({ setFrmActive }: any) {
  const [nombreTarea, setNombreTarea] = useState("");
  const { dispatch } = useContext(TareasContext);

  const agregarTarea = useCallback(() => {
    if (nombreTarea === "") {
      alert("Ingresa un valor");
      return;
    }

    dispatch({
      type: "agregar",
      payload: { id: Date.now(), nombre: nombreTarea, estado: "Por hacer" },
    });
    setNombreTarea("");
  }, [nombreTarea, dispatch]);

  return (
    <form
      className="px-6 py-4 bg-[#155E75] mb-6 rounded-xl font-semibold uppercase gap-4 flex"
      onSubmit={(e) => {
        e.preventDefault();
        agregarTarea();
      }}
    >
      <input
        className="px-4 rounded-md outline-none"
        type="text"
        value={nombreTarea}
        onChange={(e) => setNombreTarea(e.target.value)}
      />
      <button type="submit" className="bg-green-400 rounded-lg px-4 py-[2px]">
        Agregar tarea
      </button>
    </form>
  );
}

export default FrmActivity;
