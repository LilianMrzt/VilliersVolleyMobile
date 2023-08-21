import { default as CURRENT_ROUTE, default as RouteConstants } from '@constants/routes/RouteConstants';

const initialState = {
    route: RouteConstants.HOME_SCREEN
};

const RouteReducer = (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_ROUTE:
            return {
                ...state,
                route: action.payload
            };
        default:
            return state;
    }
};
export default RouteReducer;
