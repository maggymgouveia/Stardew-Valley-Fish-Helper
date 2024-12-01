//Dicionários para as selectbox

var seasons = {};
seasons['any'] = "Any season";
seasons['spring'] = "Spring";
seasons['summer'] = "Summer";
seasons['fall'] = "Fall";
seasons['winter'] = "Winter";

var weathers = {};
weathers["any"] = "Any weather";
weathers["sun"] = "Sun";
weathers["rain"] = "Rain";
weathers["wind"] = "Wind";
weathers["nightmarket"] = "Night Market";

var locations = {};
locations["any"] = "Any location";
locations["townriver"] = "Town River";
locations["ocean"] = "Ocean";
locations["mountainlake"] = "Mountain Lake";
locations["forestpond"] = "Forest Pond";
locations["forestriver"] = "Forest River";
locations["forestwaterfalls"] = "Forest Waterfalls";
locations["secretwoods"] = "Secret Woods";
locations["desert"] = "Desert";
locations["sewers"] = "Sewers";
locations["witchswamp"] = "Witch's Swamp";
locations["mines"] = "Mines";
locations["mutantbuglair"] = "Mutant Bug Lair";
locations["giocean"] = "Ginger Island Ocean";
locations["giriver"] = "Ginger Island River";
locations["givolcano"] = "Ginger Island Volcano";
locations["gipond"] = "Ginger Island Pond";
locations["gipiratecove"] = "Ginger Island Pirate Cove";

//Funções para as selectbox
 
var cont_seasons = 1;
var cont_weathers = 1;
var cont_locations = 1;

function addSeasons(){
    var selectbox = document.getElementById("season");
    for (let i in seasons) {
        if (cont_seasons ==  6){
            break
        }
        else{
            var option = document.createElement("option");
            option.text = seasons[i];
            option.value = i;
            selectbox.add(option);
            cont_seasons++;
        }
    }
}

function addWeathers(){
    var selectbox = document.getElementById("weather");
    for (let i in weathers) {
        if (cont_weathers ==  6){
            break
        }
        else{
            var option = document.createElement("option");
            option.text = weathers[i];
            option.value = i;
            selectbox.add(option);
            cont_weathers++;
        }
    }
}

function addLocations(){
    var selectbox = document.getElementById("location");
    for (let i in locations) {
        if (cont_locations ==  19){
            break
        }
        else{
            var option = document.createElement("option");
            option.text = locations[i];
            option.value = i;
            selectbox.add(option);
            cont_locations++;
        }
    }
}

//Vetores para filtrar

//Locais

var townriver = ["Bream", "Smallmouth Bass", "Rainbow Trout", "Salmon", "Walleye", "Perch", "Catfish", "Pike", "Sunfish", 
    "Green Algae", "Angler", "Tiger Trout", "Shad", "Lingcod", "Crayfish", "Snail", "Periwinkle", "River Jelly"];

var ocean = ["Pufferfish", "Anchovy", "Tuna", "Sardine", "Red Mullet", "Herring", "Eel", "Octopus", "Red Snapper", "Squid", 
    "Seaweed", "Green Algae", "Sea Cucumber", "Super Cucumber", "CrimsonFish", "Flounder", "Tilapia", "Albacore", "Halibut", 
    "Lobster", "Crab", "Cockle", "Mussel", "Shrimp", "Oyster", "Midnight Squid", "Spook Fish", "Blobfish", "Sea Jelly", "Clam"];

var mountainlake = ["Largemouth Bass", "Rainbow Trout", "Walleye", "Perch", "Carp", "Green Algae", "Legend", "Midnight Carp", 
    "Sturgeon", "Bullhead", "Chub", "Lingcod", "Crayfish", "Snail", "Periwinkle", "River Jelly"];

var forestpond = ["Smallmouth Bass", "Walleye", "Perch", "Pike", "Green Algae", "Midnight Carp", "Crayfish", "Snail", 
    "Periwinkle", "River Jelly"];

var forestriver = ["Bream", "Rainbow Trout", "Salmon", "Walleye", "Perch", "Catfish", "Pike", "Sunfish", "Green Algae", 
    "Tiger Trout", "Chub", "Dorado", "Shad", "Lingcod", "Crayfish", "Snail", "Periwinkle", "Glacierfish", "River Jelly"];

var forestwaterfalls = ["Salmon", "Green Algae", "River Jelly", "Goby"];

var secretwoods = ["Carp", "Catfish", "Green Algae", "Crayfish", "Snail", "Periwinkle", "Woodskip", "River Jelly"];

