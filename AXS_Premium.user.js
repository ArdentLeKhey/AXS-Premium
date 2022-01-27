// ==UserScript==
// @name         Rocwo's-AXS
// @namespace    https://github.com/ArdentLeKhey
// @version      0.1
// @description  Avoir les prix sur AXS
// @author       ArdentLeKhey
// @grant        none
// @include      *stake.axieinfinity.com*
// @include      about:addons
// @require      http://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==

// Ajout de jQuerry
var $ = window.jQuery;
var jQuery = window.jQuery;

$(document).ready(function() {
    setTimeout(function(){
        let AXS_Price = parseFloat($( "h5:contains('AXS Stats')" ).parent().find("div").children("div").eq(0).children("div").eq(1).children("div").eq(0).children("span").eq(0).text().replace('$',''));
        let Reward_DOM = $(".ds-well-content").children("div").eq(0).children("div").eq(0).children("div").eq(1).children("div").eq(0);
        let AXS_Reward = parseFloat(Reward_DOM.children("span").eq(0).text().replace('$',''));
        Reward_DOM.append(`<div class="text-12 leading-16 text-basic-9 font-normal ml-4">~$${(AXS_Reward*AXS_Price).toFixed(2)}</div>`);
    }, 1000);
});
