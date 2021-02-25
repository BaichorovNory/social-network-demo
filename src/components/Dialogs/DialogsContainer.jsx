import Dialogs from './Dialogs';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { sendMessageActionCreator } from '../../Store/dialogsPageReducer';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: (newMessageBody) => {
            dispatch(sendMessageActionCreator(newMessageBody));
        }
    };
}

export default compose(connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs)