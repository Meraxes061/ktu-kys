import React from 'react'
import './LessonSelectMobile.scss'

class LessonSelectMobile extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            active: false
        }
    }

    toggle = () => {
        this.setState(prevState => ({
            active: !prevState.active
        }))
    }

    handleClick = (lesson) => {
        this.props.setActive(lesson)
        this.setState({
            active: false
        })
    }
    render() {
        const { active } = this.state
        return (
            <React.Fragment>
                <button
                    className='btn btn-primary d-flex align-items-center justify-content-center lessons-button'
                    onClick={this.toggle}>
                    <i className="fas fa-book icon-24"></i>
                </button>
                <div className={`lessons-overlay ${active && 'active'}`}>
                    <ul className='list-group'>
                        {this.props.lessons.map(lesson => (
                            <li key={lesson.id} className="list-group-item">
                                <button className='btn btn-block' onClick={() => this.handleClick(lesson)}>{lesson.name}</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

export default LessonSelectMobile
