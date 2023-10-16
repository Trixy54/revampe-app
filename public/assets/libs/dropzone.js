$(function() {
  'use strict';

  $("#upload-dropzone").dropzone(
    { 
      url: "/file/post" 
    });

});