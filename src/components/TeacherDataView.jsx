import React, { Component } from 'react'

export class TeacherDataView extends Component {


    componentDidMount = () => {

    }

    render() {
        const { lessons } = this.props
        return (
            <div>
                {lessons && lessons.map(lesson => (
                    <span>{lesson.name}</span>
                ))}
            </div>
        )
    }
}

export default TeacherDataView
