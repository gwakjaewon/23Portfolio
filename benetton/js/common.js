
$(function(){   
    //header
    $('header').mouseenter(function(){
        $('#h-logo>a>img').attr('src','images/logo_bk.png');
        $(this).addClass('onFf');
    }).mouseleave(function(){
        $('#h-logo>a>img').attr('src','images/logo_wh.png');
        $(this).removeClass('onFf');
    });
    //메뉴
    const gnbLi = $('#main-gnb li.sm');
    const subMenu = $('header .sub-menu');
    const subMBg = $('#sub-menu-bg');

    $(gnbLi, subMenu, subMBg).mouseenter(function(){
        gnbLi.removeClass('on');
        $(this).find(subMenu).stop().slideDown();
        $(this).addClass('on');
        subMBg.stop().slideDown();
    }).mouseleave(function(){
        gnbLi.removeClass('on');
        subMBg.stop().slideUp();
        subMenu.stop().slideUp();
    });
});

// 모바일 메뉴
$(function(){
    const mobOpen = $('header #nav-icon-menu-btn');
    const mobClose = $('#mo-menu-wrap #mo-menu-close-btn');
    const mobMenu = $('#mo-menu-wrap');
    const mobLi = $('#mo-menu>li a');
    const mobSubMenu = $('.mo-sub-menu');

    mobOpen.click(function(){
        mobMenu.addClass('active');
        $('html, body').stop().addClass('hidden');
    });
    mobClose.click(function(){
        mobMenu.removeClass('active');
        $('html, body').stop().removeClass('hidden');
    });

    //서브메뉴 드롭다운
    mobLi.click(function(){
        if($(this).hasClass('UpDown')){
            mobSubMenu.slideUp();
            mobLi.removeClass('UpDown');
        }else{
            mobSubMenu.slideUp();
            $(this).siblings(mobSubMenu).slideDown();
            mobLi.removeClass('UpDown');
            $(this).addClass('UpDown');
        }
    });
});


//메인페이지 슬라이드배너 스크립트
function showSlides() {
    const slides = document.getElementsByClassName("main-visual-item");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.opacity= "0";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    // slides.length보다 slideIndex 가 커지면 slideIndex =1로 설정
    slides[slideIndex-1].style.opacity = "1";  
    // slides[index값]의 설정 변경
    setTimeout(showSlides, 6000);
}
var slideIndex = 0;
showSlides();


//메인페이지 베스트아이템 탭메뉴
$(function(){
    const bestTabTit = $('.bestItem-tab-tit li');
    const bestTabContent = $('.bestItem-tab-content>div');

    bestTabTit .first().addClass('on');
    bestTabContent.first().show();
    bestTabTit.click(function(){
        bestTabTit.removeClass('on');
        $(this).addClass('on');
        bestTabContent.hide();
        bestTabContent.eq($(this).index()).show();
    });
});

//메인페이지 베스트아이템 찜 클릭
$('.item-content .item-like').click(function(){
    $(this).toggleClass('active');
});

// 메인페이지 시즌세일 슬라이드
$(function(){
    var num=0;

    const SaleImage = document.querySelector('#timeSale-sec .product-area .slide-wrap ul');
    const SaleTabNext = document.querySelector('#timeSale-sec .product-area .next');
    const SaleTabPrev = document.querySelector('#timeSale-sec .product-area .prev');

	function move(){
		var n=-(num*100)+"%";
		$(SaleImage).animate({
			left:n
		});
	}
    $(SaleTabNext).click(function(){
        num=num+1;
        if($(window).width() >= 550){
            var pg = 1;
        }else{
            var pg = 2;
        }
        if(num > pg){
            num=0;
        }
        move()
    });
    $(SaleTabPrev).click(function(){
        num=num-1;
        if($(window).width() >= 550){
            var pg = 1;
        }else{
            var pg = 2;
        }
        if(num < pg-1){
            num=0;
        }
        move()
    });
});

// 메인페이지 시즌세일 카운트다운
function SaleCounter() {
    const nowDate = new Date();
    const targetDate = new Date(`2023-12-12`).setHours(0,0,0,0);
    const remaining = (targetDate - nowDate) / 1000;
    const remainingObj = {
        remainingDate: Math.floor(remaining / 3600 / 24),
        remainingHours: Math.floor(remaining / 3600) % 24,
        remainingMin: Math.floor(remaining / 60) % 60,
        remainingMSec: Math.floor(remaining) % 60,
    };
    const documentObj = {
        days: document.querySelector('#Sale-counter #scDays'),
        hours: document.querySelector('#Sale-counter #scHours'),
        min: document.querySelector('#Sale-counter #scMin'),
        sec: document.querySelector('#Sale-counter #scSec'),
    };
    const documentArr = ["scDays", "scHours", "scMin", "scSec"];
    const timeKeys = Object.keys(remainingObj);

    const format = function (time) {
        if (time < 10) {
        return "0" + time;
        } else {
        return time;
        }
    };
    let x = 0;
    for (let tag of documentArr) {
        const remainingTime = format(remainingObj[timeKeys[x]]);
        document.getElementById(tag).textContent = remainingTime;
        x++;
    }
}
SaleCounter();
setInterval("SaleCounter()", 1000);

// 상단 스크롤 버튼
$(window).scroll(function(){
    if($(window).scrollTop() > 50) {
      $('.view_top').addClass('active');
    }
    else {
      $('.view_top').removeClass('active');
    }    
});
$('.view_top').click(function(){
    window.scrollTo({top : 0, behavior: 'smooth'});
});