var main = new Vue({
  el: "#app",
  data: {
    header: "Shopping List",
    newItem: "",
    items: []
  },
  methods: {
    addNewItem() {
      this.items.push(this.newItem);
      this.newItem = "";
    }
  }
});
