// react hooks & libraries
import React from 'react'

// css import
import styles from './FilterDropdown.module.css'

// components import


const FilterDropdown = (props) => {
    return <ul className={styles['selected-list-container']}>
        {props.children}
    </ul>
}

export default FilterDropdown
