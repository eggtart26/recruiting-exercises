const expect = require('chai').expect
const InventoryAllocator = require("../src/InventoryAllocator.js");
const warehouses = require("../dummyData/dummyData");



describe("Testing Inventory Allocator class", () => {

    before(() => {
      const inventory = [];
      const order = {};
      inventoryAllocator = new InventoryAllocator(inventory, order);
    });

    it("Should exist class inventoryAllocator", () => {
      expect(inventoryAllocator).to.exist;
    });

    it("Should have methods checkInventoryExist", () => {
        expect(typeof inventoryAllocator.checkInventoryExist).to.equal("function");
      });
      
    it("Should have methods createShipment", () => {
        expect(typeof inventoryAllocator.createShipment).to.equal("function");
      });






      describe("Testing checkInventoryExist methods", () => {

        before(() => {
          const order = { name: 'owd', inventory: { apple: 1 } }
          inventoryAllocator = new InventoryAllocator(warehouses, order);
        });
      
        it("Should return true if item is in warehouse", () => {
          const warehouses = inventoryAllocator.warehouses[0].inventory;
          expect(inventoryAllocator.checkInventoryExist("apple", warehouses)).to.be.true;
        });
    
    
        it("Should return false if item is not in warehouse", () => {
           const warehouses = inventoryAllocator.warehouses[0].inventory;
           expect(inventoryAllocator.checkInventoryExist("orange", warehouses)).to.be.false;
        });
    })





});