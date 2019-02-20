/**
 * Created by mahai on 2019/2/20.
 */


import React ,{ Component } from 'react';

import Progress from './Progress'
import  '../../css/progress.css';

export default class Bar extends Component {


    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className="bar_box">
                <Progress {...this.props}/>
            </div>
        )
    }
}