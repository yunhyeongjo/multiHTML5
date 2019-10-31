var member_lists = $('.member li:nth-child(n+2)');
var btn_menu = $('.btn-menu');
var submenu_list = $('.sub-menu li');
var menu_items = $('.menu-item');
var sections = $('.board section');
var tabs = $('.tab');

member_lists.prepend('<span aria-hidden="true">:</span>');
submenu_list.addClass('icon-dot-circled');
btn_menu.attr('role','button');

btn_menu.on('click',function(e){
  var current_menu_item = $(this).parent().hasClass('menu-act');

  e.preventDefault();
  
  if(current_menu_item){
    $(this).parent().removeClass('menu-act');
  }else{
     menu_items.removeClass('menu-act');
     $(this).parent().addClass('menu-act');
  }
})

tabs.on('click',function(e){
  e.preventDefault();
  sections.removeClass('tab-act');
  $(this).parent().parent().addClass('tab-act');
})