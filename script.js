// script.js
document.getElementById('võistlus-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nimi = document.getElementById('nimi').value;
    const kuupaev = document.getElementById('kuupaev').value;
    const registreerimine = document.getElementById('registreerimine').value;
    const koht = document.getElementById('koht').value;

    const uusVõistlus = document.createElement('div');
    uusVõistlus.classList.add('võistlus');
    uusVõistlus.innerHTML = `
        <h3>${nimi}</h3>
        <p><strong>Aeg:</strong> ${kuupaev}</p>
        <p><strong>Kohalike meeskondade registreerimine:</strong> ${registreerimine}</p>
        <p><strong>Kohad:</strong> ${koht}</p>
    `;

    document.querySelector('#võistlused').appendChild(uusVõistlus);

    // Tühjendame vormi pärast lisamist
    document.getElementById('võistlus-form').reset();
});
