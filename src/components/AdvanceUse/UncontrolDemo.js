import React from 'react'

class UncontrolDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'momo',
            flag: true,
            count: 0
        }
        this.nameInputRef = React.createRef() //创建 ref
        this.fileInputRef = React.createRef()
    }

    componentDidMount() {
        this.setState({ count: this.state.count + 1})
        console.log('count1: ', this.state.count)
        this.setState({ count: this.state.count + 1})
        console.log('count2: ', this.state.count)
        setTimeout(() => {
            this.setState({ count: this.state.count + 1})
            console.log('count3: ', this.state.count)
        }, 0);
        setTimeout(() => {
            this.setState({ count: this.state.count + 1})
            console.log('count4: ', this.state.count)
        }, 0);
    }

    render() {
        // input default value
        return <div>
            {/* 使用 defaultValue 而不是 value, 使用 ref  */}
            <input defaultValue={this.state.name} ref={this.nameInputRef} />
            {/* state并不会随着状态改变 */}
            <span>state.name {this.state.name}</span>
            <br />
            <button onClick={this.alertName}>alert name</button>
        </div>

        // checkbox defaultChecked
        return <div>
            <input type="checkbox"
                defaultChecked={this.state.flag} />
        </div>

        // file 
        return <div>
            <input type="file" ref={this.fileInputRef} />
            <button onClick={this.alertFile}>alert file</button>
        </div>
    }

    alertName = () => {
        const elem = this.nameInputRef.current // 通过 ref 获取 DOM节点
        alert(elem.value)
    }
    alertFile = () => {
        const elem = this.fileInputRef.current // 通过 ref 获取 DOM节点
        alert(elem.files[0].name)
    }
}

export default UncontrolDemo