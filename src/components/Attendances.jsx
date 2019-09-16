import React from 'react'

function Attendances({ attendances }) {
    if (attendances) {
        return (
            <div className='p-3'>
                <h4>Attendances</h4>
                <hr className='mt-0'/>
                <ul className='list-group'>
                    {attendances.map(attendance => (
                        <li key={attendance.seconds}
                            className='list-group-item border-none'>{new Date(attendance.seconds * 1000).toLocaleDateString()}</li>
                    ))}
                </ul>
            </div>
        )
    } else {
        return (
            <div className='p-3 h-100 d-flex align-items-center justify-content-center'>There is not Attendance</div>
        )
    }
}

export default Attendances
