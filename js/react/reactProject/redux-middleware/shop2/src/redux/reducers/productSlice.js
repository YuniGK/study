import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

let initialState = {
    productList : []
    , selectedItem : null
    , isLoading : false
    , error : null
}

                                    //액션이름, 할일을 작성한다.
                                                        //요청 정보, thunkAPI 정보
export const fetchProducts = createAsyncThunk('product/fetchAll', async (searchQuery, thunkAPI)=> {
    try {
        let url = `http://localhost:4000/products?q=${searchQuery}`;

        let response = await fetch(url);
        return await response.json();
    } catch (error) {
        thunkAPI.rejectWithValue(error.message);
    }
});

export const getSingleProducts = createAsyncThunk('product/detailItem', async (id, thunkAPI)=> {
    try {
        let url = `http://localhost:4000/products/${id}`;

        let response = await fetch(url);
        return await response.json();
    } catch (error) {
        thunkAPI.rejectWithValue(error.message);
    }
 });

 //reducers -> 비동기 호출 내용을 정리     
 //extraReducers -> 외부 라이브러리를 사용하는 경우
const productSlice = createSlice({
    name : "product"
    , initialState
    , reducers : {
    },
    extraReducers : (builder)=>{        
        builder
        .addCase(fetchProducts.pending, (state)=>{
            //대기
            state.isLoading = true;
        })
        .addCase(fetchProducts.fulfilled, (state, action)=>{
            //성공
            state.isLoading = false;
            state.productList = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action)=>{
            //에러
            state.isLoading = false;
            state.error = action.payload;
        })

        .addCase(getSingleProducts.pending, (state)=>{
            //대기
            state.isLoading = true;
        })
        .addCase(getSingleProducts.fulfilled, (state, action)=>{
            //성공
            state.isLoading = false;
            state.selectedItem = action.payload;
        })
        .addCase(getSingleProducts.rejected, (state, action)=>{
            //에러
            state.isLoading = false;
            state.error = action.payload;
        });
    }
});

export default productSlice.reducer;