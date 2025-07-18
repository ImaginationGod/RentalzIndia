import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: false
    },
    reducers: {
        // increment: state => {
        //   state.value += 1
        // },
        // decrement: state => {
        //   state.value -= 1
        // },
        isAuthTrue: (state) => {
            state.value = true;
            sessionStorage.setItem('isAuthenticated', 'true');
        },
        isAuthFalse: (state) => {
            state.value = false;
            sessionStorage.setItem('isAuthenticated', 'false');
        }
    }
})

export const { isAuthTrue, isAuthFalse } = counterSlice.actions
// export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer