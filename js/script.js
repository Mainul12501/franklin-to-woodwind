
// lightbox call
$('a[data-imagelightbox="zoom"]').imageLightbox({
    selector: 'a[data-imagelightbox]',
    id: 'imagelightbox',
    allowedTypes: 'png|jpg|jpeg|gif|webp',
    animationSpeed: 250,
    activity: false,
    arrows: true,
    button: true,
    caption: false,
    enableKeyboard:true,
    lockBody: false,
    navigation: false,
    overlay: true,
    preloadNext: true,
    quitOnEnd: false,
    quitOnImgClick:false,
    quitOnDocClick:true,
    quitOnEscKey: true
});

// $('a[data-imagelightbox="zoom"]').imageLightbox();