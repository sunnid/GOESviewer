var http = require('http');
var fs = require('fs');

var pages_gif =[

// every 270 seconds (4.5 minutes)
 
    {
        name:'FTG_NTP',
        frequency:270000,
        url:'http://radar.weather.gov/RadarImg/NTP/FTG_NTP_0.gif'
    },
        
    {   
        name:'FTG_NCR',
        frequency:270000,
        url:'http://radar.weather.gov/RadarImg/NCR/FTG_NCR_0.gif'
    },
        
    {
        name:'FTG_N0Z',
        frequency:270000,
        url:'http://radar.weather.gov/RadarImg/N0Z/FTG_N0Z_0.gif'
    },
        
    {
        name:'FTG_N0V',
        frequency:270000,
        url:'http://radar.weather.gov/RadarImg/N0V/FTG_N0V_0.gif'
    },
        
    {
        name:'FTG_N0S',
        frequency:270000,
        url:'http://radar.weather.gov/RadarImg/N0S/FTG_N0S_0.gif'
    },
        
    {
        name:'FTG_N0R',
        frequency:270000,
        url:'http://radar.weather.gov/RadarImg/N0R/FTG_N0R_0.gif'
    },
    
    {
        name:'aurora',
        frequency:1800000,
        url:'http://www.swpc.noaa.gov/pmap/gif/pmapN.gif'
    },
];

var download_gif = function(params){
    var now = new Date().getTime();
    console.log('downloading -> '+params.message);
    var file = fs.createWriteStream(params.name+'_'+now+'.gif');
    var request = http.get(params['url'], function(response){
        response.pipe(file);
    });
};

var scrape = function(page,cb){
    var message = "scraping -> "+page.name;
    var params = { //creates in the scope of scrape
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
        scrape(targets[i],download_gif);
    }
};

start(pages_gif);

var pages_png =[

    {
        name:'xray',
        frequency:1800000,
        url:'http://www.swpc.noaa.gov/sxi/images/latest_sxi.png'
    },

];

var download_png = function(params){
    var now = new Date().getTime();
    console.log('downloading -> '+params.message);
    var file = fs.createWriteStream(params.name+'_'+now+'.png');
    var request = http.get(params['url'], function(response){
        response.pipe(file);
    });
};

var scrape = function(page,cb){
    var message = "scraping -> "+page.name;
    var params = { //creates in the scope of scrape
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
        scrape(targets[i],download_png);
    }
};

start(pages_png);


var  pages_jpg =[

 // every 30 minutes

    {
        name: 'weus_wv',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/west/weus/wv.jpg'
    },
    
    {
        name:'nhem_wv',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/comp/nhem/wv.jpg'
    },
    
    {
        name:'nhem_rgb',
        frequency:1800000,
        url:'http://www.ssd.noaa.gov/goes/comp/nhem/rgb.jpg'
    },
    
    {
        name:'bou_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/bou/rgb.jpg'
    },
    
    {
        name:'bou_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/bou/rb.jpg'
    },
    
    {
        name:'bou_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/bou/ir2.jpg'
    },
    
    {
        name:'central-plains_wv',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/cp/wv.jpg'
    },

    {
        name:'central-plains_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/cp/rgb.jpg'
    },
    
    {
        name:'central-plains_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/cp/rb.jpg'
    },
    
    {
        name:'central-plains_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/cp/ir2.jpg'
    },
    

        
// every 15 minutes 
                
    {
        name:'cme',
        frequency: 1800000,
        url:'http://sohowww.nascom.nasa.gov/data/realtime/c3/1024/latest.jpg'
    },
        
        
// every 3 hours (10800 seconds) 
        
    {
        name:'GWVS',
        frequency:10800000,
        url:'http://www.goes.noaa.gov/FULLDISK/GWVS.JPG'
    },
    {

        name:'GEVS',
        frequency:10800000,
        url:'http://www.goes.noaa.gov/FULLDISK/GEVS.JPG'
    },
    
    {
        name:'GEIR',
        frequency:10800000,
        url:'http://www.goes.noaa.gov/FULLDISK/GEIR.JPG'
    },

    {
        name:'MTVS',
        frequency:10800000,
        url:'http://www.goes.noaa.gov/FULLDISK/MTVS.JPG'
    },

    {
        name:'GIVS',
        frequency:10800000,
        url:'http://www.goes.noaa.gov/FULLDISK/GIVS.JPG'
    },
];


var download_jpg = function(params){
    var now = new Date().getTime();
    console.log('downloading -> '+params.message);
    var file = fs.createWriteStream(params.name+'_'+now+'.jpg');
    var request = http.get(params['url'], function(response){
        response.pipe(file);
    });
};

var scrape = function(page,cb){
    var message = "scraping -> "+page.name;
    var params = { //creates in the scope of scrape
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
        scrape(targets[i],download_jpg);
    }
};

start(pages_jpg);





