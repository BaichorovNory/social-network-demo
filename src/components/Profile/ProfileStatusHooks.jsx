import React, { useEffect, useState } from 'react';

const ProfileStatusHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateMode = () => {
        setEditMode(true);
    }
    const deactivateMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }
    const onChangeStatus = (e) => {
        setStatus(e.currentTarget.value)
    }


    return (
        <div>
            {!editMode && <div>
                <span onDoubleClick={activateMode}>Статус: {props.status || 'No status'}</span>
            </div>
            }
            {editMode && <div>
                <input autoFocus={true} onBlur={deactivateMode} onChange={onChangeStatus} value={status} />
            </div>
            }
        </div>
    )
}
export default ProfileStatusHooks;