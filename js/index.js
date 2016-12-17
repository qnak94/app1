/**
 * Created by Антон on 05.12.2016.
 */
var map;
var schools = [];
var schoolsMark = [];
var enSchools=true;

var hospitals=[];
var hospitalsMark = [];
var enHospitals = true;

var gass=[];
var gassMark = [];
var enGass = true;

var hotels=[];
var hotelsMark = [];
var enHotels = true;

var markets=[];
var marketsMark = [];
var enMarkets = true;


var school1 = {
    lat: 49.5968818,
    lng: 34.5377494,
    title: 'Школа №5',
};
schools.push(school1);
var school2 = {
    lat: 49.5942968,
    lng: 34.5232412,
    title: 'Школа №25',
};
schools.push(school2);
var school3 = {
    lat: 49.5894508,
    lng: 34.51458,
    title: 'Школа №18',
};
schools.push(school3);
/*****************************************************/////////////
var hospital1 = {
    lat: 49.5864457,
    lng: 34.5248663,
    title: 'Больница №1',
};
hospitals.push(hospital1);
var hospital2 = {
    lat: 49.5931089,
    lng: 34.5593158,
    title: 'Больница №2',
};
hospitals.push(hospital2);
var hospital3 = {
    lat: 49.597327,
    lng: 34.5394581,
    title: 'Больница №5',
};
hospitals.push(hospital3);
/*****************************************************/////////////
var gas1 = {
    lat: 49.5896148,
    lng: 34.5399293,
    title: 'Нафтогаз',
};
gass.push(gas1);
var gas2 = {
    lat: 49.5837539,
    lng: 34.5369631,
    title: 'OKKO',
};
gass.push(gas2);
var gas3 = {
    lat: 49.606197,
    lng: 34.5294753,
    title: 'АЗС Надежда',
};
gass.push(gas3);
/*****************************************************/////////////
var hotel1 = {
    lat: 49.6042914,
    lng: 34.5295135,
    title: 'Отель Синай',
};
hotels.push(hotel1);
var hotel2 = {
    lat: 49.5992277,
    lng: 34.5265862,
    title: 'Мимино',
};
hotels.push(hotel2);
var hotel3 = {
    lat: 49.5948958,
    lng: 34.5388486,
    title: 'Алея Гранд',
};
hotels.push(hotel3);
/*****************************************************/////////////
var market1 = {
    lat: 49.5980252,
    lng: 34.534527,
    title: 'АТБ',
};
markets.push(market1);
var market2 = {
    lat: 49.601098,
    lng: 34.5317494,
    title: 'Сільпо',
};
markets.push(market2);
var market3 = {
    lat: 49.5897,
    lng: 34.5343205,
    title: 'Брусничка',
};
markets.push(market3);
/////////******************************//////////////////

function initMap() {
    var uluru = {lat: 49.5973449, lng: 34.5315917};
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: uluru
    });

///////////////**********************/////////////////
    for (var i = 0; i < schools.length; i++) {
        var marker = new google.maps.Marker({
            map: map,
            position: schools[i],
            title: schools[i].title,
            icon: 'common/img/ischool.png'
        });
        schoolsMark.push(marker);
    }
    console.log(schoolsMark);
    //////////////////////*******************************/////////////////////
    for (var i = 0; i < hospitals.length; i++) {
        var marker = new google.maps.Marker({
            map: map,
            position: hospitals[i],
            title: hospitals[i].title,
            icon: 'common/img/ihospital.png'
        });
        hospitalsMark.push(marker);
    }
    console.log(hospitalsMark);
    //////////////////////*******************************/////////////////////
    for (var i = 0; i < gass.length; i++) {
        var marker = new google.maps.Marker({
            map: map,
            position: gass[i],
            title: gass[i].title,
            icon: 'common/img/igas.png'
        });
        gassMark.push(marker);
    }
    console.log(gassMark);
    //////////////////////*******************************/////////////////////
    for (var i = 0; i < hotels.length; i++) {
        var marker = new google.maps.Marker({
            map: map,
            position: hotels[i],
            title: hotels[i].title,
            icon: 'common/img/ihotel.png'
        });
        hotelsMark.push(marker);
    }
    console.log(hotelsMark);
    //////////////////////*******************************/////////////////////
    for (var i = 0; i < markets.length; i++) {
        var marker = new google.maps.Marker({
            map: map,
            position: markets[i],
            title: markets[i].title,
            icon: 'common/img/imarket.png'
        });
        marketsMark.push(marker);
    }
    console.log(marketsMark);
//////////////////////////******************************///////////////////////
}
function schoolsOn() {
    if (enSchools) {
        for (var i = 0; i < schoolsMark.length; i++) {
            console.log(schoolsMark[i].type);
            schoolsMark[i].setMap(null);
        }
        enSchools = false;
    }
    else {
       /** var marker = new google.maps.Marker({
            position: school1,
        });
        marker.setMap(map);**/
       for (var i = 0; i < schools.length; i++) {
            var marker = new google.maps.Marker({
                map: map,
                position: schools[i],
                title: schools[i].title,
                icon: 'common/img/ischool.png'
            });
            schoolsMark.push(marker);
        }
        enSchools = true;
    }
}

/**function renoveMarkers() {
    for(var i=0; i<markers.length; i++){
        console.log(markers[i].type);
        markers[i].setMap(null);
    }
}**/
/*** hospitals **/

function hospitalsOn() {
    if (enHospitals) {
        for (var i = 0; i < hospitalsMark.length; i++) {
            console.log(hospitalsMark[i].type);
            hospitalsMark[i].setMap(null);
        }
        enHospitals = false;
    }
    else {
        for (var i = 0; i < hospitals.length; i++) {
            var marker = new google.maps.Marker({
                map: map,
                position: hospitals[i],
                title: hospitals[i].title,
                icon: 'common/img/ihospital.png'
            });
            hospitalsMark.push(marker);
        }
        enHospitals = true;
    }
}

/*** Gass **/

function gassOn() {
    if (enGass) {
        for (var i = 0; i < gassMark.length; i++) {
            console.log(gassMark[i].type);
            gassMark[i].setMap(null);
        }
        enGass = false;
    }
    else {
        for (var i = 0; i < gass.length; i++) {
            var marker = new google.maps.Marker({
                map: map,
                position: gass[i],
                title: gass[i].title,
                icon: 'common/img/igas.png'
            });
            gassMark.push(marker);
        }
        enGass = true;
    }
}

/*** Hotels **/

function hotelsOn() {
    if (enHotels) {
        for (var i = 0; i < hotelsMark.length; i++) {
            console.log(hotelsMark[i].type);
            hotelsMark[i].setMap(null);
        }
        enHotels = false;
    }
    else {
        for (var i = 0; i < hotels.length; i++) {
            var marker = new google.maps.Marker({
                map: map,
                position: hotels[i],
                title: hotels[i].title,
                icon: 'common/img/ihotel.png'
            });
            hotelsMark.push(marker);
        }
        enHotels = true;
    }
}

/*** Markets **/

function marketsOn() {
    if (enMarkets) {
        for (var i = 0; i < marketsMark.length; i++) {
            console.log(marketsMark[i].type);
            marketsMark[i].setMap(null);
        }
        enMarkets = false;
    }
    else {
        for (var i = 0; i < markets.length; i++) {
            var marker = new google.maps.Marker({
                map: map,
                position: markets[i],
                title: markets[i].title,
                icon: 'common/img/imarket.png'
            });
            marketsMark.push(marker);
        }
        enMarkets = true;
    }
}