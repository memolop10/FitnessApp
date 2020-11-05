import React, {useState, useEffect} from 'react'
import Loading from '../components/Loading'
import FatalError from '../pages/500'
import ExerciseContainer from '../pages/ExerciseContainer'

const Exercises = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {   
       const fetchExercises = async () =>{
            try{
             let res = await fetch('http://localhost:8000/api/exercises')
                let data = await res.json()
                    console.log(data)

                    setData(data)
                    setLoading(false)

            }catch(error){
                setLoading(false)
                setError(error)
                        
             }
        }

        fetchExercises()
    },[])

    if(loading)
        return <Loading />
    
    if(error)
         return <FatalError />
                    
    return <ExerciseContainer
            data={data}
            />
}


// class Exercises extends React.Component {
    
//         state = {
//             data:[],
//             loading:true,
//             error:null
            
//         }
    
//         async componentDidMount(){
//             await this.fetchExercises()
//         } 

//         fetchExercises = async () =>{
//             try{
//                 let res = await fetch('http://localhost:8000/api/exercises')
//                 let data = await res.json()
//                 console.log(data)
//                 this.setState({
//                     data,
//                     loading:false
//                 })
//             }
//             catch(error){
//                 this.setState({
//                     loading:false,
//                     error
//                 })
//             }
//         }

//     render(){
//         if(this.state.loading){
//             return <Loading />
//         }

//         if(this.state.error){
//             return <FatalError />
//         }
//     return <ExerciseContainer
//                 data={this.state.data}
//             />
//     } 

// }

export default Exercises