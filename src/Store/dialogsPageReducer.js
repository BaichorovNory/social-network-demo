const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Иван' },
        { id: 2, name: 'Дмитрий' },
        { id: 3, name: 'Петр' },
        { id: 4, name: 'Андрей' }
    ],
    messages: [
        { id: 1, message: 'Привет' },
        { id: 2, message: 'Здаров' },
        { id: 3, message: 'Окей' },
        { id: 4, message: 'Спасибо' }
    ],
};

const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let stateCopy = { ...state, messages: [...state.messages], dialogs: [...state.dialogs] };
            let enteredMessageText = action.newMessageBody;
            let userName = 'Без имени'
            stateCopy.messages.push({ id: 5, message: enteredMessageText });
            stateCopy.dialogs.push({id: 5, name:userName})
            return stateCopy;
        }
        default:
            return state;
    }
}

export const sendMessageActionCreator = (newMessageBody) => {
    return { type: SEND_MESSAGE, newMessageBody };
}

export default dialogsPageReducer;