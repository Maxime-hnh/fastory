import { Types } from '@/_schemas/search.schema';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  term: string;
  data: { type: Types; items: any[] }[];
  isLoading: boolean;
  error: string | null;
  activeTab: Types;
}

const initialState: SearchState = {
  term: '',
  data: [],
  isLoading: false,
  error: null,
  activeTab: Types.FILMS,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.term = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
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
      state.term = '';
      state.isLoading = false;
      state.error = null;
      state.activeTab = Types.FILMS;
    },
  },
});

export const { setSearchTerm, setLoading, setResults, setError, setActiveTab, resetSearch } = searchSlice.actions;
export default searchSlice.reducer;
