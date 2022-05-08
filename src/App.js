import React from 'react';
import ToDoPage from './ToDoPage';
import Header from './components/Header';

const App = () => {
    return (
        <div className="App">
            <Header />
            <ToDoPage />
        </div>
    )
}

export default App;
