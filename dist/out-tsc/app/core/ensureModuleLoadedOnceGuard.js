var EnsureModuleLoadedOnceGuard = /** @class */ (function () {
    function EnsureModuleLoadedOnceGuard(targetModule) {
        if (targetModule) {
            throw new Error(targetModule.constructor.name + " has already been loaded. Import this module in the AppModule only.");
        }
    }
    return EnsureModuleLoadedOnceGuard;
}());
export { EnsureModuleLoadedOnceGuard };
//# sourceMappingURL=/Users/rakeshchouhan/WebstormProjects/mockii_node/src/app/core/ensureModuleLoadedOnceGuard.js.map