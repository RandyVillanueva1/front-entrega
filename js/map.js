// Espera a que el DOM se cargue
document.addEventListener("DOMContentLoaded", function () {
    // Crea el mapa
    var map = new OpenLayers.Map("map");
  
    // Crea una capa base de OpenStreetMap
    var osmLayer = new OpenLayers.Layer.OSM();
  
    // Agrega la capa base al mapa
    map.addLayer(osmLayer);
  
    // Establece las coordenadas de la Universidad Tecnológica de Tecámac
    var lonLat = new OpenLayers.LonLat(-98.9832326, 19.7024333).transform(
      new OpenLayers.Projection("EPSG:4326"),
      map.getProjectionObject()
    );
  
    // Establece el centro del mapa en las coordenadas de la universidad
    map.setCenter(lonLat, 15);
  });

  // Crea la animación de onda
  var pulse = document.createElement("div");
  pulse.className = "pulse";
  document.getElementById("map").appendChild(pulse);

  // Posiciona la animación en las coordenadas de la universidad
  var pixelPosition = map.getPixelFromLonLat(lonLat);
  pulse.style.left = pixelPosition.x - pulse.offsetWidth / 2 + "px";
  pulse.style.top = pixelPosition.y - pulse.offsetHeight / 2 + "px";
  