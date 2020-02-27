$(document).ready(function(){
    var height1 = $("#content").height()
    var sidebarheight = $("#sidebar").height()
    if( height1 > sidebarheight) {
        $("#sidebar").height(height1)
    }
    // side bar button slide
    var isMinimized = false;
    $( "#sidebarCollapse" ).on( "click", function() {
        if(isMinimized) {
            console.log("is Minimized = TRUE!!!!!")
            $("#navbarHeader").removeClass("navbar1").addClass("navbar")

            isMinimized = false;
        } else {
            console.log("is Minimized = FALSE!!!!!")
            $("#navbarHeader").removeClass("navbar").addClass("navbar1")
            isMinimized = true;            
        }
  });

  $('#buttonExpander').on('click', '.btn-main', function() {
    console.log("clickty click")
    $(this).parent().parent().toggleClass('active');
});

$('has-tooltip').tooltip();

  $("#newToDo").on("click", function(){
      $('#slidesid').prepend('<li><div class="slide card w-75">'+
      '<div class="card-body">'+
        '<button type="button" class="pin btn btn-light has-tooltip" data-placement="left" title="Pin to top"> <i class="fa fa-thumbtack"></i> </button>'+
        '<form id="ToDo-form" class="form" action="#" method="POST" role="form">'+
          '<div class="form-group">'+
              '<input type="text" class="form-control" id="name" name="name" placeholder="To Do" tabindex="1" title="What do you want to do?">'+
          '</div>'+                            
          '<div class="form-group">'+
              '<input type="datetime-local" class="form-control" id="time" name="subject" placeholder="Due by" tabindex="3">'+
          '</div>'+                            
          '<div class="form-group">'+
              '<textarea rows="5" cols="50" name="message" class="form-control" id="message" placeholder="Description..." tabindex="4" title="Description field"></textarea>'+                                 
          '</div>'+
      '</form>'+
        '<div class="btn-group-fab" id="buttonExpander" role="group" aria-label="FAB Menu">'+
          '<div>'+
            '<button type="button" class="btn btn-main btn-primary has-tooltip" data-placement="left" title="Menu"> <i class="fa fa-bars"></i> </button>'+
            '<button type="button" class="newSub btn btn-sub btn-success has-tooltip" data-placement="left" title="New Sub ToDo"> <i class="fa fa-plus"></i> </button>'+
            '<button type="button" class="delete btn btn-sub btn-danger has-tooltip" data-placement="left" title="Delete"> <i class="fa fa-trash"></i> </button>'+
            '<button type="button" class="crossOff btn btn-sub btn-warning has-tooltip" data-placement="left" title="Cross Off"> <i class="fa fa-check"></i> </button>'+
            '<button type="button" class="hideSub btn btn-sub btn-info has-tooltip" data-placement="left" title="Show/Hide Sub ToDo"> <i class="fa fa-arrows-alt-v "></i> </button>'+
          '</div>'+
      '</div>'+
    '</div></li>');
  })

  $("#slidesid").on("click", ".newSub", function(){
      //$('#slidesid').append('<li class="slide card w-50">'+
      $(this).parent().parent().parent().parent().parent().append('<div class="slide card w-50" style="margin-left: 12% ;">'+
      '<div class="card-body">'+
        '<button type="button" class="pin btn btn-light has-tooltip" data-placement="left" title="Pin to top"> <i class="fa fa-thumbtack"></i> </button>'+
        '<form id="ToDo-form" class="form" action="#" method="POST" role="form">'+
          '<div class="form-group">'+
              '<input type="text" class="form-control" id="name" name="name" placeholder="To Do" tabindex="1" title="What do you want to do?">'+
          '</div>'+                            
          '<div class="form-group">'+
              '<input type="datetime-local" class="form-control" id="time" name="subject" placeholder="Due by" tabindex="3">'+
          '</div>'+                            
          '<div class="form-group">'+
              '<textarea rows="5" cols="50" name="message" class="form-control" id="message" placeholder="Description..." tabindex="4" title="Description field"></textarea>'+                                 
          '</div>'+
      '</form>'+
        '<div class="btn-group-fab" id="buttonExpander" role="group" aria-label="FAB Menu">'+
          '<div>'+
            '<button type="button" class="btn btn-main btn-primary has-tooltip" data-placement="left" title="Menu"> <i class="fa fa-bars"></i> </button>'+
            '<button type="button" class="newSub btn btn-sub btn-success has-tooltip" data-placement="left" title="New Sub ToDo"> <i class="fa fa-plus"></i> </button>'+
            '<button type="button" class="delete btn btn-sub btn-danger has-tooltip" data-placement="left" title="Delete"> <i class="fa fa-trash"></i> </button>'+
            '<button type="button" class="crossOff btn btn-sub btn-warning has-tooltip" data-placement="left" title="Cross Off"> <i class="fa fa-check"></i> </button>'+
            '<button type="button" class="hideSub btn btn-sub btn-info has-tooltip" data-placement="left" title="Show/Hide Sub ToDo"> <i class="fa fa-arrows-alt-v "></i> </button>'+
          '</div>'+
      '</div>'+
    '</div>');
  })

  $('body').on('click', '.newProject', function(){
      console.log(this)
      $('ul.sideBarContent').append('<li>' + '<a href="#"><span class="fa fa-newspaper mr-3"></span>Project Name</a>'+ '</li>')
  })

  // TODO 
  $('span').bind('dblclick', function(){
        console.log(this)
        console.log($(this).siblings("p")[0])
        $(this).siblings("p").attr('contentEditable',true);
    });

  $('body').on('click', '.hideSub', function(){
      console.log($(this).parent().parent().parent().parent().parent().find(".slide"))
      $(this).parent().parent().parent().parent().parent().find(".slide.w-50").fadeToggle()
  })

  $('body').on('click', '.crossOff', function(e) {
      console.log("clicked cross off")
      console.log($(this))
      const el = $(this).parent().parent().parent().parent()

      $(el).toggleClass("cross")
      $(".time").toggleClass("cross")
      $("#message").toggleClass("cross")
  })

  $('body').on('click', '.delete', function(e) {
    console.log("clicked delete")
    $(this).parent().parent().parent().parent().remove();
});

$('body').on('click', '.pin', function() {
    console.log("here")
    console.log(this)
    $('.pin').toggleClass("pinColor")
});

})
// TODO Sliding Cards
$(".slides").sortable({
    placeholder: 'slide-placeholder',
   axis: "y",
   revert: 150,
   start: function(e, ui){
       
       placeholderHeight = ui.item.outerHeight();
       ui.placeholder.height(placeholderHeight + 15);
       $('<div class="slide-placeholder-animator" data-height="' + placeholderHeight + '"></div>').insertAfter(ui.placeholder);
   
   },
   change: function(event, ui) {
       
       ui.placeholder.stop().height(0).animate({
           height: ui.item.outerHeight() + 15
       }, 300);
       
       placeholderAnimatorHeight = parseInt($(".slide-placeholder-animator").attr("data-height"));
       
       $(".slide-placeholder-animator").stop().height(placeholderAnimatorHeight + 15).animate({
           height: 0
       }, 300, function() {
           $(this).remove();
           placeholderHeight = ui.item.outerHeight();
           $('<div class="slide-placeholder-animator" data-height="' + placeholderHeight + '"></div>').insertAfter(ui.placeholder);
       });
       
   },
   stop: function(e, ui) {
       $(".slide-placeholder-animator").remove();  
   },
});


// menu bubble button logic
$(function() {
    $('body').on('click', '.btn-main', function() {
        $(this).parent().parent().toggleClass('active');
    });
    $('has-tooltip').tooltip();
});