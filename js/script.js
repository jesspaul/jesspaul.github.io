// cached elements
const $main = $('main');


// event handlers
$main.on('click', '.project', modalClick);


// functions
function modalClick(evt) {
    console.log('clicked on a project')
}