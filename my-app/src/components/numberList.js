import React from "react";

function ListItem(props) {
    return (
        <li>{props.value}</li>
    )
}

class NumberList extends React.Component {

    render() {
        const numbers = this.props.numbers;
        // const listItems = numbers.map(number => <ListItem key={number.toString()} value={number} />);
        return (
            <ul>
                {/*{listItems}*/}
                {/* JSX 允许在大括号中嵌入任何表达式，所以可以在 map() 中这样使用 */}
                {numbers.map(number => <ListItem key={number.toString()} value={number} />)}
            </ul>
        );
    }
}

export default NumberList
