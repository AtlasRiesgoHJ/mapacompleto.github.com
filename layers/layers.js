var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'GoogleHybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Incendios2020_3 = new ol.format.GeoJSON();
var features_Incendios2020_3 = format_Incendios2020_3.readFeatures(json_Incendios2020_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incendios2020_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incendios2020_3.addFeatures(features_Incendios2020_3);
var lyr_Incendios2020_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Incendios2020_3, 
                style: style_Incendios2020_3,
                interactive: true,
                title: '<img src="styles/legend/Incendios2020_3.png" /> * Incendios 2020'
            });
var format_SUSCEPTIBILIDADCementerios_4 = new ol.format.GeoJSON();
var features_SUSCEPTIBILIDADCementerios_4 = format_SUSCEPTIBILIDADCementerios_4.readFeatures(json_SUSCEPTIBILIDADCementerios_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUSCEPTIBILIDADCementerios_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUSCEPTIBILIDADCementerios_4.addFeatures(features_SUSCEPTIBILIDADCementerios_4);
var lyr_SUSCEPTIBILIDADCementerios_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUSCEPTIBILIDADCementerios_4, 
                style: style_SUSCEPTIBILIDADCementerios_4,
                interactive: true,
                title: '<img src="styles/legend/SUSCEPTIBILIDADCementerios_4.png" /> SUSCEPTIBILIDAD / Cementerios'
            });
var format_SUSCEPTIBILIDADEscuelas_5 = new ol.format.GeoJSON();
var features_SUSCEPTIBILIDADEscuelas_5 = format_SUSCEPTIBILIDADEscuelas_5.readFeatures(json_SUSCEPTIBILIDADEscuelas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUSCEPTIBILIDADEscuelas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUSCEPTIBILIDADEscuelas_5.addFeatures(features_SUSCEPTIBILIDADEscuelas_5);
var lyr_SUSCEPTIBILIDADEscuelas_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUSCEPTIBILIDADEscuelas_5, 
                style: style_SUSCEPTIBILIDADEscuelas_5,
                interactive: true,
                title: '<img src="styles/legend/SUSCEPTIBILIDADEscuelas_5.png" /> SUSCEPTIBILIDAD / Escuelas  '
            });
var format_SUSCEPTIBILIDADMercado_6 = new ol.format.GeoJSON();
var features_SUSCEPTIBILIDADMercado_6 = format_SUSCEPTIBILIDADMercado_6.readFeatures(json_SUSCEPTIBILIDADMercado_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUSCEPTIBILIDADMercado_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUSCEPTIBILIDADMercado_6.addFeatures(features_SUSCEPTIBILIDADMercado_6);
var lyr_SUSCEPTIBILIDADMercado_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUSCEPTIBILIDADMercado_6, 
                style: style_SUSCEPTIBILIDADMercado_6,
                interactive: true,
                title: '<img src="styles/legend/SUSCEPTIBILIDADMercado_6.png" /> SUSCEPTIBILIDAD / Mercado'
            });
var format_SUSCEPTIBILIDADParquesdeesparcimiento_7 = new ol.format.GeoJSON();
var features_SUSCEPTIBILIDADParquesdeesparcimiento_7 = format_SUSCEPTIBILIDADParquesdeesparcimiento_7.readFeatures(json_SUSCEPTIBILIDADParquesdeesparcimiento_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUSCEPTIBILIDADParquesdeesparcimiento_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUSCEPTIBILIDADParquesdeesparcimiento_7.addFeatures(features_SUSCEPTIBILIDADParquesdeesparcimiento_7);
var lyr_SUSCEPTIBILIDADParquesdeesparcimiento_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUSCEPTIBILIDADParquesdeesparcimiento_7, 
                style: style_SUSCEPTIBILIDADParquesdeesparcimiento_7,
                interactive: true,
                title: '<img src="styles/legend/SUSCEPTIBILIDADParquesdeesparcimiento_7.png" /> SUSCEPTIBILIDAD / Parques de esparcimiento'
            });
var format_SUSCEPTIBILIDADPlantadeaguasresiduales_8 = new ol.format.GeoJSON();
var features_SUSCEPTIBILIDADPlantadeaguasresiduales_8 = format_SUSCEPTIBILIDADPlantadeaguasresiduales_8.readFeatures(json_SUSCEPTIBILIDADPlantadeaguasresiduales_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUSCEPTIBILIDADPlantadeaguasresiduales_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUSCEPTIBILIDADPlantadeaguasresiduales_8.addFeatures(features_SUSCEPTIBILIDADPlantadeaguasresiduales_8);
var lyr_SUSCEPTIBILIDADPlantadeaguasresiduales_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUSCEPTIBILIDADPlantadeaguasresiduales_8, 
                style: style_SUSCEPTIBILIDADPlantadeaguasresiduales_8,
                interactive: true,
                title: '<img src="styles/legend/SUSCEPTIBILIDADPlantadeaguasresiduales_8.png" /> SUSCEPTIBILIDAD / Planta de aguas residuales'
            });
var format_HISTRICOS2021Controlabejas_9 = new ol.format.GeoJSON();
var features_HISTRICOS2021Controlabejas_9 = format_HISTRICOS2021Controlabejas_9.readFeatures(json_HISTRICOS2021Controlabejas_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2021Controlabejas_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2021Controlabejas_9.addFeatures(features_HISTRICOS2021Controlabejas_9);
var lyr_HISTRICOS2021Controlabejas_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2021Controlabejas_9, 
                style: style_HISTRICOS2021Controlabejas_9,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2021Controlabejas_9.png" /> HISTÓRICOS 2021 / Control abejas '
            });
var format_HISTRICOS2021Controldefauna_10 = new ol.format.GeoJSON();
var features_HISTRICOS2021Controldefauna_10 = format_HISTRICOS2021Controldefauna_10.readFeatures(json_HISTRICOS2021Controldefauna_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2021Controldefauna_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2021Controldefauna_10.addFeatures(features_HISTRICOS2021Controldefauna_10);
var lyr_HISTRICOS2021Controldefauna_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2021Controldefauna_10, 
                style: style_HISTRICOS2021Controldefauna_10,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2021Controldefauna_10.png" /> HISTÓRICOS 2021 / Control de fauna'
            });
var format_HISTRICOS2018Controlanimal_11 = new ol.format.GeoJSON();
var features_HISTRICOS2018Controlanimal_11 = format_HISTRICOS2018Controlanimal_11.readFeatures(json_HISTRICOS2018Controlanimal_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2018Controlanimal_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2018Controlanimal_11.addFeatures(features_HISTRICOS2018Controlanimal_11);
var lyr_HISTRICOS2018Controlanimal_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2018Controlanimal_11, 
                style: style_HISTRICOS2018Controlanimal_11,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2018Controlanimal_11.png" /> HISTÓRICOS 2018 / Control animal '
            });
var format_HISTRICOS2018Controlavejas_12 = new ol.format.GeoJSON();
var features_HISTRICOS2018Controlavejas_12 = format_HISTRICOS2018Controlavejas_12.readFeatures(json_HISTRICOS2018Controlavejas_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2018Controlavejas_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2018Controlavejas_12.addFeatures(features_HISTRICOS2018Controlavejas_12);
var lyr_HISTRICOS2018Controlavejas_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2018Controlavejas_12, 
                style: style_HISTRICOS2018Controlavejas_12,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2018Controlavejas_12.png" /> HISTÓRICOS 2018 / Control avejas'
            });
var format_HISTRICOS2018Rescateanimal_13 = new ol.format.GeoJSON();
var features_HISTRICOS2018Rescateanimal_13 = format_HISTRICOS2018Rescateanimal_13.readFeatures(json_HISTRICOS2018Rescateanimal_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2018Rescateanimal_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2018Rescateanimal_13.addFeatures(features_HISTRICOS2018Rescateanimal_13);
var lyr_HISTRICOS2018Rescateanimal_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2018Rescateanimal_13, 
                style: style_HISTRICOS2018Rescateanimal_13,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2018Rescateanimal_13.png" /> HISTÓRICOS 2018 / Rescate animal '
            });
var format_HISTRICOS2018RescateyCapturadeanimaldomstico_14 = new ol.format.GeoJSON();
var features_HISTRICOS2018RescateyCapturadeanimaldomstico_14 = format_HISTRICOS2018RescateyCapturadeanimaldomstico_14.readFeatures(json_HISTRICOS2018RescateyCapturadeanimaldomstico_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2018RescateyCapturadeanimaldomstico_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2018RescateyCapturadeanimaldomstico_14.addFeatures(features_HISTRICOS2018RescateyCapturadeanimaldomstico_14);
var lyr_HISTRICOS2018RescateyCapturadeanimaldomstico_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2018RescateyCapturadeanimaldomstico_14, 
                style: style_HISTRICOS2018RescateyCapturadeanimaldomstico_14,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2018RescateyCapturadeanimaldomstico_14.png" /> HISTÓRICOS 2018 / Rescate y Captura de animal doméstico'
            });
var format_HISTRICOS2018RetirodeAbejas_15 = new ol.format.GeoJSON();
var features_HISTRICOS2018RetirodeAbejas_15 = format_HISTRICOS2018RetirodeAbejas_15.readFeatures(json_HISTRICOS2018RetirodeAbejas_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2018RetirodeAbejas_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2018RetirodeAbejas_15.addFeatures(features_HISTRICOS2018RetirodeAbejas_15);
var lyr_HISTRICOS2018RetirodeAbejas_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2018RetirodeAbejas_15, 
                style: style_HISTRICOS2018RetirodeAbejas_15,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2018RetirodeAbejas_15.png" /> HISTÓRICOS 2018 / Retiro de Abejas'
            });
var format_ESCENARIOSRadiacintrmicafugadegasFlamaAzul_16 = new ol.format.GeoJSON();
var features_ESCENARIOSRadiacintrmicafugadegasFlamaAzul_16 = format_ESCENARIOSRadiacintrmicafugadegasFlamaAzul_16.readFeatures(json_ESCENARIOSRadiacintrmicafugadegasFlamaAzul_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESCENARIOSRadiacintrmicafugadegasFlamaAzul_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESCENARIOSRadiacintrmicafugadegasFlamaAzul_16.addFeatures(features_ESCENARIOSRadiacintrmicafugadegasFlamaAzul_16);
var lyr_ESCENARIOSRadiacintrmicafugadegasFlamaAzul_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ESCENARIOSRadiacintrmicafugadegasFlamaAzul_16, 
                style: style_ESCENARIOSRadiacintrmicafugadegasFlamaAzul_16,
                interactive: true,
                title: '<img src="styles/legend/ESCENARIOSRadiacintrmicafugadegasFlamaAzul_16.png" /> ESCENARIOS / Radiación térmica fuga de gas Flama Azul'
            });
var format_SUSCEPTIBILIDADPolvorines_17 = new ol.format.GeoJSON();
var features_SUSCEPTIBILIDADPolvorines_17 = format_SUSCEPTIBILIDADPolvorines_17.readFeatures(json_SUSCEPTIBILIDADPolvorines_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUSCEPTIBILIDADPolvorines_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUSCEPTIBILIDADPolvorines_17.addFeatures(features_SUSCEPTIBILIDADPolvorines_17);
var lyr_SUSCEPTIBILIDADPolvorines_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUSCEPTIBILIDADPolvorines_17, 
                style: style_SUSCEPTIBILIDADPolvorines_17,
                interactive: true,
                title: '<img src="styles/legend/SUSCEPTIBILIDADPolvorines_17.png" /> SUSCEPTIBILIDAD / Polvorines'
            });
var format_SUSCEPTIBILIDADRosticeras_18 = new ol.format.GeoJSON();
var features_SUSCEPTIBILIDADRosticeras_18 = format_SUSCEPTIBILIDADRosticeras_18.readFeatures(json_SUSCEPTIBILIDADRosticeras_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUSCEPTIBILIDADRosticeras_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUSCEPTIBILIDADRosticeras_18.addFeatures(features_SUSCEPTIBILIDADRosticeras_18);
var lyr_SUSCEPTIBILIDADRosticeras_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUSCEPTIBILIDADRosticeras_18, 
                style: style_SUSCEPTIBILIDADRosticeras_18,
                interactive: true,
                title: '<img src="styles/legend/SUSCEPTIBILIDADRosticeras_18.png" /> SUSCEPTIBILIDAD / Rosticerías  '
            });
var format_SUSCEPTIBILIDADTanquesdegasdemercados_19 = new ol.format.GeoJSON();
var features_SUSCEPTIBILIDADTanquesdegasdemercados_19 = format_SUSCEPTIBILIDADTanquesdegasdemercados_19.readFeatures(json_SUSCEPTIBILIDADTanquesdegasdemercados_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUSCEPTIBILIDADTanquesdegasdemercados_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUSCEPTIBILIDADTanquesdegasdemercados_19.addFeatures(features_SUSCEPTIBILIDADTanquesdegasdemercados_19);
var lyr_SUSCEPTIBILIDADTanquesdegasdemercados_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUSCEPTIBILIDADTanquesdegasdemercados_19, 
                style: style_SUSCEPTIBILIDADTanquesdegasdemercados_19,
                interactive: true,
                title: '<img src="styles/legend/SUSCEPTIBILIDADTanquesdegasdemercados_19.png" /> SUSCEPTIBILIDAD / Tanques de gas de mercados'
            });
var format_SUSCEPTIBILIDADTortilleras_20 = new ol.format.GeoJSON();
var features_SUSCEPTIBILIDADTortilleras_20 = format_SUSCEPTIBILIDADTortilleras_20.readFeatures(json_SUSCEPTIBILIDADTortilleras_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUSCEPTIBILIDADTortilleras_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUSCEPTIBILIDADTortilleras_20.addFeatures(features_SUSCEPTIBILIDADTortilleras_20);
var lyr_SUSCEPTIBILIDADTortilleras_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUSCEPTIBILIDADTortilleras_20, 
                style: style_SUSCEPTIBILIDADTortilleras_20,
                interactive: true,
                title: '<img src="styles/legend/SUSCEPTIBILIDADTortilleras_20.png" /> SUSCEPTIBILIDAD / Tortillerías '
            });
var format_HISTORICOS2021Incendiovehicular_21 = new ol.format.GeoJSON();
var features_HISTORICOS2021Incendiovehicular_21 = format_HISTORICOS2021Incendiovehicular_21.readFeatures(json_HISTORICOS2021Incendiovehicular_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTORICOS2021Incendiovehicular_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTORICOS2021Incendiovehicular_21.addFeatures(features_HISTORICOS2021Incendiovehicular_21);
var lyr_HISTORICOS2021Incendiovehicular_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTORICOS2021Incendiovehicular_21, 
                style: style_HISTORICOS2021Incendiovehicular_21,
                interactive: true,
                title: '<img src="styles/legend/HISTORICOS2021Incendiovehicular_21.png" /> HISTORICOS 2021 / Incendio vehicular --'
            });
var format_HISTRICOS2021Eventoelctrico_22 = new ol.format.GeoJSON();
var features_HISTRICOS2021Eventoelctrico_22 = format_HISTRICOS2021Eventoelctrico_22.readFeatures(json_HISTRICOS2021Eventoelctrico_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2021Eventoelctrico_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2021Eventoelctrico_22.addFeatures(features_HISTRICOS2021Eventoelctrico_22);
var lyr_HISTRICOS2021Eventoelctrico_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2021Eventoelctrico_22, 
                style: style_HISTRICOS2021Eventoelctrico_22,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2021Eventoelctrico_22.png" /> HISTÓRICOS 2021 / Evento eléctrico '
            });
