import React from "react";

class Detail extends React.Component{
    componentDidMount(){
            console.log(this.props);
        const { location, history } = this.props;
        // 그냥 새로고침해서 location이 안넘어왔을 때 대비
        if (location.state === undefined){
            history.push("/")
            // 다시 원래 자리로 돌아가도록 
        }
    }
    render() {
        const {location} = this.props;
        // return <span> {location.state.title}</span>
        if (location.state){
            return <span>{location.state.title}</span>;
        } else {
            return null;
        }
    }
}
export default Detail;