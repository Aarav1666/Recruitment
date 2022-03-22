// react hooks & libraries
import React from 'react'

// css import
import styles from './CandidateItem.module.css'


// components import


const CandidateItem = (props) => { 
    const item = props.item
    return <li key={props.value} className={styles['selected-list-item']}>
        <div value={props.value} className={styles['selected-list-item-div']}>
            <div className={styles['selected-list-item-div-item-grid']}>{item.id}</div>
            <div className={styles['selected-list-item-div-item-grid']}>{item.userName}</div>
            <div className={styles['selected-list-item-div-item-grid']}>{item.phoneNumber}</div>
            <div className={styles['selected-list-item-div-item-grid']}>{item.address}</div>
            <div className={styles['selected-list-item-div-item-grid']}>{item.skills}</div>
            
        </div>
    </li>

}

export default CandidateItem
