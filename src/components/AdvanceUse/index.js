import React from 'react'
import UncontrolDemo from './UncontrolDemo'
import PortalsDemo from './PortalsDemo'
import ContextDemo from './ContextDemo'
import LazyDemo from './LazyDemo'

class AdvanceDemo extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return <div>
            {/* <UncontrolDemo /> */}
            {/* <PortalsDemo >Modal 内容</PortalsDemo> */}
            {/* <ContextDemo /> */}
            <LazyDemo />
        </div>
    }
}

export default AdvanceDemo