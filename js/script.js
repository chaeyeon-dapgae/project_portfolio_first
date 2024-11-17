$ (function(){
  $('.btnClick').click(function(){
    $(this).toggleClass('active');
    $('.homeWrap').toggleClass('active')
    $('.lnb').toggleClass('active')
  })
  $('.homeWrap label').click(function () {
    var chk = '.' +  $(this).attr('data-alt');
    $('.lnb' + chk).siblings().removeClass('focus');
    $('.lnb' + chk).addClass('focus');
  })
  // $('.btnChk label[for="aboutWrap"]').click(function(){
  //   $('.homeWrap').css("background-color","#f7e6c4")
  //   $('.homeWrap h1').css("color","#f1c376")
  // })
  // $('.btnChk label[for="skillWrap"]').click(function(){
  //   $('.homeWrap').css("background-color","#bdd6ea")
  //   $('.homeWrap h1').css("color","#5d829f")
  // })
  // $('.btnChk label[for="portfolioWrap"]').click(function(){
  //   $('.homeWrap').css("background-color","#8594a0")
  //   $('.homeWrap h1').css("color","#48535b")
  // })
  $('.btnChk label:nth-child(1)').click(function(){
    $('.skillWrap, .portfolioWrap').removeClass('focus')
    $('.aboutWrap').addClass('focus')
  })
  $('.btnChk label:nth-child(2)').click(function(){
    $('.aboutWrap, .portfolioWrap').removeClass('focus')
    $('.skillWrap').addClass('focus')
  })
  $('.btnChk label:nth-child(3)').click(function(){
    $('.aboutWrap, .skillWrap').removeClass('focus')
    $('.portfolioWrap').addClass('focus')
  })
  $('.portfolio li > div').click(function(){
    $(this).parent().siblings().removeClass('focus')
    $(this).parent().addClass('focus')
    var projectList = '.' + $(this).parent().attr('data-alt')
    $(projectList).siblings().removeClass('focus')
    $(projectList).addClass('focus')
  })
  $('.notice').click(function(){
    $('.notice').css("display","none");
  })
  $('.skillBtn label').click(function(){
    $('.xi-mouse').css("display","block");
  })
  $('.skillBtn label[for="skillName05"]').click(function(){
    $('.xi-mouse').css("display","none");
  })
});