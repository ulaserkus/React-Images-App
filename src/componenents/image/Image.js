import React, { Component } from 'react'

 class Image extends Component {
	constructor(props) {
		super(props);
		this.state=
		{
			spanCount:1
		}
		this.myRef = React.createRef();
		
	  }
	  componentDidMount() {
		// 
		this.myRef.current.addEventListener('load',() =>{
			console.log(this.myRef.current.clientHeight);
			const spanim=Math.round(this.myRef.current.clientHeight/5)+1;

		this.setState({
			spanCount:spanim
		});
			
		});
	
	  }
	render() {
		const{image}=this.props;
		return (
			<img style={{gridRowEnd:`span ${this.state.spanCount}`}} ref={this.myRef} key={image.id} src={image.urls.small} alt=""/>
		)
	}
}

export default Image;