var format_HISTRICOS2021Fugadegas_23 = new ol.format.GeoJSON();
var features_HISTRICOS2021Fugadegas_23 = format_HISTRICOS2021Fugadegas_23.readFeatures(json_HISTRICOS2021Fugadegas_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2021Fugadegas_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2021Fugadegas_23.addFeatures(features_HISTRICOS2021Fugadegas_23);
var lyr_HISTRICOS2021Fugadegas_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2021Fugadegas_23, 
                style: style_HISTRICOS2021Fugadegas_23,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2021Fugadegas_23.png" /> HISTÓRICOS 2021 / Fuga de gas --'
            });
var format_HISTRICOS2021Incendiocasahabitacin_24 = new ol.format.GeoJSON();
var features_HISTRICOS2021Incendiocasahabitacin_24 = format_HISTRICOS2021Incendiocasahabitacin_24.readFeatures(json_HISTRICOS2021Incendiocasahabitacin_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2021Incendiocasahabitacin_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2021Incendiocasahabitacin_24.addFeatures(features_HISTRICOS2021Incendiocasahabitacin_24);
var lyr_HISTRICOS2021Incendiocasahabitacin_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2021Incendiocasahabitacin_24, 
                style: style_HISTRICOS2021Incendiocasahabitacin_24,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2021Incendiocasahabitacin_24.png" /> HISTÓRICOS 2021 / Incendio casa habitación --'
            });
var format_HISTRICOS2021Derramedecombustible2021_25 = new ol.format.GeoJSON();
var features_HISTRICOS2021Derramedecombustible2021_25 = format_HISTRICOS2021Derramedecombustible2021_25.readFeatures(json_HISTRICOS2021Derramedecombustible2021_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2021Derramedecombustible2021_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2021Derramedecombustible2021_25.addFeatures(features_HISTRICOS2021Derramedecombustible2021_25);
var lyr_HISTRICOS2021Derramedecombustible2021_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2021Derramedecombustible2021_25, 
                style: style_HISTRICOS2021Derramedecombustible2021_25,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2021Derramedecombustible2021_25.png" /> HISTÓRICOS 2021 / Derrame de combustible 2021'
            });
var format_HISTRICOS2021Eventoelctrico_26 = new ol.format.GeoJSON();
var features_HISTRICOS2021Eventoelctrico_26 = format_HISTRICOS2021Eventoelctrico_26.readFeatures(json_HISTRICOS2021Eventoelctrico_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2021Eventoelctrico_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2021Eventoelctrico_26.addFeatures(features_HISTRICOS2021Eventoelctrico_26);
var lyr_HISTRICOS2021Eventoelctrico_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2021Eventoelctrico_26, 
                style: style_HISTRICOS2021Eventoelctrico_26,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2021Eventoelctrico_26.png" /> HISTÓRICOS 2021 / Evento eléctrico'
            });
var format_HISTRICOS2021Incendios2021_27 = new ol.format.GeoJSON();
var features_HISTRICOS2021Incendios2021_27 = format_HISTRICOS2021Incendios2021_27.readFeatures(json_HISTRICOS2021Incendios2021_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2021Incendios2021_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2021Incendios2021_27.addFeatures(features_HISTRICOS2021Incendios2021_27);
var lyr_HISTRICOS2021Incendios2021_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2021Incendios2021_27, 
                style: style_HISTRICOS2021Incendios2021_27,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2021Incendios2021_27.png" /> HISTÓRICOS 2021 / Incendios 2021 --'
            });
var format_HISTRICOS2021Incendiodecomercios2021_28 = new ol.format.GeoJSON();
var features_HISTRICOS2021Incendiodecomercios2021_28 = format_HISTRICOS2021Incendiodecomercios2021_28.readFeatures(json_HISTRICOS2021Incendiodecomercios2021_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2021Incendiodecomercios2021_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2021Incendiodecomercios2021_28.addFeatures(features_HISTRICOS2021Incendiodecomercios2021_28);
var lyr_HISTRICOS2021Incendiodecomercios2021_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2021Incendiodecomercios2021_28, 
                style: style_HISTRICOS2021Incendiodecomercios2021_28,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2021Incendiodecomercios2021_28.png" /> HISTÓRICOS 2021 / Incendio de comercios 2021 --'
            });
var format_HISTRICOS2020Eventoelctrico_29 = new ol.format.GeoJSON();
var features_HISTRICOS2020Eventoelctrico_29 = format_HISTRICOS2020Eventoelctrico_29.readFeatures(json_HISTRICOS2020Eventoelctrico_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2020Eventoelctrico_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2020Eventoelctrico_29.addFeatures(features_HISTRICOS2020Eventoelctrico_29);
var lyr_HISTRICOS2020Eventoelctrico_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2020Eventoelctrico_29, 
                style: style_HISTRICOS2020Eventoelctrico_29,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2020Eventoelctrico_29.png" /> HISTÓRICOS 2020 / Evento eléctrico'
            });
var format_HISTRICOS2020Fugadeamoniaco_30 = new ol.format.GeoJSON();
var features_HISTRICOS2020Fugadeamoniaco_30 = format_HISTRICOS2020Fugadeamoniaco_30.readFeatures(json_HISTRICOS2020Fugadeamoniaco_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2020Fugadeamoniaco_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2020Fugadeamoniaco_30.addFeatures(features_HISTRICOS2020Fugadeamoniaco_30);
var lyr_HISTRICOS2020Fugadeamoniaco_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2020Fugadeamoniaco_30, 
                style: style_HISTRICOS2020Fugadeamoniaco_30,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2020Fugadeamoniaco_30.png" /> HISTÓRICOS 2020  / Fuga de amoniaco'
            });
var format_HISTRICOS2020Fugadegas2020_31 = new ol.format.GeoJSON();
var features_HISTRICOS2020Fugadegas2020_31 = format_HISTRICOS2020Fugadegas2020_31.readFeatures(json_HISTRICOS2020Fugadegas2020_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2020Fugadegas2020_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2020Fugadegas2020_31.addFeatures(features_HISTRICOS2020Fugadegas2020_31);
var lyr_HISTRICOS2020Fugadegas2020_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2020Fugadegas2020_31, 
                style: style_HISTRICOS2020Fugadegas2020_31,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2020Fugadegas2020_31.png" /> HISTÓRICOS 2020  / Fuga de gas 2020'
            });
var format_HISTRICOS2020Incendio_32 = new ol.format.GeoJSON();
var features_HISTRICOS2020Incendio_32 = format_HISTRICOS2020Incendio_32.readFeatures(json_HISTRICOS2020Incendio_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2020Incendio_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2020Incendio_32.addFeatures(features_HISTRICOS2020Incendio_32);
var lyr_HISTRICOS2020Incendio_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2020Incendio_32, 
                style: style_HISTRICOS2020Incendio_32,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2020Incendio_32.png" /> * HISTÓRICOS 2020  / Incendio'
            });
var format_HISTRICOS2020Incendioforestal_33 = new ol.format.GeoJSON();
var features_HISTRICOS2020Incendioforestal_33 = format_HISTRICOS2020Incendioforestal_33.readFeatures(json_HISTRICOS2020Incendioforestal_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2020Incendioforestal_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2020Incendioforestal_33.addFeatures(features_HISTRICOS2020Incendioforestal_33);
var lyr_HISTRICOS2020Incendioforestal_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2020Incendioforestal_33, 
                style: style_HISTRICOS2020Incendioforestal_33,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2020Incendioforestal_33.png" /> HISTÓRICOS 2020  / Incendio forestal '
            });
var format_HISTRICOS2020Incendiopastizal_34 = new ol.format.GeoJSON();
var features_HISTRICOS2020Incendiopastizal_34 = format_HISTRICOS2020Incendiopastizal_34.readFeatures(json_HISTRICOS2020Incendiopastizal_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2020Incendiopastizal_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2020Incendiopastizal_34.addFeatures(features_HISTRICOS2020Incendiopastizal_34);
var lyr_HISTRICOS2020Incendiopastizal_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2020Incendiopastizal_34, 
                style: style_HISTRICOS2020Incendiopastizal_34,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2020Incendiopastizal_34.png" /> * HISTÓRICOS 2020  / Incendio pastizal'
            });
var format_HISTRICOS2020Incendios_35 = new ol.format.GeoJSON();
var features_HISTRICOS2020Incendios_35 = format_HISTRICOS2020Incendios_35.readFeatures(json_HISTRICOS2020Incendios_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2020Incendios_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2020Incendios_35.addFeatures(features_HISTRICOS2020Incendios_35);
var lyr_HISTRICOS2020Incendios_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2020Incendios_35, 
                style: style_HISTRICOS2020Incendios_35,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2020Incendios_35.png" /> HISTÓRICOS 2020  / Incendios'
            });
var format_HISTRICOS2020Incendioscarrizal2020_36 = new ol.format.GeoJSON();
var features_HISTRICOS2020Incendioscarrizal2020_36 = format_HISTRICOS2020Incendioscarrizal2020_36.readFeatures(json_HISTRICOS2020Incendioscarrizal2020_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2020Incendioscarrizal2020_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2020Incendioscarrizal2020_36.addFeatures(features_HISTRICOS2020Incendioscarrizal2020_36);
var lyr_HISTRICOS2020Incendioscarrizal2020_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2020Incendioscarrizal2020_36, 
                style: style_HISTRICOS2020Incendioscarrizal2020_36,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2020Incendioscarrizal2020_36.png" /> * HISTÓRICOS 2020  / Incendios carrizal 2020'
            });
var format_HISTRICOS2020Quemadebasura_37 = new ol.format.GeoJSON();
var features_HISTRICOS2020Quemadebasura_37 = format_HISTRICOS2020Quemadebasura_37.readFeatures(json_HISTRICOS2020Quemadebasura_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2020Quemadebasura_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2020Quemadebasura_37.addFeatures(features_HISTRICOS2020Quemadebasura_37);
var lyr_HISTRICOS2020Quemadebasura_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2020Quemadebasura_37, 
                style: style_HISTRICOS2020Quemadebasura_37,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2020Quemadebasura_37.png" /> HISTÓRICOS 2020  / Quema de basura '
            });
var format_HISTRICOS2020Derramedecombustible2020_38 = new ol.format.GeoJSON();
var features_HISTRICOS2020Derramedecombustible2020_38 = format_HISTRICOS2020Derramedecombustible2020_38.readFeatures(json_HISTRICOS2020Derramedecombustible2020_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2020Derramedecombustible2020_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2020Derramedecombustible2020_38.addFeatures(features_HISTRICOS2020Derramedecombustible2020_38);
var lyr_HISTRICOS2020Derramedecombustible2020_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2020Derramedecombustible2020_38, 
                style: style_HISTRICOS2020Derramedecombustible2020_38,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2020Derramedecombustible2020_38.png" /> HISTÓRICOS 2020 / Derrame de combustible 2020'
            });
var format_HISTRICOS2020Eventoelctrico2020_39 = new ol.format.GeoJSON();
var features_HISTRICOS2020Eventoelctrico2020_39 = format_HISTRICOS2020Eventoelctrico2020_39.readFeatures(json_HISTRICOS2020Eventoelctrico2020_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2020Eventoelctrico2020_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2020Eventoelctrico2020_39.addFeatures(features_HISTRICOS2020Eventoelctrico2020_39);
var lyr_HISTRICOS2020Eventoelctrico2020_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2020Eventoelctrico2020_39, 
                style: style_HISTRICOS2020Eventoelctrico2020_39,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2020Eventoelctrico2020_39.png" /> HISTÓRICOS 2020 / Evento eléctrico 2020'
            });
var format_HISTRICOS2020Explosin2020_40 = new ol.format.GeoJSON();
var features_HISTRICOS2020Explosin2020_40 = format_HISTRICOS2020Explosin2020_40.readFeatures(json_HISTRICOS2020Explosin2020_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2020Explosin2020_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2020Explosin2020_40.addFeatures(features_HISTRICOS2020Explosin2020_40);
var lyr_HISTRICOS2020Explosin2020_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2020Explosin2020_40, 
                style: style_HISTRICOS2020Explosin2020_40,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2020Explosin2020_40.png" /> * HISTÓRICOS 2020 / Explosión 2020'
            });
var format_HISTRICOS2019Eventoelctrico_41 = new ol.format.GeoJSON();
var features_HISTRICOS2019Eventoelctrico_41 = format_HISTRICOS2019Eventoelctrico_41.readFeatures(json_HISTRICOS2019Eventoelctrico_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2019Eventoelctrico_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2019Eventoelctrico_41.addFeatures(features_HISTRICOS2019Eventoelctrico_41);
var lyr_HISTRICOS2019Eventoelctrico_41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2019Eventoelctrico_41, 
                style: style_HISTRICOS2019Eventoelctrico_41,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2019Eventoelctrico_41.png" /> * HISTÓRICOS 2019 / Evento eléctrico'
            });
var format_HISTRICOS2019Fugadegas2019_42 = new ol.format.GeoJSON();
var features_HISTRICOS2019Fugadegas2019_42 = format_HISTRICOS2019Fugadegas2019_42.readFeatures(json_HISTRICOS2019Fugadegas2019_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2019Fugadegas2019_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2019Fugadegas2019_42.addFeatures(features_HISTRICOS2019Fugadegas2019_42);
var lyr_HISTRICOS2019Fugadegas2019_42 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2019Fugadegas2019_42, 
                style: style_HISTRICOS2019Fugadegas2019_42,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2019Fugadegas2019_42.png" /> HISTÓRICOS 2019  / Fuga de gas 2019 '
            });
var format_HISTRICOS2019Incendiocarrizal2019_43 = new ol.format.GeoJSON();
var features_HISTRICOS2019Incendiocarrizal2019_43 = format_HISTRICOS2019Incendiocarrizal2019_43.readFeatures(json_HISTRICOS2019Incendiocarrizal2019_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2019Incendiocarrizal2019_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2019Incendiocarrizal2019_43.addFeatures(features_HISTRICOS2019Incendiocarrizal2019_43);
var lyr_HISTRICOS2019Incendiocarrizal2019_43 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2019Incendiocarrizal2019_43, 
                style: style_HISTRICOS2019Incendiocarrizal2019_43,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2019Incendiocarrizal2019_43.png" /> * HISTÓRICOS 2019  / Incendio carrizal 2019 '
            });
var format_HISTRICOS2019IncendioCasaHabitacin2019_44 = new ol.format.GeoJSON();
var features_HISTRICOS2019IncendioCasaHabitacin2019_44 = format_HISTRICOS2019IncendioCasaHabitacin2019_44.readFeatures(json_HISTRICOS2019IncendioCasaHabitacin2019_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2019IncendioCasaHabitacin2019_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2019IncendioCasaHabitacin2019_44.addFeatures(features_HISTRICOS2019IncendioCasaHabitacin2019_44);
var lyr_HISTRICOS2019IncendioCasaHabitacin2019_44 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2019IncendioCasaHabitacin2019_44, 
                style: style_HISTRICOS2019IncendioCasaHabitacin2019_44,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2019IncendioCasaHabitacin2019_44.png" /> * HISTÓRICOS 2019  / Incendio Casa - Habitación 2019 '
            });
