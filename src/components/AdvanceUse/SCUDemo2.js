import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash'

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

    shouldComponentUpdate(nextProps, nextState) {
        // _.isEqual 做对象或数组的深度比较
        if (_.isEqual(nextProps.list, this.props.list)) {
            // 相等 则不重复渲染
            return false
        }
        return true // 不相等, 则重复渲染
    }
    
}

// props 类型检查
List.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired
}

class SCUDemo2 extends React.Component {
    constructor(props) {
        super(props)

        // 状态提升
        this.state = {
            list: [
                { id: 'id-1', title: 'title-1'},
                { id: 'id-2', title: 'title-2'},
                { id: 'id-3', title: 'title-3'},
            ],
            footerInfo: '底部文字'
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
        const newItem = {
            id: `id-${Date.now()}`,
            title
        }
        // 错误写法 this.state.list 和 nextProps.list 相等
        // this.state.list.push(newItem)
        // this.setState({ 
        //     list: this.state.list 
        // });
        // 正确写法
        this.setState({
            list: this.state.list.concat(newItem)
        })
    }
}

export default SCUDemo2