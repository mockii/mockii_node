var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.customersBaseUrl = '/api/customers';
        this.ordersBaseUrl = '/api/orders';
    }
    DataService.prototype.getCustomers = function () {
        var _this = this;
        return this.http.get(this.customersBaseUrl)
            .map(function (res) {
            var customers = res.json();
            _this.calculateCustomersOrderTotal(customers);
            return customers;
        })
            .catch(this.handleError);
    };
    DataService.prototype.getCustomersPage = function (page, pageSize) {
        var _this = this;
        return this.http.get(this.customersBaseUrl + "/page/" + page + "/" + pageSize)
            .map(function (res) {
            var totalRecords = +res.headers.get('X-InlineCount');
            var customers = res.json();
            _this.calculateCustomersOrderTotal(customers);
            return {
                results: customers,
                totalRecords: totalRecords
            };
        })
            .catch(this.handleError);
    };
    DataService.prototype.getCustomer = function (id) {
        var _this = this;
        return this.http.get(this.customersBaseUrl + '/' + id)
            .map(function (res) {
            var customer = res.json();
            _this.calculateCustomersOrderTotal([customer]);
            return customer;
        })
            .catch(this.handleError);
    };
    DataService.prototype.insertCustomer = function (customer) {
        return this.http.post(this.customersBaseUrl, customer)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.updateCustomer = function (customer) {
        return this.http.put(this.customersBaseUrl + '/' + customer.id, customer)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.deleteCustomer = function (id) {
        return this.http.delete(this.customersBaseUrl + '/' + id)
            .map(function (res) { return res.json().status; })
            .catch(this.handleError);
    };
    DataService.prototype.getStates = function () {
        return this.http.get('/api/states')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        console.error('server error:', error);
        if (error instanceof Response) {
            var errMessage = '';
            try {
                errMessage = error.json().error;
            }
            catch (err) {
                errMessage = error.statusText;
            }
            return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'Node.js server error');
    };
    //Not using now but leaving since they show how to create
    //and work with custom observables
    DataService.prototype.createObservable = function (data) {
        return Observable.create(function (observer) {
            observer.next(data);
            observer.complete();
        });
    };
    DataService.prototype.calculateCustomersOrderTotal = function (customers) {
        for (var _i = 0, customers_1 = customers; _i < customers_1.length; _i++) {
            var customer = customers_1[_i];
            if (customer && customer.orders) {
                var total = 0;
                for (var _a = 0, _b = customer.orders; _a < _b.length; _a++) {
                    var order = _b[_a];
                    total += order.itemCost;
                }
                customer.orderTotal = total;
            }
        }
    };
    DataService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=/Users/rakeshchouhan/WebstormProjects/mockii_node/src/app/core/services/data.service.js.map