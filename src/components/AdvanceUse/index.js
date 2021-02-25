import React from 'react'
import UncontrolDemo from './UncontrolDemo'
import PortalsDemo from './PortalsDemo'
import ContextDemo from './ContextDemo'
import LazyDemo from './LazyDemo'
import SCUDemo from './SCUDemo'
import SCUDemo2 from './SCUDemo2'
import PureComponentDemo from './PureComponentDemo'

class AdvanceDemo extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return <div>
            {/* <UncontrolDemo /> */}
            {/* <PortalsDemo >Modal 内容</PortalsDemo> */}
            {/* <ContextDemo /> */}
            {/* <LazyDemo /> */}
            {/* <SCUDemo /> */}
            {/* <SCUDemo2 /> */}
            <PureComponentDemo />
        </div>
    }
}

export default AdvanceDemo