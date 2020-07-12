export default {
  state: {
    namespaced: true,
    inventoryList: [
      {
        name: "Chicken Parmesan",
        quantity: 20,
        date: "2020/17/02",
      },
      {
        name: "Chicken Parmesan with Fries",
        quantity: 20,
        date: "2020/17/02",
      },
      {
        name: "Roasted Chicken BBQ",
        quantity: 20,
        date: "2020/17/02",
      },
    ],
  },
  mutation: {
    setInventoryItem(state, invent) {
      state.inventoryList.unshift(invent);
    },
  },
  actions: {},
};
