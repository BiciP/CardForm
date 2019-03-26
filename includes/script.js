$(document).ready(function() {

  for(let i = 2020; i<2040; i++){
    var o = new Option(i, i%2000);
    $(o).html(i);
    $(".expiryYY").append(o);
  }


  let cards = ['maestro', 'diners', 'discover', 'amex', 'mastercard', 'visa'];

  let cleave = new Cleave('.number', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
      if(type != "unknown" && cards.indexOf(type) != -1){
        $("#ctype").attr('src', 'images/'+type+'.png');
        if(type == "maestro" || type == "diners" || type == "discover"){
          $("#ctype").css({"height": "50px", "top": "10px"});
        }else if (type == "visa") {
          $("#ctype").css({"height": "110px !important", "top": "-5px"});
        }else{
          $("#ctype").css({"height": "80px", "top": "-5px"});
        }
        $("#ctype").slideDown('fast');
      }else{
          $("#ctype").slideUp('fast');
      }
    }
  });

  $('#card').flip({
    trigger: 'manual',
    speed: 250
  });

  $('.cvc').focus(function() {
    $('#card').flip(true);
  });

  $('.fname, .lname, .expiry, .number').focus(function() {
    $('#card').flip(false);
  });

  $(".number").keypress(function (e) {
    if ((e.which < 48 || e.which > 57) && (e.which !== 8) && (e.which !== 0)) {
        return false;
    }

    if(($(".number").val().length+1)%5 == 0 && $(".number").val().length < 16 && $(".number").val().length != 0)
      $(".number").val($(".number").val()+" ");

    return true;
  });

  $(".number").keyup(function (e) {
    if($(".number").val().length != 0)
      $("#number").text($(".number").val());
    else {
      $("#number").text("8888 8888 8888 8888");
    }
  });

  $(".fname").keyup(function (e) {
    if($(".fname").val().length != 0)
      $("#firstname").text($(".fname").val());
    else {
      $("#firstname").text("John Wick");
    }
  });

  let prevLen = 0;

  $(".fname").keyup(function (e) {
    let a = $(".fname").val().length;
    if(a > 21 && prevLen < a){
      let fontSize = parseInt($("#name").css("font-size")) - 1;
      $("#name").css({"font-size":fontSize});
    }else{
      let fontSize = parseInt($("#name").css("font-size")) + 1;
      if(fontSize < 17)
        $("#name").css({"font-size":fontSize});
    }
    prevLen = a;
  });

  $(".cvc").focusout(function (e) {
    $("#card").flip(false);
  });

  $(".cvc").keyup(function (e) {
    if($(".cvc").val().length != 0)
      $("#cvc").text($(".cvc").val());
    else {
      $("#cvc").text("666");
    }
  });

  $(".expiryMM").change(function () {
    $("#expiryMM").text($(".expiryMM").val());
  });

  $(".expiryYY").change(function () {
    $("#expiryYY").text($(".expiryYY").val());
  });

});