var desert = ["Green Algae", "Sandfish", "Scorpion Carp", "Crayfish", "Snail", "Periwinkle", "River Jelly"];

var sewers = ["Carp", "Green Algae", "White Algae", "Mutant Carp"];

var witchswamp = ["Catfish", "Green Algae", "White Algae", "Void Salmon"];

var mines = ["Green Algae", "Ghostfish", "White Algae", "Stonefish", "Ice Pip", "Lava Eel", "Cave Jelly"];

var mutantbuglair = ["Green Algae", "White Algae", "Slimejack"];

var giocean = ["Pufferfish", "Tuna", "Octopus", "Green Algae", "Super Cucumber", "Lobster", "Crab", "Cockle", "Mussel", 
    "Shrimp", "Oyster", "Flounder", "Lionfish", "Sea Jelly", "Clam"];

var giriver = ["Green Algae", "Midnight Carp", "Tilapia", "Blue Discus", "River Jelly"];

var givolcano = ["Green Algae", "Lava Eel"];

var gipond = ["Green Algae", "Midnight Carp", "Blue Discus", "River Jelly"];

var gipiratecove = ["Green Algae", "Stingray", "Sea Jelly"];

var anyLocation = ["Green Algae"];


//Estações

var spring = ["Anchovy", "Sardine", "Bream", "Largemouth Bass", "Smallmouth Bass", "Carp", "Catfish", "Sunfish", "Herring", 
    "Eel", "Seaweed", "Green Algae", "Ghostfish", "White Algae", "Stonefish", "Ice Pip", "Lava Eel", "Legend", "Sandfish", 
    "Scorpion Carp", "Flounder", "Midnight Carp", "Mutant Carp", "Bullhead", "Chub", "Shad", "Halibut", "Lobster", "Crayfish", 
    "Crab", "Cockle", "Mussel", "Shrimp", "Snail", "Periwinkle", "Oyster", "Woodskip", "Void Salmon", "Slimejack", "Stingray", 
    "Lionfish", "Blue Discus", "River Jelly", "Cave Jelly", "Sea Jelly", "Goby", "Clam"];

var summer = ["Pufferfish", "Tuna", "Bream", "Largemouth Bass", "Rainbow Trout", "Carp", "Pike", "Sunfish", "Red Mullet", 
    "Octopus", "Red Snapper", "Seaweed", "Green Algae", "Super Cucumber", "Ghostfish", "White Algae", "Stonefish", "Crimsonfish", 
    "Ice Pip", "Lava Eel", "Sandfish", "Scorpion Carp", "Mutant Carp", "Sturgeon", "Bullhead", "Tilapia", "Chub", "Dorado", 
    "Shad", "Halibut", "Lobster", "Crayfish", "Crab", "Cockle", "Mussel", "Shrimp", "Snail", "Periwinkle", "Oyster", "Woodskip", 
    "Void Salmon", "Slimejack", "Stingray", "Lionfish", "Blue Discus", "River Jelly", "Cave Jelly", "Sea Jelly", "Goby", "Clam"];

var fall = ["Anchovy", "Sardine", "Bream", "Largemouth Bass", "Smallmouth Bass", "Salmon", "Walleye", "Carp", "Catfish", "Eel", 
    "Red Snapper", "Seaweed", "Green Algae", "Super Cucumber", "Ghostfish", "White Algae", "Stonefish", "Angler", "Ice Pip", 
    "Lava Eel", "Sandfish", "Scorpion Carp", "Mutant Carp", "Tiger Trout", "Bullhead", "Tilapia", "Chub", "Albacore", "Shad", 
    "Lobster", "Crayfish", "Crab", "Cockle", "Mussel", "Shrimp", "Snail", "Periwinkle", "Oyster", "Woodskip", "Void Salmon", 
    "Slimejack", "Stingray", "Lionfish", "Blue Discus", "River Jelly", "Cave Jelly", "Sea Jelly", "Goby", "Clam"];

var winter = ["Tuna", "Sardine", "Bream", "Largemouth Bass", "Walleye", "Perch", "Carp", "Pike", "Red Mullet", "Herring", 
    "Red Snapper", "Squid", "Seaweed", "Green Algae", "Sea Cucumber", "Ghostfish", "White Algae", "Stonefish", "Ice Pip", 
    "Lava Eel", "Sandfish", "Scorpion Carp", "Mutant Carp", "Sturgeon", "Tiger Trout", "Bullhead", "Chub", "Albacore", "Lingcod", 
    "Halibut", "Lobster", "Crayfish", "Crab", "Cockle", "Mussel", "Shrimp", "Snail", "Periwinkle", "Oyster", "Woodskip", 
    "Glacierfish", "Void Salmon", "Slimejack", "Midnight Squid", "Spook Fish", "Blobfish", "Stingray", "Lionfish", "Blue Discus", 
    "River Jelly", "Cave Jelly", "Sea Jelly", "Goby", "Clam"];


