$(document).ready(function() {
    var typeOne,
        typeTwo,
        bug = {}, dark = {}, dragon = {},
        electric = {},fairy = {}, fight = {},
        fire = {}, flying = {}, ghost = {}, 
        grass = {}, ground = {}, ice = {},
        normal = {}, poison = {}, psychic = {},
        rock = {}, steel = {}, water = {};
    
    bug.super = ['psychic', 'grass', 'dark'];
    bug.weak = ['fire', 'flying', 'rock'];
    bug.halfFrom = ['fight', 'grass', 'ground'];
    bug.halfTo = ['fight', 'fire', 'flying', 'ghost', 'poison', 'steel', 'fairy'];
    
    
    $('.type').on('click', function() {
        if(typeOne) {
            if(typeTwo) {
                $('.clear').click(); $('.type1').toggleClass($(this).text());
                $('.type1').text($(this).text());
                typeOne = $(this).text();
                return;
            }
            $('.type2').toggleClass($(this).text());
            $('.type2').text($(this).text());
            typeTwo = $(this).text();
            return;
        }
        $('.type1').toggleClass($(this).text());
        $('.type1').text($(this).text());
        typeOne = $(this).text();
        typeOne = eval(typeOne.toLowerCase());
        $('.super').text(typeOne.super);
        $('.weak').text(typeOne.weak);
        $('.halfFrom').text(typeOne.halfFrom);
        $('.halfTo').text(typeOne.halfTo);
    });
    
    $('.clear').on('click', function() {
        $('.type1').removeClass(typeOne);
        $('.type2').removeClass(typeTwo);
        typeOne = "";
        typeTwo = "";
        $('.type1').text('');
        $('.type2').text('');
    })
    
    
});