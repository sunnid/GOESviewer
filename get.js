var http = require('http');
var fs = require('fs');


var pages =[

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
        name:'xray',
        frequency:900000,
        url:'http://www.swpc.noaa.gov/sxi/images/latest_sxi.png'
    },

    {
	name:'swap',
	frequency:1800000,
	url:'http://www.solarmonitor.org/data/2013/10/13/pngs/swap/swap_00174_fd_20131013_130907.png'
    },


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





var download = function(params){
	/**
	*    	params is an object containing the following:
        *       
	*	-params.name
        *	-params.frequency
        *	-params.url
	* 
	*	These variables will change based on how the function download is called.
	*	Since we want to extract the filename extension from the url, you could simply do:
	*/
	var extension = params.url.split('.').pop(); 
	/**  
	*	.split() takes params.url and makes an array which is separated by  the periods.
	*       .pop() takes the last value of the array and returns it.
	*     
	*/ 

    var now = new Date().getTime();
    console.log('downloading -> '+params.message);
    var file = fs.createWriteStream(params.name+'_'+now+'.'+extension);
    var request = http.get(params['url'], function(response){
        response.pipe(file);

    });
    if(params.name.search("FTG_N0R") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/ftg_n0r.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("FTG_N0S") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/ftg_n0s.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("FTG_N0V") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/ftg_n0v.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("FTG_N0Z") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/ftg_n0z.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("FTG_NCR") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/ftg_ncr.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("FTG_NTP") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/ftg_ntp.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("bou_rgb") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/bou_rgb.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("bou_rb") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/bou_rb.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("bou_ir2") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/bou_ir2.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("central-plains_rgb") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/central-plains_rgb.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("central-plains_rb") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/central-plains_rb.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("central-plains_wv") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/central-plains_wv.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("central-plains_ir2") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/central-plains_ir2.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };

    if(params.name.search("gl_rgb") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/gl_rgb.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("gl_rb") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/gl_rb.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("gl_ir2") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/gl_ir2.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("gl_wv") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/gl_wv.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("mw_rgb") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/mw_rgb.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("mw_rb") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/mw_rb.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("mw_ir2") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/mw_ir2.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("mw_wv") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/mw_wv.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("ma_rgb") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/ma_rgb.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("ma_rb") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/ma_rb.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("ma_ir2") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/ma_ir2.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("ma_wv") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/ma_wv.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("nw_rgb") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/nw_rgb.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("nw_rb") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/nw_rb.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("nw_ir2") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/nw_ir2.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("nw_wv") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/nw_wv.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("sw_rgb") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/sw_rgb.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("sw_rb") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/sw_rb.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("sw_ir2") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/sw_ir2.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("sw_wv") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/sw_wv.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("ne_rgb") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/ne_rgb.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("ne_rb") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/ne_rb.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("ne_ir2") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/ne_ir2.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("ne_wv") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/ne_wv.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("se_rgb") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/se_rgb.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("se_rb") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/se_rb.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("se_ir2") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/se_ir2.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("se_wv") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/se_wv.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("np_rgb") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/np_rgb.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("np_rb") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/np_rb.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("np_ir2") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/np_ir2.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("np_wv") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/np_wv.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("sc_rgb") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/sc_rgb.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("sc_rb") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/sc_rb.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("sc_ir2") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/sc_ir2.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("sc_wv") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/sc_wv.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("wc_rgb") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/wc_rgb.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("wc_rb") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/wc_rb.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("wc_ir2") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/wc_ir2.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("wc_wv") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/wc_wv.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("cme") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/cme.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("xray") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/xray.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("hfulb") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/hfulb.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("swap") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/swap.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("aurora") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/aurora.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("c2") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/c2.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("weus_wv") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/weus_wv.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("nehm_rgb") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/nehm_rgb.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
    if(params.name.search("nehm_wv") != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/nehm_wv.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
    };
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
        scrape(targets[i],download);
    }
};

start(pages);





