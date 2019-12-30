$(function(){
    $('.section.banner').css('margin-top',$('.header').height());


    // toggle menu open event
    $('#tgl_btn').on('click',function(){
        fuEffect();
        if($('#line01').attr('class')){
            if($(window).width()>=768){
                $('#info').css('width','30%').css('right','0');
            }else{
                $('#info').css('width','50%').css('right','0');
            }
        }else{
            fnClose();
        }
    })

    // toggle menu close event
    $('#info_close').on('click',function(){
        fnClose();
    });

    // window resize event
    $(window).on('resize',function(){
        $('.section.banner').css('margin-top',$('.header').height());
        fnClose();
    });

    // 토글버튼 위치 변경함수
    function fnClose(){
        $('#info').css('width','0').css('right','-41px');
    };

    // 토글버튼 모양 변경함수
    function fuEffect(){
        $('#line01').toggleClass('btn01');
        $('#line02').toggleClass('btn02');
        $('#line03').toggleClass('btn03');
    }
   

    // swiper banner 이벤트 객체
    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    });

    // slider2 이벤트 객체
    var swiper = new Swiper('.swiper-container2', {
        breakpoints: {
        // 360이상
            360: {
                slidesPerView: 1.5,
                spaceBetween: 15
            },
        // 768이상
            768: {
                slidesPerView: 2.5,
                spaceBetween: 24
            },
            // 1280이상
            1280: {
                slidesPerView: 4,
                spaceBetween: 24
            }
        }
    });

    // swiper3 banner 이벤트 객체
    var swiper = new Swiper('.swiper-container3', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    });


    // movie title click event
    var moviePos=$('#movie .sec_bottom>div');
    moviePos.hide().eq(0).show();

    var target=$('#movie_tit>li');
    target.on('click',function(){
        var i=$(this).index();
        moviePos.hide().eq(i).show();
        console.log(i);
        target.removeClass();
        $(this).addClass('active');
    })
    //notice title click event
    var notice=$('.notice_tit>li');
    var noticeTxt=$('.notice_txt');
    notice.eq(0).addClass('notice_active');
    noticeTxt.hide().eq(0).show();
    notice.css('cursor','pointer');

    notice.on('click',function(){
        var indexNum=$(this).index();
        noticeTxt.hide().eq(indexNum).show();
        notice.removeClass();
        $(this).addClass('notice_active');
    })
    
    // ===로그인 모달===
    
    $('.container').hide();
    $('.modal_open_btn').on('click',function(){
        // $('#wrap').hide();
        $('.container').show();
        fnClose();
        fuEffect();
        return false;
    })
    $('#modal_close_btn').on('click',function(){
        $('.container').hide();
        // $('#wrap').show();
        return false;
    })
    var userId=['pam7461','pam7462','pam7463'];
    var userPassword=['123456','12345678','123456789'];
    $('#login_btn').on('click',function(){
        var user_id=$('#user_id');
        var user_pass=$('#user_pass');
        var tmp=0;
        for(cnt=0;cnt<=2;cnt++){
            if(user_id.val()==userId[cnt] && user_pass.val()==userPassword[cnt]){
                tmp=1;
                break;
            }
        }
        if(tmp==1){
            alert('환영합니다 ' + user_id.val() + '님');
        }else{
            alert('ID/PW를 확인하세요');
            user_id.val('');
            user_pass.val('');
            user_id.focus();
        }
    })
})
