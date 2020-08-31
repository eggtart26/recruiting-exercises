const ItemsInWarehouse = require("./ItemsInWarehouse.js");

class InventoryAllocator {
    constructor(warehouses, order) {
        this.warehouses = warehouses.map(inventory => {
            return { ...inventory };
        });
        this.order = { ...order };
    }

    checkInventoryExist(input, warehouses) {
        return warehouses[input] !== undefined;
    }

    createShipment() {
        const newOrder = { ...this.order };
        let results = [];

        this.warehouses.forEach(location => {
            const { name, inventory } = location;
            const itemsInWarehouse = new ItemsInWarehouse(name);

            for (let item in newOrder) {
                if (inventory[item]) {
                    const FoundItemsInWarehouse = Math.min(this.order[item], inventory[item]);
                    itemsInWarehouse.set(item, FoundItemsInWarehouse);
                    newOrder[item] = newOrder[item] - FoundItemsInWarehouse;

                    if (newOrder[item] === 0) {
                        delete newOrder[item];
                    }
                }
            }
            if (Object.keys(itemsInWarehouse.list[name]).length > 0) {
                results.push(itemsInWarehouse.getItems());
            }
        });
        return Object.keys(newOrder).length === 0 ? results : [];
    }

    cheapestShipment() {
        const newOrder = { ...this.order };
        let shipFormOneLocation = Object.keys(newOrder).length === Object(this.createShipment(newOrder)).length
        if (this.checkInventoryExist && shipFormOneLocation) {
            return true;
        }
    }
    
}


module.exports = InventoryAllocator;