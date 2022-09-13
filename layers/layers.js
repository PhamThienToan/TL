var wms_layers = [];


        var lyr_VietnamOSMMaps_0 = new ol.layer.Tile({
            'title': 'Vietnam OSM Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://thuduc-maps.hcmgis.vn/thuducserver/gwc/service/wmts?layer=thuduc:thuduc_maps&style=&tilematrixset=EPSG:900913&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image/png&TileMatrix=EPSG:900913:{z}&TileCol={x}&TileRow={y}'
            })
        });
var format_dulieumoi_1 = new ol.format.GeoJSON();
var features_dulieumoi_1 = format_dulieumoi_1.readFeatures(json_dulieumoi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dulieumoi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dulieumoi_1.addFeatures(features_dulieumoi_1);
var lyr_dulieumoi_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_dulieumoi_1, 
                style: style_dulieumoi_1,
                interactive: true,
                title: '<img src="styles/legend/dulieumoi_1.png" /> dulieumoi'
            });

lyr_VietnamOSMMaps_0.setVisible(true);lyr_dulieumoi_1.setVisible(true);
var layersList = [lyr_VietnamOSMMaps_0,lyr_dulieumoi_1];
lyr_dulieumoi_1.set('fieldAliases', {'A': 'A', 'B': 'B', 'C': 'C', 'D': 'D', 'E': 'E', 'F': 'F', 'G': 'G', 'H': 'H', 'I': 'I', });
lyr_dulieumoi_1.set('fieldImages', {'A': 'TextEdit', 'B': 'TextEdit', 'C': 'TextEdit', 'D': 'TextEdit', 'E': 'TextEdit', 'F': 'TextEdit', 'G': 'TextEdit', 'H': 'TextEdit', 'I': 'TextEdit', });
lyr_dulieumoi_1.set('fieldLabels', {'A': 'no label', 'B': 'no label', 'C': 'no label', 'D': 'no label', 'E': 'no label', 'F': 'no label', 'G': 'no label', 'H': 'no label', 'I': 'no label', });
lyr_dulieumoi_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});