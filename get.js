var http = require('http');
var fs = require('fs');
var  pages =[
    {
        name: 'weus_wv',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/west/weus/wv.jpg'
    },
    {
        name:'nhem_wv',
        frequency:1800000,
        url:'http://www.ssd.noaa.gov/goes/comp/nhem/wv.jpg'
    },
    {
        name:'nhem_rgb',
        frequency:1800000,
        url:'http://www.ssd.noaa.gov/goes/comp/nhem/rgb.jpg'
    }
];


var download = function(params){
    var now = new Date().getTime();
    console.log('downloading '+params.message);
    var file = fs.createWriteStream(params.name+'_'+now+'jpg');
    var request = http.get(params['url'], function(response){
        response.pipe(file);
    });
};

var scrape = function(page,cb){
    var message = "downloading "+page.name;
    var params = {
        name : page.name,
        url : page.url,
        message : message
    };
    var scrape_interval = setInterval(function(){
        cb(params);
    },page.frequency);
};

var start = function(targets){
    var i;
    for(i=0;i<targets.length;i++){
        scrape(targets[i],download);
    }
};

start(pages);


