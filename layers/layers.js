var wms_layers = [];

var format_manzanas_DT_0 = new ol.format.GeoJSON();
var features_manzanas_DT_0 = format_manzanas_DT_0.readFeatures(json_manzanas_DT_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_manzanas_DT_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_manzanas_DT_0.addFeatures(features_manzanas_DT_0);
var lyr_manzanas_DT_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_manzanas_DT_0, 
                style: style_manzanas_DT_0,
                popuplayertitle: 'manzanas_DT',
                interactive: true,
                title: '<img src="styles/legend/manzanas_DT_0.png" /> manzanas_DT'
            });
var format_MZA_AMM_1 = new ol.format.GeoJSON();
var features_MZA_AMM_1 = format_MZA_AMM_1.readFeatures(json_MZA_AMM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MZA_AMM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MZA_AMM_1.addFeatures(features_MZA_AMM_1);
var lyr_MZA_AMM_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MZA_AMM_1, 
                style: style_MZA_AMM_1,
                popuplayertitle: 'MZA_AMM',
                interactive: true,
                title: '<img src="styles/legend/MZA_AMM_1.png" /> MZA_AMM'
            });
var format_Ros_2 = new ol.format.GeoJSON();
var features_Ros_2 = format_Ros_2.readFeatures(json_Ros_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ros_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ros_2.addFeatures(features_Ros_2);
var lyr_Ros_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ros_2,
maxResolution:28004.466152261964,
 
                style: style_Ros_2,
                popuplayertitle: 'Ríos',
                interactive: true,
                title: '<img src="styles/legend/Ros_2.png" /> Ríos'
            });
var format_poligono_dt_3 = new ol.format.GeoJSON();
var features_poligono_dt_3 = format_poligono_dt_3.readFeatures(json_poligono_dt_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poligono_dt_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poligono_dt_3.addFeatures(features_poligono_dt_3);
var lyr_poligono_dt_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poligono_dt_3, 
                style: style_poligono_dt_3,
                popuplayertitle: 'poligono_dt',
                interactive: true,
                title: '<img src="styles/legend/poligono_dt_3.png" /> poligono_dt'
            });
var format_COL_DT_2023_4 = new ol.format.GeoJSON();
var features_COL_DT_2023_4 = format_COL_DT_2023_4.readFeatures(json_COL_DT_2023_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COL_DT_2023_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COL_DT_2023_4.addFeatures(features_COL_DT_2023_4);
var lyr_COL_DT_2023_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COL_DT_2023_4, 
                style: style_COL_DT_2023_4,
                popuplayertitle: 'COL_DT_2023',
                interactive: true,
    title: 'COL_DT_2023<br />\
    <img src="styles/legend/COL_DT_2023_4_0.png" /> ALTAVISTA<br />\
    <img src="styles/legend/COL_DT_2023_4_1.png" /> ANCON DEL HUAJUCO<br />\
    <img src="styles/legend/COL_DT_2023_4_2.png" /> BUENOS AIRES<br />\
    <img src="styles/legend/COL_DT_2023_4_3.png" /> CERRO DE LA SILLA<br />\
    <img src="styles/legend/COL_DT_2023_4_4.png" /> FRACCIONAMIENTO ESTADIO<br />\
    <img src="styles/legend/COL_DT_2023_4_5.png" /> FRACCIONAMIENTO FLORIDA<br />\
    <img src="styles/legend/COL_DT_2023_4_6.png" /> JARDINES DE ALTAVISTA<br />\
    <img src="styles/legend/COL_DT_2023_4_7.png" /> LADRILLERA<br />\
    <img src="styles/legend/COL_DT_2023_4_8.png" /> LTH<br />\
    <img src="styles/legend/COL_DT_2023_4_9.png" /> MEXICO<br />\
    <img src="styles/legend/COL_DT_2023_4_10.png" /> NARVARTE<br />\
    <img src="styles/legend/COL_DT_2023_4_11.png" /> NUEVA ESPANA<br />\
    <img src="styles/legend/COL_DT_2023_4_12.png" /> NUEVO SUR<br />\
    <img src="styles/legend/COL_DT_2023_4_13.png" /> PLAZA REVOLUCION<br />\
    <img src="styles/legend/COL_DT_2023_4_14.png" /> PRIMAVERA 1ER SECTOR<br />\
    <img src="styles/legend/COL_DT_2023_4_15.png" /> PRIMAVERA 3ER SECTOR<br />\
    <img src="styles/legend/COL_DT_2023_4_16.png" /> RESIDENCIAL FLORIDA<br />\
    <img src="styles/legend/COL_DT_2023_4_17.png" /> ROMA<br />\
    <img src="styles/legend/COL_DT_2023_4_18.png" /> SIN NOMBRE 34<br />\
    <img src="styles/legend/COL_DT_2023_4_19.png" /> SIN NOMBRE 35<br />\
    <img src="styles/legend/COL_DT_2023_4_20.png" /> TECNOLOGICO<br />\
    <img src="styles/legend/COL_DT_2023_4_21.png" /> VALLE PRIMAVERA<br />\
    <img src="styles/legend/COL_DT_2023_4_22.png" /> VILLA ESTADIO<br />\
    <img src="styles/legend/COL_DT_2023_4_23.png" /> VILLA FLORIDA<br />' });
