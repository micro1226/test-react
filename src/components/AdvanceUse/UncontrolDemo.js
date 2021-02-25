import React from 'react'

class UncontrolDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'momo',
            flag: true
        }
        this.nameInputRef = React.createRef() //创建 ref
        this.fileInputRef = React.createRef()
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