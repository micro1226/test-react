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

class Footer extends React.Component {
    render() {
        return (
            <p>
                {this.props.text}
                {this.props.length}
            </p>
        )
    }
    componentDidUpdate() {
        console.log('footer did update')
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.text !== this.props.text || nextProps.length !== this.props.length) {
            return true // 可以渲染
        }
        return false // 不重复渲染
    }
    // React 默认: 父组件有更新, 子组件则无条件也更新
    // SCU 默认返回 true
    // 性能优化对于 react 更加重要
}

class SCUDemo extends React.Component {
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
                <Footer text={this.state.footerInfo} length={this.state.list.length} />
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

export default SCUDemo