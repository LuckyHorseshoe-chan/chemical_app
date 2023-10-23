import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import formData from '../types/formData';

export interface FormState {
    data: formData;
}
  
const initialState: FormState = {
    data: {
        nanoparticle: {
            id: "",
            np_str: "",
            size: 0,
            article_id: 0,
            mep_id: 0,
            mat_id: "",
            user_id: 0
        },
        material: {
            mat_id: "",
            name: "",
            synonyms: "",
            chem_form: "",
            cas_num: 0
        },
        synthesis: {
            id: 0,
            method: "",
            article_id: 0,
            np_id: ""
        },
        nova: {
            id: 0,
            method: "",
            absorbat: "",
            pore_size: 0,
            density: 0,
            ads_desorb_curve: "",
            pore_distr_curve: "",
            np_id: ""
        },
    },
};

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setNpId: (state, action: PayloadAction<string>) => {
            state.data.nanoparticle.id = action.payload;
            state.data.synthesis.np_id = action.payload;
            state.data.nova.np_id = action.payload;
        },
        setNpStr: (state, action: PayloadAction<string>) => {
            state.data.nanoparticle.np_str = action.payload;
        },
        setNpSize: (state, action: PayloadAction<number>) => {
            state.data.nanoparticle.size = action.payload;
        },
        setArticleId: (state, action: PayloadAction<number>) => {
            state.data.nanoparticle.article_id = action.payload;
            state.data.synthesis.article_id = action.payload;
        },
        setMepId: (state, action: PayloadAction<number>) => {
            state.data.nanoparticle.mep_id = action.payload;
        },
        setMatId: (state, action: PayloadAction<string>) => {
            state.data.nanoparticle.mat_id = action.payload;
            state.data.material.mat_id = action.payload;
        },
        setUserId: (state, action: PayloadAction<number>) => {
            state.data.nanoparticle.user_id = action.payload;
        },
        setMatName: (state, action: PayloadAction<string>) => {
            state.data.material.name = action.payload;
        },
        setMatSynonyms: (state, action: PayloadAction<string>) => {
            state.data.material.synonyms = action.payload;
        },
        setMatChemForm: (state, action: PayloadAction<string>) => {
            state.data.material.chem_form = action.payload;
        },
        setMatCas: (state, action: PayloadAction<number>) => {
            state.data.material.cas_num = action.payload;
        },
        setSynthesisId: (state, action: PayloadAction<number>) => {
            state.data.synthesis.id = action.payload;
        },
        setSynthesisMethod: (state, action: PayloadAction<string>) => {
            state.data.synthesis.method = action.payload;
        },
        setNovaId: (state, action: PayloadAction<number>) => {
            state.data.nova.id = action.payload;
        },
        setNovaMethod: (state, action: PayloadAction<string>) => {
            state.data.nova.method = action.payload;
        },
        setNovaAbsorbat: (state, action: PayloadAction<string>) => {
            state.data.nova.absorbat = action.payload;
        },
        setNovaPoreSize: (state, action: PayloadAction<number>) => {
            state.data.nova.pore_size = action.payload;
        },
        setNovaDensity: (state, action: PayloadAction<number>) => {
            state.data.nova.density = action.payload;
        },
        setNovaAdsCurve: (state, action: PayloadAction<string>) => {
            state.data.nova.ads_desorb_curve = action.payload;
        },
        setNovaPoreCurve: (state, action: PayloadAction<string>) => {
            state.data.nova.pore_distr_curve = action.payload;
        },
    },
});
export const { 
    setNpId, setNpStr, setNpSize, setArticleId, setMepId, setMatId,
    setUserId, setMatName, setMatSynonyms, setMatChemForm, setMatCas, 
    setSynthesisId, setSynthesisMethod, setNovaMethod, setNovaAbsorbat,
    setNovaPoreSize,  setNovaDensity, setNovaAdsCurve, setNovaPoreCurve, setNovaId
} = formSlice.actions;

export const selectForm = (state: RootState) => state.form.data;

export default formSlice.reducer;