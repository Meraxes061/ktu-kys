import React from 'react'
import Notes from './Notes';
import Attendances from './Attendances';
import LessonSelect from './LessonSelect';
import LessonSelectMobile from './LessonSelectMobile/LessonSelectMobile';

class StudentDataView extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            active: {}
        }
    }

    setActive = (lesson) => {
        this.setState({
            active: lesson
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="row mt-3">
                    <div className="col">
                        <div className="d-none d-md-block">
                            <LessonSelect lessons={this.props.lessons} setActive={this.setActive} active={this.state.active} />
                        </div>
                        <div className="d-block d-md-none">
                        <LessonSelectMobile lessons={this.props.lessons} setActive={this.setActive} active={this.state.active} />

                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        {!(Object.entries(this.state.active).length === 0 && this.state.active.constructor === Object)
                            && <div className="card">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-6">
                                        <Notes notes={this.state.active.notes} />
                                    </div>
                                    <div className="col-sm-12 col-lg-6">
                                        <Attendances attendances={this.state.active.attendances} />
                                    </div>
                                </div>
                            </div>}
                    </div>
                </div>
            </React.Fragment>
        )

    }
}

export default StudentDataView
