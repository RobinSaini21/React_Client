

let lastId = 0;
// export default function myReducer(state =[],action){
//     if(action.type === "ADD_NAME"){
//         return[
//             ...state,
//             {
//                 id: ++lastId,
//                 name: action.payload.name,
//                 resolved: false
//             }
//         ];
       
//     }
//     else if(action.type === "ADD_EMAIL"){
//         return[
//             ...state,
//             {
//                 id: ++lastId,
//                 email: action.payload.email,
//                 resolved: false
//             }
//         ];
//     }
//     else if(action.type === "ADD_PASSWORD"){
//         return[
//             ...state,
//             {
//                 id: ++lastId,
//                 password: action.payload.password,
//                 resolved: false
//             }
//         ];
//     }
//     return state;
// }

export default function myReducer(state =[],action){
    if(action.type === "ADD_DETAILS"){
        return[
            ...state,
            {
                id: ++lastId,
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password,
                resolved: false
            }
        ];
       
    }
    return state;
}