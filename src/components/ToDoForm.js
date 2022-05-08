import React, { useState } from 'react';


const ToDoForm = ({ addTask }) => {
    const [userInput, setUserInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    };

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" value={userInput}
                    className="enter-task"
                    onChange={e => setUserInput(e.target.value)}
                    placeholder="Enter a Task..." />
                <button>Add</button>
            </form>

        </div>
    )
}

export default ToDoForm;
