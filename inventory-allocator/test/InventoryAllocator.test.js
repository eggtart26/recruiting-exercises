const expect = require('chai').expect
const InventoryAllocator = require("../src/InventoryAllocator.js");



describe("Testing Inventory Allocator class", () => {

    before(() => {
      const inventory = [];
      const order = {};
      inventoryAllocator = new InventoryAllocator(inventory, order);
    });
    
    it("Should exist class inventoryAllocator", () => {
      expect(inventoryAllocator).to.exist;
    });

});