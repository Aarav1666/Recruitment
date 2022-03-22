// react hooks & libraries
import React from 'react'

// css import
import styles from './SelectedFilterItem.module.css'
import Clear from '../../res/svg/clear'

// components import


const SelectedFilterItem = (props) => { 

    // const onStreamSelect = (event) => {
    //     // console.log(event)
    //     // console.log(event.target.lastChild.value)
    //     props.streamId(event.target.lastChild.value)
    //     props.setSelectedStream(props.name)
    //     props.streamDropdownOnClickHandler()
    //     props.streamDropdownOnMouseEnterHandler()
    // }

    // const onStreamSelectButton = (event) => {
    //     event.stopPropagation()
    //     // console.log(event)
    //     // console.log(event.target.value)
    //     props.streamId(event.target.value)
    //     props.setSelectedStream(props.name)
    //     props.streamDropdownOnClickHandler()
    //     props.streamDropdownOnMouseEnterHandler()
    // }

    const onButtonClick = () => {
        props.onItemClick(props.value)
    }

    return <li key={props.value} className={styles['selected-list-item']}>
        <button value={props.value} className={styles['selected-list-item-button']}> 
            {props.name}
            <span onClick={onButtonClick} className={styles['selected-list-item-button-clear']}><Clear/></span>
        </button>
    </li>
}

export default SelectedFilterItem
