import { createSlice } from '@reduxjs/toolkit'
import { fetchFollowerListThunk } from '../components/search/search-thunks.js'

const initialState = {
  followers: [],
  loading: false,
}

const followerSlice = createSlice({
  name: 'followers',
  initialState,
  extraReducers: {
    [fetchFollowerListThunk.pending]: (state) => {
      state.loading = true
      state.followers = []
    },
    [fetchFollowerListThunk.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.followers = payload
    },
    [fetchFollowerListThunk.rejected]: (state) => {
      state.loading = false
    },
  },
})

export default followerSlice.reducer
