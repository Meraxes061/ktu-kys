import React from 'react'

function Lessons({ lessons, active, setActive }) {
    return (
        <ul className='list-group'>
            {lessons.map(lesson => (
                <li key={lesson.id} className='list-group-item'>
                    <button className={`btn btn-block border-0 shadow-none ${active.id === lesson.id && 'btn-primary'}`} onClick={() => setActive(lesson)}>
                        {lesson.name}
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default Lessons
