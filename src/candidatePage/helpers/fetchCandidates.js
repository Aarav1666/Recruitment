// data source
import candidateList from "../../data/candidate"

const fetchCandidate = (startLimit, range) => {
    let dataLength = candidateList.length

    if(startLimit < dataLength){
        return candidateList.slice(startLimit,(startLimit + range))
    }

    return []
}

export default fetchCandidate