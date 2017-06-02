import React, {Component} from 'react';

class DateHeader extends Component {
    state = {
        date:new Date(),
    }

    shouldComponentUpdate(nextProps, nextState){
        let {date} = nextState;
        return date.getSeconds();
    }

    componentDidMount(){
        setInterval(this.tick, 1000);
    }

    tick = () =>{
        this.setState({date:new Date()});
    }

    render() {
        let {date} = this.state;
        return (
            <span style={{float:'right', color:'white'}}>{date.toLocaleDateString('ES')} {date.toLocaleTimeString()}</span>
        );
    }
};

export default DateHeader;