//Tempo

var sun = ["Pufferfish", "Anchovy", "Tuna", "Sardine", "Bream", "Largemouth Bass", "Smallmouth Bass", "Rainbow Trout", 
    "Salmon", "Perch", "Carp", "Pike", "Sunfish", "Red Mullet", "Herring", "Octopus", "Squid", "Seaweed", "Green Algae", 
    "Sea Cucumber", "Super Cucumber", "Ghostfish", "White Algae", "Stonefish", "Crimsonfish", "Angler", "Ice Pip", "Lava Eel", 
    "Sandfish", "Scorpion Carp", "Flounder", "Midnight Carp", "Mutant Carp", "Sturgeon", "Tiger Trout", "Bullhead", "Tilapia", 
    "Chub", "Dorado", "Albacore", "Lingcod", "Halibut", "Lobster", "Crayfish", "Crab", "Cockle", "Mussel", "Shrimp", "Snail", 
    "Periwinkle", "Oyster", "Woodskip", "Glacierfish", "Void Salmon", "Slimejack", "Stingray", "Lionfish", "Blue Discus", 
    "River Jelly", "Cave Jelly", "Sea Jelly", "Goby ", "Clam"];

var rain = ["Achovy", "Tuna", "Sardine", "Bream", "Largemouth Bass", "Smallmouth Bass", "Salmon", "Walleye", "Perch", "Carp", 
    "Catfish", "Pike", "Red Mullet", "Herring", "Eel", "Octopus", "Red Snapper", "Squid", "Seaweed", "Green Algae", 
    "Sea Cucumber", "Super Cucumber", "Ghostfish", "White Algae", "Stonefish", "Crimsonfish", "Angler", "Ice Pip", "Lava Eel", 
    "Legend", "Sandfish", "Scorpion Carp", "Flounder", "Midnight Carp", "Mutant Carp", "Sturgeon", "Tiger Trout", "Bullhead", 
    "Tilapia", "Chub", "Dorado", "Albacore", "Shad", "Lingcod", "Halibut", "Lobster", "Crayfish", "Crab", "Cockle", "Mussel", 
    "Shrimp", "Snail", "Periwinkle", "Oyster", "Woodskip", "Glacierfish", "Void Salmon", "Slimejack", "Stingray", "Lionfish", 
    "Blue Discus", "River Jelly", "Cave Jelly", "Sea Jelly", "Goby ", "Clam"];

var wind = ["Anchovy", "Tuna", "Sardine", "Bream", "Largemouth Bass", "Smallmouth Bass", "Salmon", "Perch", "Carp", "Pike", 
    "Sunfish", "Red Mullet", "Herring", "Octopus", "Squid", "Seaweed", "Green Algae", "Sea Cucumber", "Super Cucumber", 
    "Ghostfish", "White Algae", "Stonefish", "Crimsonfish", "Angler", "Ice Pip", "Lava Eel", "Sandfish", "Scorpion Carp", 
    "Flounder", "Midnight Carp", "Mutant Carp", "Sturgeon", "Tiger Trout", "Bullhead", "Tilapia", "Chub", "Dorado", "Albacore", 
    "Lingcod", "Halibut", "Lobster", "Crayfish", "Crab", "Cockle", "Mussel", "Shrimp", "Snail", "Periwinkle", "Oyster", 
    "Woodskip", "Glacierfish", "Void Salmon", "Slimejack", "Stingray", "Lionfish", 
    "Blue Discus", "River Jelly", "Cave Jelly", "Sea Jelly", "Goby ", "Clam"];

var nightmarket = ["Octopus", "Seaweed", "Sea Cucumber", "Super Cucumber","Midnight Squid", "Spook Fish", "Blobfish", 
    "Sea Jelly"];


function addAnyArray(array1, array2) {
    var commons = [];
    for (var i = 0; i < array1.length; i++) {
       for (var j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                commons.push(array1[i]);
            }
        }
    }
    return commons;
}   

var anySeason_temp = addAnyArray(spring, summer);
var anySeason_temp2 = addAnyArray(fall, anySeason_temp);
var anySeason = addAnyArray(winter, anySeason_temp2);

