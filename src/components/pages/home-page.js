import React from 'react'; 
import BookList from '../book-list';
import ShoppingCartTable from '../shopping-cart-table'; 

const HomePage = () => {
    
    return (
        <div>
            <BookList books={[]} />
            <ShoppingCartTable />
        </div>
        
    )
}

export default HomePage; 