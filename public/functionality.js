$(document).ready(function() {
  $("#cityField").keyup(function() {
      var url="/getcity?q="+$("#cityField").val();
      $.getJSON(url, function(data){
          console.log(data);
          console.log(data[0]);
          console.log("Got "+data[0].city);
          var everything;
          everything="<ul class=\"cities\">";
          $.each(data,function(i,item) {
              everything+="<li> " + data[i].city + "    </li>";
          });
          everything+="</ul>";
          $("#txtHint").html(everything);
      })
      .done(function() {
          console.log('getJSON request succeeded!');
      })
      .fail(function(jqXHR,textStatus,errorThrown) {
          console.log('getJSON request failed! '+textStatus);
          console.log("incoming "+jqXHR.responseText);
      })
      .always(function(){
          console.log('getJSON request ended!');
      });
  });
  $("#weatherButton").click(function(e) {
      var value = $("#cityField").val();
      console.log(value);
      e.preventDefault();
      //$("#displayCity").text(value);

      var myurl= "https://api.wunderground.com/api/7f300afd33e5dd5c/geolookup/conditions/q/UT/";
      myurl += value;
      myurl += ".json";
      console.log(myurl);
      $.ajax({
          url : myurl,
          dataType : "json",
          success : function(parsed_json) {
              var location = parsed_json['location']['city'];
              var temp_string = parsed_json['current_observation']['temperature_string'];
              var current_weather = parsed_json['current_observation']['weather'];
              everything = "<ul>";
              everything += "<li>Location: "+location+"</li>";
              everything += "<li>Temperature: "+temp_string+"</li>";
              everything += "<li>Weather: "+current_weather+"</li>";
              everything += "</ul>";
              $("#weather").html(everything);
          }
      });
  });
  $("#searchButton").click(function(e) {
      var value = $("#searchStack").val();
      console.log(value);
      e.preventDefault();

      var myurl = "https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle="
      myurl += value;
      myurl += "&site=stackoverflow";
      
      $.ajax({
          url : myurl,
          dataType : "json",
          success : function(parsed_json) {
              var output;
              console.log(parsed_json);
              var items = parsed_json.items;
              if (items.length == 0) {
                  output = "Sorry, no results found.";
              }
              else {
                  output = "<ul>";
                  for (var i = 0; i < items.length; ++i) {
                      output += "<li><a href=" + items[i]["link"] + ">"  + items[i]["link"] + "</a>" + "</li>";
                  }
                  output += "</ul>";
              }
              console.log(output);
              $("#searchResults").html(output);
          }
      });
  });
  $("#wordField").keyup(function() {
      var url="/getword?q="+$("#wordField").val();
      $.getJSON(url, function(data){
          console.log(data);
          console.log(data[0]);
          console.log("Got "+data[0].city);
          var everything;
          everything="<ul>";
          $.each(data,function(i,item) {
              everything+="<li> "+data[i].defenition+"</li>";
          });
          everything+="</ul>";
          $("#definition").html(everything);
      })
      .done(function() {
          console.log('getJSON request succeeded!');
      })
      .fail(function(jqXHR,textStatus,errorThrown) {
          console.log('getJSON request failed! '+textStatus);
          console.log("incoming "+jqXHR.responseText);
      })
      .always(function(){
          console.log('getJSON request ended!');
      });
  });
});