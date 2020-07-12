import React, { Component } from 'react'

class ClassMouse extends Component {
	constructor(props) {
		super(props)

		this.state = {
			x: 0,
			y: 0
		}
	}

    // var x = event.clientX;     // Get the horizontal coordinate on mousemove event
    // var y = event.clientY;     // Get the vertical coordinate mousemove event
    
    logMousePosition = e => {
		this.setState({ x: e.clientX, y: e.clientY })
	}

	componentDidMount() {
		window.addEventListener('mousemove', this.logMousePosition)
	}

	componentWillUnmount() {
		window.removeEventListener('mousemove', this.logMousePosition)
	}

	render() {
		return (
			<div>
                <h6>useEffect only once in class component</h6>
				X - {this.state.x} Y - {this.state.y}
			</div>
		)
	}
}

export default ClassMouse