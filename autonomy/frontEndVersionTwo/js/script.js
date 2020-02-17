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
// FORM LOGIC
// Hide labels by default if placeholders are supported
if($.support.placeholder) {
    $('.form-label').each(function(){
        $(this).addClass('js-hide-label');
    });  

    // Code for adding/removing classes here
    $('.form-group').find('input, textarea').on('keyup blur focus', function(e){
        
        // Cache our selectors
        var $this = $(this),
            $label = $this.parent().find("label");
                
                    switch(e.type) {
                        case 'keyup': {
                             $label.toggleClass('js-hide-label', $this.val() == '');
                        } break;
                        case 'blur': {
                            if( $this.val() == '' ) {
                $label.addClass('js-hide-label');
            } else {
                $label.removeClass('js-hide-label').addClass('js-unhighlight-label');
            }
                        } break;
                        case 'focus': {
                            if( $this.val() !== '' ) {
                $label.removeClass('js-unhighlight-label');
            }
                        } break;
                        default: break;
                    }
    });
} 

// side bar button slide
$( "#sidebarCollapse" ).on( "click", function() {
    $( ".navbar" ).css( "left", "5% !important" );
  });

// menu bubble button logic
$(function() {
$('.btn-group-fab').on('click', '.btn', function() {
    // $('.btn-group-fab').toggleClass('active');
    $(this).parent().parent().toggleClass('active');
});
$('has-tooltip').tooltip();
});
