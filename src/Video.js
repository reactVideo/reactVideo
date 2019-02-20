/**
 * Created by mahai on 2019/2/19.
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Bar } from './components/control-bar'
import './css/reactVideo.css'
const propTypes = {

};

export default class Video extends Component {

    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className = 'react-video-box'>
                <video
                    className = 'react-video'
                    src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
                >
                    该浏览器不支持！！！！
                </video>
                <Bar />
            </div>
        );
    }

}

Video.propTypes = propTypes;