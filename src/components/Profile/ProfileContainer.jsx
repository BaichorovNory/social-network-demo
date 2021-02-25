import React from 'react';
import Profile from './Profile';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getStatus, updateStatus, uploadPhoto, getUserProfile } from '../../Store/profilePageReducer'

class ProfileContainer extends React.Component {

    updateProfile() {
        let id = this.props.match.params.id;
        if (!id) {
            id = this.props.myId
            if (!id) {
                this.props.history.push('/login');
            }
        }
        this.props.getUserProfile(id);
        this.props.getStatus(id);
    }

    componentDidMount() {
        this.updateProfile();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.updateProfile();
        }
    }

    render() {
        return <Profile {...this.props}
        profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
            isOwner={!this.props.match.params.id}
            uploadPhoto={this.props.uploadPhoto} />
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    myId: state.auth.id
});

export default compose(connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, uploadPhoto }),
    withRouter,
    withAuthRedirect)(ProfileContainer)