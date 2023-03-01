import { Router } from "express";
import { getInventoriesContoller, createInventoryContoller, getInventoriesCountContoller, deleteInvetoryController } from "../controllers/inventories";

const inventoriesRouter = Router()

inventoriesRouter.get("/", getInventoriesContoller)

inventoriesRouter.post("/", createInventoryContoller)

inventoriesRouter.get("/count", getInventoriesCountContoller)

inventoriesRouter.delete("/:id", deleteInvetoryController)

export default inventoriesRouter