$(document).ready(function () {

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


  $(experts).mouseover(function () {
    // $(".expertsocial").removeClass("d-none")
    // $(".expertsocial").animate({top: '310px'}).slideDown(500)
    // $(".expertsocial").removeClass("d-none")
    $(".expertsocial").removeClass("d-none").slideDown(1000);
    $(".expertsocial").slideDown(1000).animate({ height: '+60px' })
    $(".expertsocial").animate({ top: '310px' }).slideDown(1000);

    // $(".expertsocial").animate({top: '310px'}).slideDown(500)
  });





  $('.ui.dropdown')
    .dropdown();


  $("#country").change(function () {
    if ($(this).val() == 'ma') {
      $('#state').html('  <option value="1">State1</option><option value = "2" > State2</option > ')
    } else if ($(this).val() == 'ps') {
      $('#state').html('  <option value="1">State3</option><option value = "2" > State4</option > ');
    } else if ($(this).val() == 'tr') {
      $('#state').html('  <option value="1">State5</option><option value = "2" > State6</option > ');
    } else if ($(this).val() == 'us') {
      $('#state').html('  <option value="1">State7</option><option value = "2" > State8</option > ');
    } else {
      $('#state').html('');
    }


  });























})