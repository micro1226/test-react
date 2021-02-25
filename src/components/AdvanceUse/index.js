import React from 'react'
import UncontrolDemo from './UncontrolDemo'
import PortalsDemo from './PortalsDemo'

class AdvanceDemo extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return <div>
            {/* <UncontrolDemo /> */}
            <PortalsDemo >Modal 内容</PortalsDemo>
        </div>
    }
}

export default AdvanceDemo