/**
 * Created by janghunlee on 2019. 1. 11..
 */
let header = document.getElementById('company-content-header');
let headerPlace = header.offsetTop;
let mobile_header = document.getElementById('mobile-menu');
let mobile_header_content = document.getElementById('mobile-menu-data');
let header_tag = document.getElementById('header');

let headerScrollCheck = () =>{
    "use strict";
    if(window.pageYOffset > headerPlace){
        header.classList.add("sticky");
    }
    else{
        header.classList.remove("sticky");
    }
}


window.onscroll = function () {
    headerScrollCheck();
}

let animateIn = ()=>{
    "use strict";
    if(window.innerWidth < 301){
        header_tag.style.height = '820px';
    }
    else if(window.innerWidth < 577){
        header_tag.style.height = '780px';
    }
    else{
        header_tag.style.height = '740px';
    }
    console.log(mobile_header_content.style.display)
    mobile_header_content.style.display = 'block';
    mobile_header_content.classList.remove('animated','fadeOut');
    mobile_header_content.classList.add('animated','fadeIn');
    console.log(mobile_header_content.style.display);
}

let animateOut = ()=>{
    "use strict";
    mobile_header_content.classList.remove('animated','fadeIn');
    mobile_header_content.classList.add('animated','fadeOut');

    setIntervalAnimate(function () {
        if(window.innerWidth < 301){
            header_tag.style.height = '200px';
        }
        else if(window.innerWidth < 577){
            header_tag.style.height = '160px';
        }
        else{
            header_tag.style.height = '120px';
        }
        mobile_header_content.style.display = 'none';
    });
}

let setIntervalAnimate = (callback) =>{
    "use strict";
    setTimeout(callback,500);
}

mobile_header.addEventListener("click",function (){
    "use strict";
    console.log(mobile_header_content.style.display)
    if(mobile_header_content.style.display == 'none' || mobile_header_content.style.display == ''){
        animateIn()
    }
    else{
        console.log('under function')
        animateOut()
    }
});

