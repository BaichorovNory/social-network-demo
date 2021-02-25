import React from 'react';
import gif from '../Users/ZKZx.gif';
import style from './Preloader.module.css'

const Preloader = () => {
    return <img src={gif} alt='' className={style.img} />;
};

export default Preloader;