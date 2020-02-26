import React from 'react'
import ReactDOM from 'react-dom'

const element = (
    <div>
        <h3>Hello, React!</h3>
        {/* JSX注释需要写在花括号中 */}
        {/* class 属性需要写成 className ，for 属性需要写成 htmlFor */}
        <div className={'date'}>
            <span id={'date'}></span>
            <span id={'clock'}></span>
        </div>
    </div>
);

// function Clock(props) {
//     return (
//         <h4>现在是 {props.date.toLocaleTimeString()}.</h4>
//     )
// }
// React.component方式创建类
class Clock extends React.Component {
   /* this.props 属性 */
   render() {
       return (
           <span>{this.props.date.toLocaleTimeString()}</span>
       )
   }
}
// 动态渲染更新元素
function tick() {
    ReactDOM.render(
        <Clock date={new Date()}/>,
        document.getElementById('clock')
    );
}
setInterval(tick, 1000);

/******* 复合组件：多层props传值 Start *******/
var dateStyle = {color:'red',textAlign:'center'};  // 内联样式
class Year extends React.Component {
    render() {
        return (
            <span style={dateStyle}>{this.props.year}年</span>
        )
    }
}
class Month extends React.Component {
    render() {
        return (
            <span style={dateStyle}>{this.props.month}月</span>
        )
    }
}
class Day extends React.Component {
    render() {
        return (
            <span style={dateStyle}>{this.props.day}日</span>
        )
    }
}
function FullDate(props) {
    return (
        <div>
            <Year year={props.year}></Year>
            <Month month={props.month}></Month>
            <Day day={props.day}></Day>
        </div>
    )
}
setTimeout(() => {
    ReactDOM.render(
        <FullDate year={new Date().getFullYear()} month={new Date().getMonth() + 1} day={new Date().getDate()}/>,
        document.getElementById('date')
    );
}, 1000);
/******* 复合组件：多层props传值 End *******/

/*** 数组：会自动展开所有成员 ***/
// let arr = [
//     <span>1、</span>,
//     <span>2、</span>,
// ];
// const arrBox = <div>{arr}</div>;
// console.log(arrBox);

function El1 () {
    return (
        element
    );
}
console.log(element)
export default El1;
