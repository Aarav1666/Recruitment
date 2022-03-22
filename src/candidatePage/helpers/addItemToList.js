const addItemtoList = (item, targetList) => {
    if(typeof(item) === 'object'){

        if(typeof(targetList) === 'object'){
            
            return targetList.concat(item);

        }

    }

    return targetList
}

export default addItemtoList