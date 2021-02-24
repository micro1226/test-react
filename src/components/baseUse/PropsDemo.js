import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }

    render() {
        return (
             <div>
                 <input value={this.state.title}
                 onChange={this.onTitleChange} />
                 <button onClick={this.onSubmit}>
                     提交
                 </button>
             </div>
        );
    }

    onTitleChange = e => {
        this.setState({ title: e.target.value });
    }

    onSubmit = () => {
        const { submitTitle } = this.props
        submitTitle(this.state.title)
        this.setState({ title: '' });
    }
}

Input.propTypes = {
    submitTitle: PropTypes.func.isRequired
}

class List extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { list } = this.props

        return (
            <ul>
                {list.map((item,index) => {
                    return <li key={item.id}>
                        {item.title}
                    </li>
                })}
            </ul>
        )
    }
}

// props 类型检查
List.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired
}

class PropsDemo extends React.Component {
    constructor(props) {
        super(props)

        // 状态提升
        this.state = {
            list: [
                { id: 'id-1', title: 'title-1'},
                { id: 'id-2', title: 'title-2'},
                { id: 'id-3', title: 'title-3'},
            ]
        }
    }

    render() {
        return (
            <div>
                <Input submitTitle={this.onSubmitTitle} />
                <List list={this.state.list} />
            </div>
        )
    }

    onSubmitTitle = title => {
        this.setState({ 
            list: this.state.list.concat({
            id: `id-${Date.now()}`,
            title
        }) 
    });
    }
}

export default PropsDemo