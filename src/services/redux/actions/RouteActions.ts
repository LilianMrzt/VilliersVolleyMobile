import CURRENT_ROUTE from '@constants/routes/RouteConstants';

export function changeRoute(route) {
    return {
        type: CURRENT_ROUTE,
        payload: route
    };
}
