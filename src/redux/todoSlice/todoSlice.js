import {
    createSlice,
    createAsyncThunk,
} from "@reduxjs/toolkit";

import {
    getListApi, deleteItemApi,
    createItemApi, updateItemApi
} from "../../services/api/methods/auth";

export const getTodoList = createAsyncThunk("get/items", async (payload) => {
    try {
        const response = await getListApi(payload?.params?.page);
        const data = response.data;
        return data;
    } catch (err) {
        throw err.message == "Network Error" ? err?.message : err;
    }
});

export const deletListItem = createAsyncThunk("delete/item", async (id) => {
    try {
        const response = await deleteItemApi(id);
        const data = response.data;
        return data;
    } catch (err) {
        throw err.message == "Network Error" ? err?.message : err;
    }
});

export const createListItem = createAsyncThunk("post/itemCreate", async (payload) => {
    try {
        const response = await createItemApi(payload);
        const data = response.data;
        return data;
    } catch (err) {
        throw err.message == "Network Error" ? err?.message : err;
    }
});
export const updateListItem = createAsyncThunk("put/itemUpdate", async (payload) => {
    try {
        const response = await updateItemApi(payload?.id, payload?.params);
        const data = response.data;
        return data;
    } catch (err) {
        throw err.message == "Network Error" ? err?.message : err;
    }
});

const todoSlice = createSlice({
    name: "todoListing",
    initialState: {
        endPage: null,
        loading: false,
        todoList: [],
        error: "",
    },
    reducers: {
        resetTodoList: (state, action) => {
            state.todoList = [];
            state.endPage = null;
        },
    },

    extraReducers: (builder) => {
        //List
        builder.addCase(getTodoList.fulfilled, (state, action) => {
            if (action?.meta?.arg?.params?.page == 1) {
                state.todoList = action?.payload?.items?.data;
            } else {
                state.todoList = [
                    ...state.todoList,
                    ...action?.payload?.items?.data,
                ];
            }
            state.endPage = action.payload?.items?.last_page;
            state.loading = false;
        })
        builder.addCase(getTodoList.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(getTodoList.rejected, (state, action) => {
            state.loading = false;
            console.log(action?.error)
            // alert(action?.error?.message);
        })
    },

});

export const { resetTodoList } = todoSlice.actions;
export default todoSlice.reducer;
