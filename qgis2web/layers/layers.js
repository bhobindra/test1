ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([79.854913, 24.732871, 88.405096, 32.087867]);
var wms_layers = [];

var format_Nepal_Boundary_84_0 = new ol.format.GeoJSON();
var features_Nepal_Boundary_84_0 = format_Nepal_Boundary_84_0.readFeatures(json_Nepal_Boundary_84_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Nepal_Boundary_84_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nepal_Boundary_84_0.addFeatures(features_Nepal_Boundary_84_0);
var lyr_Nepal_Boundary_84_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nepal_Boundary_84_0, 
                style: style_Nepal_Boundary_84_0,
                interactive: true,
                title: '<img src="styles/legend/Nepal_Boundary_84_0.png" /> Nepal_Boundary_84'
            });
var format_State_Boundary_84_1 = new ol.format.GeoJSON();
var features_State_Boundary_84_1 = format_State_Boundary_84_1.readFeatures(json_State_Boundary_84_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_State_Boundary_84_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_State_Boundary_84_1.addFeatures(features_State_Boundary_84_1);
var lyr_State_Boundary_84_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_State_Boundary_84_1, 
                style: style_State_Boundary_84_1,
                interactive: true,
                title: '<img src="styles/legend/State_Boundary_84_1.png" /> State_Boundary_84'
            });
var format_Nepal_District_Boundary_2 = new ol.format.GeoJSON();
var features_Nepal_District_Boundary_2 = format_Nepal_District_Boundary_2.readFeatures(json_Nepal_District_Boundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Nepal_District_Boundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nepal_District_Boundary_2.addFeatures(features_Nepal_District_Boundary_2);
var lyr_Nepal_District_Boundary_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nepal_District_Boundary_2, 
                style: style_Nepal_District_Boundary_2,
                interactive: true,
                title: '<img src="styles/legend/Nepal_District_Boundary_2.png" /> Nepal_District_Boundary'
            });

lyr_Nepal_Boundary_84_0.setVisible(true);lyr_State_Boundary_84_1.setVisible(true);lyr_Nepal_District_Boundary_2.setVisible(true);
var layersList = [lyr_Nepal_Boundary_84_0,lyr_State_Boundary_84_1,lyr_Nepal_District_Boundary_2];
lyr_Nepal_Boundary_84_0.set('fieldAliases', {'Id': 'Id', });
lyr_State_Boundary_84_1.set('fieldAliases', {'STATE_CODE': 'STATE_CODE', 'STATE_NAME': 'STATE_NAME', });
lyr_Nepal_District_Boundary_2.set('fieldAliases', {'DCODE': 'DCODE', 'DISTRICT': 'DISTRICT', 'COMMAND': 'COMMAND', 'District_N': 'District_N', });
lyr_Nepal_Boundary_84_0.set('fieldImages', {'Id': '', });
lyr_State_Boundary_84_1.set('fieldImages', {'STATE_CODE': '', 'STATE_NAME': '', });
lyr_Nepal_District_Boundary_2.set('fieldImages', {'DCODE': '', 'DISTRICT': '', 'COMMAND': '', 'District_N': '', });
lyr_Nepal_Boundary_84_0.set('fieldLabels', {'Id': 'no label', });
lyr_State_Boundary_84_1.set('fieldLabels', {'STATE_CODE': 'no label', 'STATE_NAME': 'no label', });
lyr_Nepal_District_Boundary_2.set('fieldLabels', {'DCODE': 'no label', 'DISTRICT': 'no label', 'COMMAND': 'no label', 'District_N': 'no label', });
lyr_Nepal_District_Boundary_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});