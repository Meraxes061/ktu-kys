import React from 'react'
import Dashboard from './Dashboard';
import { firebaseApp } from '../firebase'
import TeacherDataView from './TeacherDataView'
import Loading from './Loading';

class AdminPage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            user: {
                id: '',
                lessons: []
            },
            loading: true
        }

    }



    getData = () => {
        const user = this.props.user
        firebaseApp.firestore().collection('users').doc(user.id).get()
            .then(d => {
                this.setState({
                    user: {
                        ...this.state.user,
                        id: d.id,
                        ...d.data()
                    }
                })
            })
            .then(() => {
                firebaseApp.firestore().collection('users').doc(this.state.user.id).collection('lessons').get()
                    .then(s => {
                        s.forEach(d => {
                            this.setState({
                                user: {
                                    ...this.state.user,
                                    lessons: [...this.state.user.lessons, { id: d.id, ...d.data() }]
                                }
                            })
                        })
                    })
            })
            .then(() => {
                this.setState({
                    loading: false
                })
            })
    }


    componentDidMount = () => {
        this.getData()
    }

    render() {
        const { user, loading } = this.state
        return (
            <React.Fragment>
                {loading
                    ? <Loading />
                    : <div className='container-fluid'>
                        <div className="row">
                            <div className="col-sm-12 col-lg-8 offset-lg-2">
                                <Dashboard data=
                                    {
                                        [{
                                            text: 'Name',
                                            value: user.name
                                        },
                                        {
                                            text: 'Surname',
                                            value: user.surname
                                        },
                                        {
                                            text: 'Number',
                                            value: user.number
                                        },
                                        {
                                            text: 'Faculty',
                                            value: user.faculty
                                        },
                                        {
                                            text: 'Department',
                                            value: user.department
                                        }]
                                    } />
                                <div className="row">
                                    <div className="col-sm-12 col-lg-12">
                                        <TeacherDataView lessons={user.lessons} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}
            </React.Fragment>

        )
    }
}

export default AdminPage
