var http = require('http');
var fs = require('fs');

var pages_gif =[

// every 270 seconds (4.5 minutes)
 
    {
        name:'FTG_NTP',
        frequency:220000,
        url:'http://radar.weather.gov/RadarImg/NTP/FTG_NTP_0.gif'
    },
        
    {   
        name:'FTG_NCR',
        frequency:220000,
        url:'http://radar.weather.gov/RadarImg/NCR/FTG_NCR_0.gif'
    },
        
    {
        name:'FTG_N0Z',
        frequency:220000,
        url:'http://radar.weather.gov/RadarImg/N0Z/FTG_N0Z_0.gif'
    },
        
    {
        name:'FTG_N0V',
        frequency:220000,
        url:'http://radar.weather.gov/RadarImg/N0V/FTG_N0V_0.gif'
    },
        
    {
        name:'FTG_N0S',
        frequency:220000,
        url:'http://radar.weather.gov/RadarImg/N0S/FTG_N0S_0.gif'
    },
        
    {
        name:'FTG_N0R',
        frequency:220000,
        url:'http://radar.weather.gov/RadarImg/N0R/FTG_N0R_0.gif'
    },
    
    {
        name:'aurora',
        frequency:900000,
        url:'http://www.swpc.noaa.gov/pmap/gif/pmapN.gif'
    },
    
    {
	name:'mk4',
	frequency: 900000,
	url:'http://download.hao.ucar.edu/d5/www/fullres/latest/latest.mk4.gif'
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
    var message = "scraping -> "+page.url;
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

    {
	name:'swap',
	frequency:1800000,
	url:'http://www.solarmonitor.org/data/2013/10/13/pngs/swap/swap_00174_fd_20131013_130907.png'
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
    var message = "scraping -> "+page.url;
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
    
    {
        name:'mw_wv',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/mw/wv.jpg'
    },

    {
        name:'mw_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/mw/rgb.jpg'
    },
    
    {
        name:'mw_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/mw/rb.jpg'
    },
    
    {
        name:'mw_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/mw/ir2.jpg'
    },
    
    {
        name:'sc_wv',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/sc/wv.jpg'
    },

    {
        name:'sc_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/sc/rgb.jpg'
    },
    
    {
        name:'sc_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/sc/rb.jpg'
    },
    
    {
        name:'sc_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/sc/ir2.jpg'
    },
    
    {
        name:'np_wv',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/np/wv.jpg'
    },

    {
        name:'np_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/np/rgb.jpg'
    },
    
    {
        name:'np_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/np/rb.jpg'
    },
    
    {
        name:'np_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/np/ir2.jpg'
    },
    
    {
        name:'ne_wv',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/ne/wv.jpg'
    },

    {
        name:'ne_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/ne/rgb.jpg'
    },
    
    {
        name:'ne_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/ne/rb.jpg'
    },
    
    {
        name:'ne_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/ne/ir2.jpg'
    },
    
    {
        name:'ma_wv',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/ma/wv.jpg'
    },

    {
        name:'ma_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/ma/rgb.jpg'
    },
    
    {
        name:'ma_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/ma/rb.jpg'
    },
    
    {
        name:'ma_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/ma/ir2.jpg'
    },
    
    {
        name:'wc_wv',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wc/wv.jpg'
    },

    {
        name:'wc_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wc/rgb.jpg'
    },
    
    {
        name:'wc_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wc/rb.jpg'
    },
    
    {
        name:'wc_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wc/ir2.jpg'
    },
    
    {
        name:'sw_wv',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/sw/wv.jpg'
    },

    {
        name:'sw_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/sw/rgb.jpg'
    },
    
    {
        name:'sw_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/sw/rb.jpg'
    },
    
    {
        name:'sw_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/sw/ir2.jpg'
    },
    
    {
        name:'nw_wv',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/nw/wv.jpg'
    },

    {
        name:'nw_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/nw/rgb.jpg'
    },
    
    {
        name:'nw_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/nw/rb.jpg'
    },
    
    {
        name:'nw_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/nw/ir2.jpg'
    },

    
    {
        name:'gl_wv',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/mw/wv.jpg'
    },

    {
        name:'gl_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/mw/rgb.jpg'
    },
    
    {
        name:'gl_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/mw/rb.jpg'
    },
    
    {
        name:'gl_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/mw/ir2.jpg'
    },

    {
        name:'cme',
        frequency: 1800000,
        url:'http://sohowww.nascom.nasa.gov/data/realtime/c3/1024/latest.jpg'
    },

    {
        name:'hfulb',
        frequency: 1800000,
        url:'http://www.bbso.njit.edu/Images/daily/images/hfullb.jpg'
    },        
    {
	name:'c2',
	frequency: 1800000,
	url:'http://sohowww.nascom.nasa.gov/data/realtime/c2/1024/latest.jpg'
     },   
// every 3 hours (10800 seconds) 
        
    {
        name:'GWVS',
        frequency: 10800000,
        url:'http://www.goes.noaa.gov/FULLDISK/GWVS.JPG'
    },
    {

        name:'GEVS',
        frequency: 10800000,
        url:'http://www.goes.noaa.gov/FULLDISK/GEVS.JPG'
    },
    
    {
        name:'GEIR',
        frequency: 10800000,
        url:'http://www.goes.noaa.gov/FULLDISK/GEIR.JPG'
    },

    {
        name:'MTVS',
        frequency: 10800000,
        url:'http://www.goes.noaa.gov/FULLDISK/MTVS.JPG'
    },

    {
        name:'GIVS',
        frequency: 10800000,
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
    var message = "scraping -> "+page.url;
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





