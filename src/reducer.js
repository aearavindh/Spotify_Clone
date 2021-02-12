export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    discover_weekly: null,
    // token: 'BQDdHHiJgE7r7vgCwOU8sHWRgOlXVsynNN3teZ8GtNUoQ7aAGayBdQuHQ_pd8tT0QghDMsg-aNZgfg_Wa1j7jtLjZJGUkwLIz922XwpSqtAgBIykHdQReU_Fc5V4mZ_RsO1y3lo-3KHksbMRd6CkOg5nzO3fhgBUVRxyWwP-7ySy_LY2'
}

const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [payload]

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            };
        default:
            return state;
    
    }
}

export default reducer;