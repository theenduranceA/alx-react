import '../css/main.css';
const $ = require('jquery');
const _ = require('lodash');

$('body').append('<div id="logo"></div>');
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;

function updateCounter() { count++; }

$('button').click(_.debounce(() => {
  updateCounter();
  $('#count').text(`${count} clicks on the button`);
}));
