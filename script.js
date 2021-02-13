// Carousel
$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  prevNextButtons: false,
  pageDots: false,
  groupCells: "100%",
  
});

$(document).ready(function(){
	
	$('ul.tabs li').click(function(event){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
      var selector = event.target.getAttribute('data-tab');
  // trigger resize on tab pane
    $( "#" + selector + " .main-carousel").flickity();
    $( "#" + selector + " .main-carousel").flickity('resize');

    
   });
});


// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);
chart.geodata = am4geodata_worldLow;
chart.projection = new am4maps.projections.Miller();
chart.homeZoomLevel = 1.25;
chart.homeGeoPoint = {
  latitude: 38,
  longitude: 0
};

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
polygonSeries.useGeodata = true;
chart.geodataNames = am4geodata_lang_FR;
polygonSeries.mapPolygons.template.fill = chart.colors.getIndex(0).lighten(0.5);
polygonSeries.mapPolygons.template.nonScalingStroke = true;
polygonSeries.exclude = ["AQ"];

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipHTML = '<b>{name}</b>';
// Add some data
polygonSeries.data = [{
  "id": "AD",
  "fill": am4core.color("#143C6A"),
  "cursor": am4core.MouseCursorStyle.pointer
}, {
  "id": "BE",
  "fill": am4core.color("#143C6A"),
  "cursor": am4core.MouseCursorStyle.pointer
}, {
  "id": "KH",
  "fill": am4core.color("#143C6A"),
  "cursor": am4core.MouseCursorStyle.pointer
}, {
  "id": "ES",
  "fill": am4core.color("#143C6A"),
  "cursor": am4core.MouseCursorStyle.pointer
}, {
  "id": "FR",
  "fill": am4core.color("#767E88"),
  "cursor": am4core.MouseCursorStyle.pointer
}, {
  "id": "IE",
  "fill": am4core.color("#143C6A"),
  "cursor": am4core.MouseCursorStyle.pointer
}, {
  "id": "IT",
  "fill": am4core.color("#143C6A"),
  "cursor": am4core.MouseCursorStyle.pointer
}, {
  "id": "JP",
  "fill": am4core.color("#143C6A"),
  "cursor": am4core.MouseCursorStyle.pointer
}, {
  "id": "LA",
  "fill": am4core.color("#143C6A"),
  "cursor": am4core.MouseCursorStyle.pointer
}, {
  "id": "LU",
  "fill": am4core.color("#143C6A"),
  "cursor": am4core.MouseCursorStyle.pointer
}, {
  "id": "MG",
  "fill": am4core.color("#143C6A"),
  "cursor": am4core.MouseCursorStyle.pointer
}, {
  "id": "MA",
  "fill": am4core.color("#143C6A"),
  "cursor": am4core.MouseCursorStyle.pointer
}, {
  "id": "MC",
  "fill": am4core.color("#143C6A"),
  "cursor": am4core.MouseCursorStyle.pointer
}, {
  "id": "MM",
  "fill": am4core.color("#143C6A"),
  "cursor": am4core.MouseCursorStyle.pointer
}, {
  "id": "NL",
  "fill": am4core.color("#143C6A"),
  "cursor": am4core.MouseCursorStyle.pointer
}, {
  "id": "PT",
  "fill": am4core.color("#143C6A"),
  "cursor": am4core.MouseCursorStyle.pointer
}, {
  "id": "QA",
  "fill": am4core.color("#143C6A"),
  "cursor": am4core.MouseCursorStyle.pointer
}, {
  "id": "GB",
  "fill": am4core.color("#143C6A"),
  "cursor": am4core.MouseCursorStyle.pointer
}, {
  "id": "CH",
  "fill": am4core.color("#143C6A"),
  "cursor": am4core.MouseCursorStyle.pointer
}, {
  "id": "TH",
  "fill": am4core.color("#143C6A"),
  "cursor": am4core.MouseCursorStyle.pointer
}];

// Bind "fill" property to "fill" key in data
polygonTemplate.propertyFields.fill = "fill";
polygonTemplate.propertyFields.cursorOverStyle = "cursor";


