class ItemsInWarehouse {
    constructor(name) {
      this.list = {};
      this.name = name;
      this.list[name] = {};
    }
  
    set(item, amount) {
      this.list[this.name][item] = amount;
    }
  
    getItems() {
      return this.list;
    }
  };

  module.exports = ItemsInWarehouse;