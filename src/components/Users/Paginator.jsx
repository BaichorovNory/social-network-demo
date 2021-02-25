import React, { useState } from 'react';
import style from './Paginator.module.css'
import cn from 'classnames';

const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; ++i) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1);
    let rightPortionPageNumber = portionNumber * portionSize;
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;

    return <div className={style.paginator}>
        {portionNumber > 1 && <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }} className={style.button}>Назад
            </button>}
        {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span className={cn({ [style.selectPage]: currentPage === p }, style.pageNumber)} key={p} onClick={(e) => { onPageChanged(p) }}>{p}</span>
            })}
        {portionCount > portionNumber && <button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }} className={style.button}>Далее</button>
        }

    </div >

}
export default Paginator;