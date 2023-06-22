var slider = document.querySelectorAll('.img')
console.log(slider);
var next = document.getElementById('next');
var pre = document.getElementById('prev');
console.log(next, pre);
var count = 0;

var slideShow = ()=>{
    slider.forEach((ele, ind)=>{
        slider[ind].style.display ='none';
    })
    slider[count].style.display = 'block';
}

next.addEventListener('click', ()=>{
    count++;
    if (count >= slider.length ) {
        count=0;
    }
    slideShow()
})
pre.addEventListener('click', ()=>{
    count--;
    if (count < 0 ) {
        count=slider.length-1;
    }
    slideShow()
})
slideShow()
