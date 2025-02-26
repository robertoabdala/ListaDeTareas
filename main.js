const tareas = [];

function agregarTarea(tarea) {
    if (tarea) {
        tareas.push(tarea);
        alert(`Tarea "${tarea}" agregada.`);
    } else {
        alert("No se puede agregar una tarea vacía.");
    }
}

function listarTareas() {
    if (tareas.length === 0) {
        alert("No hay tareas en la lista.");
    } else {
        let lista = "Lista de tareas:\n";
        for (let i = 0; i < tareas.length; i++) {
            lista += `${i + 1}. ${tareas[i]}\n`;
        }
        alert(lista);
    }
}

function eliminarTarea(tarea) {
    let index = tareas.indexOf(tarea);
    if (index !== -1) {
        for (let i = index; i < tareas.length - 1; i++) {
            tareas[i] = tareas[i + 1];
        }
        tareas.pop();
        alert(`Tarea "${tarea}" eliminada.`);
    } else {
        alert("Tarea no encontrada.");
    }
}

function menu() {
    let opcion;
    do {
        opcion = prompt("Menú de Tareas:\n1. Agregar tarea\n2. Listar tareas\n3. Eliminar tarea\n4. Salir");
        switch (opcion) {
            case "1":
                const nuevaTarea = prompt("Ingrese la nueva tarea:");
                agregarTarea(nuevaTarea);
                break;
            case "2":
                listarTareas();
                break;
            case "3":
                if (tareas.length === 0) {
                    alert("No hay tareas para eliminar.");
                } else {
                    listarTareas();
                    const tareaEliminar = prompt("Ingrese la tarea a eliminar exactamente como aparece en la lista:");
                    eliminarTarea(tareaEliminar);
                }
                break;
            case "4":
                alert("Saliendo del programa.");
                break;
            default:
                alert("Opción inválida. Intente nuevamente.");
        }
    } while (opcion !== "4");
}

menu();
