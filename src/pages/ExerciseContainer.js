import React from 'react'
import ExerciseList from '../components/ExerciseList'
import Welcome from '../components/Welcome'
import ButtonAdd from '../components/ButtonAdd'

const ExerciseContainer = ({data}) => (
    <>
        <Welcome
            username='MEMO'
        />
        <ExerciseList
            exercises={data}
        />
        <ButtonAdd />
        </>
)

export default ExerciseContainer