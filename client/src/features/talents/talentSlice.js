import {createSlice} from '@reduxjs/toolkit';
import { addTalent, deleteTalent, fetchTalents, filterTalentBySkill,updateTalent } from './talentAPI';

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
            if(action.payload?._id){

                state.data.push(action.payload);
            }

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
                .addCase(updateTalent.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(updateTalent.fulfilled, (state, action) => {
            state.loading = false;
            // Find and update the talent in the data array
            const updatedTalent = action.payload;
            const index = state.data.findIndex(talent => talent._id === updatedTalent._id);
            if (index !== -1) {
                state.data[index] = updatedTalent;
            }
        })
        .addCase(updateTalent.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        
        // Delete talent
        .addCase(deleteTalent.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(deleteTalent.fulfilled, (state, action) => {
            state.loading = false;
            // Remove the deleted talent from the data array
            state.data = state.data.filter(talent => talent._id !== action.payload);
        })
        .addCase(deleteTalent.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});
export { fetchTalents, addTalent, filterTalentBySkill,updateTalent,deleteTalent };
export const {clearError}=talentSlice.actions;
export default talentSlice.reducer;