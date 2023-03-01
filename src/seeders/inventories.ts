import { v4 as uuidv4 } from 'uuid';
import { possibleAddresses } from '../functions/inventory';

const randomFrom = (arr: string | any[]) => arr[Math.floor(Math.random() * arr.length)]

const random = (from: number, to?: number, step: number = 1): number[] => new Array(Math.floor((to ? to - from : from)/step)).fill("").map((a,inx) => (to ? inx * step + from : inx))

const inventories = new Array(200000).fill("").map((a,inx) => ({
    id: uuidv4(),
    name: "სახელი" + inx,
    address: randomFrom(possibleAddresses),
    price: randomFrom(random(1000, 100000, 1000))
}))

export default inventories