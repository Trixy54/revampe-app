$(function() {
  'use strict';
  if ($("#tinymceExample").length) {
    tinymce.init({
      selector: '#tinymceExample',
      height: 400,
      force_br_newlines : true,
      force_p_newlines : false,
      forced_root_block : '' ,
      menubar:false,
      statusbar:false,
      theme: 'silver',
      plugins: [
        'advlist autolink lists link image charmap print preview hr anchor pagebreak',
        'searchreplace wordcount visualblocks visualchars code fullscreen',
      ],
      toolbar1: 'undo redo  | styleselect | bold italic  | bullist ',
      advlist_bullet_styles: 'circle',
      automatic_uploads : false,
    });
  }


  
});

