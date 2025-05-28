import { Types } from "@/_helpers/constants";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  data: { type: Types; items: any[] }[];
  isLoading: boolean;
  error: string | null;
  activeTab: Types;
}

const initialState: SearchState = {
  data: [],
  isLoading: false,
  error: null,
  activeTab: Types.FILMS,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setResults(state, action: PayloadAction<SearchState['data']>) {
      state.data = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    setActiveTab(state, action: PayloadAction<Types>) {
      state.activeTab = action.payload;
    },
    resetSearch(state) {
      state.data = [];
      state.isLoading = false;
      state.error = null;
      state.activeTab = Types.FILMS;
    },
  },
});

export const { setIsLoading, setResults, setError, setActiveTab, resetSearch } = searchSlice.actions;
export default searchSlice.reducer;
