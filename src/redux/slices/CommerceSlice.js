/* eslint-disable no-useless-catch */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchProducts = createAsyncThunk(
  "commerce/fetchProducts",
  async () => {
    try {
      const response = await axios.get("http://localhost:3000/Products");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchCategories = createAsyncThunk(
  "commerce/fetchCategories",
  async () => {
    try {
      const response = await axios.get("http://localhost:3000/Categories");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
export const getWishlist = createAsyncThunk(
  "commerce/getWishlist",
  async (userId) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/Wishlists?email=${userId}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const addToWishlist = createAsyncThunk(
  "commerce/addToWishlist",
  async (wishlistData, id) => {
    try {
      const { data } = await axios.put(
        `http://localhost:3000/Wishlists/${id}`,
        wishlistData
      );
      return data;
    } catch (error) {
      throw error;
    }
  }
);
export const addOrderAsync = (payload) => async () => {
  try {
    const { data } = await axios.post("http://localhost:3000/Orders", payload);

    // İsteğin başarılı olması durumunda, başka bir action dispatch edebilirsiniz
    // Örneğin: dispatch({ type: 'ORDER_ADDED_SUCCESS', payload: data });

    console.log(data);
  } catch (error) {
    // İstek başarısız olduğunda, hata işleme mekanizmasını burada yönetebilirsiniz
    // Örneğin: dispatch({ type: 'ORDER_ADDED_FAILURE', payload: error.message });
    throw new Error(error.message);
  }
};
export const getOrdersAsync = createAsyncThunk(
  "orders/getOrders",
  async (userId) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/Orders?user_id=${userId}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const CommerceSlice = createSlice({
  name: "commerce",
  initialState: {
    products: [],
    categories: [],
    filteredProducts: [],
    cart: [],
    selectedCategory: "",
    searchText: "",
    orders: [],
    wishlist: [],
  },
  reducers: {
    search: (state, action) => {
      const searchQuery = action.payload.toString().toLowerCase().trim();
      if (searchQuery === "") {
        // Eğer arama sorgusu boşsa, ürünleri filtrelenmemiş haliyle ayarla
        state.filteredProducts = state.products;
      } else {
        // Aksi takdirde, arama sorgusuna göre ürünleri filtrele
        state.filteredProducts = state.products.filter((product) =>
          product.title.toLowerCase().includes(searchQuery)
        );
      }
    },

    addToCart: (state, action) => {
      const product = state.cart.find(
        (item) => item.product.id === action.payload.id
      );

      if (product) {
        state.cart = state.cart.map((i) =>
          i.product.id === action.payload.id
            ? { product: i.product, quantity: i.quantity + 1 }
            : i
        );
      } else {
        state.cart = [...state.cart, { product: action.payload, quantity: 1 }];
      }
    },

    removeToCart: (state, action) => {
      state.cart = state.cart.filter((i) => i.product.id != action.payload);
    },
    removeAllCart: (state) => {
      state.cart = [];
    },
    filterByCategory: (state, action) => {
      state.filteredProducts = state.products.filter(
        (i) => i.categoryid == action.payload
      );
    },
    allProducts: (state) => {
      state.filteredProducts = state.products;
    },
    getProducts: (state) => {
      try {
        const res = axios.get("http://localhost:3000/Products");
        state.products = res.data; // assuming the response data is an array
        console.log(res);
      } catch (error) {
        console.log("olmadı", error);
      }
    },

    getCategories: (state) => {
      try {
        const { data } = axios.get("http://localhost:3000/Categories");
        state.categories = data;
        console.log(data);
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.filteredProducts = action.payload;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(getWishlist.fulfilled, (state, action) => {
        state.wishlist = action.payload;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        console.log(action.payload); // Dilediğiniz işlemleri gerçekleştirin
      })
      .addCase(getOrdersAsync.fulfilled, (state, action) => {
        state.orders = action.payload;
      });
  },
});

export const {
  search,
  addToCart,
  removeToCart,
  filterByCategory,
  addOrder,

  allProducts,
  getCategories,
  getProducts,
  removeAllCart,
} = CommerceSlice.actions;

export default CommerceSlice.reducer;
