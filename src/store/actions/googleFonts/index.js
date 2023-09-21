import { createAsyncThunk } from "@reduxjs/toolkit";
import FontRquest from "./FontRquest";

export const getGoogleFonts = createAsyncThunk(
    "getGoogleFonts",
    async (data, { dispatch }) => {
        let tempData = [];
        await FontRquest.get(
            FontRquest.fontsEndpoint.getGoogleFonts,
            (success) => {
                tempData = success.data.data.items;
            },
            (error) => {
                tempData = error.message;
            }
        );
        return tempData;
    }
);
