import React from 'react'
import Card from  '../components/Card'

const ExerciseList = ({exercises}) => {    
        return(
            <div>
            {
                exercises.map((exercise) => {
                    return ( <Card 
                        {...exercise}
                    />
                    )
                })
            }
            </div>
        )


} 

export default ExerciseList