import { createSlice } from "@reduxjs/toolkit";
import DATA from "../DATA";

const initialState = { items: DATA, filters: [] };

const filteredItemsSlice = createSlice({
  name: "filteredItems",
  initialState,
  reducers: {
    onFilterByCategory(state, action) {
      if (action.payload === "Show All") {
        state.items = initialState.items;
        const newFilters = state.filters.map((item) => {
          if (item.categoryName === "Show All") {
            return { categoryName: item.categoryName, selected: true };
          }
          return { categoryName: item.categoryName, selected: false };
        });
        state.filters = newFilters;
        return;
      }
      const newFilters = state.filters.map((item) => {
        if (action.payload === item.categoryName) {
          return { categoryName: item.categoryName, selected: true };
        }
        return { categoryName: item.categoryName, selected: false };
      });
      state.filters = newFilters;

      const newFilteredItems = initialState.items.filter((item) => {
        return item.category === action.payload;
      });
      state.items = newFilteredItems;
    },
    setFilters(state, action) {
      const allCategories = initialState.items.map((item) => {
        return { categoryName: item.category, selected: false };
      });
      const noDuplicateCategories = allCategories.filter(
        (item, index, arr) =>
          index ===
          arr.findIndex(
            (el) =>
              el.categoryName === item.categoryName &&
              el.selected === item.selected
          )
      );
      const filtersToDisplay = [
        { categoryName: "Show All", selected: true },
        ...noDuplicateCategories,
      ];
      state.filters = filtersToDisplay;
    },
  },
});
export const filteredItemsActions = filteredItemsSlice.actions;

export default filteredItemsSlice.reducer;