var format_HISTRICOS2019Incendiopastizal2019_45 = new ol.format.GeoJSON();
var features_HISTRICOS2019Incendiopastizal2019_45 = format_HISTRICOS2019Incendiopastizal2019_45.readFeatures(json_HISTRICOS2019Incendiopastizal2019_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2019Incendiopastizal2019_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2019Incendiopastizal2019_45.addFeatures(features_HISTRICOS2019Incendiopastizal2019_45);
var lyr_HISTRICOS2019Incendiopastizal2019_45 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2019Incendiopastizal2019_45, 
                style: style_HISTRICOS2019Incendiopastizal2019_45,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2019Incendiopastizal2019_45.png" /> * HISTÓRICOS 2019  / Incendio pastizal  2019 '
            });
var format_HISTRICOS2018Eventoelctrico2018_46 = new ol.format.GeoJSON();
var features_HISTRICOS2018Eventoelctrico2018_46 = format_HISTRICOS2018Eventoelctrico2018_46.readFeatures(json_HISTRICOS2018Eventoelctrico2018_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2018Eventoelctrico2018_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2018Eventoelctrico2018_46.addFeatures(features_HISTRICOS2018Eventoelctrico2018_46);
var lyr_HISTRICOS2018Eventoelctrico2018_46 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2018Eventoelctrico2018_46, 
                style: style_HISTRICOS2018Eventoelctrico2018_46,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2018Eventoelctrico2018_46.png" /> * HISTÓRICOS 2018 / Evento eléctrico 2018'
            });
var format_HISTRICOS2018Caidaretirocableado2018_47 = new ol.format.GeoJSON();
var features_HISTRICOS2018Caidaretirocableado2018_47 = format_HISTRICOS2018Caidaretirocableado2018_47.readFeatures(json_HISTRICOS2018Caidaretirocableado2018_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2018Caidaretirocableado2018_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2018Caidaretirocableado2018_47.addFeatures(features_HISTRICOS2018Caidaretirocableado2018_47);
var lyr_HISTRICOS2018Caidaretirocableado2018_47 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2018Caidaretirocableado2018_47, 
                style: style_HISTRICOS2018Caidaretirocableado2018_47,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2018Caidaretirocableado2018_47.png" /> * HISTÓRICOS 2018 /Caida- retiro cableado 2018'
            });
var format_HISTRICOS2018Derramedecombustible2018_48 = new ol.format.GeoJSON();
var features_HISTRICOS2018Derramedecombustible2018_48 = format_HISTRICOS2018Derramedecombustible2018_48.readFeatures(json_HISTRICOS2018Derramedecombustible2018_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2018Derramedecombustible2018_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2018Derramedecombustible2018_48.addFeatures(features_HISTRICOS2018Derramedecombustible2018_48);
var lyr_HISTRICOS2018Derramedecombustible2018_48 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2018Derramedecombustible2018_48, 
                style: style_HISTRICOS2018Derramedecombustible2018_48,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2018Derramedecombustible2018_48.png" /> * HISTÓRICOS 2018 / Derrame de combustible 2018'
            });
var format_HISTRICOS2018Fugadegas2018_49 = new ol.format.GeoJSON();
var features_HISTRICOS2018Fugadegas2018_49 = format_HISTRICOS2018Fugadegas2018_49.readFeatures(json_HISTRICOS2018Fugadegas2018_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2018Fugadegas2018_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2018Fugadegas2018_49.addFeatures(features_HISTRICOS2018Fugadegas2018_49);
var lyr_HISTRICOS2018Fugadegas2018_49 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2018Fugadegas2018_49, 
                style: style_HISTRICOS2018Fugadegas2018_49,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2018Fugadegas2018_49.png" /> * HISTÓRICOS 2018  / Fuga de gas 2018'
            });
var format_HISTRICOS2018Incenciopastizal2018_50 = new ol.format.GeoJSON();
var features_HISTRICOS2018Incenciopastizal2018_50 = format_HISTRICOS2018Incenciopastizal2018_50.readFeatures(json_HISTRICOS2018Incenciopastizal2018_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2018Incenciopastizal2018_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2018Incenciopastizal2018_50.addFeatures(features_HISTRICOS2018Incenciopastizal2018_50);
var lyr_HISTRICOS2018Incenciopastizal2018_50 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2018Incenciopastizal2018_50, 
                style: style_HISTRICOS2018Incenciopastizal2018_50,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2018Incenciopastizal2018_50.png" /> * HISTÓRICOS 2018  / Incencio pastizal 2018'
            });
var format_HISTRICOS2018Explosiones2018_51 = new ol.format.GeoJSON();
var features_HISTRICOS2018Explosiones2018_51 = format_HISTRICOS2018Explosiones2018_51.readFeatures(json_HISTRICOS2018Explosiones2018_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2018Explosiones2018_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2018Explosiones2018_51.addFeatures(features_HISTRICOS2018Explosiones2018_51);
var lyr_HISTRICOS2018Explosiones2018_51 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2018Explosiones2018_51, 
                style: style_HISTRICOS2018Explosiones2018_51,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2018Explosiones2018_51.png" /> * HISTÓRICOS 2018 / Explosiones 2018'
            });
var format_HISTRICOS2017Explosiones2017_52 = new ol.format.GeoJSON();
var features_HISTRICOS2017Explosiones2017_52 = format_HISTRICOS2017Explosiones2017_52.readFeatures(json_HISTRICOS2017Explosiones2017_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2017Explosiones2017_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2017Explosiones2017_52.addFeatures(features_HISTRICOS2017Explosiones2017_52);
var lyr_HISTRICOS2017Explosiones2017_52 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2017Explosiones2017_52, 
                style: style_HISTRICOS2017Explosiones2017_52,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2017Explosiones2017_52.png" /> * HISTÓRICOS 2017 / Explosiones 2017'
            });
var format_Incendioforestal_53 = new ol.format.GeoJSON();
var features_Incendioforestal_53 = format_Incendioforestal_53.readFeatures(json_Incendioforestal_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incendioforestal_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incendioforestal_53.addFeatures(features_Incendioforestal_53);
var lyr_Incendioforestal_53 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Incendioforestal_53, 
                style: style_Incendioforestal_53,
                interactive: true,
                title: '<img src="styles/legend/Incendioforestal_53.png" /> Incendio forestal'
            });
var format_ESCENARIOSROSALADOEstimacindedesbordamiento_54 = new ol.format.GeoJSON();
var features_ESCENARIOSROSALADOEstimacindedesbordamiento_54 = format_ESCENARIOSROSALADOEstimacindedesbordamiento_54.readFeatures(json_ESCENARIOSROSALADOEstimacindedesbordamiento_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESCENARIOSROSALADOEstimacindedesbordamiento_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESCENARIOSROSALADOEstimacindedesbordamiento_54.addFeatures(features_ESCENARIOSROSALADOEstimacindedesbordamiento_54);
var lyr_ESCENARIOSROSALADOEstimacindedesbordamiento_54 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ESCENARIOSROSALADOEstimacindedesbordamiento_54, 
                style: style_ESCENARIOSROSALADOEstimacindedesbordamiento_54,
                interactive: true,
                title: '<img src="styles/legend/ESCENARIOSROSALADOEstimacindedesbordamiento_54.png" /> ESCENARIOS RÍO SALADO  / Estimación de desbordamiento'
            });
var format_MAPASDERIESGOSEspaciocuencasriesgobajo_55 = new ol.format.GeoJSON();
var features_MAPASDERIESGOSEspaciocuencasriesgobajo_55 = format_MAPASDERIESGOSEspaciocuencasriesgobajo_55.readFeatures(json_MAPASDERIESGOSEspaciocuencasriesgobajo_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAPASDERIESGOSEspaciocuencasriesgobajo_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAPASDERIESGOSEspaciocuencasriesgobajo_55.addFeatures(features_MAPASDERIESGOSEspaciocuencasriesgobajo_55);
var lyr_MAPASDERIESGOSEspaciocuencasriesgobajo_55 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MAPASDERIESGOSEspaciocuencasriesgobajo_55, 
                style: style_MAPASDERIESGOSEspaciocuencasriesgobajo_55,
                interactive: true,
                title: '<img src="styles/legend/MAPASDERIESGOSEspaciocuencasriesgobajo_55.png" /> MAPAS DE RIESGOS  / Espacio cuencas riesgo bajo'
            });
var format_MAPASDERIESGOSEspaciocuencasriesgomedio_56 = new ol.format.GeoJSON();
var features_MAPASDERIESGOSEspaciocuencasriesgomedio_56 = format_MAPASDERIESGOSEspaciocuencasriesgomedio_56.readFeatures(json_MAPASDERIESGOSEspaciocuencasriesgomedio_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAPASDERIESGOSEspaciocuencasriesgomedio_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAPASDERIESGOSEspaciocuencasriesgomedio_56.addFeatures(features_MAPASDERIESGOSEspaciocuencasriesgomedio_56);
var lyr_MAPASDERIESGOSEspaciocuencasriesgomedio_56 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MAPASDERIESGOSEspaciocuencasriesgomedio_56, 
                style: style_MAPASDERIESGOSEspaciocuencasriesgomedio_56,
                interactive: true,
                title: '<img src="styles/legend/MAPASDERIESGOSEspaciocuencasriesgomedio_56.png" /> MAPAS DE RIESGOS  / Espacio cuencas riesgo medio '
            });
var format_MAPASDERIESGOSEspaciocuencasriesgoalto_57 = new ol.format.GeoJSON();
var features_MAPASDERIESGOSEspaciocuencasriesgoalto_57 = format_MAPASDERIESGOSEspaciocuencasriesgoalto_57.readFeatures(json_MAPASDERIESGOSEspaciocuencasriesgoalto_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAPASDERIESGOSEspaciocuencasriesgoalto_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAPASDERIESGOSEspaciocuencasriesgoalto_57.addFeatures(features_MAPASDERIESGOSEspaciocuencasriesgoalto_57);
var lyr_MAPASDERIESGOSEspaciocuencasriesgoalto_57 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MAPASDERIESGOSEspaciocuencasriesgoalto_57, 
                style: style_MAPASDERIESGOSEspaciocuencasriesgoalto_57,
                interactive: true,
                title: '<img src="styles/legend/MAPASDERIESGOSEspaciocuencasriesgoalto_57.png" /> MAPAS DE RIESGOS  / Espacio cuencas riesgo alto '
            });
var format_HISTRICOS2021Afectacionesporlluvia2021_58 = new ol.format.GeoJSON();
var features_HISTRICOS2021Afectacionesporlluvia2021_58 = format_HISTRICOS2021Afectacionesporlluvia2021_58.readFeatures(json_HISTRICOS2021Afectacionesporlluvia2021_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2021Afectacionesporlluvia2021_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2021Afectacionesporlluvia2021_58.addFeatures(features_HISTRICOS2021Afectacionesporlluvia2021_58);
var lyr_HISTRICOS2021Afectacionesporlluvia2021_58 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2021Afectacionesporlluvia2021_58, 
                style: style_HISTRICOS2021Afectacionesporlluvia2021_58,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2021Afectacionesporlluvia2021_58.png" /> * HISTÓRICOS 2021 / Afectaciones por lluvia 2021-'
            });
var format_HISTRICOS2020Granizo2020_59 = new ol.format.GeoJSON();
var features_HISTRICOS2020Granizo2020_59 = format_HISTRICOS2020Granizo2020_59.readFeatures(json_HISTRICOS2020Granizo2020_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2020Granizo2020_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2020Granizo2020_59.addFeatures(features_HISTRICOS2020Granizo2020_59);
var lyr_HISTRICOS2020Granizo2020_59 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2020Granizo2020_59, 
                style: style_HISTRICOS2020Granizo2020_59,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2020Granizo2020_59.png" /> * HISTÓRICOS 2020  / Granizo 2020 --'
            });
var format_HISTRICOS2020Afectacionesporlluvia2020_60 = new ol.format.GeoJSON();
var features_HISTRICOS2020Afectacionesporlluvia2020_60 = format_HISTRICOS2020Afectacionesporlluvia2020_60.readFeatures(json_HISTRICOS2020Afectacionesporlluvia2020_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2020Afectacionesporlluvia2020_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2020Afectacionesporlluvia2020_60.addFeatures(features_HISTRICOS2020Afectacionesporlluvia2020_60);
var lyr_HISTRICOS2020Afectacionesporlluvia2020_60 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2020Afectacionesporlluvia2020_60, 
                style: style_HISTRICOS2020Afectacionesporlluvia2020_60,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2020Afectacionesporlluvia2020_60.png" /> * HISTÓRICOS 2020 / Afectaciones por lluvia 2020-'
            });
var format_HISTRICOS2018AfectacionesporTormenta18_61 = new ol.format.GeoJSON();
var features_HISTRICOS2018AfectacionesporTormenta18_61 = format_HISTRICOS2018AfectacionesporTormenta18_61.readFeatures(json_HISTRICOS2018AfectacionesporTormenta18_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2018AfectacionesporTormenta18_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2018AfectacionesporTormenta18_61.addFeatures(features_HISTRICOS2018AfectacionesporTormenta18_61);
var lyr_HISTRICOS2018AfectacionesporTormenta18_61 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2018AfectacionesporTormenta18_61, 
                style: style_HISTRICOS2018AfectacionesporTormenta18_61,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2018AfectacionesporTormenta18_61.png" /> * HISTÓRICOS 2018 / Afectaciones por Tormenta 18-'
            });
var format_HISTRICOS2018Afectacionesporfuertesvientos2018_62 = new ol.format.GeoJSON();
var features_HISTRICOS2018Afectacionesporfuertesvientos2018_62 = format_HISTRICOS2018Afectacionesporfuertesvientos2018_62.readFeatures(json_HISTRICOS2018Afectacionesporfuertesvientos2018_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2018Afectacionesporfuertesvientos2018_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2018Afectacionesporfuertesvientos2018_62.addFeatures(features_HISTRICOS2018Afectacionesporfuertesvientos2018_62);
var lyr_HISTRICOS2018Afectacionesporfuertesvientos2018_62 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2018Afectacionesporfuertesvientos2018_62, 
                style: style_HISTRICOS2018Afectacionesporfuertesvientos2018_62,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2018Afectacionesporfuertesvientos2018_62.png" /> * HISTÓRICOS 2018 / Afectaciones por fuertes vientos 2018'
            });
var format_HISTRICOSAfectacionesporgranizo2018_63 = new ol.format.GeoJSON();
var features_HISTRICOSAfectacionesporgranizo2018_63 = format_HISTRICOSAfectacionesporgranizo2018_63.readFeatures(json_HISTRICOSAfectacionesporgranizo2018_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOSAfectacionesporgranizo2018_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOSAfectacionesporgranizo2018_63.addFeatures(features_HISTRICOSAfectacionesporgranizo2018_63);
var lyr_HISTRICOSAfectacionesporgranizo2018_63 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOSAfectacionesporgranizo2018_63, 
                style: style_HISTRICOSAfectacionesporgranizo2018_63,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOSAfectacionesporgranizo2018_63.png" /> HISTÓRICOS / Afectaciones por granizo 2018'
            });
