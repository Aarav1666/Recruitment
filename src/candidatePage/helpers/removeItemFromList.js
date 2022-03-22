const removeItemFromList = (id, targetList) => {
    if(typeof(id) === 'string'){

        if(typeof(targetList) === 'object'){

            return targetList.filter((item) => (item.id !== id))
            
        }

    }

    return targetList
}

export default removeItemFromList