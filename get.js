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
        name: 'weus_wv',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/west/weus/wv.jpg'
    },
