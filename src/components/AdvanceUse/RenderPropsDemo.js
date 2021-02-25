import PropTypes from 'prop-types'
import React from 'react'

// render props 核心思想
// 通过一个函数将 class 组件的 state 作为 props 传递给纯函数组件
class Mouse extends React.Component {
    constructor(props) {
        super(props);
        // state 即多个组件公共逻辑的数据
        this.state = {x: 0, y:0}        
    }

    handleMouseMove = event => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }

    render() {
        return (
            <div style={{height: '500px'}} onMouseMove={this.handleMouseMove}>
                {/* 将当前 state 作为 props,传递给 render */}
                {this.props.render(this.state)}
            </div>
        )
    }
    
}

Mouse.propTypes = {
    render: PropTypes.func.isRequired // 必须接受一个 render 属性
}

const RenderPropsDemo = (props) => (
    <div style={{height: '500px'}}>
        <p>{props.a}</p>
        <Mouse render={
            // render 是一个函数组件
            ({x, y}) => <h1> The Mouse position is ({x}, {y}) </h1>
        } />
    </div>
)

// 定义了 mouse 组件, 只有获取 x,y 的能力
// 至于 Mouse 组件如何渲染, RenderPropsDemo说了算,通过 render props 的方式告诉 mouse

export default RenderPropsDemo