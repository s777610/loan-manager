# Loan Manager
This application([Loan Manager](https://reactclientpanel-57599.firebaseapp.com/login?redirect=%2Fsettings)) was mainly built by React, Redux and Firebase. One the back-end, it uses firebase service to create the serverless application. The data is stored on firebase and the app is hosted on firebase. On the front end, I use react and redux to create an interactive web page. It uses react-redux-firebase as the library to manipulate the state. It is very useful for me to remember who own me money.


## Functionality:
1. Authentication:
    Users only can register if I set allowRegistration to true. Only logined users can see clients information.

2. Create and Edit Client's Loan:
    Users can create Client information and amount of loan. There are several fields should be filled, including First Name, Last Name, Email, Phone and so on. The balance fields is optional. In addition, user can edit client's information including balance.


## Architecture 
```
├── App.css
├── App.js
├── App.test.js
├── actions
│   ├── notifyActions.js
│   ├── settingsActions.js
│   └── types.js
├── components
│   ├── auth
│   │   ├── Login.js
│   │   └── Register.js
│   ├── clients
│   │   ├── AddClient.js
│   │   ├── ClientDetails.js
│   │   ├── Clients.js
│   │   └── EditClient.js
│   ├── layout
│   │   ├── Alert.js
│   │   ├── AppNavbar.js
│   │   ├── Dashboard.js
│   │   ├── Sidebar.js
│   │   ├── Spinner.js
│   │   └── spinner.gif
│   └── settings
│       └── Settings.js
├── helpers
│   └── auth.js
├── index.js
├── reducers
│   ├── notifyReducer.js
│   └── settingsReducer.js
├── serviceWorker.js
└── store.js
```

