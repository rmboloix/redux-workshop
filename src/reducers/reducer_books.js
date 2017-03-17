export default function (state = [], action){
    switch (action.type) {
        case 'FETCH_BOOKS':
            return action.payload.data;
        default:
            return state;
    }
}