import * as Types from '../constants/ActionTypes';

// tao du lieu mau
// const genertor = () => {
//     let result = [];
//     for (let index = 0; index < 100; index++) {
//         result = [...result, {
//             id: index+1,
//             name: 'abc ' + index,
//             email: 'abc'+index+'@gmail.com',
//             address: 'dia chi '+index+' ',
//             status: false
//         }];
//     }
//     return result;
// }

// let initialState = genertor();
let initialState = [];

const users = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_USER:
            state = action.users;
            return [...state];

        default: return [...state];
    }
};

export default users;