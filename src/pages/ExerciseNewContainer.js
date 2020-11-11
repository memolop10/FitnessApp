import React, { useState }from 'react'
import FatalError from './500'
import ExercisesNew from '../pages/ExercisesNew'
import Loading from '../components/Loading'
import url from '../config'


const ExerciseNewContainer = ({history}) => {
   
    const [form, setForm ] = useState({title:'', 
                                        description:'', 
                                        img:'', 
                                        leftColor:'', 
                                        rightColor:''})

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    
    const handleChange = (e) => {
        setForm({
                ...form,
                [e.target.name]:e.target.value
        })
    }

     

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        try{
            let config = {
                method:'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(form)
            }
            await fetch(`${url}/exercises`, config)
            setLoading(false)
            history.push('/')

        }catch(error){
            
                setLoading(false)
                setError(error)
        
        }
    }

    if(loading)
        return <Loading />

    if(error)
    return <FatalError />

    return <ExercisesNew 
            onSubmit={handleSubmit}
            onChange={handleChange}
            form={form}/>
}

       


export default ExerciseNewContainer