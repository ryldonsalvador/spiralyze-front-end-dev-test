document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide',{
        autoplay: true,
        pagination: false,
        type: "loop",
        arrows: false,
        mediaQuery: 'max',
          breakpoints: {
                640: {
                    perPage: 3,
                },
                768: {
                    perPage: 4,
                },
                1024: {
                    perPage: 5,
                },
                1440: {
                    perPage: 6,
                },
          },
          perPage: 8,
    });
    var mainsplide = new Splide( '#main-carousel',{
        autoplay: false,
        pagination: false,
        // type: "loop",
        // gap: "3rem",
        padding: "0",
        perPage: 1,
        arrows: true,
        drag: false,
    });
    var footersplide = new Splide( '#footer-image-carousels',{
        autoplay: true,
        pagination: false,
        type: "loop",
        arrows: false,
        mediaQuery: 'max',
          breakpoints: {
                640: {
                    perPage: 3,
                },
                768: {
                    perPage: 4,
                },
                1024: {
                    perPage: 5,
                },
                1440: {
                    perPage: 6,
                },
          },
          perPage: 8,
    
    });
    splide.mount();
    mainsplide.mount();
    footersplide.mount();

    const dropbtn1 = document.querySelector('.footer-menu-click-1');
    const footerdropdownContent1 = document.querySelector('.mobile-footer-dropdown-1');

    const dropbtn2 = document.querySelector('.footer-menu-click-2');
    const footerdropdownContent2 = document.querySelector('.mobile-footer-dropdown-2');

    const dropbtn3 = document.querySelector('.footer-menu-click-3');
    const footerdropdownContent3 = document.querySelector('.mobile-footer-dropdown-3');

    dropbtn1.addEventListener('click', function () {
        footerdropdownContent1.style.display = footerdropdownContent1.style.display === 'block' ? 'none' : 'block';
    });

    dropbtn2.addEventListener('click', function () {
        footerdropdownContent2.style.display = footerdropdownContent2.style.display === 'block' ? 'none' : 'block';
    });

    dropbtn3.addEventListener('click', function () {
        footerdropdownContent3.style.display = footerdropdownContent3.style.display === 'block' ? 'none' : 'block';
    });


    const menuBtn = document.querySelector('.menu-btn');
    const hamburger = document.querySelector('.menu-btn_burger');
    const nav = document.querySelector('.nav');
    const menuNav = document.querySelector('.menu-nav');
    const navItems = document.querySelectorAll('.menu-nav_item');


    let showMenu = false;

    menuBtn.addEventListener('click', toggleMenu);

    function toggleMenu(){
        if(!showMenu){
            hamburger.classList.add('open');
            nav.classList.add('open');
            menuNav.classList.add('open');
            navItems.forEach(item => item.classList.add('open'));
            menuBtn.style.top = "1rem";

            showMenu = true;
            document.body.style.height = "100%";
            document.body.style.overflowY = "hidden";
        } else {
            hamburger.classList.remove('open');
            nav.classList.remove('open');
            menuNav.classList.remove('open');
            navItems.forEach(item => item.classList.remove('open'));
            menuBtn.style.top = "4rem";

            showMenu = false;
            document.body.style.height = "auto";
            document.body.style.overflowY = "auto";
        }
    }

    const footermenu1Btn = document.querySelector('.footer-menu-click-1');
    const footermenu2Btn = document.querySelector('.footer-menu-click-2');
    const footermenu3Btn = document.querySelector('.footer-menu-click-3');
    const plus = document.querySelector('.plus');
    const plus2 = document.querySelector('.plus2');
    const plus3 = document.querySelector('.plus3');

    footermenu1Btn.addEventListener('click', footermenu1Toogle);
    footermenu2Btn.addEventListener('click', footermenu2Toogle);
    footermenu3Btn.addEventListener('click', footermenu3Toogle);
    

    let showFooterMenu1 = false;
    let showFooterMenu2 = false;
    let showFooterMenu3 = false;

    function footermenu1Toogle(){
        if(!showFooterMenu1){
            plus.classList.add('open');
            showFooterMenu1 = true;
        }else{
            plus.classList.remove('open');
            showFooterMenu1 = false;
        }
    }
    function footermenu2Toogle(){
        if(!showFooterMenu2){
            plus2.classList.add('open');
            showFooterMenu2 = true;
        }else{
            plus2.classList.remove('open');
            showFooterMenu2 = false;
        }
    }
    function footermenu3Toogle(){
        if(!showFooterMenu3){
            plus3.classList.add('open');
            showFooterMenu3 = true;
        }else{
            plus3.classList.remove('open');
            showFooterMenu3 = false;
        }
    }

    var w = window.innerWidth;
    // console.log(w)
    window.onresize = function(event) {
        var w = window.innerWidth;
        
        if(w>=768){
            console.log(w)   
            footerdropdownContent1.style.display = "block"; 
            footerdropdownContent2.style.display = "block"; 
            footerdropdownContent3.style.display = "block"; 
        }else{
            footerdropdownContent1.style.display = "none"; 
            footerdropdownContent2.style.display = "none"; 
            footerdropdownContent3.style.display = "none"; 

            plus.classList.remove('open');
            showFooterMenu1 = false;

            plus2.classList.remove('open');
            showFooterMenu2 = false;

            plus3.classList.remove('open');
            showFooterMenu3 = false;
        }
    };

});





