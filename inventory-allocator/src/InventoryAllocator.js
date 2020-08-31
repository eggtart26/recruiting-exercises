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
    }
    
}


module.exports = InventoryAllocator;