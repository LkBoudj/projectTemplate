import { createSelector, createSlice } from "@reduxjs/toolkit"
import { IThemeModeState, Mode } from "./interfaces"
import { RootState } from "@/store/store"




const initialState: IThemeModeState = {
    mode: Mode.DARK
}

export const themeModeSlice = createSlice({
    name: "themeMode",
    initialState,
    reducers: {
        toggleMode: (state) => {
            state.mode = state.mode === Mode.DARK ? Mode.LIGHT : Mode.DARK
        }
    }
})




export const { toggleMode } = themeModeSlice.actions

export const themeModeState = (state: RootState) => state.themeMode

export const themeModeSelector = createSelector([themeModeState], (state) => state.mode)

export default themeModeSlice.reducer