var format_AV_DT_5 = new ol.format.GeoJSON();
var features_AV_DT_5 = format_AV_DT_5.readFeatures(json_AV_DT_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AV_DT_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AV_DT_5.addFeatures(features_AV_DT_5);
var lyr_AV_DT_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AV_DT_5, 
                style: style_AV_DT_5,
                popuplayertitle: 'AV_DT',
                interactive: true,
                title: '<img src="styles/legend/AV_DT_5.png" /> AV_DT'
            });
var format_parquesdebolsillo_dt_6 = new ol.format.GeoJSON();
var features_parquesdebolsillo_dt_6 = format_parquesdebolsillo_dt_6.readFeatures(json_parquesdebolsillo_dt_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parquesdebolsillo_dt_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parquesdebolsillo_dt_6.addFeatures(features_parquesdebolsillo_dt_6);
var lyr_parquesdebolsillo_dt_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parquesdebolsillo_dt_6, 
                style: style_parquesdebolsillo_dt_6,
                popuplayertitle: 'parques de bolsillo_dt',
                interactive: true,
                title: '<img src="styles/legend/parquesdebolsillo_dt_6.png" /> parques de bolsillo_dt'
            });
var format_eje_vial_7 = new ol.format.GeoJSON();
var features_eje_vial_7 = format_eje_vial_7.readFeatures(json_eje_vial_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_eje_vial_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_eje_vial_7.addFeatures(features_eje_vial_7);
var lyr_eje_vial_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_eje_vial_7, 
                style: style_eje_vial_7,
                popuplayertitle: 'eje_vial',
                interactive: true,
                title: 'eje_vial'
            });
var group_MapaBase = new ol.layer.Group({
                                layers: [lyr_manzanas_DT_0,lyr_MZA_AMM_1,lyr_Ros_2,lyr_poligono_dt_3,lyr_COL_DT_2023_4,lyr_AV_DT_5,lyr_parquesdebolsillo_dt_6,lyr_eje_vial_7,],
                                fold: 'open',
                                title: 'Mapa Base'});

