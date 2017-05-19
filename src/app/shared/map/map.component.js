"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/debounceTime');
var mapPoint_component_1 = require('./mapPoint.component');
var MapComponent = (function () {
    function MapComponent(elem) {
        this.elem = elem;
        this.markers = [];
        this.latitude = 34.5133;
        this.longitude = -94.1629;
        this.markerText = 'Your Location';
        this.zoom = 8;
    }
    Object.defineProperty(MapComponent.prototype, "enabled", {
        //Necessary since a map rendered while container is hidden 
        //will not load the map tiles properly and show a grey screen
        get: function () {
            return this.isEnabled;
        },
        set: function (isEnabled) {
            this.isEnabled = isEnabled;
            this.init();
        },
        enumerable: true,
        configurable: true
    });
    MapComponent.prototype.ngOnInit = function () {
        if (this.latitude && this.longitude) {
            if (this.mapHeight && this.mapWidth) {
                this.mapHeight = this.height + 'px';
                this.mapWidth = this.width + 'px';
            }
            else {
                var hw = this.getWindowHeightWidth(this.elem.nativeElement.ownerDocument);
                this.mapHeight = hw.height / 2 + 'px';
                this.mapWidth = hw.width + 'px';
            }
        }
    };
    MapComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.mapPoints.changes.debounceTime(500).subscribe(function () {
            if (_this.enabled)
                _this.renderMapPoints();
        });
    };
    MapComponent.prototype.init = function () {
        var _this = this;
        //Need slight delay to avoid grey box when google script has previously been loaded.
        //Otherwise map <div> container may not be visible yet which causes the grey box. 
        setTimeout(function () {
            _this.ensureScript();
        }, 200);
    };
    MapComponent.prototype.getWindowHeightWidth = function (document) {
        var width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        var height = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;
        if (width > 900)
            width = 900;
        return { height: height, width: width };
    };
    MapComponent.prototype.ensureScript = function () {
        var _this = this;
        this.loadingScript = true;
        var document = this.elem.nativeElement.ownerDocument;
        var script = document.querySelector('script[id="googlemaps"]');
        if (script) {
            if (this.isEnabled)
                this.renderMap();
        }
        else {
            var script_1 = document.createElement('script');
            script_1.id = 'googlemaps';
            script_1.type = 'text/javascript';
            script_1.async = true;
            script_1.defer = true;
            script_1.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBnfvR2KoVNAjdYs-GpXjNPwqc9PoqVr4U';
            script_1.onload = function () {
                _this.loadingScript = false;
                if (_this.isEnabled)
                    _this.renderMap();
            };
            document.body.appendChild(script_1);
        }
    };
    MapComponent.prototype.renderMap = function () {
        var latlng = this.createLatLong(this.latitude, this.longitude);
        var options = {
            zoom: this.zoom,
            center: latlng,
            mapTypeControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var mapContainer = this.elem.nativeElement.firstChild;
        this.map = new google.maps.Map(mapContainer, options);
        if (this.mapPoints && this.mapPoints.length) {
            this.renderMapPoints();
        }
        else {
            this.createMarker(latlng, this.map, this.markerText);
        }
    };
    MapComponent.prototype.createLatLong = function (latitude, longitude) {
        return (latitude && longitude) ? new google.maps.LatLng(latitude, longitude) : null;
    };
    MapComponent.prototype.renderMapPoints = function () {
        var _this = this;
        if (this.map) {
            this.clearMapPoints();
            this.mapPoints.forEach(function (point) {
                var mapPointLatlng = _this.createLatLong(point.latitude, point.longitude);
                _this.createMarker(mapPointLatlng, _this.map, point.markerText);
            });
        }
    };
    MapComponent.prototype.clearMapPoints = function () {
        this.markers.forEach(function (marker) {
            marker.setMap(null);
        });
        this.markers = [];
    };
    MapComponent.prototype.createMarker = function (position, map, title) {
        var infowindow = new google.maps.InfoWindow({
            content: title
        });
        var marker = new google.maps.Marker({
            position: position,
            map: map,
            title: title,
            animation: google.maps.Animation.DROP
        });
        this.markers.push(marker);
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
    };
    __decorate([
        core_1.Input()
    ], MapComponent.prototype, "height");
    __decorate([
        core_1.Input()
    ], MapComponent.prototype, "width");
    __decorate([
        core_1.Input()
    ], MapComponent.prototype, "latitude");
    __decorate([
        core_1.Input()
    ], MapComponent.prototype, "longitude");
    __decorate([
        core_1.Input()
    ], MapComponent.prototype, "markerText");
    __decorate([
        core_1.Input()
    ], MapComponent.prototype, "zoom");
    __decorate([
        core_1.Input()
    ], MapComponent.prototype, "enabled");
    __decorate([
        core_1.ContentChildren(mapPoint_component_1.MapPointComponent)
    ], MapComponent.prototype, "mapPoints");
    MapComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cm-map',
            templateUrl: 'map.component.html',
            //When using OnPush detectors, then the framework will check an OnPush 
            //component when any of its input properties changes, when it fires 
            //an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
