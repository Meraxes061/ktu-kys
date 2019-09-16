import React from 'react'

function Notes({ notes }) {
    if (notes) {
        return (
            <div className='p-3'>
                <h4>Notes</h4>
                <hr className='mt-0' />
                <ul className='list-group'>
                    {notes.visa && <li className='list-group-item'>Visa: {notes.visa}</li>}
                    {notes.final && <li className='list-group-item'>Final: {notes.final}</li>}
                </ul>
            </div>
        )
    } else {
        return (
            <div className='p-3 h-100 d-flex align-items-center justify-content-center'>There is not Note</div>
        )
    }
}

export default Notes
