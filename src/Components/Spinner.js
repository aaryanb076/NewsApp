import React, { Component } from 'react'
export default class Spinner extends Component {
    render() {
        return (
            <div className="text-center" style={{backgroundColor:"#292F6D"}}>
               <img src="./Spinner.gif" width="30" height="30" alt="Loading..." >
               </img>
            </div>
        )
    }
}
