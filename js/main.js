$(document).ready(function () {

  $(".owl-carousel").owlCarousel({
    autoPlay: 3000,
    items: 1,
    center: true,
    nav: true,
    loop: true,
    dots: true,
    responsive: {
      600: {
        items: 1,
      },
    },
  });

  $form = $('.custom-file-upload');

  $form.on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
    e.preventDefault();
    e.stopPropagation();
  })
  .on('dragover dragenter', function() {
    $form.addClass('is-dragover');
  })
  .on('dragleave dragend drop', function() {
    $form.removeClass('is-dragover');
  })
  .on('drop', function(e) {
    droppedFiles = e.originalEvent.dataTransfer.files;
  });
});