// Set up tooltips
polygonSeries.calculateVisualCenter = true;
polygonTemplate.tooltipPosition = "fixed";
polygonSeries.tooltip.label.interactionsEnabled = true;
polygonSeries.tooltip.keepTargetHover = true;
polygonSeries.tooltip.background.cornerRadius = 10;
polygonSeries.tooltip.background.strokeOpacity = 0;

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#143C6A");

// Add line bullets
var cities = chart.series.push(new am4maps.MapImageSeries());
cities.mapImages.template.nonScaling = true;

var city = cities.mapImages.template.createChild(am4core.Circle);
city.radius = 6;
city.fill = chart.colors.getIndex(0).brighten(-0.2);
city.strokeWidth = 2;
city.stroke = am4core.color("#fff");

function addCity(coords, title) {
  var city = cities.mapImages.create();
  city.latitude = coords.latitude;
  city.longitude = coords.longitude;
  city.tooltipText = title;
  return city;
}


var bordeaux = addCity({ "latitude": 44.5025, "longitude": -0.3449 }, "France");
var andorre = addCity({ "latitude": 42.5422, "longitude": 1.5968 }, "Andorre");
var belgique = addCity({ "latitude": 50.4995, "longitude": 4.4754 }, "Belgique");
var cambodge = addCity({ "latitude": 11.3344, "longitude": 104.5457 }, "Cambodge");
var espagne = addCity({ "latitude": 40.4636, "longitude": -3.7492 }, "Espagne");
var irlande = addCity({ "latitude": 54.4197, "longitude": -8.2404 }, "Irlande");
var italie = addCity({ "latitude": 41.8719, "longitude": 12.5673 }, "Italie");
var japon = addCity({ "latitude": 35.6894, "longitude": 139.6923 }, "Japon");
var laos = addCity({ "latitude": 19.8562, "longitude": 102.4954 }, "Laos");
var luxembourg = addCity({ "latitude": 49.8157, "longitude": 6.1315 }, "Luxembourg");
var madagascar = addCity({ "latitude": -18.7771, "longitude": 46.8543 }, "Madagascar");
var maroc = addCity({ "latitude": 31.7923, "longitude": -7.0800 }, "Maroc");
var monaco = addCity({ "latitude": 43.7384, "longitude": 7.4246 }, "Monaco");
var myanmar = addCity({ "latitude": 16.4819, "longitude": 96.0921 }, "Myanmar");
var paysbas = addCity({ "latitude": 52.2226, "longitude": 4.5322 }, "Pays-Bas");
var portugal = addCity({ "latitude": 39.5534, "longitude": -7.8393 }, "Portugal");
var qatar = addCity({ "latitude": 26.1356, "longitude": 51.2033 }, "Qatar");
var reunion = addCity({ "latitude": -21.1145, "longitude": 55.5320 }, "Réunion");
var royaumeuni = addCity({ "latitude": 52.0937, "longitude": -0.4211 }, "Royaume-Uni");
var suisse = addCity({ "latitude": 46.8181, "longitude": 8.2275 }, "Suisse");
var thailande = addCity({ "latitude": 13.7563, "longitude": 100.5017 }, "Thaïlande");

// Add lines
var lineSeries = chart.series.push(new am4maps.MapArcSeries());
lineSeries.mapLines.template.line.strokeWidth = 2;
lineSeries.mapLines.template.line.strokeOpacity = 0.5;
lineSeries.mapLines.template.line.stroke = city.fill;
lineSeries.mapLines.template.line.nonScalingStroke = true;
lineSeries.mapLines.template.line.strokeDasharray = "0.5,0.15";
lineSeries.zIndex = 10;

var shadowLineSeries = chart.series.push(new am4maps.MapLineSeries());
shadowLineSeries.mapLines.template.line.strokeOpacity = 0;
shadowLineSeries.mapLines.template.line.nonScalingStroke = true;
shadowLineSeries.mapLines.template.shortestDistance = false;
shadowLineSeries.zIndex = 5;

