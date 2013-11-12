
var http = require('http');
var fs = require('fs');

var pages =[

// every 220 seconds (2 minutes)

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

    {
        name: 'weus1_wv',
        frequency: 1800000,
        url:'http://www.goes.noaa.gov/GIFS/WCW1.JPG'
    },

    {
        name: 'weus2_wv',
        frequency: 1800000,
        url:'http://www.goes.noaa.gov/GIFS/WCW2.JPG'
    },

    {
        name: 'weus3_wv',
        frequency: 1800000,
        url:'http://www.goes.noaa.gov/GIFS/WCW3.JPG'
    },

    {
        name: 'weus_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/west/weus/rgb.jpg'
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
// wfo start
//central-plains_wfo start    
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
        name:'gjt_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/gjt/rgb.jpg'
    },
    
    {
        name:'gjt_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/gjt/rb.jpg'
    },
    
    {
        name:'gjt_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/gjt/ir2.jpg'
    },

    {
        name:'pub_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/pub/rgb.jpg'
    },
    
    {
        name:'pub_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/pub/rb.jpg'
    },
    
    {
        name:'pub_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/pub/ir2.jpg'
    },

    {
        name:'ddc_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/ddc/rgb.jpg'
    },
    
    {
        name:'ddc_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/ddc/rb.jpg'
    },
    
    {
        name:'ddc_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/ddc/ir2.jpg'
    },

    {
        name:'gld_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/gld/rgb.jpg'
    },
    
    {
        name:'gld_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/gld/rb.jpg'
    },
    
    {
        name:'gld_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/gld/ir2.jpg'
    },

    {
        name:'gid_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/gid/rgb.jpg'
    },
    
    {
        name:'gid_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/gid/rb.jpg'
    },
    
    {
        name:'gid_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/gid/ir2.jpg'
    },
    {
        name:'oax_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/oax/rgb.jpg'
    },
    
    {
        name:'oax_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/oax/rb.jpg'
    },
    
    {
        name:'oax_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/oax/ir2.jpg'
    },

    {
        name:'lbf_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/lbf/rgb.jpg'
    },
    
    {
        name:'lbf_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/lbf/rb.jpg'
    },
    
    {
        name:'lbf_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/lbf/ir2.jpg'
    },

    {
        name:'ict_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/ict/rgb.jpg'
    },
    
    {
        name:'ict_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/ict/rb.jpg'
    },
    
    {
        name:'ict_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/ict/ir2.jpg'
    },

    {
        name:'cys_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/cys/rgb.jpg'
    },
    
    {
        name:'cys_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/cys/rb.jpg'
    },
    
    {
        name:'cys_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/cys/ir2.jpg'
    },

    {
        name:'riw_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/riw/rgb.jpg'
    },
    
    {
        name:'riw_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/riw/rb.jpg'
    },
    
    {
        name:'riw_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/riw/ir2.jpg'
    },  
//end central-plains_wfo
// start gl_wfo
    {
        name:'lot_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/lot/rgb.jpg'
    },
    
    {
        name:'lot_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/lot/rb.jpg'
    },
    
    {
        name:'lot_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/lot/ir2.jpg'
    },

    {
        name:'grb_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/grb/rgb.jpg'
    },
    
    {
        name:'grb_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/grb/rb.jpg'
    },
    
    {
        name:'grb_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/grb/ir2.jpg'
    },

    {
        name:'mkx_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/mkx/rgb.jpg'
    },
    
    {
        name:'mkx_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/mkx/rb.jpg'
    },
    
    {
        name:'mkx_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/mkx/ir2.jpg'
    },  

    {
        name:'arx_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/arx/rgb.jpg'
    },
    
    {
        name:'arx_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/arx/rb.jpg'
    },
    
    {
        name:'arx_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/arx/ir2.jpg'
    },  

    {
        name:'dtx_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/dtx/rgb.jpg'
    },
    
    {
        name:'dtx_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/dtx/rb.jpg'
    },
    
    {
        name:'dtx_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/dtx/ir2.jpg'
    },

    {
        name:'apx_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/riw/rgb.jpg'
    },
    
    {
        name:'apx_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/riw/rb.jpg'
    },
    
    {
        name:'apx_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/riw/ir2.jpg'
    },  

    {
        name:'grr_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/grr/rgb.jpg'
    },
    
    {
        name:'grr_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/grr/rb.jpg'
    },
    
    {
        name:'grr_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/grr/ir2.jpg'
    },  

    {
        name:'mqt_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/mqt/rgb.jpg'
    },
    
    {
        name:'mqt_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/mqt/rb.jpg'
    },
    
    {
        name:'mqt_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/mqt/ir2.jpg'
    },  
//end gl_wfo     
//start mw_wfo

    {
        name:'eax_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/eax/rgb.jpg'
    },

    {
        name:'eax_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/eax/rb.jpg'
    },

    {
        name:'eax_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/eax/ir2.jpg'
    },

    {
        name:'lsx_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/lsx/rgb.jpg'
    },

    {
        name:'lsx_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/lsx/rb.jpg'
    },

    {
        name:'lsx_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/lsx/ir2.jpg'
    },

    {
        name:'sgf_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/sgf/rgb.jpg'
    },

    {
        name:'sgf_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/sgf/rb.jpg'
    },

    {
        name:'sgf_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/sgf/ir2.jpg'
    },

    {
        name:'dmx_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/dmx/rgb.jpg'
    },

    {
        name:'dmx_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/dmx/rb.jpg'
    },

    {
        name:'dmx_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/dmx/ir2.jpg'
    },

    {
        name:'ilx_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/ilx/rgb.jpg'
    },

    {
        name:'ilx_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/ilx/rb.jpg'
    },

    {
        name:'ilx_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/ilx/ir2.jpg'
    },

    {
        name:'jkl_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/jkl/rgb.jpg'
    },

    {
        name:'jkl_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/jkl/rb.jpg'
    },

    {
        name:'jkl_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/jkl/ir2.jpg'
    },

    {
        name:'lmk_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/lmk/rgb.jpg'
    },

    {
        name:'lmk_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/lmk/rb.jpg'
    },

    {
        name:'lmk_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/lmk/ir2.jpg'
    },


    {
        name:'pah_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/pah/rgb.jpg'
    },

    {
        name:'pah_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/pah/rb.jpg'
    },

    {
        name:'pah_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/pah/ir2.jpg'
    },

    {
        name:'ind_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/ind/rgb.jpg'
    },

    {
        name:'ind_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/ind/rb.jpg'
    },

    {
        name:'ind_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/wfo/ind/ir2.jpg'
    },


//end mw_wfo                  
// wfo end
//sector start    

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
        name:'se_wv',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/se/wv.jpg'
    },

    {
        name:'se_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/se/rgb.jpg'
    },
    
    {
        name:'se_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/se/rb.jpg'
    },
    
    {
        name:'se_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/se/ir2.jpg'
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
        frequency: 18000000,
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
        url:'http://www.ssd.noaa.gov/goes/east/gl/wv.jpg'
    },

    {
        name:'gl_rgb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/gl/rgb.jpg'
    },
    
    {
        name:'gl_rb',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/gl/rb.jpg'
    },
    
    {
        name:'gl_ir2',
        frequency: 1800000,
        url:'http://www.ssd.noaa.gov/goes/east/gl/ir2.jpg'
    },

    {
        name:'cme',
        frequency: 1800000,
        url:'http://sohowww.nascom.nasa.gov/data/realtime/c3/1024/latest.jpg'
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

    {
        name:'METOP',
        frequency: 10800000,
        url:'http://oiswww.eumetsat.org/IPPS/html/latestImages/EUMETSAT_METOP_METOP2-AVHRR-RGB124-Orbit.jpg'
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


    var times = new Date();
    var now = new Date().getTime();
    console.log(times+"...."+'downloading -> '+params.message);
    var file = fs.createWriteStream(params.name+'_'+now+'.'+extension);
    var request = http.get(params['url'], function(response){
        response.pipe(file);
        response.setTimeout(1500);
        });

   
    if(params.name.search(params.name) != -1) {
        fs.appendFile('/sites/sunnid/www/WeatherButt/views/'+params.name+'.jade', '    '+'img(src= "/images/'+params.name+'_'+now+'.'+extension+'")\r\n');
        console.log("img src append successful");    
    };
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
        scrape(targets[i],download);
    }
};

start(pages);





