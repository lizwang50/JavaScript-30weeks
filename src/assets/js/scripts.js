import 'bootstrap/js/dist/dropdown.js'
import "./blocks/block-name.js";

function tab(name){
  $(".user").hide();
  $(`#${name}`).show();
  window.scrollTo(0, 0);
}

$(function(){
  $(".team-member").click(function(){
    tab($(this).attr("name"));
  })
  $(".team-member").eq(0).click();
});

