// Interface Logic
import Haiku from './haiku.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('#haiku-checker-form').submit(function(event) {
    event.preventDefault();
    let line1 = $('#line1').val();
    let line2 = $('#line2').val();
    let line3 = $('#line3').val();
    const haiku = new haiku(line1, line2, line3)
    const response = haiku.checkType();
    $('#response').append("<p>" + response + "</p>")
  });
});
