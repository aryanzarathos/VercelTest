import { createAsyncThunk } from '@reduxjs/toolkit';
import GlobalSearchRequest from './globalSearchRequest'

export const getGlobalSearchList = createAsyncThunk(
  "getGlobalSearchList",
  async ({business,search,template,editor,query,value}, { dispatch }) => {
    let payload = [];
    if(editor){
  await GlobalSearchRequest.get(
    GlobalSearchRequest.searchEndpoint.getSearchList
      .replace("__BUSINESS__", business)
      .replace("__SEARCH__", search)
      .replace("__TEMPLATEID__", template),
    (success) => {
      payload = success.data;
    },
    (error) => {
      payload = error.message;
    }
  );
    }else{
        await GlobalSearchRequest.get(
          GlobalSearchRequest.searchEndpoint.getGlobalSearchList
            .replace("__BUSINESS__", business)
            .replace("__SEARCH__", search)
            .replace("__QUERY__", query)
            .replace("__VALUE__", value),
          (success) => {
            payload = success.data;
          },
          (error) => {
            payload = error.message;
          }
        ); 
    }
  
    return payload;
  }
);
