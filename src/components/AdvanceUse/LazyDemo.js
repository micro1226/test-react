import React from 'react'

const ContextDemo = React.lazy(() => import('./ContextDemo'))
class LazyDemo extends React.Component {
    render() {
        return (
            <div>
                <p>引入一个动态组件</p>
                <hr />
                <React.Suspense fallback={<div>Loading...</div>}>
                    <ContextDemo />
                </React.Suspense>
            </div>

            // 1.强制刷新, 可看到 loading(限制 chrome 网速)
            // 2.看 network 的 js 加载
        )
    }
}

export default LazyDemo