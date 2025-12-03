const form = document.getElementById('registro-form');
    const confirmacion = document.getElementById('confirmacion');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      form.style.display = 'none';
      confirmacion.style.display = 'block';
    });