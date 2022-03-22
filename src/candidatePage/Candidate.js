// react hooks & libraries
import React, {useEffect, useState} from 'react'


// css import
import styles from './Candidate.module.css'

// components import
import FilterDropdown from './UI/FilterDropdown'
import FilterItem from './UI/FilterItem'
import SelectedFilterList from './UI/SelectedFilterList'
import CandidateList from './UI/CandidateList'

//helpers import
import addItemtoList from './helpers/addItemToList'
import removeItemFromList from './helpers/removeItemFromList'
import filter from './helpers/filter'
import fetchCandidate from './helpers/fetchCandidates'

import skillSet from '../data/skill'

const CandidatePage = (props) => {

    // consented constants
    const pageRowSize = 15;
    const candidateDataLoadRange = 60;
    

    // init state constants
    
    const initFilterState = {
        filteredList: [],
        // rejectedList: []
    }

    // selected Filters
    const [filterList, setFilterList] = useState(skillSet)      // known skills
    const [filterParam, setFilterParam] = useState([])          // choosen skills

    const [lowerRange, setLowerRange] = useState(0)
    const [upperRange, setUpperRange] = useState(pageRowSize)
    

    const [loadStartLimit, setLoadStartLimit] = useState(0)
    
    const [candidateSourceList, setCandidateSourceList] = useState(fetchCandidate(0, candidateDataLoadRange))
    
    const [candidates, setCandidates] = useState(candidateSourceList.slice(0,pageRowSize))

    const [filterState, setFilterState] = useState(initFilterState)

    // helpers

    const onClickNext = () => {
        
        // validating range
        let currentFilterState = filterState
        if(upperRange + pageRowSize - 1 >= filterState.filteredList.length){
            if(upperRange >= filterState.filteredList.length){
                const newLoadStart = loadStartLimit + candidateDataLoadRange
                setLoadStartLimit(newLoadStart)

                const moreCandidates = fetchCandidate(newLoadStart, candidateDataLoadRange)
                
                if(moreCandidates.length > 0){
                    const morefilteredList = filter(filterParam, moreCandidates)
                    
                    const newfilterState = {
                        filteredList: filterState.filteredList.concat(morefilteredList.filteredList)
                    }
                    currentFilterState = newfilterState
                    setFilterState(newfilterState)
                    setCandidateSourceList(candidateSourceList.concat(moreCandidates))
            
                }else{
                    return
                }

            }
        }

        // increasing range
        const newLowerRange = lowerRange + pageRowSize
        const newUpperRange = upperRange + pageRowSize
        setLowerRange(newLowerRange)
        setUpperRange(newUpperRange)
        
        // update candidate list
        setCandidates(currentFilterState.filteredList.slice(newLowerRange,newUpperRange))
    }

    const onClickPrevious = () => {
        
        // validating range
        if(lowerRange - pageRowSize < 0){
            // reset lowerRange & upper range
            setLowerRange(0)
            setUpperRange(pageRowSize)
            setCandidates(filterState.filteredList.slice(0,pageRowSize))
            return
        }

        // increasing range
        const newLowerRange = lowerRange - pageRowSize
        const newUpperRange = upperRange - pageRowSize
        setLowerRange(newLowerRange)
        setUpperRange(newUpperRange)

        
        // update candidate list
        setCandidates(filterState.filteredList.slice(newLowerRange,newUpperRange))
    }

    const onClickRemoveAll = () => {
        setFilterList(skillSet)
        setFilterParam([])
        filterOnChange([])
    }

    // parent data handlers
    const filterOnChange = (params) => {
        // filter
        const newFilterState = filter(params, candidateSourceList)
        setFilterState(newFilterState)   

        
        // reset lowerRange & upper range
        setLowerRange(0)
        setUpperRange(pageRowSize)

        // update candidate list
        setCandidates(newFilterState.filteredList.slice(lowerRange,upperRange))
    }

    const onFilterItemClick = (id) => {

        const targetIndex = filterList.findIndex(object => {
            return object.id === id;
        });
        let currentfilterParam = filterParam
        if(targetIndex > -1){
            currentfilterParam = addItemtoList(filterList[targetIndex], filterParam)
            setFilterParam(currentfilterParam)
            setFilterList(removeItemFromList(id, filterList))
        }
        filterOnChange(currentfilterParam)
    }

    const onFilterParamClick = (id) => {

        const targetIndex = filterParam.findIndex(object => {
            return object.id === id;
        });
        let currentfilterParam = filterParam
        if(targetIndex > -1){
            
            setFilterList(addItemtoList(filterParam[targetIndex],filterList))
            currentfilterParam = removeItemFromList(id, filterParam)
            setFilterParam(currentfilterParam)
        }

        filterOnChange(currentfilterParam)
        
    }
    
    // console.log(filter(filterParam, candidates))

    useEffect(() => {
        setFilterState(filter(filterParam, candidateSourceList))
    }, [])

    return <div className={styles['main-frame']}>

        <div className={styles['header']}>
            <span className={styles['header-title']}>RECRUITMENT</span>
            <span className={styles['header-subtitle']}>easy to target hitlist</span>
        </div>

        <div className={styles['bar']}>
            
            <div className={styles['bar-list-frame']}>
                
                {/* filter List (selected) */}
                <div className={styles['bar-list-frame-list-view']}>
                    <SelectedFilterList 
                        filterList = {filterParam} 
                        onItemClick = {onFilterParamClick}
                    />
                </div>
                <div className={styles['bar-list-frame-button-container']}>
                    <button onClick={onClickRemoveAll} className={styles['bar-list-frame-button']}>
                        Remove All
                    </button>
                </div>

            </div>

            {/* filter selection */}
            <div className={styles['bar-filter-dropdown']}>

                {/* filter button */}

                <div className={styles['bar-filter-dropdown-button-container']}>
                    
                        <span>Filters</span>
                    
                </div>

                {/* filter dropdown */}
                
                <div className={styles['bar-filter-dropdown-list']}>
                    <FilterDropdown>
                    {
                        filterList.map((item) => (<FilterItem
                            value = {item.id}
                            name = {item.skill}
                            onItemClick = {onFilterItemClick}
                        />))
                    }
                    </FilterDropdown>
                </div>

            </div>

        </div>


        <div className={styles['candidate-frame']}>
        
            <div className={styles['candidate-frame-list-container']}>
                {/* cadidate list */}
                <div className={styles['selected-list-item-div']}>
                    <div className={styles['selected-list-item-div-item-grid']}>ID</div>
                    <div className={styles['selected-list-item-div-item-grid']}>Username</div>
                    <div className={styles['selected-list-item-div-item-grid']}>Phone</div>
                    <div className={styles['selected-list-item-div-item-grid']}>Address</div>
                    <div className={styles['selected-list-item-div-item-grid']}>Skills</div>
                </div>
                <CandidateList 
                        candidateList = {candidates} 
                />
            </div>
            
            <div className={styles['candidate-frame-accessibilites']}>

                <div className={styles['candidate-frame-accessibilites-button-container']}>
                    <button onClick={onClickPrevious} className={styles['candidate-frame-accessibilites-button']}>
                        Previous
                    </button>

                    <button onClick={onClickNext} className={styles['candidate-frame-accessibilites-button']}>
                        Next
                    </button>
                </div>
                
            </div>

            

        </div>
        

    </div>

}

export default CandidatePage