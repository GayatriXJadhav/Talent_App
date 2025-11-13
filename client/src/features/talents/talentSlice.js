import {createSlice} from '@reduxjs/toolkit';
import { addTalent, fetchTalents, filterTalentBySkill } from './talentAPI';

const talentSlice=createSlice({
    name:'talents',
    initialState:{
        data:[],
        loading:false,
        error:null,
    },
    reducers:{
        clearError:(state)=>{
            state.error=null;
        },
    },
    extraReducers:(builder)=>{
        builder
        //Fetch all Talents
        .addCase(fetchTalents.pending, (state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(fetchTalents.fulfilled,(state,action)=>{
            state.loading=false;
            state.data=action.payload;

        })
        .addCase(fetchTalents.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        })

        //add new Talent
        .addCase(addTalent.pending,(state)=>{
            state.loading=true;
            
        })
        .addCase(addTalent.fulfilled,(state,action)=>{
            state.loading=false;
            state.data.push(action.payload);

        })
        .addCase(addTalent.rejected, (state,action)=>{
               state.loading=false;
               state.error=action.payload;
        })

        //Filter skills
        .addCase(filterTalentBySkill.pending,(state)=>{
            state.loading=true;

        })
        .addCase(filterTalentBySkill.fulfilled,(state,action)=>{
            state.loading=false;
            state.data=action.payload;
        })
        .addCase(filterTalentBySkill.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        })
    },
});
export { fetchTalents, addTalent, filterTalentBySkill };
export const {clearError}=talentSlice.actions;
export default talentSlice.reducer;