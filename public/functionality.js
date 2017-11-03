var index = 0;
var usdToEur = 0;
const locations = [
    "Paris",
    "Chamonix",
    "Marseille",
    "Annecy",
    "Nice",
    "Lyon"
]

$(document).ready(function() {
  $("#right").click(function(e) {
      e.preventDefault();
      index = (index + 1) % locations.length;

      var myurl= "/location?q=";
      var city = locations[index];
      myurl += city;
      $.ajax({
          url : myurl,
          dataType : "json",
          success : function(parsed_json) {
              var desc = parsed_json['desc'];
              var image = "url(" + parsed_json['image'] + ")";
              console.log(image);
              $("#locDesc").html(desc);
              $(".second").css('background-image',image);
              $("#name").html(city);
          }
      });
  });

  $("#left").click(function(e) {
    e.preventDefault();
    index = (index + (locations.length - 1)) % locations.length;

    var myurl= "/location?q=";
    var city = locations[index];
    myurl += city;
    $.ajax({
        url : myurl,
        dataType : "json",
        success : function(parsed_json) {
            var desc = parsed_json['desc'];
            var image = "url(" + parsed_json['image'] + ")";
            console.log(image);
            $("#locDesc").html(desc);
            $(".second").css('background-image',image);
            $("#name").html(city);
        }
    });
  });
  $("#convertButton").click(function(e) {
    var number = $("#convert").val();
    var eur = (number * usdToEur);
    $("#l").html(number);
    $("#r").html(eur);
  });
});
var url = "exchange";