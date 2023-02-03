import React, { Component} from 'react';
import 'web-component-essentials'

export class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.dropdownRef = React.createRef();
    }
    componentDidMount() {
        this.dropdownRef.current.title = this.props.title;
        if (this.props.onShow) {
            this.dropdownRef.current.addEventListener('show', (e) => this.props.onShow(e));
        }
    }
    componentWillReceiveProps(props) {
        this.dropdownRef.current.title = props.title;
        if (props.title!== this.props.title)  {
            this.dropdownRef.current.title = props.title;
    }
    if (props.show !==this.props.show) {

    }

    render() {
        return (
            <div className="dropdown"></div>
} 