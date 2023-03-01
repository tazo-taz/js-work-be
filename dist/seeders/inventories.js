"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const inventory_1 = require("../functions/inventory");
const randomFrom = (arr) => arr[Math.floor(Math.random() * arr.length)];
const random = (from, to, step = 1) => new Array(Math.floor((to ? to - from : from) / step)).fill("").map((a, inx) => (to ? inx * step + from : inx));
const inventories = new Array(200000).fill("").map((a, inx) => ({
    id: (0, uuid_1.v4)(),
    name: "სახელი" + inx,
    address: randomFrom(inventory_1.possibleAddresses),
    price: randomFrom(random(1000, 100000, 1000))
}));
exports.default = inventories;