var anyWeather_temp = addAnyArray(sun, rain);
var anyWeather_temp2 = addAnyArray(anyWeather_temp, wind);
var anyWeather = addAnyArray(anyWeather_temp2, nightmarket);

let valueS = "anySeason";
let valueW = "anyWeather";
let valueL = "anyLocation";
let selectedNM = 0;
let selectedAllW = 0;

function getSelectedSeason(){
    var x = document.getElementById("season").selectedIndex;
    var y = document.getElementById("season").options;

    valueS = y[x].value;

    if (valueS === "any"){
        valueS = "anySeason";
    }
}

function getSelectedWeather(){
    var x = document.getElementById("weather").selectedIndex;
    var y = document.getElementById("weather").options;

    valueW = y[x].value;

    if (valueW === "any"){
        valueW = "anyWeather";
        selectedAllW = 1;
    }
    else{
        selectedAllW = 0;
    }
    if (valueW === "nightmarket"){
        selectedNM = 1;
    }
    else{
        selectedNM = 0;
    }
}

function getSelectedLocation(){
    var x = document.getElementById("location").selectedIndex;
    var y = document.getElementById("location").options;

    valueL = y[x].value;

    if (valueL === "any"){
        valueL = "anyLocation";
    }
}

allFish = ["pufferfish", "anchovy", "tuna", "sardine", "bream", "largemouthbass", "smallmouthbass", "rainbowtrout", "salmon", 
    "walleye", "perch", "carp", "catfish", "pike", "sunfish", "redmullet", "herring", "eel", "octopus", "redsnapper", "squid", 
    "seaweed", "greenalgae", "seacucumber", "supercucumber", "ghostfish", "whitealgae", "stonefish", "crimsonfish", "angler", 
    "icepip", "lavaeel", "legend", "sandfish", "scorpioncarp", "flounder", "clam", "midnightcarp", "mutantcarp", "sturgeon", 
    "tigertrout", "bullhead", "tilapia", "chub", "dorado", "albacore", "shad", "lingcod", "halibut", "lobster", "crayfish", 
    "crab", "cockle", "mussel", "shrimp", "snail", "periwinkle", "oyster", "woodskip", "glacierfish", "voidsalmon", "slimejack", 
    "midnightsquid", "spookfish", "blobfish", "stingray", "lionfish", "bluediscus", "riverjelly", "cavejelly", "seajelly", "goby"];

//Funções suplementares

function nameToId(array){
    var arrayCopy = array;
    var newArray = [];
    for (let i=0; i< arrayCopy.length; i++){
        newArray[i]=arrayCopy[i].toLowerCase().replace(" ", "");
    }
    return (newArray);
}

function toObject(array){
    var object = {};
    for(var i = 0; i < array.length; i++){
        object[array[i]]='';
    }
    return object;
}
  
function elementNotInArray(array1, array2){
    var array2copy = array2;
    var array = [];
    for (let i=0; i < array1.length; i++){
        if (array1[i] in toObject(array2copy)){}
        else{
            array.push(array1[i]);
        }
    }
    return(array);
}

function hideDivs(array){
    for (let i=0; i<array.length; i++){
        var fishToDelete = document.getElementById(array[i])
        fishToDelete.style.visibility = 'hidden';
    }
}

function resetArrays(){
    seasonValueArray = [];
    weatherValueArray = [];
    locationValueArray = [];
    filter_temp = [];
    filter = [];
    filter_ids = [];
    deleteFish = [];
}

//

function addFiltered(){
    getSelectedSeason();
    getSelectedWeather();
    getSelectedLocation();

    var seasonValueArray = eval(valueS);
    var weatherValueArray = eval(valueW);
    var locationValueArray = eval(valueL);

    if (selectedAllW === 1){
        var anyWeather_AllW_temp = addAnyArray(sun, rain);
        var anyWeather_AllW = addAnyArray(anyWeather_AllW_temp, wind);
        weatherValueArray = anyWeather_AllW;
    }

    var filter_temp = addAnyArray(seasonValueArray, weatherValueArray);
    var filter = addAnyArray(filter_temp, locationValueArray);

    if(selectedNM === 1){
        filter.push("octopus");
        filter.push("Super Cucumber");
    }

    if (filter.length == 0){
        filter.push("Green Algae");
        alert ("It's not possible to catch Green Algae during the Night Market, but it's the only thing that is possible to catch under any other circumstance")
    }

    var filter_ids = nameToId(filter);

    var deleteFish = elementNotInArray(allFish, filter_ids);

    hideDivs(deleteFish);
}

