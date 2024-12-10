import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  let newState;
  
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        newState = {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        newState = {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }
      break;

    case 'REMOVE_FROM_CART':
      newState = {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
      break;

    case 'UPDATE_QUANTITY':
      newState = {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
      break;

    case 'CLEAR_CART':
      newState = { ...state, items: [] };
      break;

    default:
      return state;
  }

  // Guardar en localStorage después de cada cambio
  localStorage.setItem('cart', JSON.stringify(newState));
  return newState;
};

export const CartProvider = ({ children }) => {
  // Recuperar el carrito del localStorage al iniciar
  const initialState = {
    items: JSON.parse(localStorage.getItem('cart'))?.items || [],
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Calcular el total
  const total = state.items.reduce(
    (sum, item) => sum + item.precio * item.quantity,
    0
  );

  return (
    <CartContext.Provider value={{ state, dispatch, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser usado dentro de un CartProvider');
  }
  return context;
};