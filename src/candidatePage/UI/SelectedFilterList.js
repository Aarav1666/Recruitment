// react hooks & libraries
import React from 'react'

// css import
import styles from './SelectedFilterList.module.css'

// components import
import SelectedFilterItem from './SelectedFilterItem'


const SelectedFilterList = (props) => {

    const itemList = props.filterList

    return <ul className={styles['selected-list-container']}>
        {
            itemList.map((item) => (<SelectedFilterItem
                value = {item.id}
                name = {item.skill}
                onItemClick = {props.onItemClick}
            />))
        }
    </ul>
}

export default SelectedFilterList
