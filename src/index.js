"use strict";

const $ = require('jquery');

$(document).ready(function() {
    $("body").append("<h1>Require jQuery is working</h1>");
});

const sayHello = (greeting) => {
    console.log(greeting)
};
sayHello("Hello");