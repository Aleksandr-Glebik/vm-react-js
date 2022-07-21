import React from 'react'
import {useLocation} from 'react-router-dom'

/* class CarDetail extends React.Component {

    render() {
        const location = useLocation()
        // console.log(this.location);
        console.log(location);
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Information about Car: </h1>
            </div>
        )
    }
}
 */

const CarDetail = () => {
    const location = useLocation()
    let nameAuto = location.pathname.slice(location.pathname.lastIndexOf('/') + 1)

    return (
        <div style={{textAlign: 'center'}}>
            <h1>{`Information about: ${nameAuto.toUpperCase()}`}</h1>
        </div>
    )
}

export default CarDetail