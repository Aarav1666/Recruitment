// react hooks & libraries
import React from 'react'

// css import
import styles from './CandidateList.module.css'

// components import
import CandidateItem from './CandidateItem'


const CandidateList = (props) => {

    const itemList = props.candidateList

    return <ul className={styles['selected-list-container']}>
        
        {
            itemList.map((item) => (<CandidateItem
                value = {item.id}
                item = {item}
                onItemClick = {props.onItemClick}
            />))
        }
    </ul>
}

export default CandidateList