var format_HISTRICOElhistrico_64 = new ol.format.GeoJSON();
var features_HISTRICOElhistrico_64 = format_HISTRICOElhistrico_64.readFeatures(json_HISTRICOElhistrico_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOElhistrico_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOElhistrico_64.addFeatures(features_HISTRICOElhistrico_64);
var lyr_HISTRICOElhistrico_64 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOElhistrico_64, 
                style: style_HISTRICOElhistrico_64,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOElhistrico_64.png" /> HISTÓRICO  / El histórico '
            });
var format_Inundacinporaguasnegras_65 = new ol.format.GeoJSON();
var features_Inundacinporaguasnegras_65 = format_Inundacinporaguasnegras_65.readFeatures(json_Inundacinporaguasnegras_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Inundacinporaguasnegras_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Inundacinporaguasnegras_65.addFeatures(features_Inundacinporaguasnegras_65);
var lyr_Inundacinporaguasnegras_65 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Inundacinporaguasnegras_65, 
                style: style_Inundacinporaguasnegras_65,
                interactive: true,
                title: '<img src="styles/legend/Inundacinporaguasnegras_65.png" /> * Inundación por aguas negras'
            });
var format_PELIGROSDeslizamientoladerasCONABIO_66 = new ol.format.GeoJSON();
var features_PELIGROSDeslizamientoladerasCONABIO_66 = format_PELIGROSDeslizamientoladerasCONABIO_66.readFeatures(json_PELIGROSDeslizamientoladerasCONABIO_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PELIGROSDeslizamientoladerasCONABIO_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PELIGROSDeslizamientoladerasCONABIO_66.addFeatures(features_PELIGROSDeslizamientoladerasCONABIO_66);
var lyr_PELIGROSDeslizamientoladerasCONABIO_66 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PELIGROSDeslizamientoladerasCONABIO_66, 
                style: style_PELIGROSDeslizamientoladerasCONABIO_66,
                interactive: true,
                title: '<img src="styles/legend/PELIGROSDeslizamientoladerasCONABIO_66.png" /> PELIGROS  / Deslizamiento laderas CONABIO '
            });
var format_SUSCEPTIBILIDADErosinzonahjo_67 = new ol.format.GeoJSON();
var features_SUSCEPTIBILIDADErosinzonahjo_67 = format_SUSCEPTIBILIDADErosinzonahjo_67.readFeatures(json_SUSCEPTIBILIDADErosinzonahjo_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUSCEPTIBILIDADErosinzonahjo_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUSCEPTIBILIDADErosinzonahjo_67.addFeatures(features_SUSCEPTIBILIDADErosinzonahjo_67);
var lyr_SUSCEPTIBILIDADErosinzonahjo_67 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUSCEPTIBILIDADErosinzonahjo_67, 
                style: style_SUSCEPTIBILIDADErosinzonahjo_67,
                interactive: true,
                title: '<img src="styles/legend/SUSCEPTIBILIDADErosinzonahjo_67.png" /> SUSCEPTIBILIDAD  / Erosión zona hjo '
            });
var format_MAPASDERIESGOFallasUTM_68 = new ol.format.GeoJSON();
var features_MAPASDERIESGOFallasUTM_68 = format_MAPASDERIESGOFallasUTM_68.readFeatures(json_MAPASDERIESGOFallasUTM_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAPASDERIESGOFallasUTM_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAPASDERIESGOFallasUTM_68.addFeatures(features_MAPASDERIESGOFallasUTM_68);
var lyr_MAPASDERIESGOFallasUTM_68 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MAPASDERIESGOFallasUTM_68, 
                style: style_MAPASDERIESGOFallasUTM_68,
                interactive: true,
                title: '<img src="styles/legend/MAPASDERIESGOFallasUTM_68.png" /> * MAPAS DE RIESGO / Fallas UTM'
            });
var format_MAPASDERIESGOZonanoaptaparahabitar_69 = new ol.format.GeoJSON();
var features_MAPASDERIESGOZonanoaptaparahabitar_69 = format_MAPASDERIESGOZonanoaptaparahabitar_69.readFeatures(json_MAPASDERIESGOZonanoaptaparahabitar_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAPASDERIESGOZonanoaptaparahabitar_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAPASDERIESGOZonanoaptaparahabitar_69.addFeatures(features_MAPASDERIESGOZonanoaptaparahabitar_69);
var lyr_MAPASDERIESGOZonanoaptaparahabitar_69 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MAPASDERIESGOZonanoaptaparahabitar_69, 
                style: style_MAPASDERIESGOZonanoaptaparahabitar_69,
                interactive: true,
                title: '<img src="styles/legend/MAPASDERIESGOZonanoaptaparahabitar_69.png" /> MAPAS DE RIESGO  / Zona no apta para habitar'
            });
var format_HISTRICOS2020Huajuapansismo2020_70 = new ol.format.GeoJSON();
var features_HISTRICOS2020Huajuapansismo2020_70 = format_HISTRICOS2020Huajuapansismo2020_70.readFeatures(json_HISTRICOS2020Huajuapansismo2020_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOS2020Huajuapansismo2020_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOS2020Huajuapansismo2020_70.addFeatures(features_HISTRICOS2020Huajuapansismo2020_70);
var lyr_HISTRICOS2020Huajuapansismo2020_70 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOS2020Huajuapansismo2020_70, 
                style: style_HISTRICOS2020Huajuapansismo2020_70,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOS2020Huajuapansismo2020_70.png" /> HISTÓRICOS 2020  / Huajuapan sismo 2020 '
            });
var format_HISTRICOSHundimientos_71 = new ol.format.GeoJSON();
var features_HISTRICOSHundimientos_71 = format_HISTRICOSHundimientos_71.readFeatures(json_HISTRICOSHundimientos_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOSHundimientos_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOSHundimientos_71.addFeatures(features_HISTRICOSHundimientos_71);
var lyr_HISTRICOSHundimientos_71 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOSHundimientos_71, 
                style: style_HISTRICOSHundimientos_71,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOSHundimientos_71.png" /> * HISTÓRICOS  / Hundimientos '
            });
var format_HISTRICOSHuajuapansismo20172019_72 = new ol.format.GeoJSON();
var features_HISTRICOSHuajuapansismo20172019_72 = format_HISTRICOSHuajuapansismo20172019_72.readFeatures(json_HISTRICOSHuajuapansismo20172019_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HISTRICOSHuajuapansismo20172019_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HISTRICOSHuajuapansismo20172019_72.addFeatures(features_HISTRICOSHuajuapansismo20172019_72);
var lyr_HISTRICOSHuajuapansismo20172019_72 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HISTRICOSHuajuapansismo20172019_72, 
                style: style_HISTRICOSHuajuapansismo20172019_72,
                interactive: true,
                title: '<img src="styles/legend/HISTRICOSHuajuapansismo20172019_72.png" /> HISTÓRICOS  / Huajuapan sismo 2017 - 2019'
            });
var format_HDRICAHidrolneas_73 = new ol.format.GeoJSON();
var features_HDRICAHidrolneas_73 = format_HDRICAHidrolneas_73.readFeatures(json_HDRICAHidrolneas_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HDRICAHidrolneas_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HDRICAHidrolneas_73.addFeatures(features_HDRICAHidrolneas_73);
var lyr_HDRICAHidrolneas_73 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HDRICAHidrolneas_73, 
                style: style_HDRICAHidrolneas_73,
                interactive: true,
                title: '<img src="styles/legend/HDRICAHidrolneas_73.png" /> HÍDRICA  / Hidrolíneas'
            });
var format_INFORMACINCOMPLEMENTARIACalles_74 = new ol.format.GeoJSON();
var features_INFORMACINCOMPLEMENTARIACalles_74 = format_INFORMACINCOMPLEMENTARIACalles_74.readFeatures(json_INFORMACINCOMPLEMENTARIACalles_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INFORMACINCOMPLEMENTARIACalles_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INFORMACINCOMPLEMENTARIACalles_74.addFeatures(features_INFORMACINCOMPLEMENTARIACalles_74);
var lyr_INFORMACINCOMPLEMENTARIACalles_74 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INFORMACINCOMPLEMENTARIACalles_74, 
                style: style_INFORMACINCOMPLEMENTARIACalles_74,
                interactive: true,
                title: '<img src="styles/legend/INFORMACINCOMPLEMENTARIACalles_74.png" /> INFORMACIÓN COMPLEMENTARIA  / Calles'
            });
var format_INFORMACINCOMPLEMENTARIAFrentedemanzana_75 = new ol.format.GeoJSON();
var features_INFORMACINCOMPLEMENTARIAFrentedemanzana_75 = format_INFORMACINCOMPLEMENTARIAFrentedemanzana_75.readFeatures(json_INFORMACINCOMPLEMENTARIAFrentedemanzana_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INFORMACINCOMPLEMENTARIAFrentedemanzana_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INFORMACINCOMPLEMENTARIAFrentedemanzana_75.addFeatures(features_INFORMACINCOMPLEMENTARIAFrentedemanzana_75);
var lyr_INFORMACINCOMPLEMENTARIAFrentedemanzana_75 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INFORMACINCOMPLEMENTARIAFrentedemanzana_75, 
                style: style_INFORMACINCOMPLEMENTARIAFrentedemanzana_75,
                interactive: true,
                title: '<img src="styles/legend/INFORMACINCOMPLEMENTARIAFrentedemanzana_75.png" /> INFORMACIÓN COMPLEMENTARIA  / Frente de manzana'
            });
var format_INFORMACINCOMPLEMENTARIADivisinterritorial2020_76 = new ol.format.GeoJSON();
var features_INFORMACINCOMPLEMENTARIADivisinterritorial2020_76 = format_INFORMACINCOMPLEMENTARIADivisinterritorial2020_76.readFeatures(json_INFORMACINCOMPLEMENTARIADivisinterritorial2020_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INFORMACINCOMPLEMENTARIADivisinterritorial2020_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INFORMACINCOMPLEMENTARIADivisinterritorial2020_76.addFeatures(features_INFORMACINCOMPLEMENTARIADivisinterritorial2020_76);
var lyr_INFORMACINCOMPLEMENTARIADivisinterritorial2020_76 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INFORMACINCOMPLEMENTARIADivisinterritorial2020_76, 
                style: style_INFORMACINCOMPLEMENTARIADivisinterritorial2020_76,
                interactive: true,
                title: '<img src="styles/legend/INFORMACINCOMPLEMENTARIADivisinterritorial2020_76.png" /> INFORMACIÓN COMPLEMENTARIA  / División territorial 2020'
            });
var group_DATOSBSICOS = new ol.layer.Group({
                                layers: [lyr_HDRICAHidrolneas_73,lyr_INFORMACINCOMPLEMENTARIACalles_74,lyr_INFORMACINCOMPLEMENTARIAFrentedemanzana_75,lyr_INFORMACINCOMPLEMENTARIADivisinterritorial2020_76,],
                                title: "DATOS BÁSICOS"});
var group_GEOLGICOS = new ol.layer.Group({
                                layers: [lyr_PELIGROSDeslizamientoladerasCONABIO_66,lyr_SUSCEPTIBILIDADErosinzonahjo_67,lyr_MAPASDERIESGOFallasUTM_68,lyr_MAPASDERIESGOZonanoaptaparahabitar_69,lyr_HISTRICOS2020Huajuapansismo2020_70,lyr_HISTRICOSHundimientos_71,lyr_HISTRICOSHuajuapansismo20172019_72,],
                                title: "GEOLÓGICOS"});
var group_HIDROMETEOROLGICOS = new ol.layer.Group({
                                layers: [lyr_ESCENARIOSROSALADOEstimacindedesbordamiento_54,lyr_MAPASDERIESGOSEspaciocuencasriesgobajo_55,lyr_MAPASDERIESGOSEspaciocuencasriesgomedio_56,lyr_MAPASDERIESGOSEspaciocuencasriesgoalto_57,lyr_HISTRICOS2021Afectacionesporlluvia2021_58,lyr_HISTRICOS2020Granizo2020_59,lyr_HISTRICOS2020Afectacionesporlluvia2020_60,lyr_HISTRICOS2018AfectacionesporTormenta18_61,lyr_HISTRICOS2018Afectacionesporfuertesvientos2018_62,lyr_HISTRICOSAfectacionesporgranizo2018_63,lyr_HISTRICOElhistrico_64,lyr_Inundacinporaguasnegras_65,],
                                title: "HIDROMETEOROLÓGICOS"});
var group_QUMICOTECNOLGICOS = new ol.layer.Group({
                                layers: [lyr_ESCENARIOSRadiacintrmicafugadegasFlamaAzul_16,lyr_SUSCEPTIBILIDADPolvorines_17,lyr_SUSCEPTIBILIDADRosticeras_18,lyr_SUSCEPTIBILIDADTanquesdegasdemercados_19,lyr_SUSCEPTIBILIDADTortilleras_20,lyr_HISTORICOS2021Incendiovehicular_21,lyr_HISTRICOS2021Eventoelctrico_22,lyr_HISTRICOS2021Fugadegas_23,lyr_HISTRICOS2021Incendiocasahabitacin_24,lyr_HISTRICOS2021Derramedecombustible2021_25,lyr_HISTRICOS2021Eventoelctrico_26,lyr_HISTRICOS2021Incendios2021_27,lyr_HISTRICOS2021Incendiodecomercios2021_28,lyr_HISTRICOS2020Eventoelctrico_29,lyr_HISTRICOS2020Fugadeamoniaco_30,lyr_HISTRICOS2020Fugadegas2020_31,lyr_HISTRICOS2020Incendio_32,lyr_HISTRICOS2020Incendioforestal_33,lyr_HISTRICOS2020Incendiopastizal_34,lyr_HISTRICOS2020Incendios_35,lyr_HISTRICOS2020Incendioscarrizal2020_36,lyr_HISTRICOS2020Quemadebasura_37,lyr_HISTRICOS2020Derramedecombustible2020_38,lyr_HISTRICOS2020Eventoelctrico2020_39,lyr_HISTRICOS2020Explosin2020_40,lyr_HISTRICOS2019Eventoelctrico_41,lyr_HISTRICOS2019Fugadegas2019_42,lyr_HISTRICOS2019Incendiocarrizal2019_43,lyr_HISTRICOS2019IncendioCasaHabitacin2019_44,lyr_HISTRICOS2019Incendiopastizal2019_45,lyr_HISTRICOS2018Eventoelctrico2018_46,lyr_HISTRICOS2018Caidaretirocableado2018_47,lyr_HISTRICOS2018Derramedecombustible2018_48,lyr_HISTRICOS2018Fugadegas2018_49,lyr_HISTRICOS2018Incenciopastizal2018_50,lyr_HISTRICOS2018Explosiones2018_51,lyr_HISTRICOS2017Explosiones2017_52,lyr_Incendioforestal_53,],
                                title: "QUÍMICO-TECNOLÓGICOS"});
var group_SANITARIOECOLGICOS = new ol.layer.Group({
                                layers: [lyr_SUSCEPTIBILIDADPlantadeaguasresiduales_8,lyr_HISTRICOS2021Controlabejas_9,lyr_HISTRICOS2021Controldefauna_10,lyr_HISTRICOS2018Controlanimal_11,lyr_HISTRICOS2018Controlavejas_12,lyr_HISTRICOS2018Rescateanimal_13,lyr_HISTRICOS2018RescateyCapturadeanimaldomstico_14,lyr_HISTRICOS2018RetirodeAbejas_15,],
                                title: "SANITARIO-ECOLÓGICOS"});
