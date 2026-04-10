# REDUX - Complete Beginner's Guide 📚

## Table of Contents
1. What is Redux?
2. Why Redux?
3. Core Concepts
4. Redux Flow
5. Installation & Setup
6. Redux Toolkit (Modern Redux)
7. Complete Shopping Cart Example
8. Async Operations with Redux
9. Redux vs Context API
10. Common Interview Questions

---

## 1. What is Redux?

**Simple Definition:** Redux is a state management library that provides a central store for all the data in your React application.

**Analogy:** Think of Redux as a central library where anyone can borrow and return books. Instead of everyone having their own bookshelf (local state), everyone shares the same library.

---

## 2. Why Redux?

### Problem without Redux:
- Components need to share data
- Props have to be passed through many levels (prop drilling)
- State management becomes messy in large apps

### Solution with Redux:
- One central store
- Any component can access any data
- Predictable state updates

---

## 3. Core Concepts

### Three Principles of Redux:

```
┌─────────────────────────────────────────────────────────┐
│  PRINCIPLE 1: Single Source of Truth                    │
│  One store for the entire application                   │
├─────────────────────────────────────────────────────────┤
│  PRINCIPLE 2: State is Read-Only                        │
│  Only actions can change state                          │
├─────────────────────────────────────────────────────────┤
│  PRINCIPLE 3: Changes are Made with Pure Functions      │
│  Reducers take state + action → return new state        │
└─────────────────────────────────────────────────────────┘
```

### The Four Main Parts:

| Part | Description | Analogy |
|------|-------------|---------|
| **Store** | Holds the entire state | Bank vault |
| **Action** | Describes what happened | Withdrawal slip |
| **Reducer** | Determines how state changes | Bank teller |
| **Dispatch** | Sends action to reducer | Customer giving slip |

---

## 4. Redux Flow (VERY IMPORTANT)

```
        User Clicks Button
              ↓
        Dispatch Action
              ↓
        Action Object
    { type: "ADD_ITEM" }
              ↓
        Reducer Processes
              ↓
        New State Created
              ↓
        Store Updates
              ↓
        Components Re-render
```

---

## 5. Installation & Setup

### Step 1: Create React App
```bash
npm create vite@latest redux-app -- --template react
cd redux-app
npm install
```

### Step 2: Install Redux Toolkit
```bash
npm install @reduxjs/toolkit react-redux
```

### Step 3: Start the App
```bash
npm run dev
```

---

## 6. Redux Toolkit (Modern Redux)

### File Structure:
```
src/
├── store/
│   ├── index.js           # Main store configuration
│   ├── counterSlice.js    # Counter slice
│   ├── cartSlice.js       # Cart slice
│   └── userSlice.js       # User slice
├── components/
└── App.jsx
```

### Basic Counter Example:

**store/counterSlice.js**
```javascript
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    reset: (state) => {
      state.value = 0;
    }
  }
});

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;
export default counterSlice.reducer;
```

**store/index.js**
```javascript
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});
```

**main.jsx**
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

**Counter.jsx**
```javascript
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './store/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default Counter;
```

---

## 7. Complete Shopping Cart Example

### cartSlice.js
```javascript
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price
        });
      }
      
      state.totalQuantity += 1;
      state.totalAmount += newItem.price;
    },
    
    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.totalPrice;
        state.items = state.items.filter(item => item.id !== id);
      }
    },
    
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);
      
      if (item) {
        item.quantity += 1;
        item.totalPrice += item.price;
        state.totalQuantity += 1;
        state.totalAmount += item.price;
      }
    },
    
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);
      
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice -= item.price;
        state.totalQuantity -= 1;
        state.totalAmount -= item.price;
      } else if (item && item.quantity === 1) {
        state.totalQuantity -= 1;
        state.totalAmount -= item.price;
        state.items = state.items.filter(item => item.id !== id);
      }
    },
    
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    }
  }
});

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
```

### ProductList.jsx
```javascript
import { useDispatch } from 'react-redux';
import { addItem } from './store/cartSlice';

const products = [
  { id: 1, name: "Laptop", price: 50000, emoji: "💻" },
  { id: 2, name: "Mobile", price: 20000, emoji: "📱" },
  { id: 3, name: "Headphones", price: 3000, emoji: "🎧" },
  { id: 4, name: "Smart Watch", price: 15000, emoji: "⌚" }
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
      {products.map(product => (
        <div key={product.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
          <div style={{ fontSize: '48px' }}>{product.emoji}</div>
          <h3>{product.name}</h3>
          <p>₹{product.price.toLocaleString()}</p>
          <button onClick={() => dispatch(addItem(product))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
```

