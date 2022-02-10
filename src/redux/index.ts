import { createStore, Store, applyMiddleware } from 'redux'
import { ProductState } from './reducers/types'
import { cartProducts } from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, cartProducts)

const store: Store<ProductState> = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware())
)
const persistor = persistStore(store)

export { store, persistor }
