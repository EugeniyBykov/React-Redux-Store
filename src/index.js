import React from 'react'; 
import ReactDom from 'react-dom'; 
import { Provider } from 'react-redux'; 
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app'; 
import ErrorBoundry from './components/error-boundry'; 
import BookstoreService from './servises/bookstore-service'; 
import { BookStoreServiceProvider } from './components/bookstore-service-context';

import store from './store'; 

const BookStoreService = new BookstoreService();

ReactDom.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BookStoreServiceProvider value={BookStoreService}>
                <Router>
                    <App />
                </Router>
            </BookStoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root') 
);