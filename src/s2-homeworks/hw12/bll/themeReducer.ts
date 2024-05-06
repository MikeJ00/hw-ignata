const initState = {
    themeId: 1,
}
type ActionsType = ReturnType<typeof changeThemeId>
type themeReducerType = typeof initState

export const themeReducer = (state = initState, action: ActionsType): themeReducerType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId:action.id
            }

        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }) // fix any
