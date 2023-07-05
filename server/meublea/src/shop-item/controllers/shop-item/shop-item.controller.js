"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopItemController = void 0;
const common_1 = require("@nestjs/common");
let ShopItemController = exports.ShopItemController = (() => {
    let _classDecorators = [(0, common_1.Controller)('shop-item')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _getShopItems_decorators;
    let _createShopItem_decorators;
    let _updateShopItemById_decorators;
    let _deleteShopItemById_decorators;
    var ShopItemController = _classThis = class {
        constructor(shopItemService) {
            this.shopItemService = (__runInitializers(this, _instanceExtraInitializers), shopItemService);
        }
        getShopItems() {
            return this.shopItemService.findShopItem();
        }
        createShopItem(createShopItemDto) {
            return this.shopItemService.createShopItem(createShopItemDto);
        }
        updateShopItemById(id, updateShopItemDto) {
            return __awaiter(this, void 0, void 0, function* () {
                yield this.shopItemService.updateShopItem(id, updateShopItemDto);
            });
        }
        deleteShopItemById(id) {
            return __awaiter(this, void 0, void 0, function* () {
                yield this.shopItemService.deleteShopItem(id);
            });
        }
    };
    __setFunctionName(_classThis, "ShopItemController");
    (() => {
        _getShopItems_decorators = [(0, common_1.Get)()];
        _createShopItem_decorators = [(0, common_1.Post)()];
        _updateShopItemById_decorators = [(0, common_1.Put)(':id')];
        _deleteShopItemById_decorators = [(0, common_1.Delete)(':id')];
        __esDecorate(_classThis, null, _getShopItems_decorators, { kind: "method", name: "getShopItems", static: false, private: false, access: { has: obj => "getShopItems" in obj, get: obj => obj.getShopItems } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createShopItem_decorators, { kind: "method", name: "createShopItem", static: false, private: false, access: { has: obj => "createShopItem" in obj, get: obj => obj.createShopItem } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateShopItemById_decorators, { kind: "method", name: "updateShopItemById", static: false, private: false, access: { has: obj => "updateShopItemById" in obj, get: obj => obj.updateShopItemById } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deleteShopItemById_decorators, { kind: "method", name: "deleteShopItemById", static: false, private: false, access: { has: obj => "deleteShopItemById" in obj, get: obj => obj.deleteShopItemById } }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        ShopItemController = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ShopItemController = _classThis;
})();