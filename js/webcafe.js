var member_lists = $('.member li:nth-child(n+2)');
var btn_menu = $('.btn-menu');
var submenu_list = $('.sub-menu li');

member_lists.prepend('<span aria-hidden="true">:</span>');
submenu_list.addClass('icon-dot-circled');
btn_menu.attr('role','button');