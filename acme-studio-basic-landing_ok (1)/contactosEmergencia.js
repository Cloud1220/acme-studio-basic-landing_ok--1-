document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formContacto");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const paciente = document.getElementById("paciente").value;
    const nombre = document.getElementById("nombre").value;
    const relacion = document.getElementById("relacion").value;
    const telefono = document.getElementById("telefono").value;

    if (paciente && nombre && relacion && telefono) {
      alert(`Contacto registrado:\nPaciente: ${paciente}\nNombre: ${nombre}\nRelación: ${relacion}\nTeléfono: ${telefono}`);
      form.reset();
    } else {
      alert("Por favor complete todos los campos.");
    }
  });
});
