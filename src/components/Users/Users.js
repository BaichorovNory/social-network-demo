import React from 'react';
import style from './Users.module.css';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../Store/man.png';
import Paginator from './Paginator'

const Users = (props) => {
    return (
        <div>
            <div>
                <Paginator currentPage={props.currentPage}
                    onPageChanged={props.onPageChanged}
                    totalItemsCount={props.totalUsersCount}
                    pageSize={props.pageSize} />
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='' className={style.userPhoto} />
                        </NavLink>
                    </span>
                    <span>
                        <span className={style.text}>
                            <div>Имя: {u.name}</div>
                            <div>{u.status || 'Нет статуса'}</div>
                        </span>
                        <div>
                            {u.followed
                                ? <button className={style.button} disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>
                                : <button className={style.button} disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                            }
                        </div>
                    </span>
                </div>
                )
            }
        </div>
    );
}
export default Users;