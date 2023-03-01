import { validateInventory } from "../functions/inventory"
import db from "../models"

export const getInventoriesContoller = async (req: any, res: any) => {
    const limit = 20
    
    const {page=1, address="ყველა", sort="ASC"} = req.query
    
    const inventoriesOptions: any = {
        limit, offset: (page - 1) * limit,
        order: [["createdAt", sort]]
    }

    if(address !== "ყველა")inventoriesOptions.where = { address }    

    const inventories = await db.inventories.findAll(inventoriesOptions)
    
    res.send(inventories)
}

export const createInventoryContoller = async (req: any, res: any) => {
    const validatedData = validateInventory(req.body)
    if(!validatedData)return res.send(false)
    await db.inventories.create(validatedData)
    
    res.send(true)
    
}

export const getInventoriesCountContoller = async (req: any, res: any) => {
    const {address="ყველა"} = req.query

    const inventoriesOptions: any = {}

    if(address !== "ყველა")inventoriesOptions.where = { address }

    const count = await db.inventories.count(inventoriesOptions)
    res.json({count})   
}

export const deleteInvetoryController = async (req: any, res: any) => {
    const {id} = req.params


    await db.inventories.destroy({
        where: {
            id
        }
    })
    
    res.send(true)
}