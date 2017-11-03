var index = 0;
const locations = [
    "Paris"
]

$(document).ready(function() {
  $("#right").click(function(e) {
      var value = $("#cityField").val();
      console.log(value);
      e.preventDefault();

      var myurl= "/location?q=";
      var city = locations[index];
      myurl += city;
      $.ajax({
          url : myurl,
          dataType : "json",
          success : function(parsed_json) {
              var desc = parsed_json['desc'];
              var image = parsed_json['image'];
              var everything = "<div class=\"content\" id=\"locDesc\">";
              everything += desc;
              everything += "</div>";
              everything += "<div class=\"image\" id=\"locImage\">";
              everything += "<img src=\"";
              everything += image;
              everything += "\" id=\"locationImg\">";
              everything += "</div>";
              $("#main").html(everything);
          }
      });
  });

  $("#left").click(function(e) {
    var value = $("#cityField").val();
    console.log(value);
    e.preventDefault();

    var myurl= "/location?q=";
    var city = locations[index];
    myurl += city;
    $.ajax({
        url : myurl,
        dataType : "json",
        success : function(parsed_json) {
            var desc = parsed_json['desc'];
            var image = parsed_json['image'];
            var everything = "<div class=\"content\" id=\"locDesc\">";
            everything += desc;
            everything += "</div>";
            everything += "<div class=\"image\" id=\"locImage\">";
            everything += "<img src=\"";
            everything += image;
            everything += "\" id=\"locationImg\">";
            everything += "</div>";
            $("#main").html(everything);
        }
    });
});
});