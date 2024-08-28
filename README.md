# NgrxDemo
State management demo in angular application using Ngrx


Key points to understand:

    1.State: Think of it as a snapshot of your app’s data at any moment.
    2.Actions: They are like messages that describe what happened in the app, such as a button click or data being loaded.
    3.Reducers: These are functions that decide how the data should change when an action occurs. They take the previous state and the action and calculate the new state.
    4.Store: It’s like a big container that holds the entire app’s data.
    5.Selectors: These are like special tools to fetch specific pieces of data from the store when you need them.


Installing NgRx Libraries:
    
    npm install @ngrx/core
    npm install @ngrx/store
    npm install @ngrx/effects