"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteInvetoryController = exports.getInventoriesCountContoller = exports.createInventoryContoller = exports.getInventoriesContoller = void 0;
const inventory_1 = require("../functions/inventory");
const models_1 = __importDefault(require("../models"));
const getInventoriesContoller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const limit = 20;
    const { page = 1, address = "ყველა", sort = "ASC" } = req.query;
    const inventoriesOptions = {
        limit, offset: (page - 1) * limit,
        order: [["createdAt", sort]]
    };
    if (address !== "ყველა")
        inventoriesOptions.where = { address };
    const inventories = yield models_1.default.inventories.findAll(inventoriesOptions);
    res.send(inventories);
});
exports.getInventoriesContoller = getInventoriesContoller;
const createInventoryContoller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const validatedData = (0, inventory_1.validateInventory)(req.body);
    if (!validatedData)
        return res.send(false);
    yield models_1.default.inventories.create(validatedData);
    res.send(true);
});
exports.createInventoryContoller = createInventoryContoller;
const getInventoriesCountContoller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { address = "ყველა" } = req.query;
    const inventoriesOptions = {};
    if (address !== "ყველა")
        inventoriesOptions.where = { address };
    const count = yield models_1.default.inventories.count(inventoriesOptions);
    res.json({ count });
});
exports.getInventoriesCountContoller = getInventoriesCountContoller;
const deleteInvetoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield models_1.default.inventories.destroy({
        where: {
            id
        }
    });
    res.send(true);
});
exports.deleteInvetoryController = deleteInvetoryController;
