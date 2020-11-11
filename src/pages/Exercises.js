import React from 'react'
import Loading from '../components/Loading'
import FatalError from '../pages/500'
import ExerciseContainer from '../pages/ExerciseContainer'
import useFetch from '../hooks/useFetch'
import url from '../config'

const Exercises = () => {

    const {data, loading,error} = useFetch(`${url}/exercises`)
    
    if(loading)
        return <Loading />
    
    if(error)
         return <FatalError />
                    
    return <ExerciseContainer
            data={data}
            />
}



export default Exercises