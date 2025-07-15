const useBasket = (set) => ({
  basketData: [],
  newComments: [],

  // This function adds a product to the basket if it's not already in the basket
  addBasketData: (payload) =>
    set((state) => {
      const findData = state.basketData.find((item) => item.id === payload.id);
      if (findData) {
        // If product exists, we just increment its quantity
        findData.quantity++;
      } else {
        // If product is not in the basket, we add it with initial quantity
        const newData = { ...payload, quantity: 1, likes: 0 };
        state.basketData.push(newData);
      }
      return { basketData: state.basketData };
    }),

  // Function to update the basket data (not adding all products)

  // Increment quantity of a product
  increment: (payload) =>
    set((state) => {
      const findData = state.basketData.find((item) => item.id === payload);
      if (findData) {
        findData.quantity++;
      }
      return { basketData: state.basketData };
    }),

  // Decrement quantity of a product
  // decrement: (payload) =>    bu yalnis formadi
  //   set((state) => {
  //     const findData = state.basketData.find((item) => item.id === payload);
  //     if (findData) {
  //       findData.quantity--;
  //     }
  //     return { basketData: state.basketData };
  //   }),

      decrement: (payload) =>
  set((state) => ({
    basketData: state.basketData.map((item) =>
      item.id === payload
        ? {
            ...item,
            quantity: item.quantity > 0 ? item.quantity - 1 : 0, // 0-dan aşağı düşməsin
          }
        : item
    ),
  })),
  // Remove item from the basket
  removeFromCart: (payload) =>
    set((state) => {
      const filterData = state.basketData.filter((item) => item.id !== payload);
      return { basketData: filterData };
    }),

  // Clear the basket
  clearAll: () =>
    set((state) => {
      return { basketData: [] };
    }),

  // Increment likes of a product
  incrementLikes: (id) =>
    set((state) => {
      const item = state.basketData.find((i) => i.id === id);
      if (item) {
        item.likes = (item.likes || 0) + 1;
      }
      return { basketData: state.basketData };
    }),
});

export default useBasket;
