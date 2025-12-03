document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formReporte");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const destinatario = document.getElementById("destinatario").value;
    const mensaje = document.getElementById("mensaje").value;
    const archivo = document.getElementById("archivo").files[0];

    if (!archivo) {
      alert("Por favor adjunta un archivo PDF.");
      return;
    }

    const formData = new FormData();
    formData.append("destinatario", destinatario);
    formData.append("mensaje", mensaje);
    formData.append("archivo", archivo);

    try {
      const response = await fetch("/api/enviar-reporte", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        alert("Reporte enviado correctamente.");
        form.reset();
      } else {
        alert("Error al enviar el reporte.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un problema al enviar el reporte.");
    }
  });
});
