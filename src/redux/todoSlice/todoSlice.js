import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
    todoItems: [],
};

// Create todo slice
const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        // Reducer for creating a todo item
        createItem(state, action) {
            const newItem = {
                id: Date.now(),
                title: action?.payload?.title,
                description: action?.payload?.description,
            };
            state.todoItems.unshift(newItem);
        },
        // Reducer for updating a todo item
        updateItem(state, action) {
            const { id, title, description } = action.payload;
            const itemToUpdate = state.todoItems.find(item => item.id === id);
            if (itemToUpdate) {
                itemToUpdate.title = title;
                itemToUpdate.description = description;
            }
        },
        // Reducer for deleting a todo item
        deleteItem(state, action) {
            const idToDelete = action.payload;
            state.todoItems = state.todoItems.filter(item => item.id !== idToDelete);
        },
    },
});

// Export actions
export const { createItem, updateItem, deleteItem } = todoSlice.actions;

// Export reducer
export default todoSlice.reducer;
