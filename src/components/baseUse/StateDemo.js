import React from 'react';

// 函数组件 则没有 state
class StateDemo extends React.Component {
    constructor(props) {
        super(props)

        // 1. state要在构造函数中定义
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.increase}>
                    add
                </button>
            </div>
        )
    }

    bodyClickHandler = () => {
        this.setState({
            count: this.state.count + 1
        })
        console.log('count in body event', this.state.count)
    }

    componentDidMount() {
        // 自己定义的 DOM 事件,setState 是同步的
        // document.body.addEventListener('click', this.bodyClickHandler)
    }
    componentWillUnmount() {
        // 及时销毁 自定义 DOM 事件
        //  document.body.removeEventListener('click', this.bodyClickHandler)
        // clearTimeout
    }

    increase = () => {
        // 2.不要直接修改 state, 使用不可变数据
        // this.state.count++ // 错误
        // this.setState({ count: this.state.count + 1 });

        // 3.setState可能是异步更新(也有可能是同步更新)
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     // vue  $nextTick
        //     console.log('count by call back', this.state.count)
        // })
        // console.log('count', this.state.count)
        // //  异步的 拿不到最新值

        // setTimeout 中setState是同步的
        // setTimeout(() => {
        //     this.setState({
        //         count: this.state.count + 1
        //     })
        //     console.log('count in setTimeOut', this.state.count)
        // }, 1000)

        // 自己定义的 DOM事件, setState 是同步的.在 componentDidMount中

        // 4. state 异步更新的话 ,更新前会被合并
        // 传入对象 会被合并.执行结果只一次 + 1
        // this.setState({
        //     count: this.state.count + 1
        // })
        // this.setState({
        //     count: this.state.count + 1
        // })
        // this.setState({
        //     count: this.state.count + 1
        // })
        // 类似于Object.assign({count: 1}, {count: 1})

        // 传入函数, 不会被合并 执行结果+3
        this.setState((preState, props) => {
            return {
                count: preState.count + 1
            }
        })
        this.setState((preState, props) => {
            return {
                count: preState.count + 1
            }
        })
        this.setState((preState, props) => {
            return {
                count: preState.count + 1
            }
        })
    }
}

export default StateDemo

// 分割线
// // 不可变值 - 数组 (函数式编程, 纯函数)
// const list5copy = this.state.list5.slice() // 相当于做了一个副本
// list5copy.splice(2, 0 , 'a') // 中间插入/删除
// this.setState({
//     list1: this.state.list1.concat(100), // 追加
//     list2: [...this.state.list2, 100], // 追加
//     // 以上两个不会影响list的值, push 会影响
//     list3: this.state.list3.slice(0,3), // 截取
//     list4: this.state.list4.filter(x => x > 100), // 筛选
//     list5: list5copy
// })
// // 注意不能直接对this.state.list 直接进行 push pop splice 等操作
// // 这样违反不可变原则

// // 不可变值 - 对象
// this.setState({
//     obj1: Object.assign({}, this.state.obj1, {a: 100}),
//     obj2: {...this.state.obj2, a: 2}
// })
// // 注意: 不能直接对 this.state.obj 进行属性设置,这样违反不可变值