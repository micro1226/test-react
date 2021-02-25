import React from 'react'

// 创建 context,填入默认值(任何一个 js 变量)
const ThemeContext = React.createContext('dark')

// 底层组件 - 函数式组件
function ThemeLink(props) {
    // const theme = this.context // 会报错,函数式组件没有实例, 即没有 this

    // 函数式组件可以使用 consumer
    return <ThemeContext.Consumer>
        { value => <p> link`s theme is {value}</p>}
    </ThemeContext.Consumer>
}

// 底层组件 - class组件
class ThemeButton extends React.Component {
    // 指定 contextType读取当前的 theme context
    // static contextType = ThemeContext // 也可以用 ThemeButton.contextType

    render() {
        const theme = this.context // react 会往上找到最近的 theme Provider, 然后使
        return <div>
            <p>button`s theme is {theme}</p>
        </div>
    }
}
ThemeButton.contextType = ThemeContext // 指定 contextType 读取当前的 theme context

// 中间的组件再也不用指明往下传递 theme 了
function Toolbar (props) {
    return <div>
        <ThemeButton />
        <ThemeLink />
    </div>
}

class ContextDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'light'
        }
    }
    
    render() {
        return (
            <ThemeContext.Provider value={this.state.theme}>
                <Toolbar />
                <hr />
                <p>{this.state.theme}</p>
                <button onClick={this.changeTheme}>change theme</button>
            </ThemeContext.Provider>
        )
    }

    changeTheme = () => {
        this.setState({
            theme: this.state.theme === 'light' ? 'dark' : 'light'
        })
    }
}

export default ContextDemo