/**
 * Created by mahai on 2019/2/19.
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './css/reactVideo.css'
const propTypes = {

};

const defultStyle = {
    height:450,
    width:'100%'
}
export default class Video extends Component {

    constructor(props) {
        super(props);

    }
    render() {
        return (
            <video
                className = 'react-video'
                src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
            >

            </video>

        );
    }

}

Video.propTypes = propTypes;