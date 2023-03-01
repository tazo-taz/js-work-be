export interface inventoryInterface {
    id: any,
    name: string,
    address: string,
    price: number
}

export const possibleAddresses: string[] = [
    "მთავარი ოფისი",
    "კავეა გალერია",
    "კავეა თბილისი მოლი",
    "კავეა ისთ ფოინთი",
    "კავეა სითი მოლი",
]

export const validateInventory = ({name, address, price}: inventoryInterface) => {
    if(name && price && possibleAddresses.includes(address))return {name, address, price}
}