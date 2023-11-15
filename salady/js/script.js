//header 메뉴
setTimeout(function(){
    $('header .Lnb').hide();
    $('header #gnb>li').mouseenter(function(){
        $('header .Lnb').hide();
        $(this).find('.Lnb').stop().slideDown();
    });
    $('header #gnb>li').mouseleave(function(){
        $('header .Lnb').hide();
    });

    $('header #gnb_mo>li').click(function(){
        if($(this).hasClass('active')){
            $('header .Lnb_mo').slideUp();
            $('header #gnb_mo>li').removeClass('active');
        }else{
            $('header .Lnb_mo').slideUp();
            $(this).find('.Lnb_mo').slideDown();
            $('header #gnb_mo>li').removeClass('active');
            $(this).addClass('active');
        }
    });

    $('header #side_menu_btn').click(function(){
        $(this).toggleClass('active-on');
        $('header #side_menu').toggleClass('on');
        $('header #slide_bg').toggleClass('on');
    });
},1000);

//메인페이지 배너
$(function() {
  var winW = cnt = setId = 0;
  resizeFn();
  function resizeFn() {
      winW = $(window).innerWidth();
      $(".slide_item").css({
          width: winW
      });
  };

  $(window).resize(function() {
      resizeFn();
  });

  autoplayFn();

  function autoplayFn() {
      setId = setInterval(nextCountFn, 4000);
  };

  $(".pageBt").each(function(idx) {
      $(this).click(function() {
          cnt = idx;
          mainSlideFn();
      });
  });

  function nextCountFn() {
      cnt++;
      mainSlideFn();
  };

  function mainSlideFn() {
      $(".slide_item_wrap").animate({
          left: (-100 * cnt) + "%"
      }, 600, function() {
          if (cnt > 3) {
              cnt = 0;
          }
          if (cnt < 0) {
              cnt = 3
          }
          $(".slide_item_wrap").animate({
              left: (-100 * cnt) + "%"
          }, 0)
      });
      $(".pageBt").removeClass("addPageBt");
      $(".pageBt").eq(cnt > 3 ? cnt = 0 : cnt).addClass("addPageBt");
  };

  $('.toggleBtn > i').click(function(){
    if($(this).hasClass('fa-circle-pause')){
      $(this).removeClass('fa-circle-pause');
      $(this).addClass('fa-circle-play');
      clearInterval(setId);
    }else if($(this).hasClass('fa-circle-play')) {
      $(this).removeClass('fa-circle-play');
      $(this).addClass('fa-circle-pause');
      autoplayFn();
    }
  });
});

//메인페이지 인스타게시글 slick slider
$(function(){
    $('.slide-items').slick({
        dots: true,
        infinite: true,
        speed: 300,
        //보여줄 사진의 수
        slidesToShow: 4,
        //넘어갈 사진의 수
        slidesToScroll: 4,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:false
            }
        }
        ]
    });
});

// 메인페이지 가맹상담 간편신청
$(function(){
    //이메일 셀렉트박스
    $('#IF-email-select').change(function(){
        $('#IF-email-input').val($('#IF-email-select').val());
    });
    //개인정보 방침 동의 체크박스 
    $('input[type="checkbox"][name="term-pb-ck"]').click(function(){
        if($(this).prop('checked')){
            $('input[type="checkbox"][name="term-pb-ck"]').prop('checked',false);
            $(this).prop('checked','true');
        }
    });
});


