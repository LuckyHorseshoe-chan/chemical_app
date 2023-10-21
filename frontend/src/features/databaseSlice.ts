import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import axios from 'axios'
import Nanoparticle from '../types/Nanoparticle';
import Material from '../types/Material';
import Synthesis from '../types/Synthesis';
import Nova from '../types/Nova';

interface databaseData {
    nanoparticle: Nanoparticle[];
    material: Material[];
    synthesis: Synthesis[];
    nova: Nova[];
}
export interface DatabaseState {
    data: databaseData;
    column: string
}
  
const initialState: DatabaseState = {
    data: {
        nanoparticle: [],
        material: [],
        synthesis: [],
        nova: [],
    },
    column: "Nanoparticle"
};

export const getNanoparticleAsync = createAsyncThunk(
    'database/fetchNanoparticle',
    async () => {
        const response = await axios.get('http://localhost:8000/api/nanoparticles/');
        return response.data;
    }
);

export const getMaterialAsync = createAsyncThunk(
    'database/fetchMaterial',
    async () => {
        const response = await axios.get('http://localhost:8000/api/materials/');
        return response.data;
    }
);

export const getSynthesisAsync = createAsyncThunk(
    'database/fetchSynthesis',
    async () => {
        const response = await axios.get('http://localhost:8000/api/synthesises/');
        return response.data;
    }
);

export const getNOVAAsync = createAsyncThunk(
    'database/fetchNOVA',
    async () => {
        const response = await axios.get('http://localhost:8000/api/NOVA/');
        return response.data;
    }
);

export const databaseSlice = createSlice({
    name: 'database',
    initialState,
    reducers: {
        setColumn: (state, action: PayloadAction<string>) => {
            state.column = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getNanoparticleAsync.fulfilled, (state, action) => {
                state.data.nanoparticle = action.payload;
            })
            .addCase(getMaterialAsync.fulfilled, (state, action) => {
                state.data.material = action.payload;
            })
            .addCase(getSynthesisAsync.fulfilled, (state, action) => {
                state.data.synthesis = action.payload;
            })
            .addCase(getNOVAAsync.fulfilled, (state, action) => {
                state.data.nova = action.payload;
            })
        },
});
export const { setColumn } = databaseSlice.actions;

export const selectDatabase = (state: RootState) => state.database;

export default databaseSlice.reducer;