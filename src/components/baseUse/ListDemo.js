import React from 'react'

class ListDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                { id: 'id-1', title: 'title 1' },
                { id: 'id-2', title: 'title 2' },
                { id: 'id-3', title: 'title 3' },
            ]
        }
    }

    render() {
        // jsx 里面的注释写法 {/*123*/}
        return <ul> {/*123*/}
            {this.state.list.map((item,index) => {
                return <li key={item.id}>index {index}; title {item.title}</li>
            })}
        </ul>
    }
}

export default ListDemo