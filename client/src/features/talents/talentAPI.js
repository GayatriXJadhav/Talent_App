import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';


const API_BASE_URL =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_API_BASE_URL
    : 
    "http://localhost:5000";
const API_URL=`${API_BASE_URL}/api/talents`;

export const fetchTalents=createAsyncThunk(
    'talents/fetchAll',
    async(_,{rejectWithValue})=>{
        try{
            const response=await axios.get(API_URL);
            return response.data;
        }
        catch(error){
              return rejectWithValue(error.response?.data || 'Failed to fetch talents');
        }
    }
);

export const addTalent=createAsyncThunk(
    'talents/addTalent',
    async(newTalent,{rejectWithValue})=>{
        try{
          
            const response=await axios.post(API_URL,newTalent);
            return response.data;
        }
        catch(error){
            return rejectWithValue(error.response?.data?.message || 'Failed to add talents');
        }
    }
);

export const filterTalentBySkill=createAsyncThunk(
    'talents/filterBySkill',
    async(skill ,{rejectWithValue})=>{
        try{
            const response=await axios.get(`${API_URL}?skill=${skill}`);
            return response.data;
        }
        catch(error){
            return rejectWithValue(error.response?.data || 'Failed to filter talents');
        }
    }
)
// Add these to your existing talentAPI.js
export const updateTalent = createAsyncThunk(
    'talents/updateTalent',
    async ({ talentId, updateData }, { rejectWithValue }) => {
        try {
            const response = await axios.put(`${API_URL}/${talentId}`, updateData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to update talent');
        }
    }
);

export const deleteTalent = createAsyncThunk(
    'talents/deleteTalent',
    async (talentId, { rejectWithValue }) => {
        try {
            await axios.delete(`${API_URL}/${talentId}`);
            return talentId;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to delete talent');
        }
    }
);

export default {fetchTalents,addTalent,filterTalentBySkill,updateTalent,deleteTalent};