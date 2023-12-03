document.getElementById('burger').addEventListener('click', function () {
    document.getElementById('burger').classList.toggle('animation');
    document.getElementById('overlay').classList.toggle('active');
    document.getElementById('bandeBlanche').classList.toggle('active');
});