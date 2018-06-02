var propertyResolver = /** @class */ (function () {
    function propertyResolver() {
    }
    propertyResolver.resolve = function (path, obj) {
        return path.split('.').reduce(function (prev, curr) {
            return (prev ? prev[curr] : undefined);
        }, obj || self);
    };
    return propertyResolver;
}());
export { propertyResolver };
//# sourceMappingURL=/Users/rakeshchouhan/WebstormProjects/mockii_node/src/app/core/services/property-resolver.js.map