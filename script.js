function showBlurb() {
    blurb.hidden = false;
    switch(this.id){
        case 'library':
            blurbs.forEach(item => item.hidden=true);
            document.querySelector('#library-blurb').hidden = false;
            break;
        case 'google':
            blurbs.forEach(item => item.hidden=true);
            document.querySelector('#google-blurb').hidden = false;
            break;
        case 'rock-paper-scissors':
            blurbs.forEach(item => item.hidden=true);
            document.querySelector('#rps-blurb').hidden = false;
            break;
        case 'etch-a-sketch':
            blurbs.forEach(item => item.hidden=true);
            document.querySelector('#etch-blurb').hidden = false;
            break;
        case 'calculator':
            blurbs.forEach(item => item.hidden=true);
            document.querySelector('#calculator-blurb').hidden = false;
            break;
        case 'ion-motion':
            blurbs.forEach(item => item.hidden=true);
            document.querySelector('#ion-blurb').hidden = false;
            break;
        case 'elevator':
            blurbs.forEach(item => item.hidden=true);
            document.querySelector('#elevator-blurb').hidden = false;
            break;
        case 'landing':
            blurbs.forEach(item => item.hidden=true);
            document.querySelector('#landing-blurb').hidden = false;
            break;
    }
}
function hideBlurd() {
    //blurb.hidden = true;
}

let cards = document.querySelectorAll('.card');

let blurb = document.querySelector('#blurb');

let blurbs = document.querySelectorAll('.blurb');

cards = Array(...cards);

blurbs = Array(...blurbs);

cards.forEach(item => {
    item.addEventListener('mouseenter', showBlurb);
    item.addEventListener('mouseleave', hideBlurd);
});