function addLine(from, to) {
  var line = lineSeries.mapLines.create();
  line.imagesToConnect = [from, to];
  line.line.controlPointDistance = -0.2;

  var shadowLine = shadowLineSeries.mapLines.create();
  shadowLine.imagesToConnect = [from, to];

  return line;
}

  addLine(bordeaux, andorre);
  addLine(bordeaux, belgique);
  addLine(bordeaux, thailande);
  addLine(thailande, laos);
  addLine(laos, cambodge);
  addLine(cambodge, myanmar);
  addLine(bordeaux, japon);
  addLine(japon, qatar);
  addLine(bordeaux, espagne);
  addLine(bordeaux, italie);
  addLine(bordeaux, luxembourg);
  addLine(bordeaux, reunion);
  addLine(reunion, madagascar);
  addLine(bordeaux, maroc);
  addLine(bordeaux, monaco);
  addLine(royaumeuni, paysbas);
  addLine(bordeaux, portugal);
  addLine(bordeaux, royaumeuni);
  addLine(royaumeuni, irlande);
  addLine(bordeaux, suisse);

// Add plane
var plane = lineSeries.mapLines.getIndex(0).lineObjects.create();
plane.position = 0;
plane.width = 48;
plane.height = 48;

plane.adapter.add("scale", function(scale, target) {
  return 0.5 * (1 - (Math.abs(0.5 - target.position)));
})

var planeImage = plane.createChild(am4core.Sprite);
planeImage.scale = 0.003;
planeImage.horizontalCenter = "middle";
planeImage.verticalCenter = "middle";
planeImage.path = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";
planeImage.fill = chart.colors.getIndex(2).brighten(-0.2);
planeImage.strokeOpacity = 0;

var shadowPlane = shadowLineSeries.mapLines.getIndex(0).lineObjects.create();
shadowPlane.position = 0;
shadowPlane.width = 48;
shadowPlane.height = 48;

var shadowPlaneImage = shadowPlane.createChild(am4core.Sprite);
shadowPlaneImage.scale = 0.003;
shadowPlaneImage.horizontalCenter = "middle";
shadowPlaneImage.verticalCenter = "middle";
shadowPlaneImage.path = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";
shadowPlaneImage.fill = am4core.color("#000");
shadowPlaneImage.strokeOpacity = 0;

shadowPlane.adapter.add("scale", function(scale, target) {
  target.opacity = (0.6 - (Math.abs(0.5 - target.position)));
  return 0.5 - 0.3 * (1 - (Math.abs(0.5 - target.position)));
})

// Plane animation
var currentLine = 0;
var direction = 1;
function flyPlane() {

    // Get current line to attach plane to
    plane.mapLine = lineSeries.mapLines.getIndex(currentLine);
    plane.parent = lineSeries;
    shadowPlane.mapLine = shadowLineSeries.mapLines.getIndex(currentLine);
    shadowPlane.parent = shadowLineSeries;
    shadowPlaneImage.rotation = planeImage.rotation;

    // Set up animation
    var from, to;
    var numLines = lineSeries.mapLines.length;
    if (direction == 1) {
        from = 0
        to = 1;
        if (planeImage.rotation != 0) {
            planeImage.animate({ to: 0, property: "rotation" }, 1000).events.on("animationended", flyPlane);
            return;
        }
    }
    else {
        from = 1;
        to = 0;
        if (planeImage.rotation != 180) {
            planeImage.animate({ to: 180, property: "rotation" }, 1000).events.on("animationended", flyPlane);
            return;
        }
    }

    // Start the animation
    var animation = plane.animate({
        from: from,
        to: to,
        property: "position"
    }, 5000, am4core.ease.sinInOut);
    animation.events.on("animationended", flyPlane)
    /*animation.events.on("animationprogress", function(ev) {
      var progress = Math.abs(ev.progress - 0.5);
      //console.log(progress);
      //planeImage.scale += 0.2;
    });*/

    shadowPlane.animate({
        from: from,
        to: to,
        property: "position"
    }, 5000, am4core.ease.sinInOut);

    // Increment line, or reverse the direction
    currentLine += direction;
    if (currentLine < 0) {
        currentLine = 0;
        direction = 1;
    }
    else if ((currentLine + 1) > numLines) {
        currentLine = numLines - 1;
        direction = -1;
    }

}

// Go!
flyPlane();