var group_SOCIOORGANIZATIVO = new ol.layer.Group({
                                layers: [lyr_SUSCEPTIBILIDADCementerios_4,lyr_SUSCEPTIBILIDADEscuelas_5,lyr_SUSCEPTIBILIDADMercado_6,lyr_SUSCEPTIBILIDADParquesdeesparcimiento_7,],
                                title: "SOCIO-ORGANIZATIVO"});
var group_OTROS = new ol.layer.Group({
                                layers: [lyr_Incendios2020_3,],
                                title: "OTROS"});
var group_MAPAS = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_GoogleHybrid_1,lyr_OpenStreetMap_2,],
                                title: "MAPAS"});

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_Incendios2020_3.setVisible(true);lyr_SUSCEPTIBILIDADCementerios_4.setVisible(true);lyr_SUSCEPTIBILIDADEscuelas_5.setVisible(true);lyr_SUSCEPTIBILIDADMercado_6.setVisible(true);lyr_SUSCEPTIBILIDADParquesdeesparcimiento_7.setVisible(true);lyr_SUSCEPTIBILIDADPlantadeaguasresiduales_8.setVisible(true);lyr_HISTRICOS2021Controlabejas_9.setVisible(true);lyr_HISTRICOS2021Controldefauna_10.setVisible(true);lyr_HISTRICOS2018Controlanimal_11.setVisible(true);lyr_HISTRICOS2018Controlavejas_12.setVisible(true);lyr_HISTRICOS2018Rescateanimal_13.setVisible(true);lyr_HISTRICOS2018RescateyCapturadeanimaldomstico_14.setVisible(true);lyr_HISTRICOS2018RetirodeAbejas_15.setVisible(true);lyr_ESCENARIOSRadiacintrmicafugadegasFlamaAzul_16.setVisible(true);lyr_SUSCEPTIBILIDADPolvorines_17.setVisible(true);lyr_SUSCEPTIBILIDADRosticeras_18.setVisible(true);lyr_SUSCEPTIBILIDADTanquesdegasdemercados_19.setVisible(true);lyr_SUSCEPTIBILIDADTortilleras_20.setVisible(true);lyr_HISTORICOS2021Incendiovehicular_21.setVisible(true);lyr_HISTRICOS2021Eventoelctrico_22.setVisible(true);lyr_HISTRICOS2021Fugadegas_23.setVisible(true);lyr_HISTRICOS2021Incendiocasahabitacin_24.setVisible(true);lyr_HISTRICOS2021Derramedecombustible2021_25.setVisible(true);lyr_HISTRICOS2021Eventoelctrico_26.setVisible(true);lyr_HISTRICOS2021Incendios2021_27.setVisible(true);lyr_HISTRICOS2021Incendiodecomercios2021_28.setVisible(true);lyr_HISTRICOS2020Eventoelctrico_29.setVisible(true);lyr_HISTRICOS2020Fugadeamoniaco_30.setVisible(true);lyr_HISTRICOS2020Fugadegas2020_31.setVisible(true);lyr_HISTRICOS2020Incendio_32.setVisible(true);lyr_HISTRICOS2020Incendioforestal_33.setVisible(true);lyr_HISTRICOS2020Incendiopastizal_34.setVisible(true);lyr_HISTRICOS2020Incendios_35.setVisible(true);lyr_HISTRICOS2020Incendioscarrizal2020_36.setVisible(true);lyr_HISTRICOS2020Quemadebasura_37.setVisible(true);lyr_HISTRICOS2020Derramedecombustible2020_38.setVisible(true);lyr_HISTRICOS2020Eventoelctrico2020_39.setVisible(true);lyr_HISTRICOS2020Explosin2020_40.setVisible(true);lyr_HISTRICOS2019Eventoelctrico_41.setVisible(true);lyr_HISTRICOS2019Fugadegas2019_42.setVisible(true);lyr_HISTRICOS2019Incendiocarrizal2019_43.setVisible(true);lyr_HISTRICOS2019IncendioCasaHabitacin2019_44.setVisible(true);lyr_HISTRICOS2019Incendiopastizal2019_45.setVisible(true);lyr_HISTRICOS2018Eventoelctrico2018_46.setVisible(true);lyr_HISTRICOS2018Caidaretirocableado2018_47.setVisible(true);lyr_HISTRICOS2018Derramedecombustible2018_48.setVisible(true);lyr_HISTRICOS2018Fugadegas2018_49.setVisible(true);lyr_HISTRICOS2018Incenciopastizal2018_50.setVisible(true);lyr_HISTRICOS2018Explosiones2018_51.setVisible(true);lyr_HISTRICOS2017Explosiones2017_52.setVisible(true);lyr_Incendioforestal_53.setVisible(true);lyr_ESCENARIOSROSALADOEstimacindedesbordamiento_54.setVisible(true);lyr_MAPASDERIESGOSEspaciocuencasriesgobajo_55.setVisible(true);lyr_MAPASDERIESGOSEspaciocuencasriesgomedio_56.setVisible(true);lyr_MAPASDERIESGOSEspaciocuencasriesgoalto_57.setVisible(true);lyr_HISTRICOS2021Afectacionesporlluvia2021_58.setVisible(true);lyr_HISTRICOS2020Granizo2020_59.setVisible(true);lyr_HISTRICOS2020Afectacionesporlluvia2020_60.setVisible(true);lyr_HISTRICOS2018AfectacionesporTormenta18_61.setVisible(true);lyr_HISTRICOS2018Afectacionesporfuertesvientos2018_62.setVisible(true);lyr_HISTRICOSAfectacionesporgranizo2018_63.setVisible(true);lyr_HISTRICOElhistrico_64.setVisible(true);lyr_Inundacinporaguasnegras_65.setVisible(true);lyr_PELIGROSDeslizamientoladerasCONABIO_66.setVisible(true);lyr_SUSCEPTIBILIDADErosinzonahjo_67.setVisible(true);lyr_MAPASDERIESGOFallasUTM_68.setVisible(true);lyr_MAPASDERIESGOZonanoaptaparahabitar_69.setVisible(true);lyr_HISTRICOS2020Huajuapansismo2020_70.setVisible(true);lyr_HISTRICOSHundimientos_71.setVisible(true);lyr_HISTRICOSHuajuapansismo20172019_72.setVisible(true);lyr_HDRICAHidrolneas_73.setVisible(true);lyr_INFORMACINCOMPLEMENTARIACalles_74.setVisible(true);lyr_INFORMACINCOMPLEMENTARIAFrentedemanzana_75.setVisible(true);lyr_INFORMACINCOMPLEMENTARIADivisinterritorial2020_76.setVisible(true);
var layersList = [group_MAPAS,group_OTROS,group_SOCIOORGANIZATIVO,group_SANITARIOECOLGICOS,group_QUMICOTECNOLGICOS,group_HIDROMETEOROLGICOS,group_GEOLGICOS,group_DATOSBSICOS];
lyr_Incendios2020_3.set('fieldAliases', {'TIPO': 'TIPO', 'FECHA': 'FECHA', 'HORA_SAL': 'HORA_SAL', 'HORA_LLEG': 'HORA_LLEG', 'HORA_TERM': 'HORA_TERM', 'LUGAR': 'LUGAR', 'REPORTA': 'REPORTA', 'UNIDADS': 'UNIDADS', 'MANDO': 'MANDO', 'PERSONAL': 'PERSONAL', 'OBSERVACNS': 'OBSERVACNS', 'GUARDIA': 'GUARDIA', 'FUENTE': 'FUENTE', 'OID': 'OID', 'LESIONADOS': 'LESIONADOS', 'FALLECIDOS': 'FALLECIDOS', 'ULT_INS': 'ULT_INS', 'CAMPO_1': 'CAMPO_1', });
lyr_SUSCEPTIBILIDADCementerios_4.set('fieldAliases', {'fid': 'fid', });
lyr_SUSCEPTIBILIDADEscuelas_5.set('fieldAliases', {'fid': 'fid', });
lyr_SUSCEPTIBILIDADMercado_6.set('fieldAliases', {'fid': 'fid', });
lyr_SUSCEPTIBILIDADParquesdeesparcimiento_7.set('fieldAliases', {'fid': 'fid', });
lyr_SUSCEPTIBILIDADPlantadeaguasresiduales_8.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2021Controlabejas_9.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2021Controldefauna_10.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2018Controlanimal_11.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2018Controlavejas_12.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2018Rescateanimal_13.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2018RescateyCapturadeanimaldomstico_14.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2018RetirodeAbejas_15.set('fieldAliases', {'fid': 'fid', });
lyr_ESCENARIOSRadiacintrmicafugadegasFlamaAzul_16.set('fieldAliases', {'fid': 'fid', });
lyr_SUSCEPTIBILIDADPolvorines_17.set('fieldAliases', {'fid': 'fid', });
lyr_SUSCEPTIBILIDADRosticeras_18.set('fieldAliases', {'fid': 'fid', });
lyr_SUSCEPTIBILIDADTanquesdegasdemercados_19.set('fieldAliases', {'fid': 'fid', });
lyr_SUSCEPTIBILIDADTortilleras_20.set('fieldAliases', {'fid': 'fid', });
lyr_HISTORICOS2021Incendiovehicular_21.set('fieldAliases', {'TIPO': 'TIPO', 'FECHA': 'FECHA', 'DIRECTION': 'DIRECTION', 'HORA_INI': 'HORA_INI', 'HORA_TERM': 'HORA_TERM', 'REPORTA': 'REPORTA', 'UNIDADS': 'UNIDADS', 'OBSERVACNS': 'OBSERVACNS', 'LESIONADS': 'LESIONADS', 'FALLECIDS': 'FALLECIDS', 'FUENTE': 'FUENTE', 'IMAGEN': 'IMAGEN', });
lyr_HISTRICOS2021Eventoelctrico_22.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2021Fugadegas_23.set('fieldAliases', {'FENOMENO': 'FENOMENO', 'TIPO': 'TIPO', 'LUGAR': 'LUGAR', 'FECHA': 'FECHA', 'HORA': 'HORA', 'UNIDADS': 'UNIDADS', 'CULMINA': 'CULMINA', 'REPORTA': 'REPORTA', 'OBSERVACNS': 'OBSERVACNS', 'LESIONADO': 'LESIONADO', 'FALLECIDOS': 'FALLECIDOS', 'FUENTE': 'FUENTE', });
lyr_HISTRICOS2021Incendiocasahabitacin_24.set('fieldAliases', {'TIPO': 'TIPO', 'FECHA': 'FECHA', 'HORA_INC': 'HORA_INC', 'HORA_SALI': 'HORA_SALI', 'LUGAR': 'LUGAR', 'REPORTA': 'REPORTA', 'UNIDADS': 'UNIDADS', 'OBSERVCNS': 'OBSERVCNS', 'FALLECIDOS': 'FALLECIDOS', 'LESIONADOS': 'LESIONADOS', 'FUENTE': 'FUENTE', });
lyr_HISTRICOS2021Derramedecombustible2021_25.set('fieldAliases', {'FECHA': 'FECHA', 'HORA_INI': 'HORA_INI', 'HORA_FIN': 'HORA_FIN', 'MANDO': 'MANDO', 'UNIDADES': 'UNIDADES', 'ELEMNTOS': 'ELEMNTOS', 'REPORTA': 'REPORTA', 'DIRECCION': 'DIRECCION', 'OBSRVCIONS': 'OBSRVCIONS', 'AUTORIDS': 'AUTORIDS', 'FUENTE': 'FUENTE', 'Tipo': 'Tipo', ' imagen': ' imagen', });
lyr_HISTRICOS2021Eventoelctrico_26.set('fieldAliases', {'TIPO': 'TIPO', 'FECHA': 'FECHA', 'LUGAR': 'LUGAR', 'HORA_SAL': 'HORA_SAL', 'HORA_INIC': 'HORA_INIC', 'HORA_TERM': 'HORA_TERM', 'REPORTA': 'REPORTA', 'UNIDADS': 'UNIDADS', 'OBSERVACNS': 'OBSERVACNS', 'LESIONADOS': 'LESIONADOS', 'FALLECIDOS': 'FALLECIDOS', 'FUENTE': 'FUENTE', 'PASA_REP': 'PASA_REP', });
lyr_HISTRICOS2021Incendios2021_27.set('fieldAliases', {'FECHA': 'FECHA', 'HORA_INI': 'HORA_INI', 'HORA_FIN': 'HORA_FIN', 'REPORTA': 'REPORTA', 'UNIDADS': 'UNIDADS', 'LUGAR': 'LUGAR', 'AUT_AUXI': 'AUT_AUXI', 'OBSRVCIONS': 'OBSRVCIONS', 'FUENTE': 'FUENTE', 'SUBCATEGOR': 'SUBCATEGOR', 'Area': 'Area', 'IMAGEN': 'IMAGEN', 'IMAGEN2': 'IMAGEN2', 'CATEGORIA': 'CATEGORIA', });
lyr_HISTRICOS2021Incendiodecomercios2021_28.set('fieldAliases', {'TIPO': 'TIPO', 'FECHA': 'FECHA', 'HORA_INC': 'HORA_INC', 'HORA_SALI': 'HORA_SALI', 'LUGAR': 'LUGAR', 'REPORTA': 'REPORTA', 'UNIDADS': 'UNIDADS', 'OBSERVCNS': 'OBSERVCNS', 'FALLECIDOS': 'FALLECIDOS', 'LESIONADOS': 'LESIONADOS', 'FUENTE': 'FUENTE', });
lyr_HISTRICOS2020Eventoelctrico_29.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2020Fugadeamoniaco_30.set('fieldAliases', {'fecha': 'fecha', 'hora_ini': 'hora_ini', 'hora_fin': 'hora_fin', 'evento': 'evento', 'unidades': 'unidades', 'otros': 'otros', 'obsrvcions': 'obsrvcions', 'fuente': 'fuente', });
lyr_HISTRICOS2020Fugadegas2020_31.set('fieldAliases', {'FENOMENO': 'FENOMENO', 'TIPO': 'TIPO', 'LUGAR': 'LUGAR', 'FECHA': 'FECHA', 'HORA': 'HORA', 'UNIDADS': 'UNIDADS', 'CULMINA': 'CULMINA', 'OBSERVACNS': 'OBSERVACNS', 'LESIONADO': 'LESIONADO', 'FALLECIDOS': 'FALLECIDOS', 'FUENTE': 'FUENTE', });
lyr_HISTRICOS2020Incendio_32.set('fieldAliases', {'TIPO': 'TIPO', 'FECHA': 'FECHA', 'HORA_SAL': 'HORA_SAL', 'HORA_ARRIB': 'HORA_ARRIB', 'HORA_TERM': 'HORA_TERM', 'RETORN_BAS': 'RETORN_BAS', 'LLEG_BASE': 'LLEG_BASE', 'LUGAR': 'LUGAR', 'GUARDIA': 'GUARDIA', 'REPORTA': 'REPORTA', 'UNIDADS': 'UNIDADS', 'MANDO': 'MANDO', 'PERSONL': 'PERSONL', 'OID': 'OID', 'OBSERVACNS': 'OBSERVACNS', 'FUENTE': 'FUENTE', });
lyr_HISTRICOS2020Incendioforestal_33.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2020Incendiopastizal_34.set('fieldAliases', {'FECHA': 'FECHA', 'HORA_INI': 'HORA_INI', 'HORA_FIN': 'HORA_FIN', 'REPORTA': 'REPORTA', 'UNIDDS': 'UNIDDS', 'LUGAR': 'LUGAR', 'OBSERVACNS': 'OBSERVACNS', 'FUENTE': 'FUENTE', 'CATEGORIA': 'CATEGORIA', 'SUBCATEGOR': 'SUBCATEGOR', });
lyr_HISTRICOS2020Incendios_35.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2020Incendioscarrizal2020_36.set('fieldAliases', {'TIPO': 'TIPO', 'FECHA': 'FECHA', 'HORA_SAL': 'HORA_SAL', 'HORA_LLEG': 'HORA_LLEG', 'HORA_TERM': 'HORA_TERM', 'LUGAR': 'LUGAR', 'REPORTA': 'REPORTA', 'UNIDADS': 'UNIDADS', 'OBSERVACNS': 'OBSERVACNS', 'FUENTE': 'FUENTE', });
lyr_HISTRICOS2020Quemadebasura_37.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2020Derramedecombustible2020_38.set('fieldAliases', {'TIPO': 'TIPO', 'FECHA': 'FECHA', 'HORA_S': 'HORA_S', 'OBSERVACN': 'OBSERVACN', 'LUGAR': 'LUGAR', 'FUENTE': 'FUENTE', 'REPORTA': 'REPORTA', 'HORA_TER': 'HORA_TER', });
lyr_HISTRICOS2020Eventoelctrico2020_39.set('fieldAliases', {'TIPO': 'TIPO', 'FECHA': 'FECHA', 'LUGAR': 'LUGAR', 'HORA_SAL': 'HORA_SAL', 'HORA_INIC': 'HORA_INIC', 'HORA_TERM': 'HORA_TERM', 'REPORTA': 'REPORTA', 'UNIDADS': 'UNIDADS', 'OBSERVACNS': 'OBSERVACNS', 'LESIONADOS': 'LESIONADOS', 'FALLECIDOS': 'FALLECIDOS', 'FUENTE': 'FUENTE', 'PASA_REP': 'PASA_REP', });
lyr_HISTRICOS2020Explosin2020_40.set('fieldAliases', {'FENOMENO': 'FENOMENO', 'TIPO': 'TIPO', 'FECHA': 'FECHA', 'HORA_SALI': 'HORA_SALI', 'HORA_INIC': 'HORA_INIC', 'HORA_TERM': 'HORA_TERM', 'LUGAR': 'LUGAR', 'REPORTA': 'REPORTA', 'ACUDE': 'ACUDE', 'OBSERVACNS': 'OBSERVACNS', 'LESIONADOS': 'LESIONADOS', 'FALLECIDOS': 'FALLECIDOS', 'FUENTE': 'FUENTE', });
lyr_HISTRICOS2019Eventoelctrico_41.set('fieldAliases', {'TIPO': 'TIPO', 'INSP_PRIM': 'INSP_PRIM', 'HORA': 'HORA', 'ULT_INSP': 'ULT_INSP', 'UBICATION': 'UBICATION', 'UNIDADES': 'UNIDADES', 'OBSERVAC': 'OBSERVAC', 'LESIONADOS': 'LESIONADOS', 'FALELCIDOS': 'FALELCIDOS', 'FUENTE': 'FUENTE', });
lyr_HISTRICOS2019Fugadegas2019_42.set('fieldAliases', {'FENOMENO': 'FENOMENO', 'LUGAR': 'LUGAR', 'FECHA': 'FECHA', 'HORA': 'HORA', 'UNIDADS': 'UNIDADS', 'CULMINA': 'CULMINA', 'OBSERVACS': 'OBSERVACS', 'LESIONADS': 'LESIONADS', 'FALLECIDOS': 'FALLECIDOS', 'FUENTE': 'FUENTE', });
lyr_HISTRICOS2019Incendiocarrizal2019_43.set('fieldAliases', {'TIPO': 'TIPO', 'FECHA': 'FECHA', 'HORA_SALI': 'HORA_SALI', 'HORA_ARRIB': 'HORA_ARRIB', 'HORA_LLEGA': 'HORA_LLEGA', 'HORA_TERM': 'HORA_TERM', 'LUGAR': 'LUGAR', 'REPORTA': 'REPORTA', 'UNIDADS': 'UNIDADS', 'OBSERVACN': 'OBSERVACN', 'GUARDIA': 'GUARDIA', 'FUENTE': 'FUENTE', });
lyr_HISTRICOS2019IncendioCasaHabitacin2019_44.set('fieldAliases', {'TIPO': 'TIPO', 'FECHA': 'FECHA', 'HORA_INC': 'HORA_INC', 'HORA_SALI': 'HORA_SALI', 'LUGAR': 'LUGAR', 'REPORTA': 'REPORTA', 'UNIDADS': 'UNIDADS', 'OBSERVCNS': 'OBSERVCNS', 'FALLECIDOS': 'FALLECIDOS', 'LESIONADOS': 'LESIONADOS', 'FUENTE': 'FUENTE', });
lyr_HISTRICOS2019Incendiopastizal2019_45.set('fieldAliases', {'FECHA': 'FECHA', 'HORA_INI': 'HORA_INI', 'HORA_FIN': 'HORA_FIN', 'REPORTA': 'REPORTA', 'UNIDADS': 'UNIDADS', 'LUGAR': 'LUGAR', 'AUT_AUXI': 'AUT_AUXI', 'OBSRVCIONS': 'OBSRVCIONS', 'FUENTE': 'FUENTE', });
lyr_HISTRICOS2018Eventoelctrico2018_46.set('fieldAliases', {'FECHA': 'FECHA', 'HORA': 'HORA', 'UBIKCION': 'UBIKCION', 'REPORTA': 'REPORTA', 'OBSERVA': 'OBSERVA', 'RPONSAB': 'RPONSAB', 'LSIONDOS': 'LSIONDOS', 'P_ORIGEN': 'P_ORIGEN', 'FUENTE': 'FUENTE', });
lyr_HISTRICOS2018Caidaretirocableado2018_47.set('fieldAliases', {'FECHA': 'FECHA', 'DIRECC': 'DIRECC', 'HORA': 'HORA', 'TIPO_CB': 'TIPO_CB', 'UNIDAD': 'UNIDAD', 'TRMINO': 'TRMINO', 'RPORTA': 'RPORTA', 'OBSERV': 'OBSERV', 'FUENTE': 'FUENTE', });
lyr_HISTRICOS2018Derramedecombustible2018_48.set('fieldAliases', {'FECHA': 'FECHA', 'HORA_INI': 'HORA_INI', 'HORA_FIN': 'HORA_FIN', 'UNIDADES': 'UNIDADES', 'REPORTA': 'REPORTA', 'DIRECCION': 'DIRECCION', 'OBSRVCIONS': 'OBSRVCIONS', 'AUTORIDS': 'AUTORIDS', 'FUENTE': 'FUENTE', });
lyr_HISTRICOS2018Fugadegas2018_49.set('fieldAliases', {'FECHA': 'FECHA', 'HORA': 'HORA', 'UBIKCION': 'UBIKCION', 'UNIDADS': 'UNIDADS', 'OBSEVCIONS': 'OBSEVCIONS', 'EMPRESA': 'EMPRESA', 'TIPO_TANQ': 'TIPO_TANQ', 'REPORTA': 'REPORTA', 'FINALIZA': 'FINALIZA', 'TIP_LUGAR': 'TIP_LUGAR', 'FUENTE': 'FUENTE', });
lyr_HISTRICOS2018Incenciopastizal2018_50.set('fieldAliases', {'FECHA': 'FECHA', 'HORA_INI': 'HORA_INI', 'HORA_FIN': 'HORA_FIN', 'REPORTA': 'REPORTA', 'UNIDADES': 'UNIDADES', 'LUGAR': 'LUGAR', 'AUT_AUX': 'AUT_AUX', 'OBSVCIONS': 'OBSVCIONS', 'APROXQUEMA': 'APROXQUEMA', 'FUENTE': 'FUENTE', });
lyr_HISTRICOS2018Explosiones2018_51.set('fieldAliases', {'FENOMNO': 'FENOMNO', 'LUGAR': 'LUGAR', 'FECHA': 'FECHA', 'HORA': 'HORA', 'ACUDE': 'ACUDE', 'LSIONADOS': 'LSIONADOS', 'FALLECIDOS': 'FALLECIDOS', 'REPORTA': 'REPORTA', 'OBSRVCIONS': 'OBSRVCIONS', 'FUENTE': 'FUENTE', });
lyr_HISTRICOS2017Explosiones2017_52.set('fieldAliases', {'FENOM': 'FENOM', 'LUGAR': 'LUGAR', 'ACUDE': 'ACUDE', 'HERIDOS': 'HERIDOS', 'FALLECIDS': 'FALLECIDS', 'OID': 'OID', 'HORA': 'HORA', 'FECHA': 'FECHA', 'REPORTA': 'REPORTA', 'FUENTE': 'FUENTE', });
lyr_Incendioforestal_53.set('fieldAliases', {'TIPO': 'TIPO', 'FECHA': 'FECHA', 'LUGAR': 'LUGAR', 'HORA_SAL': 'HORA_SAL', 'HORA_INIC': 'HORA_INIC', 'HORA_TERM': 'HORA_TERM', 'UNIDADS': 'UNIDADS', 'REPORTA': 'REPORTA', 'OBSERCANCS': 'OBSERCANCS', 'AREA_APRO': 'AREA_APRO', 'FUENTE': 'FUENTE', });
lyr_ESCENARIOSROSALADOEstimacindedesbordamiento_54.set('fieldAliases', {'fid': 'fid', });
lyr_MAPASDERIESGOSEspaciocuencasriesgobajo_55.set('fieldAliases', {'fid': 'fid', });
lyr_MAPASDERIESGOSEspaciocuencasriesgomedio_56.set('fieldAliases', {'fid': 'fid', });
lyr_MAPASDERIESGOSEspaciocuencasriesgoalto_57.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2021Afectacionesporlluvia2021_58.set('fieldAliases', {'TIPO': 'TIPO', 'FECHA': 'FECHA', 'LUGAR': 'LUGAR', 'HORA': 'HORA', 'UNIDADES': 'UNIDADES', 'MANDO': 'MANDO', 'PERSONAL': 'PERSONAL', 'REPORTA': 'REPORTA', 'OBSERVACIO': 'OBSERVACIO', 'PROPIETARI': 'PROPIETARI', 'NINOS': 'NINOS', 'ADULTOS': 'ADULTOS', 'TOTAL_FAM': 'TOTAL_FAM', 'LESIONADOS': 'LESIONADOS', 'FALLECIDOS': 'FALLECIDOS', 'OTS_AUTORI': 'OTS_AUTORI', 'CONTACTO': 'CONTACTO', 'FUENTE': 'FUENTE', 'imagen': 'imagen', });
lyr_HISTRICOS2020Granizo2020_59.set('fieldAliases', {'id': 'id', 'Fecha': 'Fecha', 'Comandante': 'Comandante', 'Afectacion': 'Afectacion', });
lyr_HISTRICOS2020Afectacionesporlluvia2020_60.set('fieldAliases', {'TIPO': 'TIPO', 'FECHA': 'FECHA', 'LUGAR': 'LUGAR', 'HORA': 'HORA', 'UNIDADS': 'UNIDADS', 'REPORTA': 'REPORTA', 'OBSERVACNS': 'OBSERVACNS', 'OTS_AUTORI': 'OTS_AUTORI', 'FUENTE': 'FUENTE', });
lyr_HISTRICOS2018AfectacionesporTormenta18_61.set('fieldAliases', {'FECHA': 'FECHA', 'HORA': 'HORA', 'REPORTA': 'REPORTA', 'OBSERVACIO': 'OBSERVACIO', 'NINIOS': 'NINIOS', 'A_MAYORES': 'A_MAYORES', 'ADULTOS': 'ADULTOS', 'T_CONSTR': 'T_CONSTR', 'TOTAL_FAM': 'TOTAL_FAM', 'FALLECIDOS': 'FALLECIDOS', 'FUENTE': 'FUENTE', });
lyr_HISTRICOS2018Afectacionesporfuertesvientos2018_62.set('fieldAliases', {'FECHA': 'FECHA', 'HORA': 'HORA', 'DIRECCIN': 'DIRECCIN', 'MANDO': 'MANDO', 'PRSONAL': 'PRSONAL', 'OID': 'OID', 'UNIDADES': 'UNIDADES', 'REPORTA': 'REPORTA', 'OBSVCIONS': 'OBSVCIONS', 'FUENTE': 'FUENTE', });
lyr_HISTRICOSAfectacionesporgranizo2018_63.set('fieldAliases', {'CAMPO_0': 'CAMPO_0', 'CAMPO_1': 'CAMPO_1', 'CAMPO_2': 'CAMPO_2', 'CAMPO_3': 'CAMPO_3', 'CAMPO_4': 'CAMPO_4', 'OID': 'OID', });
lyr_HISTRICOElhistrico_64.set('fieldAliases', {'fid': 'fid', });
lyr_Inundacinporaguasnegras_65.set('fieldAliases', {'TIPO': 'TIPO', 'FECHA': 'FECHA', 'LUGAR': 'LUGAR', 'HORA': 'HORA', 'REPORTA': 'REPORTA', 'UNIDADS': 'UNIDADS', 'OBSERVACNS': 'OBSERVACNS', 'ACCIONES': 'ACCIONES', 'FUENTE': 'FUENTE', });
lyr_PELIGROSDeslizamientoladerasCONABIO_66.set('fieldAliases', {'fid': 'fid', });
lyr_SUSCEPTIBILIDADErosinzonahjo_67.set('fieldAliases', {'fid': 'fid', });
lyr_MAPASDERIESGOFallasUTM_68.set('fieldAliases', {'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'CNAL250L_': 'CNAL250L_', 'CNAL250L_I': 'CNAL250L_I', 'FC': 'FC', 'ENTIDAD': 'ENTIDAD', 'TIPO': 'TIPO', 'MOV_HOR': 'MOV_HOR', 'MOV_VER': 'MOV_VER', 'INCLINA_': 'INCLINA_', 'BUZAMIENTO': 'BUZAMIENTO', 'REPRESENTA': 'REPRESENTA', 'OID': 'OID', });
lyr_MAPASDERIESGOZonanoaptaparahabitar_69.set('fieldAliases', {'fid': 'fid', });
lyr_HISTRICOS2020Huajuapansismo2020_70.set('fieldAliases', {'NOM_LIMPIE': 'NOM_LIMPIE', 'FECHA': 'FECHA', 'NOM_NUM': 'NOM_NUM', 'CVE': 'CVE', 'NUM_LOGBG': 'NUM_LOGBG', 'LONGITUD': 'LONGITUD', 'LATITUD': 'LATITUD', 'DAN_SEDAT': 'DAN_SEDAT', 'SISMOS': 'SISMOS', 'DIRECCION': 'DIRECCION', 'REFERE': 'REFERE', 'OBSERVACNS': 'OBSERVACNS', 'CAMPO_12': 'CAMPO_12', 'OID': 'OID', });
lyr_HISTRICOSHundimientos_71.set('fieldAliases', {'FECHA': 'FECHA', 'HORA_INI': 'HORA_INI', 'HORA_FIN': 'HORA_FIN', 'UNIDADES': 'UNIDADES', 'REPORTA': 'REPORTA', 'LUGAR': 'LUGAR', 'OBSRVCIONS': 'OBSRVCIONS', 'REPORTE': 'REPORTE', 'FUENTE': 'FUENTE', });
lyr_HISTRICOSHuajuapansismo20172019_72.set('fieldAliases', {'fid': 'fid', });
lyr_HDRICAHidrolneas_73.set('fieldAliases', {'fid': 'fid', });
lyr_INFORMACINCOMPLEMENTARIACalles_74.set('fieldAliases', {'fid': 'fid', });
lyr_INFORMACINCOMPLEMENTARIAFrentedemanzana_75.set('fieldAliases', {'fid': 'fid', });
lyr_INFORMACINCOMPLEMENTARIADivisinterritorial2020_76.set('fieldAliases', {'fid': 'fid', });
lyr_Incendios2020_3.set('fieldImages', {'TIPO': '', 'FECHA': '', 'HORA_SAL': '', 'HORA_LLEG': '', 'HORA_TERM': '', 'LUGAR': '', 'REPORTA': '', 'UNIDADS': '', 'MANDO': '', 'PERSONAL': '', 'OBSERVACNS': '', 'GUARDIA': '', 'FUENTE': '', 'OID': '', 'LESIONADOS': '', 'FALLECIDOS': '', 'ULT_INS': '', 'CAMPO_1': '', });
lyr_SUSCEPTIBILIDADCementerios_4.set('fieldImages', {'fid': 'TextEdit', });
lyr_SUSCEPTIBILIDADEscuelas_5.set('fieldImages', {'fid': 'TextEdit', });
lyr_SUSCEPTIBILIDADMercado_6.set('fieldImages', {'fid': 'TextEdit', });
lyr_SUSCEPTIBILIDADParquesdeesparcimiento_7.set('fieldImages', {'fid': 'TextEdit', });
lyr_SUSCEPTIBILIDADPlantadeaguasresiduales_8.set('fieldImages', {'fid': '', });
lyr_HISTRICOS2021Controlabejas_9.set('fieldImages', {'fid': '', });
lyr_HISTRICOS2021Controldefauna_10.set('fieldImages', {'fid': '', });
lyr_HISTRICOS2018Controlanimal_11.set('fieldImages', {'fid': '', });
lyr_HISTRICOS2018Controlavejas_12.set('fieldImages', {'fid': '', });
lyr_HISTRICOS2018Rescateanimal_13.set('fieldImages', {'fid': '', });
lyr_HISTRICOS2018RescateyCapturadeanimaldomstico_14.set('fieldImages', {'fid': '', });
lyr_HISTRICOS2018RetirodeAbejas_15.set('fieldImages', {'fid': '', });
lyr_ESCENARIOSRadiacintrmicafugadegasFlamaAzul_16.set('fieldImages', {'fid': 'TextEdit', });
lyr_SUSCEPTIBILIDADPolvorines_17.set('fieldImages', {'fid': 'TextEdit', });
lyr_SUSCEPTIBILIDADRosticeras_18.set('fieldImages', {'fid': 'TextEdit', });
lyr_SUSCEPTIBILIDADTanquesdegasdemercados_19.set('fieldImages', {'fid': 'TextEdit', });
lyr_SUSCEPTIBILIDADTortilleras_20.set('fieldImages', {'fid': 'TextEdit', });
lyr_HISTORICOS2021Incendiovehicular_21.set('fieldImages', {'TIPO': '', 'FECHA': '', 'DIRECTION': '', 'HORA_INI': '', 'HORA_TERM': '', 'REPORTA': '', 'UNIDADS': '', 'OBSERVACNS': '', 'LESIONADS': '', 'FALLECIDS': '', 'FUENTE': '', 'IMAGEN': '', });
lyr_HISTRICOS2021Eventoelctrico_22.set('fieldImages', {'fid': 'TextEdit', });
lyr_HISTRICOS2021Fugadegas_23.set('fieldImages', {'FENOMENO': '', 'TIPO': '', 'LUGAR': '', 'FECHA': '', 'HORA': '', 'UNIDADS': '', 'CULMINA': '', 'REPORTA': '', 'OBSERVACNS': '', 'LESIONADO': '', 'FALLECIDOS': '', 'FUENTE': '', });
lyr_HISTRICOS2021Incendiocasahabitacin_24.set('fieldImages', {'TIPO': '', 'FECHA': '', 'HORA_INC': '', 'HORA_SALI': '', 'LUGAR': '', 'REPORTA': '', 'UNIDADS': '', 'OBSERVCNS': '', 'FALLECIDOS': '', 'LESIONADOS': '', 'FUENTE': '', });
lyr_HISTRICOS2021Derramedecombustible2021_25.set('fieldImages', {'FECHA': '', 'HORA_INI': '', 'HORA_FIN': '', 'MANDO': '', 'UNIDADES': '', 'ELEMNTOS': '', 'REPORTA': '', 'DIRECCION': '', 'OBSRVCIONS': '', 'AUTORIDS': '', 'FUENTE': '', 'Tipo': '', ' imagen': '', });
lyr_HISTRICOS2021Eventoelctrico_26.set('fieldImages', {'TIPO': '', 'FECHA': '', 'LUGAR': '', 'HORA_SAL': '', 'HORA_INIC': '', 'HORA_TERM': '', 'REPORTA': '', 'UNIDADS': '', 'OBSERVACNS': '', 'LESIONADOS': '', 'FALLECIDOS': '', 'FUENTE': '', 'PASA_REP': '', });
lyr_HISTRICOS2021Incendios2021_27.set('fieldImages', {'FECHA': '', 'HORA_INI': '', 'HORA_FIN': '', 'REPORTA': '', 'UNIDADS': '', 'LUGAR': '', 'AUT_AUXI': '', 'OBSRVCIONS': '', 'FUENTE': '', 'SUBCATEGOR': '', 'Area': '', 'IMAGEN': '', 'IMAGEN2': '', 'CATEGORIA': '', });
lyr_HISTRICOS2021Incendiodecomercios2021_28.set('fieldImages', {'TIPO': '', 'FECHA': '', 'HORA_INC': '', 'HORA_SALI': '', 'LUGAR': '', 'REPORTA': '', 'UNIDADS': '', 'OBSERVCNS': '', 'FALLECIDOS': '', 'LESIONADOS': '', 'FUENTE': '', });
lyr_HISTRICOS2020Eventoelctrico_29.set('fieldImages', {'fid': 'TextEdit', });
lyr_HISTRICOS2020Fugadeamoniaco_30.set('fieldImages', {'fecha': '', 'hora_ini': '', 'hora_fin': '', 'evento': '', 'unidades': '', 'otros': '', 'obsrvcions': '', 'fuente': '', });
lyr_HISTRICOS2020Fugadegas2020_31.set('fieldImages', {'FENOMENO': '', 'TIPO': '', 'LUGAR': '', 'FECHA': '', 'HORA': '', 'UNIDADS': '', 'CULMINA': '', 'OBSERVACNS': '', 'LESIONADO': '', 'FALLECIDOS': '', 'FUENTE': '', });
lyr_HISTRICOS2020Incendio_32.set('fieldImages', {'TIPO': '', 'FECHA': '', 'HORA_SAL': '', 'HORA_ARRIB': '', 'HORA_TERM': '', 'RETORN_BAS': '', 'LLEG_BASE': '', 'LUGAR': '', 'GUARDIA': '', 'REPORTA': '', 'UNIDADS': '', 'MANDO': '', 'PERSONL': '', 'OID': '', 'OBSERVACNS': '', 'FUENTE': '', });
lyr_HISTRICOS2020Incendioforestal_33.set('fieldImages', {'fid': '', });
lyr_HISTRICOS2020Incendiopastizal_34.set('fieldImages', {'FECHA': '', 'HORA_INI': '', 'HORA_FIN': '', 'REPORTA': '', 'UNIDDS': '', 'LUGAR': '', 'OBSERVACNS': '', 'FUENTE': '', 'CATEGORIA': '', 'SUBCATEGOR': '', });
lyr_HISTRICOS2020Incendios_35.set('fieldImages', {'fid': 'TextEdit', });
lyr_HISTRICOS2020Incendioscarrizal2020_36.set('fieldImages', {'TIPO': 'TextEdit', 'FECHA': 'TextEdit', 'HORA_SAL': 'TextEdit', 'HORA_LLEG': 'TextEdit', 'HORA_TERM': 'TextEdit', 'LUGAR': 'TextEdit', 'REPORTA': 'TextEdit', 'UNIDADS': 'TextEdit', 'OBSERVACNS': 'TextEdit', 'FUENTE': 'TextEdit', });
lyr_HISTRICOS2020Quemadebasura_37.set('fieldImages', {'fid': 'TextEdit', });
lyr_HISTRICOS2020Derramedecombustible2020_38.set('fieldImages', {'TIPO': 'TextEdit', 'FECHA': 'TextEdit', 'HORA_S': 'TextEdit', 'OBSERVACN': 'TextEdit', 'LUGAR': 'TextEdit', 'FUENTE': 'TextEdit', 'REPORTA': 'TextEdit', 'HORA_TER': 'TextEdit', });
lyr_HISTRICOS2020Eventoelctrico2020_39.set('fieldImages', {'TIPO': 'TextEdit', 'FECHA': 'TextEdit', 'LUGAR': 'TextEdit', 'HORA_SAL': 'TextEdit', 'HORA_INIC': 'TextEdit', 'HORA_TERM': 'TextEdit', 'REPORTA': 'TextEdit', 'UNIDADS': 'TextEdit', 'OBSERVACNS': 'TextEdit', 'LESIONADOS': 'TextEdit', 'FALLECIDOS': 'TextEdit', 'FUENTE': 'TextEdit', 'PASA_REP': 'TextEdit', });
lyr_HISTRICOS2020Explosin2020_40.set('fieldImages', {'FENOMENO': 'TextEdit', 'TIPO': 'TextEdit', 'FECHA': 'TextEdit', 'HORA_SALI': 'TextEdit', 'HORA_INIC': 'TextEdit', 'HORA_TERM': 'TextEdit', 'LUGAR': 'TextEdit', 'REPORTA': 'TextEdit', 'ACUDE': 'TextEdit', 'OBSERVACNS': 'TextEdit', 'LESIONADOS': 'TextEdit', 'FALLECIDOS': 'TextEdit', 'FUENTE': 'TextEdit', });
lyr_HISTRICOS2019Eventoelctrico_41.set('fieldImages', {'TIPO': 'TextEdit', 'INSP_PRIM': 'TextEdit', 'HORA': 'TextEdit', 'ULT_INSP': 'TextEdit', 'UBICATION': 'TextEdit', 'UNIDADES': 'TextEdit', 'OBSERVAC': 'TextEdit', 'LESIONADOS': 'TextEdit', 'FALELCIDOS': 'TextEdit', 'FUENTE': 'TextEdit', });
lyr_HISTRICOS2019Fugadegas2019_42.set('fieldImages', {'FENOMENO': 'TextEdit', 'LUGAR': 'TextEdit', 'FECHA': 'TextEdit', 'HORA': 'TextEdit', 'UNIDADS': 'TextEdit', 'CULMINA': 'TextEdit', 'OBSERVACS': 'TextEdit', 'LESIONADS': 'TextEdit', 'FALLECIDOS': 'TextEdit', 'FUENTE': 'TextEdit', });
lyr_HISTRICOS2019Incendiocarrizal2019_43.set('fieldImages', {'TIPO': 'TextEdit', 'FECHA': 'TextEdit', 'HORA_SALI': 'TextEdit', 'HORA_ARRIB': 'TextEdit', 'HORA_LLEGA': 'TextEdit', 'HORA_TERM': 'TextEdit', 'LUGAR': 'TextEdit', 'REPORTA': 'TextEdit', 'UNIDADS': 'TextEdit', 'OBSERVACN': 'TextEdit', 'GUARDIA': 'TextEdit', 'FUENTE': 'TextEdit', });
lyr_HISTRICOS2019IncendioCasaHabitacin2019_44.set('fieldImages', {'TIPO': 'TextEdit', 'FECHA': 'TextEdit', 'HORA_INC': 'TextEdit', 'HORA_SALI': 'TextEdit', 'LUGAR': 'TextEdit', 'REPORTA': 'TextEdit', 'UNIDADS': 'TextEdit', 'OBSERVCNS': 'TextEdit', 'FALLECIDOS': 'TextEdit', 'LESIONADOS': 'TextEdit', 'FUENTE': 'TextEdit', });
lyr_HISTRICOS2019Incendiopastizal2019_45.set('fieldImages', {'FECHA': 'TextEdit', 'HORA_INI': 'TextEdit', 'HORA_FIN': 'TextEdit', 'REPORTA': 'TextEdit', 'UNIDADS': 'TextEdit', 'LUGAR': 'TextEdit', 'AUT_AUXI': 'TextEdit', 'OBSRVCIONS': 'TextEdit', 'FUENTE': 'TextEdit', });
lyr_HISTRICOS2018Eventoelctrico2018_46.set('fieldImages', {'FECHA': 'TextEdit', 'HORA': 'TextEdit', 'UBIKCION': 'TextEdit', 'REPORTA': 'TextEdit', 'OBSERVA': 'TextEdit', 'RPONSAB': 'TextEdit', 'LSIONDOS': 'TextEdit', 'P_ORIGEN': 'TextEdit', 'FUENTE': 'TextEdit', });
lyr_HISTRICOS2018Caidaretirocableado2018_47.set('fieldImages', {'FECHA': 'TextEdit', 'DIRECC': 'TextEdit', 'HORA': 'TextEdit', 'TIPO_CB': 'TextEdit', 'UNIDAD': 'TextEdit', 'TRMINO': 'TextEdit', 'RPORTA': 'TextEdit', 'OBSERV': 'TextEdit', 'FUENTE': 'TextEdit', });
lyr_HISTRICOS2018Derramedecombustible2018_48.set('fieldImages', {'FECHA': 'TextEdit', 'HORA_INI': 'TextEdit', 'HORA_FIN': 'TextEdit', 'UNIDADES': 'TextEdit', 'REPORTA': 'TextEdit', 'DIRECCION': 'TextEdit', 'OBSRVCIONS': 'TextEdit', 'AUTORIDS': 'TextEdit', 'FUENTE': 'TextEdit', });
lyr_HISTRICOS2018Fugadegas2018_49.set('fieldImages', {'FECHA': 'TextEdit', 'HORA': 'TextEdit', 'UBIKCION': 'TextEdit', 'UNIDADS': 'TextEdit', 'OBSEVCIONS': 'TextEdit', 'EMPRESA': 'TextEdit', 'TIPO_TANQ': 'TextEdit', 'REPORTA': 'TextEdit', 'FINALIZA': 'TextEdit', 'TIP_LUGAR': 'TextEdit', 'FUENTE': 'TextEdit', });
lyr_HISTRICOS2018Incenciopastizal2018_50.set('fieldImages', {'FECHA': 'TextEdit', 'HORA_INI': 'TextEdit', 'HORA_FIN': 'TextEdit', 'REPORTA': 'TextEdit', 'UNIDADES': 'TextEdit', 'LUGAR': 'TextEdit', 'AUT_AUX': 'TextEdit', 'OBSVCIONS': 'TextEdit', 'APROXQUEMA': 'TextEdit', 'FUENTE': 'TextEdit', });
lyr_HISTRICOS2018Explosiones2018_51.set('fieldImages', {'FENOMNO': 'TextEdit', 'LUGAR': 'TextEdit', 'FECHA': 'TextEdit', 'HORA': 'TextEdit', 'ACUDE': 'TextEdit', 'LSIONADOS': 'TextEdit', 'FALLECIDOS': 'TextEdit', 'REPORTA': 'TextEdit', 'OBSRVCIONS': 'TextEdit', 'FUENTE': 'TextEdit', });
lyr_HISTRICOS2017Explosiones2017_52.set('fieldImages', {'FENOM': 'TextEdit', 'LUGAR': 'TextEdit', 'ACUDE': 'TextEdit', 'HERIDOS': 'TextEdit', 'FALLECIDS': 'TextEdit', 'OID': 'Range', 'HORA': 'TextEdit', 'FECHA': 'TextEdit', 'REPORTA': 'TextEdit', 'FUENTE': 'TextEdit', });
lyr_Incendioforestal_53.set('fieldImages', {'TIPO': '', 'FECHA': '', 'LUGAR': '', 'HORA_SAL': '', 'HORA_INIC': '', 'HORA_TERM': '', 'UNIDADS': '', 'REPORTA': '', 'OBSERCANCS': '', 'AREA_APRO': '', 'FUENTE': '', });
lyr_ESCENARIOSROSALADOEstimacindedesbordamiento_54.set('fieldImages', {'fid': 'TextEdit', });
lyr_MAPASDERIESGOSEspaciocuencasriesgobajo_55.set('fieldImages', {'fid': 'TextEdit', });
lyr_MAPASDERIESGOSEspaciocuencasriesgomedio_56.set('fieldImages', {'fid': 'TextEdit', });
lyr_MAPASDERIESGOSEspaciocuencasriesgoalto_57.set('fieldImages', {'fid': 'TextEdit', });
lyr_HISTRICOS2021Afectacionesporlluvia2021_58.set('fieldImages', {'TIPO': 'TextEdit', 'FECHA': 'TextEdit', 'LUGAR': 'TextEdit', 'HORA': 'TextEdit', 'UNIDADES': 'TextEdit', 'MANDO': 'TextEdit', 'PERSONAL': 'TextEdit', 'REPORTA': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'PROPIETARI': 'TextEdit', 'NINOS': 'TextEdit', 'ADULTOS': 'TextEdit', 'TOTAL_FAM': 'TextEdit', 'LESIONADOS': 'TextEdit', 'FALLECIDOS': 'TextEdit', 'OTS_AUTORI': 'TextEdit', 'CONTACTO': 'TextEdit', 'FUENTE': 'TextEdit', 'imagen': 'TextEdit', });
lyr_HISTRICOS2020Granizo2020_59.set('fieldImages', {'id': 'TextEdit', 'Fecha': 'DateTime', 'Comandante': 'TextEdit', 'Afectacion': 'TextEdit', });
lyr_HISTRICOS2020Afectacionesporlluvia2020_60.set('fieldImages', {'TIPO': 'TextEdit', 'FECHA': 'TextEdit', 'LUGAR': 'TextEdit', 'HORA': 'TextEdit', 'UNIDADS': 'TextEdit', 'REPORTA': 'TextEdit', 'OBSERVACNS': 'TextEdit', 'OTS_AUTORI': 'TextEdit', 'FUENTE': 'TextEdit', });
lyr_HISTRICOS2018AfectacionesporTormenta18_61.set('fieldImages', {'FECHA': 'TextEdit', 'HORA': 'TextEdit', 'REPORTA': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'NINIOS': 'TextEdit', 'A_MAYORES': 'TextEdit', 'ADULTOS': 'TextEdit', 'T_CONSTR': 'TextEdit', 'TOTAL_FAM': 'TextEdit', 'FALLECIDOS': 'TextEdit', 'FUENTE': 'TextEdit', });
lyr_HISTRICOS2018Afectacionesporfuertesvientos2018_62.set('fieldImages', {'FECHA': 'TextEdit', 'HORA': 'TextEdit', 'DIRECCIN': 'TextEdit', 'MANDO': 'TextEdit', 'PRSONAL': 'TextEdit', 'OID': 'Range', 'UNIDADES': 'TextEdit', 'REPORTA': 'TextEdit', 'OBSVCIONS': 'TextEdit', 'FUENTE': 'TextEdit', });
lyr_HISTRICOSAfectacionesporgranizo2018_63.set('fieldImages', {'CAMPO_0': 'TextEdit', 'CAMPO_1': 'TextEdit', 'CAMPO_2': 'TextEdit', 'CAMPO_3': 'TextEdit', 'CAMPO_4': 'TextEdit', 'OID': 'Range', });
lyr_HISTRICOElhistrico_64.set('fieldImages', {'fid': 'TextEdit', });
lyr_Inundacinporaguasnegras_65.set('fieldImages', {'TIPO': 'TextEdit', 'FECHA': 'TextEdit', 'LUGAR': 'TextEdit', 'HORA': 'TextEdit', 'REPORTA': 'TextEdit', 'UNIDADS': 'TextEdit', 'OBSERVACNS': 'TextEdit', 'ACCIONES': 'TextEdit', 'FUENTE': 'TextEdit', });
lyr_PELIGROSDeslizamientoladerasCONABIO_66.set('fieldImages', {'fid': 'TextEdit', });
lyr_SUSCEPTIBILIDADErosinzonahjo_67.set('fieldImages', {'fid': 'TextEdit', });
lyr_MAPASDERIESGOFallasUTM_68.set('fieldImages', {'FNODE_': 'TextEdit', 'TNODE_': 'TextEdit', 'LPOLY_': 'TextEdit', 'RPOLY_': 'TextEdit', 'LENGTH': 'TextEdit', 'CNAL250L_': 'TextEdit', 'CNAL250L_I': 'TextEdit', 'FC': 'Range', 'ENTIDAD': 'TextEdit', 'TIPO': 'TextEdit', 'MOV_HOR': 'TextEdit', 'MOV_VER': 'TextEdit', 'INCLINA_': 'TextEdit', 'BUZAMIENTO': 'TextEdit', 'REPRESENTA': 'TextEdit', 'OID': 'Range', });
lyr_MAPASDERIESGOZonanoaptaparahabitar_69.set('fieldImages', {'fid': 'TextEdit', });
lyr_HISTRICOS2020Huajuapansismo2020_70.set('fieldImages', {'NOM_LIMPIE': 'TextEdit', 'FECHA': 'TextEdit', 'NOM_NUM': 'TextEdit', 'CVE': 'TextEdit', 'NUM_LOGBG': 'TextEdit', 'LONGITUD': 'TextEdit', 'LATITUD': 'TextEdit', 'DAN_SEDAT': 'TextEdit', 'SISMOS': 'TextEdit', 'DIRECCION': 'TextEdit', 'REFERE': 'TextEdit', 'OBSERVACNS': 'TextEdit', 'CAMPO_12': 'TextEdit', 'OID': 'Range', });
lyr_HISTRICOSHundimientos_71.set('fieldImages', {'FECHA': 'TextEdit', 'HORA_INI': 'TextEdit', 'HORA_FIN': 'TextEdit', 'UNIDADES': 'TextEdit', 'REPORTA': 'TextEdit', 'LUGAR': 'TextEdit', 'OBSRVCIONS': 'TextEdit', 'REPORTE': 'TextEdit', 'FUENTE': 'TextEdit', });
lyr_HISTRICOSHuajuapansismo20172019_72.set('fieldImages', {'fid': 'TextEdit', });
lyr_HDRICAHidrolneas_73.set('fieldImages', {'fid': 'TextEdit', });
lyr_INFORMACINCOMPLEMENTARIACalles_74.set('fieldImages', {'fid': 'TextEdit', });
lyr_INFORMACINCOMPLEMENTARIAFrentedemanzana_75.set('fieldImages', {'fid': 'TextEdit', });
lyr_INFORMACINCOMPLEMENTARIADivisinterritorial2020_76.set('fieldImages', {'fid': 'TextEdit', });
lyr_Incendios2020_3.set('fieldLabels', {});
lyr_SUSCEPTIBILIDADCementerios_4.set('fieldLabels', {});
lyr_SUSCEPTIBILIDADEscuelas_5.set('fieldLabels', {});
lyr_SUSCEPTIBILIDADMercado_6.set('fieldLabels', {});
lyr_SUSCEPTIBILIDADParquesdeesparcimiento_7.set('fieldLabels', {});
lyr_SUSCEPTIBILIDADPlantadeaguasresiduales_8.set('fieldLabels', {});
lyr_HISTRICOS2021Controlabejas_9.set('fieldLabels', {});
lyr_HISTRICOS2021Controldefauna_10.set('fieldLabels', {});
lyr_HISTRICOS2018Controlanimal_11.set('fieldLabels', {});
lyr_HISTRICOS2018Controlavejas_12.set('fieldLabels', {});
lyr_HISTRICOS2018Rescateanimal_13.set('fieldLabels', {});
lyr_HISTRICOS2018RescateyCapturadeanimaldomstico_14.set('fieldLabels', {});
lyr_HISTRICOS2018RetirodeAbejas_15.set('fieldLabels', {});
lyr_ESCENARIOSRadiacintrmicafugadegasFlamaAzul_16.set('fieldLabels', {});
lyr_SUSCEPTIBILIDADPolvorines_17.set('fieldLabels', {});
lyr_SUSCEPTIBILIDADRosticeras_18.set('fieldLabels', {});
lyr_SUSCEPTIBILIDADTanquesdegasdemercados_19.set('fieldLabels', {});
lyr_SUSCEPTIBILIDADTortilleras_20.set('fieldLabels', {});
lyr_HISTORICOS2021Incendiovehicular_21.set('fieldLabels', {});
lyr_HISTRICOS2021Eventoelctrico_22.set('fieldLabels', {});
lyr_HISTRICOS2021Fugadegas_23.set('fieldLabels', {});
lyr_HISTRICOS2021Incendiocasahabitacin_24.set('fieldLabels', {});
lyr_HISTRICOS2021Derramedecombustible2021_25.set('fieldLabels', {});
lyr_HISTRICOS2021Eventoelctrico_26.set('fieldLabels', {});
lyr_HISTRICOS2021Incendios2021_27.set('fieldLabels', {});
lyr_HISTRICOS2021Incendiodecomercios2021_28.set('fieldLabels', {});
lyr_HISTRICOS2020Eventoelctrico_29.set('fieldLabels', {});
lyr_HISTRICOS2020Fugadeamoniaco_30.set('fieldLabels', {});
lyr_HISTRICOS2020Fugadegas2020_31.set('fieldLabels', {});
lyr_HISTRICOS2020Incendio_32.set('fieldLabels', {});
lyr_HISTRICOS2020Incendioforestal_33.set('fieldLabels', {});
lyr_HISTRICOS2020Incendiopastizal_34.set('fieldLabels', {});
lyr_HISTRICOS2020Incendios_35.set('fieldLabels', {});
lyr_HISTRICOS2020Incendioscarrizal2020_36.set('fieldLabels', {});
lyr_HISTRICOS2020Quemadebasura_37.set('fieldLabels', {});
lyr_HISTRICOS2020Derramedecombustible2020_38.set('fieldLabels', {});
lyr_HISTRICOS2020Eventoelctrico2020_39.set('fieldLabels', {});
lyr_HISTRICOS2020Explosin2020_40.set('fieldLabels', {});
lyr_HISTRICOS2019Eventoelctrico_41.set('fieldLabels', {});
lyr_HISTRICOS2019Fugadegas2019_42.set('fieldLabels', {});
lyr_HISTRICOS2019Incendiocarrizal2019_43.set('fieldLabels', {});
lyr_HISTRICOS2019IncendioCasaHabitacin2019_44.set('fieldLabels', {});
lyr_HISTRICOS2019Incendiopastizal2019_45.set('fieldLabels', {});
lyr_HISTRICOS2018Eventoelctrico2018_46.set('fieldLabels', {});
lyr_HISTRICOS2018Caidaretirocableado2018_47.set('fieldLabels', {});
lyr_HISTRICOS2018Derramedecombustible2018_48.set('fieldLabels', {});
lyr_HISTRICOS2018Fugadegas2018_49.set('fieldLabels', {});
lyr_HISTRICOS2018Incenciopastizal2018_50.set('fieldLabels', {});
lyr_HISTRICOS2018Explosiones2018_51.set('fieldLabels', {});
lyr_HISTRICOS2017Explosiones2017_52.set('fieldLabels', {});
lyr_Incendioforestal_53.set('fieldLabels', {});
lyr_ESCENARIOSROSALADOEstimacindedesbordamiento_54.set('fieldLabels', {});
lyr_MAPASDERIESGOSEspaciocuencasriesgobajo_55.set('fieldLabels', {});
lyr_MAPASDERIESGOSEspaciocuencasriesgomedio_56.set('fieldLabels', {});
lyr_MAPASDERIESGOSEspaciocuencasriesgoalto_57.set('fieldLabels', {});
lyr_HISTRICOS2021Afectacionesporlluvia2021_58.set('fieldLabels', {});
lyr_HISTRICOS2020Granizo2020_59.set('fieldLabels', {});
lyr_HISTRICOS2020Afectacionesporlluvia2020_60.set('fieldLabels', {});
lyr_HISTRICOS2018AfectacionesporTormenta18_61.set('fieldLabels', {});
lyr_HISTRICOS2018Afectacionesporfuertesvientos2018_62.set('fieldLabels', {});
lyr_HISTRICOSAfectacionesporgranizo2018_63.set('fieldLabels', {});
lyr_HISTRICOElhistrico_64.set('fieldLabels', {});
lyr_Inundacinporaguasnegras_65.set('fieldLabels', {});
lyr_PELIGROSDeslizamientoladerasCONABIO_66.set('fieldLabels', {});
lyr_SUSCEPTIBILIDADErosinzonahjo_67.set('fieldLabels', {});
lyr_MAPASDERIESGOFallasUTM_68.set('fieldLabels', {});
lyr_MAPASDERIESGOZonanoaptaparahabitar_69.set('fieldLabels', {});
lyr_HISTRICOS2020Huajuapansismo2020_70.set('fieldLabels', {});
lyr_HISTRICOSHundimientos_71.set('fieldLabels', {});
lyr_HISTRICOSHuajuapansismo20172019_72.set('fieldLabels', {});
lyr_HDRICAHidrolneas_73.set('fieldLabels', {});
lyr_INFORMACINCOMPLEMENTARIACalles_74.set('fieldLabels', {});
lyr_INFORMACINCOMPLEMENTARIAFrentedemanzana_75.set('fieldLabels', {});
lyr_INFORMACINCOMPLEMENTARIADivisinterritorial2020_76.set('fieldLabels', {});
lyr_INFORMACINCOMPLEMENTARIADivisinterritorial2020_76.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});