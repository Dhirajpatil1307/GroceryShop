function stickyMenu() {
    var sticy = document.getElementById('sticky');
    if (window.pageYoffset > 220) {
        sticky.classList.add('sticky');
    }
    else {
        sticky.classList.remove('sticky');
    }
}
window.onscroll = function () {
    stickyMenu();
}

var cart=[];
var fruits=[];
function addToCart() {

}



function loadData(){
// let  fruit= JSON.parse(makeAJAXCall('GET', 'http://localhost:3000/fruit'));
// console.log(fruit);
makeAJAXCall('GET', 'http://localhost:3000/fruit').then(fruit=> fruits=JSON.parse(fruit))
}
loadData();