"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateInventory = exports.possibleAddresses = void 0;
exports.possibleAddresses = [
    "მთავარი ოფისი",
    "კავეა გალერია",
    "კავეა თბილისი მოლი",
    "კავეა ისთ ფოინთი",
    "კავეა სითი მოლი",
];
const validateInventory = ({ name, address, price }) => {
    if (name && price && exports.possibleAddresses.includes(address))
        return { name, address, price };
};
exports.validateInventory = validateInventory;
