"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const models_1 = __importDefault(require("./models"));
const inventories_1 = __importDefault(require("./routes/inventories"));
const inventories_2 = __importDefault(require("./seeders/inventories"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
const create200000Inventories = () => {
    inventories_2.default.forEach(inventory => {
        models_1.default.inventories.create(inventory);
    });
};
app.use(express_1.default.json());
app.use("/inventories", inventories_1.default);
models_1.default.sequelize.sync().then(() => {
    // create200000Inventories()
    app.listen(port, () => console.log("server running"));
});
