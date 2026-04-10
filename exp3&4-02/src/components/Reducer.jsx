// Imagine you have a vending machine :

// useState = A simple button:

// Press ➕ → get one soda
// Press ➖ → return one soda
// Simple, but if you want to do complex things? Not great!

// useReducer = A touchscreen vending machine:

// Has buttons: "Buy Soda", "Return Soda", "Add Money", "Get Change", "Refund"
// Each button does a SPECIFIC action
// The machine KNOWS what to do for each action
// Perfect for complex operations!
// useReducer is like having a RULE BOOK for how state should change!

// dispatch({ type: 'DEPOSIT', amount: 100 });
// dispatch({ type: 'WITHDRAW', amount: 50 });
// dispatch({ type: 'RESET' });
//Each action has a NAME, and the reducer knows exactly what to do!

import { useReducer } from 'react';

// STEP 1: Create the REDUCER (The Rule Book)
// This is like a "decision maker" that knows what to do for each action
function bankReducer(state, action) {
  switch (action.type) {
    case 'DEPOSIT':
      return { balance: state.balance + action.amount };
    case 'WITHDRAW':
      return { balance: state.balance - action.amount };
    case 'RESET':
      return { balance: 0 };
    default:
      return state; // If action unknown, don't change anything
  }
}

// STEP 2: Use the reducer in your component
function BankAccount() {
  // useReducer(reducerFunction, initialState)
  const [state, dispatch] = useReducer(bankReducer, { balance: 0 });
  
  // state = current data
  // dispatch = function to send actions to reducer
  
  return (
    <div>
      <h2>Bank Account</h2>
      <p>Balance: ₹{state.balance}</p>
      
      {/* Send actions to the reducer */}
      <button onClick={() => dispatch({ type: 'DEPOSIT', amount: 100 })}>
        Deposit ₹100 
      </button>
      <button onClick={() => dispatch({ type: 'WITHDRAW', amount: 50 })}>
        Withdraw ₹50 
      </button>
      <button onClick={() => dispatch({ type: 'RESET' })}>
        Reset Account 
      </button>
    </div>
  );
}

export default BankAccount;

// useState = Simple Sandwich 🥪
// Bread + cheese + ham
// Simple, quick

// useReducer = Gourmet Restaurant Kitchen 🍽️
// Has a CHEF (reducer) who knows all recipes
// Orders come in: "Make Pizza!" "Make Pasta!" "Make Salad!"
// Chef knows exactly what to do for each order
// Perfect for complex meals (state logic)!

//NOTE DO NOT MODIFY THE STATE DIRECTLY ALWAYS RETURN A NEW STATE 
// function badReducer(state, action) {
//   case 'ADD_ITEM':
//     state.items.push(action.item); //  DON'T DO THIS!
//     return state;
// }

// function goodReducer(state, action) {
//   case 'ADD_ITEM':
//     return {
//       ...state,
//       items: [...state.items, action.item] //  New array!
//     };
// }

// "useReducer is a React Hook that I use for managing complex state logic. 
// It's like an advanced version of useState.

// It takes a reducer function (which knows how to update state based on actions) 
// and an initial state.

// It returns:

// state – The current state value
// dispatch – A function to send actions to the reducer
// The reducer is a pure function that takes the current state and an action, 
// and returns a new state.

// I use useReducer when:

// State is complex (objects with multiple properties)
// State updates have complex logic
// Multiple state values are related
// Next state depends on previous state in complex ways
// It's especially great for things like shopping carts, todo lists, 
// forms with validation, and any state with many possible actions!"