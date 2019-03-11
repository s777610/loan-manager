import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
import settingsReducer from "./reducers/settingsReducer";

// Reducers
import notifyReducer from "./reducers/notifyReducer";

const firebaseConfig = {
  apiKey: "AIzaSyAyhUmlnvzup_9X9_y6OtPA_-fP388l7b0",
  authDomain: "reactclientpanel-57599.firebaseapp.com",
  databaseURL: "https://reactclientpanel-57599.firebaseio.com",
  projectId: "reactclientpanel-57599",
  storageBucket: "reactclientpanel-57599.appspot.com",
  messagingSenderId: "98254380344"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Init firestore
// const firestore = firebase.firestore();
// const settings = { timestampsInSnapshots: true };
// firestore.settings(settings);

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase) // <- needed if using firestore
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer, // <- needed if using firestore
  notify: notifyReducer,
  settings: settingsReducer
});

// Create initial state
const initialState = {};

// Create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
