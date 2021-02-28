import React from 'react';
import gif from '../Users/ZKZx.gif';
import style from './Preloader.module.css'

const Preloader = () => {
    return <div className={style.text}>Загрузка, пожалуйста подождите...<img src={gif} alt='' className={style.img} /></div>;
};

export default Preloader;
