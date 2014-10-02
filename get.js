

var http = require("http");
var fs = require("fs");


var pages =[

       
    {
        name:'FTG_N0R',
        frequency: 180000,
        folder: './images/FTG_N0R/',
        url:'http://radar.weather.gov/RadarImg/N0R/FTG_N0R_0.gif'
    },
//every 15 minutes    
    {
        name:'aurora',
        frequency: 1501000,
        folder: './images/aurora/',
        url:'http://www.swpc.noaa.gov/pmap/gif/pmapN.gif'
    },
    
    {
        name:'xray',
        frequency: 1200000,
        folder: './images/xray/',
        url:'http://www.swpc.noaa.gov/sxi/images/latest_sxi.png'
    },

    {
        name:'c3',
        frequency: 1502000,
        folder: './images/c3/',
        url:'http://sohowww.nascom.nasa.gov/data/realtime/c3/512/latest.jpg'
    },
/*   
    {
        name:'cme1',
        frequency: 901000,
        folder: './images/cme1/',
        url:'http://www.nasa.gov/sites/default/files/20140910_174246_4096_0131_0.jpeg'
    },
*/   
    {
        name:'c2',
        frequency: 902000,
        folder: './images/c2/',
        url:'http://sohowww.nascom.nasa.gov/data/realtime/c2/512/latest.jpg'
    },
//every 30 minutes
    {
        name: 'weus_wv',
        frequency: 904000,
        folder: './images/weus_wv/',
        url:'http://www.ssd.noaa.gov/goes/west/weus/wv.jpg'
    },

    {
        name: 'weus1_wv',
        frequency: 906000,
        folder: './images/weus1_wv/',
        url:'http://www.goes.noaa.gov/GIFS/WCW1.JPG'
    },

    {
        name: 'weus2_wv',
        frequency: 908000,
        folder: './images/weus2_wv/',
        url:'http://www.goes.noaa.gov/GIFS/WCW2.JPG'
    },

    {
        name: 'weus3_wv',
        frequency: 910000,
        folder: './images/weus3_wv/',
        url:'http://www.goes.noaa.gov/GIFS/WCW3.JPG'
    },

    {
        name: 'weus_rgb',
        frequency: 912000,
        folder: './images/weus_rgb/',
        url:'http://www.ssd.noaa.gov/goes/west/weus/rgb.jpg'
    },
    
    {
        name:'nhem_wv',
        frequency: 914000,
        folder: './images/nhem_wv/',
        url:'http://www.ssd.noaa.gov/goes/comp/nhem/wv.jpg'
    },
    
    {
        name:'nhem_rgb',
        frequency: 916000,
        folder: './images/nhem_rgb/',
        url:'http://www.ssd.noaa.gov/goes/comp/nhem/rgb.jpg'
    },
// wfo start
//central-plains_wfo start    
    {
        name:'bou_rgb',
        frequency: 918000,
        folder: './images/bou_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/bou/rgb.jpg'
    },
    
    {
        name:'bou_rb',
        frequency: 920000,
        folder: './images/bou_rb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/bou/rb.jpg'
    },
    
    {
        name:'bou_ir2',
        frequency: 922000,
        folder: './images/bou_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/bou/ir2.jpg'
    },

    {
        name:'gjt_rgb',
        frequency: 924000,
        folder: './images/gjt_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/gjt/rgb.jpg'
    },
    
    {
        name:'gjt_rb',
        frequency: 926000,
        folder: './images/gjt_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/gjt/rb.jpg'
    },
    
    {
        name:'gjt_ir2',
        frequency: 928000,
        folder: './images/gjt_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/gjt/ir2.jpg'
    },

    {
        name:'pub_rgb',
        frequency: 930000,
        folder: './images/pub_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/pub/rgb.jpg'
    },
    
    {
        name:'pub_rb',
        frequency: 932000,
        folder: './images/pub_rb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/pub/rb.jpg'
    },
    
    {
        name:'pub_ir2',
        frequency: 934000,
        folder: './images/pub_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/pub/ir2.jpg'
    },

    {
        name:'ddc_rgb',
        frequency: 936000,
        folder: './images/ddc_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/ddc/rgb.jpg'
    },
    
    {
        name:'ddc_rb',
        frequency: 938000,
        folder: './images/ddc_rb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/ddc/rb.jpg'
    },
    
    {
        name:'ddc_ir2',
        frequency: 940000,
        folder: './images/ddc_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/ddc/ir2.jpg'
    },

    {
        name:'gld_rgb',
        frequency: 942000,
        folder: './images/gl_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/gld/rgb.jpg'
    },
    
    {
        name:'gld_rb',
        frequency: 944000,
        folder: './images/gl_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/gld/rb.jpg'
    },
    
    {
        name:'gld_ir2',
        frequency: 946000,
        folder: './images/gld_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/gld/ir2.jpg'
    },

    {
        name:'gid_rgb',
        frequency: 948000,
        folder: './images/gid_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/gid/rgb.jpg'
    },
    
    {
        name:'gid_rb',
        frequency: 950000,
        folder: './images/gid_rb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/gid/rb.jpg'
    },
    
    {
        name:'gid_ir2',
        frequency: 952000,
        folder: './images/gid_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/gid/ir2.jpg'
    },

    {
        name:'gid_wv',
        frequency: 954000,
        folder: './images/gid_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/gid/ir2.jpg'
    },

    {
        name:'oax_rgb',
        frequency: 956000,
        folder: './images/oax_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/oax/rgb.jpg'
    },
    
    {
        name:'oax_rb',
        frequency: 958000,
        folder: './images/oax_rb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/oax/rb.jpg'
    },
    
    {
        name:'oax_ir2',
        frequency: 960000,
        folder: './images/oax_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/oax/ir2.jpg'
    },

    {
        name:'lbf_rgb',
        frequency: 962000,
        folder: './images/lbf_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/lbf/rgb.jpg'
    },
    
    {
        name:'lbf_rb',
        frequency: 964000,
        folder: './images/lbf_rb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/lbf/rb.jpg'
    },
    
    {
        name:'lbf_ir2',
        frequency: 966000,
        folder: './images/lbf_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/lbf/ir2.jpg'
    },

    {
        name:'ict_rgb',
        frequency: 968000,
        folder: './images/ict_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/ict/rgb.jpg'
    },
    
    {
        name:'ict_rb',
        frequency: 970000,
        folder: './images/ict_rb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/ict/rb.jpg'
    },
    
    {
        name:'ict_ir2',
        frequency: 972000,
        folder: './images/ict_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/ict/ir2.jpg'
    },

    {
        name:'cys_rgb',
        frequency: 974000,
        folder: './images/cys_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/cys/rgb.jpg'
    },
    
    {
        name:'cys_rb',
        frequency: 976000,
        folder: './images/cys_rb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/cys/rb.jpg'
    },
    
    {
        name:'cys_ir2',
        frequency: 978000,
        folder: './images/cys_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/cys/ir2.jpg'
    },

    {
        name:'riw_rgb',
        frequency: 980000,
        folder: './images/riw_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/riw/rgb.jpg'
    },
    
    {
        name:'riw_rb',
        frequency: 982000,
        folder: './images/riw_rb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/riw/rb.jpg'
    },
    
    {
        name:'riw_ir2',
        frequency: 984000,
        folder: './images/riw_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/riw/ir2.jpg'
    },  
//end central-plains_wfo
// start gl_wfo
    {
        name:'lot_rgb',
        frequency: 986000,
        folder: './images/lot_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/lot/rgb.jpg'
    },
    
    {
        name:'lot_rb',
        frequency: 988000,
        folder: './images/lot_rb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/lot/rb.jpg'
    },
    
    {
        name:'lot_ir2',
        frequency: 990000,
        folder: './images/lot_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/lot/ir2.jpg'
    },

    {
        name:'grb_rgb',
        frequency: 992000,
        folder: './images/grb_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/grb/rgb.jpg'
    },
    
    {
        name:'grb_rb',
        frequency: 994000,
        folder: './images/grb_rb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/grb/rb.jpg'
    },
    
    {
        name:'grb_ir2',
        frequency: 996000,
        folder: './images/grb_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/grb/ir2.jpg'
    },

    {
        name:'mkx_rgb',
        frequency: 998000,
        folder: './images/mkx_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/mkx/rgb.jpg'
    },
    
    {
        name:'mkx_rb',
        frequency: 1000000,
        folder: './images/mkx_rb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/mkx/rb.jpg'
    },
    
    {
        name:'mkx_ir2',
        frequency: 10020000,
        folder: './images/mkx_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/mkx/ir2.jpg'
    },  

    {
        name:'arx_rgb',
        frequency: 1004000,
        folder: './images/arx_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/arx/rgb.jpg'
    },
    
    {
        name:'arx_rb',
        frequency: 1006000,
        folder: './images/arx_rb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/arx/rb.jpg'
    },
    
    {
        name:'arx_ir2',
        frequency: 1008000,
        folder: './images/arx_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/arx/ir2.jpg'
    },  

    {
        name:'dtx_rgb',
        frequency: 1010000,
        folder: './images/dtx_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/dtx/rgb.jpg'
    },
    
    {
        name:'dtx_rb',
        frequency: 1012000,
        folder: './images/dtx_rb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/dtx/rb.jpg'
    },
    
    {
        name:'dtx_ir2',
        frequency: 1014000,
        folder: './images/dtx_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/dtx/ir2.jpg'
    },

    {
        name:'apx_rgb',
        frequency: 1016000,
        folder: './images/apx_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/apx/rgb.jpg'
    },
    
    {
        name:'apx_rb',
        frequency: 1018000,
        folder: './images/apx_rb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/apx/rb.jpg'
    },
    
    {
        name:'apx_ir2',
        frequency: 1020000,
        folder: './images/apx_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/apx/ir2.jpg'
    },

    {
        name:'grr_rgb',
        frequency: 1022000,
        folder: './images/grr_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/grr/rgb.jpg'
    },
    
    {
        name:'grr_rb',
        frequency: 1024000,
        folder: './images/grb_rb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/grr/rb.jpg'
    },
    
    {
        name:'grr_ir2',
        frequency: 1026000,
        folder: './images/grr_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/grr/ir2.jpg'
    },  

    {
        name:'mqt_rgb',
        frequency: 1028000,
        folder: './images/mqt_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/mqt/rgb.jpg'
    },
    
    {
        name:'mqt_rb',
        frequency: 1030000,
        folder: './images/mqt_rb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/mqt/rb.jpg'
    },
    
    {
        name:'mqt_ir2',
        frequency: 1032000,
        folder: './images/mqt_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/mqt/ir2.jpg'
    },  
//end gl_wfo     
//start mw_wfo

    {
        name:'eax_rgb',
        frequency: 1036000,
        folder: './images/eax_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/eax/rgb.jpg'
    },

    {
        name:'eax_rb',
        frequency: 1038000,
        folder: './images/eax_rb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/eax/rb.jpg'
    },

    {
        name:'eax_ir2',
        frequency: 1040000,
        folder: './images/eax_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/eax/ir2.jpg'
    },

    {
        name:'lsx_rgb',
        frequency: 1042000,
        folder: './images/lsx_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/lsx/rgb.jpg'
    },

    {
        name:'lsx_rb',
        frequency: 1044000,
        folder: './images/lsx_rb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/lsx/rb.jpg'
    },

    {
        name:'lsx_ir2',
        frequency: 1046000,
        folder: './images/lsx_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/lsx/ir2.jpg'
    },

    {
        name:'sgf_rgb',
        frequency: 1048000,
        folder: './images/sgf_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/sgf/rgb.jpg'
    },

    {
        name:'sgf_rb',
        frequency: 1050000,
        folder: './images/sgf_rb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/sgf/rb.jpg'
    },

    {
        name:'sgf_ir2',
        frequency: 1052000,
        folder: './images/sgf_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/sgf/ir2.jpg'
    },

    {
        name:'dmx_rgb',
        frequency: 1054000,
        folder: './images/dmx_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/dmx/rgb.jpg'
    },

    {
        name:'dmx_rb',
        frequency: 1056000,
        folder: './images/dmx_rb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/dmx/rb.jpg'
    },

    {
        name:'dmx_ir2',
        frequency: 1058000,
        folder: './images/dmx_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/dmx/ir2.jpg'
    },

    {
        name:'ilx_rgb',
        frequency: 1060000,
        folder: './images/ilx_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/ilx/rgb.jpg'
    },

    {
        name:'ilx_rb',
        frequency: 1062000,
        folder: './images/ilx_rb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/ilx/rb.jpg'
    },

    {
        name:'ilx_ir2',
        frequency: 1064000,
        folder: './images/ilx_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/ilx/ir2.jpg'
    },

    {
        name:'jkl_rgb',
        frequency: 1066000,
        folder: './images/jkl_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/jkl/rgb.jpg'
    },

    {
        name:'jkl_rb',
        frequency: 1070000,
        folder: './images/jkl_rb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/jkl/rb.jpg'
    },

    {
        name:'jkl_ir2',
        frequency: 1072000,
        folder: './images/jkl_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/jkl/ir2.jpg'
    },

    {
        name:'lmk_rgb',
        frequency: 1074000,
        folder: './images/lmk_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/lmk/rgb.jpg'
    },

    {
        name:'lmk_rb',
        frequency: 1076000,
        folder: './images/lmk_rb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/lmk/rb.jpg'
    },

    {
        name:'lmk_ir2',
        frequency: 1078000,
        folder: './images/lmk_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/lmk/ir2.jpg'
    },


    {
        name:'pah_rgb',
        frequency: 1080000,
        folder: './images/pah_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/pah/rgb.jpg'
    },

    {
        name:'pah_rb',
        frequency: 1082000,
        folder: './images/pah_rb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/pah/rb.jpg'
    },

    {
        name:'pah_ir2',
        frequency: 1084000,
        folder: './images/pah_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/pah/ir2.jpg'
    },

    {
        name:'ind_rgb',
        frequency: 1086000,
        folder: './images/ind_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/ind/rgb.jpg'
    },

    {
        name:'ind_rb',
        frequency: 1088000,
        folder: './images/ind_rb/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/ind/rb.jpg'
    },

    {
        name:'ind_ir2',
        frequency: 1090000,
        folder: './images/ind_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/wfo/ind/ir2.jpg'
    },


//end mw_wfo                  
// wfo end
//sector start    

    {
        name:'central-plains_wv',
        frequency: 1092000,
        folder: './images/central-plains_wv/',
        url:'http://www.ssd.noaa.gov/goes/east/cp/wv.jpg'
    },

    {
        name:'central-plains_rgb',
        frequency: 1092000,
        folder: './images/central-plains_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/cp/rgb.jpg'
    },
    
    {
        name:'central-plains_rb',
        frequency: 1094000,
        folder: './images/central-plains_rb/',
        url:'http://www.ssd.noaa.gov/goes/east/cp/rb.jpg'
    },
    
    {
        name:'central-plains_ir2',
        frequency: 1096000,
        folder: './images/central-plains_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/cp/ir2.jpg'
    },
    
    {
        name:'mw_wv',
        frequency: 1098000,
        folder: './images/mw_wv/',
        url:'http://www.ssd.noaa.gov/goes/east/mw/wv.jpg'
    },

    {
        name:'mw_rgb',
        frequency: 1100000,
        folder: './images/mw_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/mw/rgb.jpg'
    },
    
    {
        name:'mw_rb',
        frequency: 1102000,
        folder: './images/mw_rb/',
        url:'http://www.ssd.noaa.gov/goes/east/mw/rb.jpg'
    },
    
    {
        name:'mw_ir2',
        frequency: 1104000,
        folder: './images/mw_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/mw/ir2.jpg'
    },
    
    {
        name:'sc_wv',
        frequency: 1106000,
        folder: './images/sc_wv/',
        url:'http://www.ssd.noaa.gov/goes/east/sc/wv.jpg'
    },

    {
        name:'sc_rgb',
        frequency: 1108000,
        folder: './images/sc_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/sc/rgb.jpg'
    },
    
    {
        name:'sc_rb',
        frequency: 1110000,
        folder: './images/sc_rb/',
        url:'http://www.ssd.noaa.gov/goes/east/sc/rb.jpg'
    },
    
    {
        name:'sc_ir2',
        frequency: 1112000,
        folder: './images/sc_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/sc/ir2.jpg'
    },
    
    {
        name:'np_wv',
        frequency: 1114000,
        folder: './images/np_wv/',
        url:'http://www.ssd.noaa.gov/goes/east/np/wv.jpg'
    },

    {
        name:'np_rgb',
        frequency: 1116000,
        folder: './images/np_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/np/rgb.jpg'
    },
    
    {
        name:'np_rb',
        frequency: 1118000,
        folder: './images/np_rb/',
        url:'http://www.ssd.noaa.gov/goes/east/np/rb.jpg'
    },
    
    {
        name:'np_ir2',
        frequency: 1120000,
        folder: './images/np_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/np/ir2.jpg'
    },
    
    {
        name:'ne_wv',
        frequency: 1122000,
        folder: './images/ne_wv/',
        url:'http://www.ssd.noaa.gov/goes/east/ne/wv.jpg'
    },

    {
        name:'ne_rgb',
        frequency: 1124000,
        folder: './images/ne_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/ne/rgb.jpg'
    },
    
    {
        name:'ne_rb',
        frequency: 1126000,
        folder: './images/ne_rb/',
        url:'http://www.ssd.noaa.gov/goes/east/ne/rb.jpg'
    },
    
    {
        name:'ne_ir2',
        frequency: 1128000,
        folder: './images/ne_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/ne/ir2.jpg'
    },
    
    {
        name:'se_wv',
        frequency: 1130000,
        folder: './images/se_wv/',
        url:'http://www.ssd.noaa.gov/goes/east/se/wv.jpg'
    },

    {
        name:'se_rgb',
        frequency: 1132000,
        folder: './images/se_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/se/rgb.jpg'
    },
    
    {
        name:'se_rb',
        frequency: 1134000,
        folder: './images/se_rb/',
        url:'http://www.ssd.noaa.gov/goes/east/se/rb.jpg'
    },
    
    {
        name:'se_ir2',
        frequency: 1136000,
        folder: './images/se_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/se/ir2.jpg'
    },    

    {
        name:'ma_wv',
        frequency: 1138000,
        folder: './images/ma_wv/',
        url:'http://www.ssd.noaa.gov/goes/east/ma/wv.jpg'
    },

    {
        name:'ma_rgb',
        frequency: 1140000,
        folder: './images/ma_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/ma/rgb.jpg'
    },
    
    {
        name:'ma_rb',
        frequency: 1142000,
        folder: './images/ma_rb/',
        url:'http://www.ssd.noaa.gov/goes/east/ma/rb.jpg'
    },
    
    {
        name:'ma_ir2',
        frequency: 1021000,
        folder: './images/ma_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/ma/ir2.jpg'
    },
    
    {
        name:'wc_wv',
        frequency: 1022000,
        folder: './images/wc_wv/',
        url:'http://www.ssd.noaa.gov/goes/east/wc/wv.jpg'
    },

    {
        name:'wc_rgb',
        frequency: 1023000,
        folder: './images/wc_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/wc/rgb.jpg'
    },
    
    {
        name:'wc_rb',
        frequency: 1024000,
        folder: './images/wc_rb/',
        url:'http://www.ssd.noaa.gov/goes/east/wc/rb.jpg'
    },
    
    {
        name:'wc_ir2',
        frequency: 1025000,
        folder: './images/wc_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/wc/ir2.jpg'
    },
    
    {
        name:'sw_wv',
        frequency: 1026000,
        folder: './images/sw_wv/',
        url:'http://www.ssd.noaa.gov/goes/east/sw/wv.jpg'
    },

    {
        name:'sw_rgb',
        frequency: 1027000,
        folder: './images/sw_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/sw/rgb.jpg'
    },
    
    {
        name:'sw_rb',
        frequency: 1028000,
        folder: './images/sw_rb/',
        url:'http://www.ssd.noaa.gov/goes/east/sw/rb.jpg'
    },
    
    {
        name:'sw_ir2',
        frequency: 1029000,
        folder: './images/sw_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/sw/ir2.jpg'
    },
    
    {
        name:'nw_wv',
        frequency: 1031000,
        folder: './images/nw_wv/',
        url:'http://www.ssd.noaa.gov/goes/east/nw/wv.jpg'
    },

    {
        name:'nw_rgb',
        frequency: 1032000,
        folder: './images/nw_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/nw/rgb.jpg'
    },
    
    {
        name:'nw_rb',
        frequency: 1033000,
        folder: './images/nw_rb/',
        url:'http://www.ssd.noaa.gov/goes/east/nw/rb.jpg'
    },
    
    {
        name:'nw_ir2',
        frequency: 1034000,
        folder: './images/nw_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/nw/ir2.jpg'
    },

    
    {
        name:'gl_wv',
        frequency: 1035000,
        folder: './images/gl_wv/',
        url:'http://www.ssd.noaa.gov/goes/east/gl/wv.jpg'
    },

    {
        name:'gl_rgb',
        frequency: 1036000,
        folder: './images/gl_rgb/',
        url:'http://www.ssd.noaa.gov/goes/east/gl/rgb.jpg'
    },
    
    {
        name:'gl_rb',
        frequency: 1037000,
        folder: './images/gl_rb/',
        url:'http://www.ssd.noaa.gov/goes/east/gl/rb.jpg'
    },
    
    {
        name:'gl_ir2',
        frequency: 1038000,
        folder: './images/gl_ir2/',
        url:'http://www.ssd.noaa.gov/goes/east/gl/ir2.jpg'
    },
// every 3 hours (10800 seconds) 
        
    {
        name:'GWVS',
        frequency: 10809000,
        folder: './images/GWVS/',
        url:'http://www.goes.noaa.gov/FULLDISK/GWVS.JPG'
    },

    {

        name:'GEVS',
        frequency: 10800000,
        folder: './images/GEVS/',
        url:'http://www.goes.noaa.gov/FULLDISK/GEVS.JPG'
    },
    
    {
        name:'GEIR',
        frequency: 10807000,
        folder: './images/GEIR/',
        url:'http://www.goes.noaa.gov/FULLDISK/GEIR.JPG'
    },

    {
        name:'MTVS',
        frequency: 3600000,
        folder: './images/MTVS/',
        url:'http://www.goes.noaa.gov/FULLDISK/MTVS.JPG'
    },

    {
        name:'GIVS',
        frequency: 10802000,
        folder: './images/GIVS/',
        url:'http://www.goes.noaa.gov/FULLDISK/GIVS.JPG'
    },

    {
        name:'METOP',
        frequency: 10805000,
        folder: './images/METOP/',
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
var colors = require('colors');

console.log("Reading files...".green);

var date = new Date();
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();

fs.readdir(params.folder, function (err, files) {

  if (err) throw err;

  console.log(h+':'+m+':'+s+' '+files.length + " files read..." + params.name.bold.red +" "+params.url.blue);

  var input, request;

  for(var i = 0; i < files.length; i++){
    var request = http.get(params['url'], function(response){
    var file = fs.createWriteStream(params.folder+params.name+"_"+[i]+'.'+extension);
        response.pipe(file);
        response.setTimeout(2000);
        file.on('close', function(){
            });
        });    
   };
  });
};

var scrape = function(page,cb){
    var message = "scraping -> "+page.url;
    var params = { //creates in the scope of scrape
        name : page.name,
        url : page.url,
        message : message,
        folder : page.folder
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
