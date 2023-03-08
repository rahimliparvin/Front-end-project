$(document).ready(function (){

  let experts = document.querySelectorAll(".expert");

  //console.log(experts);

//   experts.forEach(expert => {
    
// $(expert).mouseover(function(){
  
//  // $(".expertsocial").animate({top: '310px'});

//  let social = $(".expertsocial")
//   $(".expertsocial").removeClass("d-none")
//    animate({height: '+60px'}, "slow");
//   // $(".expertsocial").animate({top: '310px'} ,"slow" );
   
// })


$(experts).mouseover(function(){
    // $(".expertsocial").removeClass("d-none")
    // $(".expertsocial").animate({top: '310px'}).slideDown(500)
   // $(".expertsocial").removeClass("d-none")
   $(".expertsocial").removeClass("d-none").slideDown(1000);
   $(".expertsocial").slideDown(1000).animate({height: '+60px'})
   $(".expertsocial").animate({top: '310px'}).slideDown(1000);
 
  // $(".expertsocial").animate({top: '310px'}).slideDown(500)
  });




























})