### Cart.jsx
```javascript
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem, clearCart } from './store/cartSlice';

function Cart() {
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (items.length === 0) {
    return <p>Cart is empty 🛒</p>;
  }

  return (
    <div style={{ padding: '20px', background: '#f9f9f9', borderRadius: '8px' }}>
      <h2>Cart ({totalQuantity} items)</h2>
      
      {items.map(item => (
        <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #ddd' }}>
          <div>
            <strong>{item.name}</strong>
            <br />
            <small>₹{item.price} each</small>
          </div>
          
          <div>
            <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
            <span style={{ margin: '0 10px' }}>{item.quantity}</span>
            <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
          </div>
          
          <div>₹{item.totalPrice.toLocaleString()}</div>
          
          <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
        </div>
      ))}
      
      <div style={{ marginTop: '20px', textAlign: 'right' }}>
        <h3>Total: ₹{totalAmount.toLocaleString()}</h3>
        <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      </div>
    </div>
  );
}

export default Cart;
```

---

## 8. Async Operations with Redux

### Using createAsyncThunk

**store/usersSlice.js**
```javascript
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching users
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default usersSlice.reducer;
```

### Using in Component
```javascript
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './store/usersSlice';

function UsersList() {
  const { users, loading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <div>Loading users... ⏳</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name} - {user.email}</li>
      ))}
    </ul>
  );
}

export default UsersList;
```

---

## 9. Redux vs Context API

| Feature | Redux | Context API |
|---------|-------|-------------|
| **Purpose** | State management | Prop drilling solution |
| **Performance** | Better for frequent updates | Can cause unnecessary re-renders |
| **DevTools** | Excellent (time travel) | Limited |
| **Middleware** | Yes (thunk, saga) | No |
| **Code Size** | More boilerplate | Less code |
| **Learning Curve** | Steeper | Easier |
| **Best For** | Large apps, complex state | Small to medium apps |

**When to use Redux:**
- Large application with many components
- Complex state that needs frequent updates
- State needs to be shared across many components
- Need time-travel debugging

**When to use Context API:**
- Small to medium applications
- Simple state (theme, language, user auth)
- Few components need the data

---

## 10. Common Interview Questions

### Q1: What is Redux?
**A:** Redux is a predictable state container for JavaScript apps. It helps manage application state in a single store, making state updates predictable and easier to debug.

### Q2: What are the core principles of Redux?
**A:** 
1. **Single Source of Truth** – The state of the whole app is stored in one object tree
2. **State is Read-Only** – The only way to change state is by dispatching actions
3. **Changes are Made with Pure Functions** – Reducers are pure functions that specify how state changes

### Q3: What is the difference between Redux and React Context?
**A:** Redux provides a complete state management solution with DevTools, middleware support, and better performance for frequent updates. Context API is simpler but can cause unnecessary re-renders and doesn't have middleware support.

### Q4: What is Redux Toolkit?
**A:** Redux Toolkit is the official, recommended way to write Redux logic. It reduces boilerplate code and includes utilities like `createSlice`, `createAsyncThunk`, and `configureStore`.

### Q5: What is a reducer?
**A:** A reducer is a pure function that takes the current state and an action, and returns a new state. It should not mutate the existing state.

### Q6: What is middleware in Redux?
**A:** Middleware provides a third-party extension point between dispatching an action and the moment it reaches the reducer. It's used for logging, crash reporting, handling async actions, etc.

### Q7: What is the difference between `useSelector` and `useDispatch`?
**A:** 
- `useSelector` reads data from the Redux store
- `useDispatch` returns a reference to the dispatch function to send actions

---

## 11. Redux Toolkit Cheat Sheet

```javascript
// 1. Create a Slice
const slice = createSlice({
  name: 'feature',
  initialState: { value: 0 },
  reducers: {
    action: (state, action) => {
      state.value = action.payload;
    }
  }
});

// 2. Export Actions
export const { action } = slice.actions;

// 3. Export Reducer
export default slice.reducer;

// 4. Configure Store
export const store = configureStore({
  reducer: {
    feature: featureReducer
  }
});

// 5. Provide Store
<Provider store={store}>
  <App />
</Provider>

// 6. Use in Component
const value = useSelector(state => state.feature.value);
const dispatch = useDispatch();
dispatch(action(payload));
```

---

## 12. Quick Reference

### Redux Flow:
```
Component → dispatch(action) → Reducer → New State → Component Re-renders
```

### File Structure:
```
src/
├── store/
│   ├── index.js          (configureStore)
│   ├── counterSlice.js   (createSlice)
│   └── userSlice.js      (another slice)
└── App.jsx
```

### Key Hooks:
- `useSelector()` – Read state from store
- `useDispatch()` – Get dispatch function

---