var video = document.querySelector('video');
video.style.width = '100%'; // Atur lebar video
video.style.height = '300px';
const radioButtons = document.querySelectorAll('input[type="radio"]');

radioButtons.forEach(button => {
button.style.width = '20px';
button.style.height = '20px';
});  
