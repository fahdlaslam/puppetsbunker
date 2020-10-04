    $elmt.vegas({
    delay: 7000,
    timer: false,
    shuffle: true,
    firstTransition: 'fade',
    firstTransitionDuration: 5000,
    transition: 'slideDown2',
    transitionDuration: 2000,
    slides: [
        { src: '/img/slide1.jpg' },
        { src: '/img/slide2.jpg' },
        { src: '/img/slide3.jpg' },
        { src: '/img/slide4.jpg' }
    ]
});

    $("#example, body").vegas({
    slides: [
        { src: "/img/bg1.jpg" },
        { src: "/img/slide2.jpg" },
        { src: "/img/slide3.jpg" },
        { src: "/img/slide4.jpg" }
    ]
});