lyr_manzanas_DT_0.setVisible(true);lyr_MZA_AMM_1.setVisible(true);lyr_Ros_2.setVisible(true);lyr_poligono_dt_3.setVisible(true);lyr_COL_DT_2023_4.setVisible(true);lyr_AV_DT_5.setVisible(true);lyr_parquesdebolsillo_dt_6.setVisible(true);lyr_eje_vial_7.setVisible(true);
var layersList = [group_MapaBase];
lyr_manzanas_DT_0.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'POB1': 'POB1', 'POB2': 'POB2', 'POB2_R': 'POB2_R', 'POB3': 'POB3', 'POB3_R': 'POB3_R', 'POB4': 'POB4', 'POB4_R': 'POB4_R', 'POB5': 'POB5', 'POB5_R': 'POB5_R', 'POB6': 'POB6', 'POB6_R': 'POB6_R', 'POB7': 'POB7', 'POB7_R': 'POB7_R', 'POB8': 'POB8', 'POB8_R': 'POB8_R', 'POB9': 'POB9', 'POB9_R': 'POB9_R', 'POB10': 'POB10', 'POB10_R': 'POB10_R', 'POB11': 'POB11', 'POB11_R': 'POB11_R', 'POB12': 'POB12', 'POB12_R': 'POB12_R', 'POB13': 'POB13', 'POB13_R': 'POB13_R', 'POB14': 'POB14', 'POB14_R': 'POB14_R', 'POB15': 'POB15', 'POB15_R': 'POB15_R', 'POB16': 'POB16', 'POB16_R': 'POB16_R', 'POB17': 'POB17', 'POB17_R': 'POB17_R', 'POB18': 'POB18', 'POB18_R': 'POB18_R', 'POB19': 'POB19', 'POB19_R': 'POB19_R', 'POB20': 'POB20', 'POB20_R': 'POB20_R', 'POB21': 'POB21', 'POB21_R': 'POB21_R', 'POB22': 'POB22', 'POB22_R': 'POB22_R', 'POB23': 'POB23', 'POB23_R': 'POB23_R', 'POB24': 'POB24', 'POB24_R': 'POB24_R', 'POB25': 'POB25', 'POB25_R': 'POB25_R', 'POB26_R': 'POB26_R', 'POB27_R': 'POB27_R', 'POB28_R': 'POB28_R', 'POB29_R': 'POB29_R', 'POB30_R': 'POB30_R', 'POB31': 'POB31', 'POB31_R': 'POB31_R', 'POB32': 'POB32', 'POB32_R': 'POB32_R', 'POB33': 'POB33', 'POB33_R': 'POB33_R', 'POB34': 'POB34', 'POB34_R': 'POB34_R', 'POB35': 'POB35', 'POB35_R': 'POB35_R', 'POB36': 'POB36', 'POB36_R': 'POB36_R', 'POB37': 'POB37', 'POB37_R': 'POB37_R', 'POB38': 'POB38', 'POB38_R': 'POB38_R', 'POB39': 'POB39', 'POB39_R': 'POB39_R', 'POB40': 'POB40', 'POB40_R': 'POB40_R', 'POB41': 'POB41', 'POB41_R': 'POB41_R', 'POB42': 'POB42', 'POB42_R': 'POB42_R', 'POB43': 'POB43', 'POB43_R': 'POB43_R', 'POB44': 'POB44', 'POB44_R': 'POB44_R', 'POB45': 'POB45', 'POB45_R': 'POB45_R', 'POB46': 'POB46', 'POB46_R': 'POB46_R', 'POB47': 'POB47', 'POB47_R': 'POB47_R', 'POB48': 'POB48', 'POB48_R': 'POB48_R', 'POB49': 'POB49', 'POB49_R': 'POB49_R', 'POB50': 'POB50', 'POB50_R': 'POB50_R', 'POB51': 'POB51', 'POB51_R': 'POB51_R', 'POB52': 'POB52', 'POB52_R': 'POB52_R', 'POB53': 'POB53', 'POB53_R': 'POB53_R', 'POB54': 'POB54', 'POB54_R': 'POB54_R', 'POB55': 'POB55', 'POB55_R': 'POB55_R', 'POB56': 'POB56', 'POB56_R': 'POB56_R', 'POB57': 'POB57', 'POB57_R': 'POB57_R', 'POB58': 'POB58', 'POB58_R': 'POB58_R', 'POB59': 'POB59', 'POB59_R': 'POB59_R', 'POB60': 'POB60', 'POB60_R': 'POB60_R', 'POB61': 'POB61', 'POB61_R': 'POB61_R', 'POB62': 'POB62', 'POB62_R': 'POB62_R', 'POB63': 'POB63', 'POB63_R': 'POB63_R', 'POB64': 'POB64', 'POB64_R': 'POB64_R', 'POB65': 'POB65', 'POB65_R': 'POB65_R', 'POB66': 'POB66', 'POB66_R': 'POB66_R', 'POB67': 'POB67', 'POB67_R': 'POB67_R', 'POB68': 'POB68', 'POB68_R': 'POB68_R', 'POB69': 'POB69', 'POB69_R': 'POB69_R', 'POB70': 'POB70', 'POB70_R': 'POB70_R', 'POB71': 'POB71', 'POB71_R': 'POB71_R', 'POB72': 'POB72', 'POB72_R': 'POB72_R', 'POB73': 'POB73', 'POB73_R': 'POB73_R', 'POB74': 'POB74', 'POB74_R': 'POB74_R', 'POB75': 'POB75', 'POB75_R': 'POB75_R', 'POB76': 'POB76', 'POB76_R': 'POB76_R', 'POB77': 'POB77', 'POB77_R': 'POB77_R', 'POB78': 'POB78', 'POB78_R': 'POB78_R', 'POB79': 'POB79', 'POB79_R': 'POB79_R', 'POB80': 'POB80', 'POB80_R': 'POB80_R', 'POB81': 'POB81', 'POB81_R': 'POB81_R', 'OID_1': 'OID_1', });
lyr_MZA_AMM_1.set('fieldAliases', {'FID': 'FID', });
lyr_Ros_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'width': 'width', 'name': 'name', });
lyr_poligono_dt_3.set('fieldAliases', {'id': 'id', 'AREA': 'AREA', });
lyr_COL_DT_2023_4.set('fieldAliases', {'ID': 'ID', 'ENTIDAD': 'ENTIDAD', 'MUNICIPIO': 'MUNICIPIO', 'NOMBRE': 'NOMBRE', 'CLASIFICAC': 'CLASIFICAC', 'CP': 'CP', 'OTROS_CP': 'OTROS_CP', 'CONTROL': 'CONTROL', 'GEOMETRY1_': 'GEOMETRY1_', 'OID_1': 'OID_1', 'AREA': 'AREA', 'AREA M2': 'AREA M2', });
lyr_AV_DT_5.set('fieldAliases', {'FID_Munici': 'FID_Munici', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOM_MUN': 'NOM_MUN', 'Area': 'Area', 'NOM_ABREV': 'NOM_ABREV', 'FID_AreasV': 'FID_AreasV', 'Uso2019': 'Uso2019', 'Nombre': 'Nombre', 'ParqueCat': 'ParqueCat', 'ParqueID': 'ParqueID', 'area_2': 'area_2', 'perimeter': 'perimeter', });
lyr_parquesdebolsillo_dt_6.set('fieldAliases', {'FID_Munici': 'FID_Munici', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOM_MUN': 'NOM_MUN', 'Area': 'Area', 'NOM_ABREV': 'NOM_ABREV', 'FID_AreasV': 'FID_AreasV', 'Uso2019': 'Uso2019', 'Nombre': 'Nombre', 'ParqueCat': 'ParqueCat', 'ParqueID': 'ParqueID', 'area_2': 'area_2', 'perimeter': 'perimeter', });
lyr_eje_vial_7.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVEVIAL': 'CVEVIAL', 'NOMVIAL': 'NOMVIAL', 'TIPOVIAL': 'TIPOVIAL', 'SENTIDO': 'SENTIDO', 'OID': 'OID', });
lyr_manzanas_DT_0.set('fieldImages', {'CVEGEO': 'TextEdit', 'POB1': 'TextEdit', 'POB2': 'TextEdit', 'POB2_R': 'TextEdit', 'POB3': 'TextEdit', 'POB3_R': 'TextEdit', 'POB4': 'TextEdit', 'POB4_R': 'TextEdit', 'POB5': 'TextEdit', 'POB5_R': 'TextEdit', 'POB6': 'TextEdit', 'POB6_R': 'TextEdit', 'POB7': 'TextEdit', 'POB7_R': 'TextEdit', 'POB8': 'TextEdit', 'POB8_R': 'TextEdit', 'POB9': 'TextEdit', 'POB9_R': 'TextEdit', 'POB10': 'TextEdit', 'POB10_R': 'TextEdit', 'POB11': 'TextEdit', 'POB11_R': 'TextEdit', 'POB12': 'TextEdit', 'POB12_R': 'TextEdit', 'POB13': 'TextEdit', 'POB13_R': 'TextEdit', 'POB14': 'TextEdit', 'POB14_R': 'TextEdit', 'POB15': 'TextEdit', 'POB15_R': 'TextEdit', 'POB16': 'TextEdit', 'POB16_R': 'TextEdit', 'POB17': 'TextEdit', 'POB17_R': 'TextEdit', 'POB18': 'TextEdit', 'POB18_R': 'TextEdit', 'POB19': 'TextEdit', 'POB19_R': 'TextEdit', 'POB20': 'TextEdit', 'POB20_R': 'TextEdit', 'POB21': 'TextEdit', 'POB21_R': 'TextEdit', 'POB22': 'TextEdit', 'POB22_R': 'TextEdit', 'POB23': 'TextEdit', 'POB23_R': 'TextEdit', 'POB24': 'TextEdit', 'POB24_R': 'TextEdit', 'POB25': 'TextEdit', 'POB25_R': 'TextEdit', 'POB26_R': 'TextEdit', 'POB27_R': 'TextEdit', 'POB28_R': 'TextEdit', 'POB29_R': 'TextEdit', 'POB30_R': 'TextEdit', 'POB31': 'TextEdit', 'POB31_R': 'TextEdit', 'POB32': 'TextEdit', 'POB32_R': 'TextEdit', 'POB33': 'TextEdit', 'POB33_R': 'TextEdit', 'POB34': 'TextEdit', 'POB34_R': 'TextEdit', 'POB35': 'TextEdit', 'POB35_R': 'TextEdit', 'POB36': 'TextEdit', 'POB36_R': 'TextEdit', 'POB37': 'TextEdit', 'POB37_R': 'TextEdit', 'POB38': 'TextEdit', 'POB38_R': 'TextEdit', 'POB39': 'TextEdit', 'POB39_R': 'TextEdit', 'POB40': 'TextEdit', 'POB40_R': 'TextEdit', 'POB41': 'TextEdit', 'POB41_R': 'TextEdit', 'POB42': 'TextEdit', 'POB42_R': 'TextEdit', 'POB43': 'TextEdit', 'POB43_R': 'TextEdit', 'POB44': 'TextEdit', 'POB44_R': 'TextEdit', 'POB45': 'TextEdit', 'POB45_R': 'TextEdit', 'POB46': 'TextEdit', 'POB46_R': 'TextEdit', 'POB47': 'TextEdit', 'POB47_R': 'TextEdit', 'POB48': 'TextEdit', 'POB48_R': 'TextEdit', 'POB49': 'TextEdit', 'POB49_R': 'TextEdit', 'POB50': 'TextEdit', 'POB50_R': 'TextEdit', 'POB51': 'TextEdit', 'POB51_R': 'TextEdit', 'POB52': 'TextEdit', 'POB52_R': 'TextEdit', 'POB53': 'TextEdit', 'POB53_R': 'TextEdit', 'POB54': 'TextEdit', 'POB54_R': 'TextEdit', 'POB55': 'TextEdit', 'POB55_R': 'TextEdit', 'POB56': 'TextEdit', 'POB56_R': 'TextEdit', 'POB57': 'TextEdit', 'POB57_R': 'TextEdit', 'POB58': 'TextEdit', 'POB58_R': 'TextEdit', 'POB59': 'TextEdit', 'POB59_R': 'TextEdit', 'POB60': 'TextEdit', 'POB60_R': 'TextEdit', 'POB61': 'TextEdit', 'POB61_R': 'TextEdit', 'POB62': 'TextEdit', 'POB62_R': 'TextEdit', 'POB63': 'TextEdit', 'POB63_R': 'TextEdit', 'POB64': 'TextEdit', 'POB64_R': 'TextEdit', 'POB65': 'TextEdit', 'POB65_R': 'TextEdit', 'POB66': 'TextEdit', 'POB66_R': 'TextEdit', 'POB67': 'TextEdit', 'POB67_R': 'TextEdit', 'POB68': 'TextEdit', 'POB68_R': 'TextEdit', 'POB69': 'TextEdit', 'POB69_R': 'TextEdit', 'POB70': 'TextEdit', 'POB70_R': 'TextEdit', 'POB71': 'TextEdit', 'POB71_R': 'TextEdit', 'POB72': 'TextEdit', 'POB72_R': 'TextEdit', 'POB73': 'TextEdit', 'POB73_R': 'TextEdit', 'POB74': 'TextEdit', 'POB74_R': 'TextEdit', 'POB75': 'TextEdit', 'POB75_R': 'TextEdit', 'POB76': 'TextEdit', 'POB76_R': 'TextEdit', 'POB77': 'TextEdit', 'POB77_R': 'TextEdit', 'POB78': 'TextEdit', 'POB78_R': 'TextEdit', 'POB79': 'TextEdit', 'POB79_R': 'TextEdit', 'POB80': 'TextEdit', 'POB80_R': 'TextEdit', 'POB81': 'TextEdit', 'POB81_R': 'TextEdit', 'OID_1': '', });
lyr_MZA_AMM_1.set('fieldImages', {'FID': 'TextEdit', });
lyr_Ros_2.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'TextEdit', 'fclass': 'TextEdit', 'width': 'TextEdit', 'name': 'TextEdit', });
lyr_poligono_dt_3.set('fieldImages', {'id': 'TextEdit', 'AREA': '', });
lyr_COL_DT_2023_4.set('fieldImages', {'ID': 'TextEdit', 'ENTIDAD': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'NOMBRE': 'TextEdit', 'CLASIFICAC': 'TextEdit', 'CP': 'TextEdit', 'OTROS_CP': 'TextEdit', 'CONTROL': 'TextEdit', 'GEOMETRY1_': 'TextEdit', 'OID_1': 'Range', 'AREA': 'TextEdit', 'AREA M2': '', });
lyr_AV_DT_5.set('fieldImages', {'FID_Munici': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'Area': 'TextEdit', 'NOM_ABREV': 'TextEdit', 'FID_AreasV': 'TextEdit', 'Uso2019': 'TextEdit', 'Nombre': 'TextEdit', 'ParqueCat': 'TextEdit', 'ParqueID': 'TextEdit', 'area_2': 'TextEdit', 'perimeter': 'TextEdit', });
lyr_parquesdebolsillo_dt_6.set('fieldImages', {'FID_Munici': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'Area': 'TextEdit', 'NOM_ABREV': 'TextEdit', 'FID_AreasV': 'TextEdit', 'Uso2019': 'TextEdit', 'Nombre': 'TextEdit', 'ParqueCat': 'TextEdit', 'ParqueID': 'TextEdit', 'area_2': 'TextEdit', 'perimeter': 'TextEdit', });
lyr_eje_vial_7.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVEVIAL': 'TextEdit', 'NOMVIAL': 'TextEdit', 'TIPOVIAL': 'TextEdit', 'SENTIDO': 'TextEdit', 'OID': 'Range', });
lyr_manzanas_DT_0.set('fieldLabels', {'CVEGEO': 'no label', 'POB1': 'no label', 'POB2': 'no label', 'POB2_R': 'no label', 'POB3': 'no label', 'POB3_R': 'no label', 'POB4': 'no label', 'POB4_R': 'no label', 'POB5': 'no label', 'POB5_R': 'no label', 'POB6': 'no label', 'POB6_R': 'no label', 'POB7': 'no label', 'POB7_R': 'no label', 'POB8': 'no label', 'POB8_R': 'no label', 'POB9': 'no label', 'POB9_R': 'no label', 'POB10': 'no label', 'POB10_R': 'no label', 'POB11': 'no label', 'POB11_R': 'no label', 'POB12': 'no label', 'POB12_R': 'no label', 'POB13': 'no label', 'POB13_R': 'no label', 'POB14': 'no label', 'POB14_R': 'no label', 'POB15': 'no label', 'POB15_R': 'no label', 'POB16': 'no label', 'POB16_R': 'no label', 'POB17': 'no label', 'POB17_R': 'no label', 'POB18': 'no label', 'POB18_R': 'no label', 'POB19': 'no label', 'POB19_R': 'no label', 'POB20': 'no label', 'POB20_R': 'no label', 'POB21': 'no label', 'POB21_R': 'no label', 'POB22': 'no label', 'POB22_R': 'no label', 'POB23': 'no label', 'POB23_R': 'no label', 'POB24': 'no label', 'POB24_R': 'no label', 'POB25': 'no label', 'POB25_R': 'no label', 'POB26_R': 'no label', 'POB27_R': 'no label', 'POB28_R': 'no label', 'POB29_R': 'no label', 'POB30_R': 'no label', 'POB31': 'no label', 'POB31_R': 'no label', 'POB32': 'no label', 'POB32_R': 'no label', 'POB33': 'no label', 'POB33_R': 'no label', 'POB34': 'no label', 'POB34_R': 'no label', 'POB35': 'no label', 'POB35_R': 'no label', 'POB36': 'no label', 'POB36_R': 'no label', 'POB37': 'no label', 'POB37_R': 'no label', 'POB38': 'no label', 'POB38_R': 'no label', 'POB39': 'no label', 'POB39_R': 'no label', 'POB40': 'no label', 'POB40_R': 'no label', 'POB41': 'no label', 'POB41_R': 'no label', 'POB42': 'no label', 'POB42_R': 'no label', 'POB43': 'no label', 'POB43_R': 'no label', 'POB44': 'no label', 'POB44_R': 'no label', 'POB45': 'no label', 'POB45_R': 'no label', 'POB46': 'no label', 'POB46_R': 'no label', 'POB47': 'no label', 'POB47_R': 'no label', 'POB48': 'no label', 'POB48_R': 'no label', 'POB49': 'no label', 'POB49_R': 'no label', 'POB50': 'no label', 'POB50_R': 'no label', 'POB51': 'no label', 'POB51_R': 'no label', 'POB52': 'no label', 'POB52_R': 'no label', 'POB53': 'no label', 'POB53_R': 'no label', 'POB54': 'no label', 'POB54_R': 'no label', 'POB55': 'no label', 'POB55_R': 'no label', 'POB56': 'no label', 'POB56_R': 'no label', 'POB57': 'no label', 'POB57_R': 'no label', 'POB58': 'no label', 'POB58_R': 'no label', 'POB59': 'no label', 'POB59_R': 'no label', 'POB60': 'no label', 'POB60_R': 'no label', 'POB61': 'no label', 'POB61_R': 'no label', 'POB62': 'no label', 'POB62_R': 'no label', 'POB63': 'no label', 'POB63_R': 'no label', 'POB64': 'no label', 'POB64_R': 'no label', 'POB65': 'no label', 'POB65_R': 'no label', 'POB66': 'no label', 'POB66_R': 'no label', 'POB67': 'no label', 'POB67_R': 'no label', 'POB68': 'no label', 'POB68_R': 'no label', 'POB69': 'no label', 'POB69_R': 'no label', 'POB70': 'no label', 'POB70_R': 'no label', 'POB71': 'no label', 'POB71_R': 'no label', 'POB72': 'no label', 'POB72_R': 'no label', 'POB73': 'no label', 'POB73_R': 'no label', 'POB74': 'no label', 'POB74_R': 'no label', 'POB75': 'no label', 'POB75_R': 'no label', 'POB76': 'no label', 'POB76_R': 'no label', 'POB77': 'no label', 'POB77_R': 'no label', 'POB78': 'no label', 'POB78_R': 'no label', 'POB79': 'no label', 'POB79_R': 'no label', 'POB80': 'no label', 'POB80_R': 'no label', 'POB81': 'no label', 'POB81_R': 'no label', 'OID_1': 'no label', });
lyr_MZA_AMM_1.set('fieldLabels', {'FID': 'no label', });
lyr_Ros_2.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'width': 'no label', 'name': 'no label', });
lyr_poligono_dt_3.set('fieldLabels', {'id': 'no label', 'AREA': 'no label', });
lyr_COL_DT_2023_4.set('fieldLabels', {'ID': 'no label', 'ENTIDAD': 'no label', 'MUNICIPIO': 'no label', 'NOMBRE': 'no label', 'CLASIFICAC': 'no label', 'CP': 'no label', 'OTROS_CP': 'no label', 'CONTROL': 'no label', 'GEOMETRY1_': 'no label', 'OID_1': 'no label', 'AREA': 'no label', 'AREA M2': 'no label', });
lyr_AV_DT_5.set('fieldLabels', {'FID_Munici': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOM_MUN': 'no label', 'Area': 'no label', 'NOM_ABREV': 'no label', 'FID_AreasV': 'no label', 'Uso2019': 'no label', 'Nombre': 'no label', 'ParqueCat': 'no label', 'ParqueID': 'no label', 'area_2': 'no label', 'perimeter': 'no label', });
lyr_parquesdebolsillo_dt_6.set('fieldLabels', {'FID_Munici': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOM_MUN': 'no label', 'Area': 'no label', 'NOM_ABREV': 'no label', 'FID_AreasV': 'no label', 'Uso2019': 'no label', 'Nombre': 'no label', 'ParqueCat': 'no label', 'ParqueID': 'no label', 'area_2': 'no label', 'perimeter': 'no label', });
lyr_eje_vial_7.set('fieldLabels', {'CVEGEO': 'no label', 'CVEVIAL': 'no label', 'NOMVIAL': 'no label', 'TIPOVIAL': 'no label', 'SENTIDO': 'no label', 'OID': 'no label', });
lyr_eje_vial_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});