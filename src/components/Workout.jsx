import React from 'react'
import SectionWrapper from './SectionWrap'
import ExerciseCard from './ExerciseCard'

export default function Workout(props) {
    const { workout } = props
    return (
        <SectionWrapper id={'workout'} header={"Bienvenido"} title={['tu', 'Puedes', 'campeon']}>
            <div className='flex flex-col gap-4'>
                {workout.map((exercise, i) => {
                    return (
                        <ExerciseCard i={i}  exercise={exercise} key={i} />
                    )
                })}
            </div>
        </SectionWrapper>
    )
}