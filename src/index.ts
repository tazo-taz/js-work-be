import express from "express"
import db from "./models"
import inventoriesRouter from "./routes/inventories"
import inventories from "./seeders/inventories"
const app = express()
const port = process.env.PORT || 3001

const create200000Inventories = () => {
    inventories.forEach(inventory => {
        db.inventories.create(inventory)
    })
}


app.use(express.json())

app.use("/inventories", inventoriesRouter)

db.sequelize.sync().then(() => {
    // create200000Inventories()
    app.listen(port, () => console.log("server running"))
})
