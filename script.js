window.onload = function(){
    //import gradients from './gradients.js';
    let gradients = [["#4e54c8", "#8f94fb"], ["#FDC830", "#F37335"], ["#FF416C", "#FF4B2B"], ["#00b09b", "#96c93d"], ["#007991", "#78ffd6"], ["#f953c6", "#b91d73"],
["#f12711", "#f5af19"], ["#DAD299", "#B0DAB9"], ["#7F00FF", "#E100FF"], ["#e1eec3", "#f05053"]];
    let positions = ['to right', 'to left', 'to top', 'to bottom', 'to right top', 'to right bottom', 'to left top', 'to left bottom'];
    let section = $("#section");
    let div = $(".container");
    let button = $("#button");
    let rotate = $("#rotate");
    let menuButton = $("#menuButton");
    let close = $("#close");
    let animatedHalf1 = $("#menu div:nth-child(2)");
    let animatedHalf2 = $("#menu div:nth-child(3)");
    let topMenu = $("#top");

    $(button).click(() => {
        $(menuButton).css('visibility', 'visible');
        $(div).css('visibility', 'hidden');
        $(rotate).css('visibility', 'visible');
        let counter = 0;
        let random;
        $(rotate).click(() => {
            if(counter >= positions.length){
                counter = 0;
            }
            $(section).css('background', `linear-gradient(${positions[counter]}, ${gradients[random][0]}, ${gradients[random][1]})`);
            counter++;
        });
        $(section).click(() => {
            random = Math.round(Math.random() * (gradients.length - 1));
            $(section).css('background', `linear-gradient(${positions[counter]}, ${gradients[random][0]}, ${gradients[random][1]})`);
        });   
    });

    $(menuButton).click(() => {
        $(menuButton).css('visibility', 'hidden');
        $(animatedHalf1).css('animation-name', 'menuHalfs');
        $(animatedHalf1).css('visibility', 'visible');
        $(animatedHalf2).css('animation-name', 'menuHalfs');
        $(animatedHalf2).css('visibility', 'visible');
        setTimeout(() => {
            $(topMenu).css('animation-name', 'topMenu');
            $(topMenu).css('visibility', 'visible');
        }, 600);
        setTimeout(() => {
            $(close).css('visibility', 'visible');
        }, 2500);
    });

    $(close).click(() => {
        $(topMenu).css('animation-name', 'topBackwards');
        setTimeout(() => {
            $(close).css('visibility', 'hidden');
            $(animatedHalf1).css('animation-name', 'menuBackwards');
            $(animatedHalf2).css('animation-name', 'menuBackwards');
            $(topMenu).css('visibility', 'hidden');
            setTimeout(() => {
                $(animatedHalf1).css('visibility', 'hidden');
                $(animatedHalf2).css('visibility', 'hidden');
                $(menuButton).css('visibility', 'visible');
            }, 800);
        }, 1900);
    });
}