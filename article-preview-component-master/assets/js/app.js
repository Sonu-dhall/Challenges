let CardTooltipButtonActive = document.querySelector('.card__tooltip__button-content--active');
let CardTooltipButtonDefault = document.querySelector('.card__tooltip__button-content--default');
let CardTooltipButtonBackground = document.querySelector('.card__tooltip__button--background');

let CardTooltip = document.querySelector('.wrapper');

let CardTooltipButtonActiveDesktop = document.querySelector('.desktop-card__tooltip__button-content--active');

let shareButton = document.querySelector('.card__tooltip__button-share');
let shareButtonSVG = document.querySelector('.svg-arrow');
let shareButtonBoolean = false;

let windowSize = window.screen.availWidth;
let elementSize = CardTooltip.offsetWidth + "px";

shareButton.addEventListener('click', function() {

    if(elementSize == '280px') {
        if(!shareButtonBoolean) {
        
        CardTooltipButtonDefault.style.zIndex = 3;
        CardTooltipButtonDefault.style.opacity = 0;
        CardTooltipButtonDefault.style.transition = 'opacity 400ms';

        CardTooltipButtonActive.style.opacity = 1;
        CardTooltipButtonActive.style.zIndex = 4;

        CardTooltipButtonBackground.style.backgroundColor = '#48556A';
        CardTooltipButtonBackground.style.width = '100%';
        CardTooltipButtonBackground.style.height = '64px';

        shareButton.style.transform = 'rotate(360deg)';
        shareButton.style.backgroundColor = '#6D7F97';

        shareButtonSVG.style.fill = '#ffffff';
        shareButtonBoolean = true;
        }
        
        else {

        CardTooltipButtonDefault.style.zIndex = 4;
        CardTooltipButtonDefault.style.opacity = 1;
        CardTooltipButtonDefault.style.transition = 'opacity 800ms 400ms';

        CardTooltipButtonActive.style.opacity = 0;
        CardTooltipButtonActive.style.zIndex = 3;

        CardTooltipButtonBackground.style.backgroundColor = '#48556A';
        CardTooltipButtonBackground.style.width = '0';

        shareButton.style.transform = 'rotate(0deg)'
        shareButton.style.backgroundColor = '#ECF2F8';
        
        shareButtonSVG.style.fill = '#48556A';
        shareButtonBoolean = false;
        }
    }
    else {
        if(!shareButtonBoolean) {         
            CardTooltipButtonActiveDesktop.style.top = '-80px';
            CardTooltipButtonActiveDesktop.style.opacity = 1;
            

            shareButton.style.backgroundColor = '#6D7F97';

            shareButtonSVG.style.fill = '#ffffff';
            shareButtonBoolean = true;
        }
        else {
            CardTooltipButtonActiveDesktop.style.bottom = '-9999px';
            CardTooltipButtonActiveDesktop.style.opacity = 0;

            shareButton.style.backgroundColor = '#ECF2F8';
    
            shareButtonSVG.style.fill = '#48556A';
            shareButtonBoolean = false;
        }
    }
});