import React from 'react'

class Dashboard extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            active: true
        }
    }

    toggle = () => {
        this.setState(prevState => ({
            active: !prevState.active
        }))
    }

    render() {
        const { data } = this.props
        const { active } = this.state
        return (
            <React.Fragment>
                <button
                    className='btn btn-block btn-default shadow-none d-block d-md-none'
                    type="button"
                    data-toggle="collapse"
                    data-target="#dashboardCollapse"
                    aria-expanded="false"
                    aria-controls="dashboardCollapse"
                    onClick={this.toggle}>
                    {active
                        ? <i className="fas fa-minus"></i>
                        : <i className="fas fa-plus"></i>}
                </button>
                <div className="collapse show" id="dashboardCollapse">
                    <div className='card p-3 shadow-sm'>
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <img src={require('../img/student.png')} className='img-fluid' alt='student' />
                            </div>
                            <div className="col-sm-12 col-md-6 mt-3 mt-md-0">
                                <table className="table">
                                    <tbody>
                                        {data.map(d => (
                                            <tr key={d.value}>
                                                <th scope="row">{d.text}</th>
                                                <td>{d.value}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>

        )

    }
}

export default Dashboard
