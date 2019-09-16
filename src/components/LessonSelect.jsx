import React from 'react'

function LessonSelect({ lessons, setActive, active }) {
    return (
        <div className="btn-group w-100">
            <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {Object.entries(active).length === 0 && active.constructor === Object
                    ? 'Lessons'
                    : active.name}
            </button>
            <div className="dropdown-menu w-100">
                {lessons.map(lesson =>
                    <button
                        key={lesson.id}
                        className={`dropdown-item ${active.id === lesson.id && 'bg-primary text-white'}`}
                        onClick={() => setActive(lesson)}
                    >{lesson.name}</button>)}
            </div>
        </div>
    )
}

export default LessonSelect
