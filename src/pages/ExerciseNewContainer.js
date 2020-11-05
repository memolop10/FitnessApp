import React from 'react'
import FatalError from './500'
import ExercisesNew from '../pages/ExercisesNew'

class ExerciseNewContainer extends React.Component{
   
    state= {
        form: {
            title:'', 
            description:'', 
            img:'', 
            leftColor:'', 
            rightColor:''
         },
         loading:false,
         error:null
    }

    handleSubmit = async (e)=> {
        this.setState({
            loading:true
        })
        e.preventDefault();
        try{
            let config = {
                method:'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(this.state.form)
            }
            let res = await fetch('http://localhost:8000/api/exercises', config)
            let json = await res.json()

            this.setState({
                loading:false
            })

            this.props.history.push('/')
            console.log(json)
        }catch(error){
            this.setState({
                loading:false,
                error
            })
        }
    }


    handleChange = (e) => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        })
     }
 

    render(){
        if(this.state.error)
            return <FatalError />

        return <ExercisesNew 
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            form={this.state.form}/>
    }
}

export default ExerciseNewContainer