import React from 'react';
import userPhoto from '../../Store/man.png';
import style from './ProfileInfo.module.css';
import Preloader from '../Preloader/Preloader';
import ProfileStatusHooks from './ProfileStatusHooks';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    const onPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.uploadPhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div className={style.description}>
                <img className={style.photo} src={props.profile.photos.large || userPhoto} alt='' />
                <div>{props.isOwner && <input type={'file'} onChange={onPhotoSelected}></input>}</div>
            </div>
            <div className={style.text}>
                <div>Имя пользователя: {props.profile.fullName}</div>
                <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    );
}
export default ProfileInfo;