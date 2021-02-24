import React from 'react'
import JSXBaseDemo from './JSXBaseDemo'
import FormDemo from './FormDemo';
import PropsDemo from './PropsDemo'
import StateDemo from './StateDemo'

class BaseUseDemo extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return <div>
            {/* <JSXBaseDemo /> */}
            {/* <FormDemo /> */}
            {/* <PropsDemo /> */}
            <StateDemo />
        </div>
    }
}

export default BaseUseDemo