const filter = (filterParam, candidateList) => {
    
    if(filterParam.length === 0){
        return{
            filteredList: candidateList,
            // rejectedList: []
        }
    }

    let filteredList = []
    // let rejectedList = []

    let filterParamArgs = []

    filterParam.forEach((filter) => {
        filterParamArgs.push(filter.skill)
    })
    
    candidateList.forEach((candidate) => {
        
        const skills = candidate.skills.split(',')

        // let isPermitted = false;
        for(let i=0; i<skills.length; i++){
            if(filterParamArgs.includes(skills[i])){
                filteredList.push(candidate)
                // isPermitted = true
                break
            }
        }

        // if(!isPermitted){
        //     rejectedList.push(candidate)
        // }
        
    });


    return {
        filteredList: filteredList,
        // rejectedList: rejectedList
    }

}


export default filter