$(document).ready(function() {
    var typeOne,
        oneObj,
        typeTwo,
        twoObj,
        bug = {}, dark = {}, dragon = {},
        electr = {},fairy = {}, fight = {},
        fire = {}, flying = {}, ghost = {}, 
        grass = {}, ground = {}, ice = {},
        normal = {}, poison = {}, psychc = {},
        rock = {}, steel = {}, water = {};
    
    bug.super = ['psychic', 'grass', 'dark'];
    bug.weak = ['fire', 'flying', 'rock'];
    bug.halfFrom = ['fight', 'grass', 'ground'];
    bug.halfTo = ['fight', 'fire', 'flying', 'ghost', 'poison', 'steel', 'fairy'];
    
    dark.super = ['ghost', 'psychic'];
    dark.weak = ['bug', 'fight', 'fairy'];
    dark.halfFrom = ['dark', 'ghost'];
    dark.halfTo = ['dark', 'fight', 'fairy'];
    dark.immune = ['psychic'];
    
    dragon.super = ['dragon'];
    dragon.weak = ['dragon', 'ice', 'fairy'];
    dragon.halfFrom = ['electric', 'fire', 'grass', 'water'];
    dragon.halfTo = ['steel'];
    dragon.cantDamage = ['fairy'];
    
    electr.super = ['flying', 'water'];
    electr.weak = ['ground'];
    electr.halfFrom = ['electric', 'flying', 'steel'];
    electr.halfTo = ['dragon', 'electric', 'grass'];
    electr.cantDamage = ['ground'];
    
    fairy.super = ['dark', 'dragon', 'fight'];
    fairy.weak = ['poison', 'steel'];
    fairy.halfFrom = ['bug', 'dark', 'fight'];
    fairy.halfTo = ['fire', 'poison', 'steel'];
    fairy.immunity = ['dragon'];
    
    fight.super = ['dark', 'ice', 'normal', 'rock', 'steel'];
    fight.weak = ['fairy', 'flying', 'psychic'];
    fight.halfFrom = ['bug', 'dark', 'rock'];
    fight.halfTo = ['bug', 'fairy', 'flying', 'poison', 'psychic'];
    fight.cantDamage = ['ghost'];
    
    fire.super = ['bug', 'grass', 'ice', 'steel'];
    fire.weak = ['ground', 'rock', 'water'];
    fire.halfFrom = ['bug', 'fairy', 'fire', 'grass', 'ice', 'steel'];
    fire.halfTo = ['dragon', 'fire', 'rock', 'water'];
    
    flying.super = ['bug', 'fight', 'grass'];
    flying.weak = ['electric', 'ice', 'rock'];
    flying.halfFrom = ['bug', 'fight', 'grass'];
    flying.halfTo = ['electric', 'rock', 'steel'];
    flying.immune = ['ground'];
    
    
    
    function emptyHeadings() {
        $('.sub-one, .sub-two, .sub-three, .sub-four, .sub-five, .sub-six, .head-one, .head-two, .head-three, .head-four, .head-five, .head-six').empty();
    }
    
    function defense(firstType, secondType) {
        var quarterWeak = [],
            halfWeak = [],
            doubleWeak = [],
            quadWeak = [];
        for (var i = 0; i < firstType.weak.length; i++) {
            if ($.inArray(firstType.weak[i], secondType.weak) >= 0) {
                quadWeak.push(firstType.weak[i]);
            }
        }
        for (var i = 0; i < secondType.weak.length; i++) {
            if ($.inArray(secondType.weak[i], firstType.weak) >= 0 && $.inArray(secondType.weak[i], quadWeak) < 0) {
                quadWeak.push(secondType.weak[i]);
            }
        }
        if (quadWeak.length) {
            $('.head-one').text("4X DAMAGE FROM")
            $('.sub-one').text(quadWeak);
        }
    }
    
    function displayTypeOne(str, obj) {
        $('.type1').toggleClass(str);
        $('.type1').text(str);
        emptyHeadings();
        if (obj.super) {
            $('.head-one').text("2X DAMAGE TO");
            $('.sub-one').text(obj.super);
        }
        if (obj.weak) {
            $('.head-two').text("2X DAMAGE FROM");
            $('.sub-two').text(obj.weak);
        }
        if (obj.halfFrom) {
            $('.head-three').text("1/2X DAMAGE FROM");
            $('.sub-three').text(obj.halfFrom);
        }
        if (obj.halfTo) {
            $('.head-four').text("1/2X DAMAGE TO");
            $('.sub-four').text(obj.halfTo);
        }
    }
    
    
    $('.type').on('click', function() {
        if(typeTwo) {
            $('.clear').click();
        }
        
        else if(typeOne && !typeTwo) {
            emptyHeadings();
            $('.type2').toggleClass($(this).text());
            $('.type2').text($(this).text());
            typeTwo = $(this).text();
            twoObj = eval(typeTwo.toLowerCase());
            defense(oneObj, twoObj);
            return;
        }
        typeOne = $(this).text();
        oneObj = eval(typeOne.toLowerCase());
        displayTypeOne(typeOne, oneObj);
    });
    
    $('.clear').on('click', function() {
        $('.type1').removeClass(typeOne);
        $('.type2').removeClass(typeTwo);
        typeOne = "";
        typeTwo = "";
        $('.type1').text('');
        $('.type2').text('');
        emptyHeadings();
    })
    
    
});