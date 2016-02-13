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
    
    //bug.offense = [1,2,1,1,.5,.5,.5,.5,.5,2,1,1,1,.5,2,1,.5,1]
    //bug.defense = [1,1,1,1,1,.5,2,2,1,.5,.5,1,1,1,1,2,1,1]
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
    
    ghost.super = ['ghost', 'psychic'];
    ghost.weak = ['ghost', 'dark'];
    ghost.halfFrom = ['bug', 'poison'];
    ghost.halfTo = ['dark'];
    ghost.cantDamage = ['normal'];
    ghost.immune = ['normal', 'fight'];
    
    grass.super = ['ground', 'rock', 'water'];
    grass.weak = ['bug', 'fire', 'flying', 'ice', 'poison'];
    grass.halfFrom = ['electric', 'grass', 'ground', 'water'];
    grass.halfTo = ['bug', 'dragon', 'grass', 'fire', 'flying', 'poison', 'steel'];
    
    ground.super = ['electric', 'fire', 'poison', 'rock', 'steel'];
    ground.weak = ['grass', 'ice', 'water'];
    ground.halfFrom = ['poison', 'rock'];
    ground.halfTo = ['bug', 'grasss'];
    ground.cantDamage = ['flying'];
    ground.immune = ['electric'];
    
    ice.super = ['dragon', 'flying', 'grass', 'ground'];
    ice.weak = ['fight', 'fire', 'rock', 'steel'];
    ice.halfFrom = ['ice'];
    ice.halfTo = ['fire', 'ice', 'steel', 'water'];
    
    normal.weak = ['fight'];
    normal.halfTo = ['rock', 'steel'];
    normal.cantDamage = ['ghost'];
    normal.immune = ['ghost'];
    
    poison.super = ['grass', 'fairy'];
    poison.weak = ['ground', 'psychic'];
    poison.halfFrom = ['bug', 'fairy', 'fight', 'grass', 'poison'];
    poison.halfTo = ['ghost', 'ground', 'poison', 'rock'];
    poison.cantDamage = ['steel'];
    
    psychc.super = ['fight', 'poison'];
    psychc.weak = ['bug', 'dark', 'ghost'];
    psychc.halfFrom = ['fight', 'psychc'];
    psychc.halfTo = ['psychc', 'steel'];
    psychc.cantDamage = ['dark'];
    
    rock.super = ['bug', 'fire', 'flying', 'ice'];
    rock.weak = ['fight', 'grass', 'ground', 'steel', 'water'];
    rock.halfFrom = ['fire', 'flying', 'normal', 'poison'];
    rock.halfTo = ['fight', 'ground', 'steel'];
    
    steel.super = ['fairy', 'ice', 'rock'];
    steel.weak = ['fight', 'fire', 'ground'];
    steel.halfFrom = ['bug', 'dragon', 'fairy', 'flying', 'grass', 'ice', 'normal', 'psychic', 'rock', 'steel'];
    steel.halfTo = ['electric', 'fire', 'steel', 'water'];
    steel.immune = ['poison'];
    
    water.super = ['fire', 'ground', 'rock'];
    water.weak = ['electric', 'grass'];
    water.halfFrom = ['fire', 'ice', 'steel', 'water'];
    water.halfTo = ['dragon', 'grass', 'water'];
    
    function emptyHeadings() {
        $('.sub-one, .sub-two, .sub-three, .sub-four, .sub-five, .sub-six, .head-one, .head-two, .head-three, .head-four, .head-five, .head-six').empty();
    }
    
    function defense(firstType, secondType) {
        var quarterWeak = [],
            halfWeak = [],
            doubleWeak = [],
            quadWeak = [];
        
        // x1/4 damage
        
        for (var i = 0; i < firstType.halfFrom.length; i++) {
            if ($.inArray(firstType.halfFrom[i], secondType.halfFrom) >= 0) {
                quarterWeak.push(firstType.halfFrom[i]);
            }
        }
        for (var i = 0; i < secondType.halfFrom.length; i++) {
            if ($.inArray(secondType.halfFrom[i], firstType.halfFrom) >= 0 && $.inArray(secondType.halfFrom[i], quarterWeak) < 0) {
                quarterWeak.push(secondType.halfFrom[i]);
            }
        }
        if (quarterWeak.length) {
            $('.head-one').text("1/4X DAMAGE FROM")
            $('.sub-one').text(quarterWeak);
        }
        
        // x1/2 damage
        
        for (var i = 0; i < firstType.halfFrom.length; i++) {
            if ($.inArray(firstType.halfFrom[i], secondType.weak) < 0 && $.inArray(firstType.halfFrom[i], secondType.halfFrom) < 0) {
                halfWeak.push(firstType.halfFrom[i]);
            }
        }
        
        for (var i = 0; i < secondType.halfFrom.length; i++) {
            if ($.inArray(secondType.halfFrom[i], firstType.weak) < 0 && $.inArray(secondType.halfFrom[i], firstType.halfFrom) < 0 && $.inArray(secondType.halfFrom[i], halfWeak) < 0) {
                halfWeak.push(secondType.halfFrom[i]);
            }
        }
        
        if (halfWeak.length) {
            $('.head-two').text("1/2X DAMAGE FROM")
            $('.sub-two').text(halfWeak);
        }
        
        // x2 damage

        for (var i = 0; i < firstType.weak.length; i++) {
            if ($.inArray(firstType.weak[i], secondType.halfFrom) < 0 && $.inArray(firstType.weak[i], secondType.weak) < 0 && $.inArray(firstType.weak[i], doubleWeak) < 0) {
                doubleWeak.push(firstType.weak[i]);
            }
        }
        for (var i = 0; i < secondType.weak.length; i++) {
            if ($.inArray(secondType.weak[i], firstType.weak) < 0 && $.inArray(secondType.weak[i], firstType.halfFrom) < 0 && $.inArray(secondType.weak[i], doubleWeak) < 0) {
                doubleWeak.push(secondType.weak[i]);
            }
        }
        if (doubleWeak.length) {
            $('.head-three').text("2X DAMAGE FROM")
            $('.sub-three').text(doubleWeak);
        }
        
        // x4 damage
        
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
            $('.head-four').text("4X DAMAGE FROM")
            $('.sub-four').text(quadWeak);
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
        if (obj.cantDamage) {
            $('.head-five').text("CAN'T DAMAGE");
            $('.sub-five').text(obj.cantDamage);
        }
        if(obj.immune) {
            $('.head-six').text("IMMUNE TO");
            $('.sub-six').text(obj.immune);
        }
    }
    
    function displayTypeTwo(str, obj, obj2) {
        $('.type2').toggleClass(str);
        $('.type2').text(str);
        defense(obj, obj2);
    }
    
    $('.type').on('click', function() {
        if(typeTwo) {
            $('.clear').click();
        }
        
        else if(typeOne && !typeTwo) {
            emptyHeadings();
            typeTwo = $(this).text();
            twoObj = eval(typeTwo.toLowerCase());
            displayTypeTwo(typeTwo, oneObj, twoObj);
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