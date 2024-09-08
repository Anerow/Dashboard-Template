const sideBar = document.querySelector('.sidebar');
const ceklis = document.getElementById('ceklis');
const mainContent = document.querySelector('.main');
const  menu = document.querySelector('.checkbox');
// document.getElementById('ceklis').onclick = () => {
//     sideBar.classList.toggle('show');
// }
//     document.addEventListener('click' ,function(e){
//         if(!ceklis.contains(e.target) && !sideBar.contains(e.target)){
//            sideBar.classList.remove('show');
//     }
// });
ceklis.addEventListener('change', function() {

if (this.checked) {
    // Add the active class to both the sidebar and main content
    sideBar.classList.add('show');
    menu.classList.add('show');
    mainContent.classList.add('show');
} else {
    // Remove the active class to hide the sidebar
    sideBar.classList.remove('show');
    mainContent.classList.remove('show');
    menu.classList.remove('show');
}
})