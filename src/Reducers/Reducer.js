import Data from '../Asset/data/data';

const iState = {
    list: Data,
    isSignedIn: false
};

const reducer = (state = iState, action) => {
    switch (action.type) {
        case "signInFun":
            return {
                "list": state.list,
                "isSignedIn": action.payload.isSignedIn
            }

        default:
            return state;
    }
}

export default reducer;