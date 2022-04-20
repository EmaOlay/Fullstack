var progress = document.getElementById('progressbar');
var total_height = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progress_height = (window.pageYOffset / total_height) * 100;
    progress.style.height = progress_height + '%';
}