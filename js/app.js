suma = 0;

//1000 pesos
$('#1000 .plus').click(function(){
  $('#1000 .ammount').text(parseInt($('#1000 .ammount').text())+1);
    suma = suma + 1000;
    showResult ();
});
$('#1000 .minus').click(function(){
  if ( parseInt($('#1000 .ammount').text()) > 0){
    $('#1000 .ammount').text(parseInt($('#1000 .ammount').text())-1);
    suma = suma - 1000;
    showResult ();
  }
});

//500 pesos
$('#500 .plus').click(function(){
  $('#500 .ammount').text(parseInt($('#500 .ammount').text())+1);
    suma = suma + 500;
    showResult ();
});
$('#500 .minus').click(function(){
  if ( parseInt($('#500 .ammount').text()) > 0){
    $('#500 .ammount').text(parseInt($('#500 .ammount').text())-1);
    suma = suma - 500;
    showResult ();
  }
});

//200 pesos
$('#200 .plus').click(function(){
  $('#200 .ammount').text(parseInt($('#200 .ammount').text())+1);
    suma = suma + 200;
    showResult ();
});
$('#200 .minus').click(function(){
  if ( parseInt($('#200 .ammount').text()) > 0){
    $('#200 .ammount').text(parseInt($('#200 .ammount').text())-1);
    suma = suma - 200;
    showResult ();
  }
});

//100 pesos
$('#100 .plus').click(function(){
  $('#100 .ammount').text(parseInt($('#100 .ammount').text())+1);
    suma = suma + 100;
    showResult ();
});
$('#100 .minus').click(function(){
  if ( parseInt($('#100 .ammount').text()) > 0){
    $('#100 .ammount').text(parseInt($('#100 .ammount').text())-1);
    suma = suma - 100;
    showResult ();
  }
});

//50 pesos
$('#50 .plus').click(function(){
  $('#50 .ammount').text(parseInt($('#50 .ammount').text())+1);
    suma = suma + 50;
    showResult ();
});
$('#50 .minus').click(function(){
  if ( parseInt($('#50 .ammount').text()) > 0){
    $('#50 .ammount').text(parseInt($('#50 .ammount').text())-1);
    suma = suma - 50;
    showResult ();
  }
});

//20 pesos
$('#20 .plus').click(function(){
  $('#20 .ammount').text(parseInt($('#20 .ammount').text())+1);
    suma = suma + 20;
    showResult ();
});
$('#20 .minus').click(function(){
  if ( parseInt($('#20 .ammount').text()) > 0){
    $('#20 .ammount').text(parseInt($('#20 .ammount').text())-1);
    suma = suma - 20;
    showResult ();
  }
});

//10 pesos
$('#10 .plus').click(function(){
  $('#10 .ammount').text(parseInt($('#10 .ammount').text())+1);
    suma = suma + 10;
    showResult ();
});
$('#10 .minus').click(function(){
  if ( parseInt($('#10 .ammount').text()) > 0){
    $('#10 .ammount').text(parseInt($('#10 .ammount').text())-1);
    suma = suma - 10;
    showResult ();
  }
});

//5 pesos
$('#5 .plus').click(function(){
  $('#5 .ammount').text(parseInt($('#5 .ammount').text())+1);
    suma = suma + 5;
    showResult ();
});
$('#5 .minus').click(function(){
  if ( parseInt($('#5 .ammount').text()) > 0){
    $('#5 .ammount').text(parseInt($('#5 .ammount').text())-1);
    suma = suma - 5;
    showResult ();
  }
});

//2 pesos
$('#2 .plus').click(function(){
  $('#2 .ammount').text(parseInt($('#2 .ammount').text())+1);
    suma = suma + 2;
    showResult ();
});
$('#2 .minus').click(function(){
  if ( parseInt($('#2 .ammount').text()) > 0){
    $('#2 .ammount').text(parseInt($('#2 .ammount').text())-1);
    suma = suma - 2;
    showResult ();
  }
});

//1 pesos
$('#1 .plus').click(function(){
  $('#1 .ammount').text(parseInt($('#1 .ammount').text())+1);
    suma = suma + 1;
    showResult ();
});
$('#1 .minus').click(function(){
  if ( parseInt($('#1 .ammount').text()) > 0){
    $('#1 .ammount').text(parseInt($('#1 .ammount').text())-1);
    suma = suma - 1;
    showResult ();
  }
});


//0.5 pesos
$('#50c .plus').click(function(){
  $('#50c .ammount').text(parseInt($('#50c .ammount').text())+1);
    suma = suma + .50;
    showResult ();
});
$('#50c .minus').click(function(){
  if ( parseInt($('#50c .ammount').text()) > 0){
    $('#50c .ammount').text(parseInt($('#50c .ammount').text())-1);
    suma = suma - .5;
    showResult ();
  }
});


//generic fuctions
function showResult(){
  $('#result .total').html('$'+suma);
}

$('#result i').click(function(){
    $('.ammount').text(0);
    $('#result .total').html('$0');
    suma=0;
});


/* center modal */
function centerModals($element) {
  var $modals;
  if ($element.length) {
    $modals = $element;
  } else {
    $modals = $('.modal-vcenter:visible');
  }
  $modals.each( function(i) {
    var $clone = $(this).clone().css('display', 'block').appendTo('body');
    var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
    top = top > 0 ? top : 0;
    $clone.remove();
    $(this).find('.modal-content').css("margin-top", top);
  });
}
$('.modal-vcenter').on('show.bs.modal', function(e) {
  centerModals($(this));
});
$(window).on('resize', centerModals);

