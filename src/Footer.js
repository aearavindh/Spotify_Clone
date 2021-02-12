import './Footer.css';
import React from 'react';
import { PlayCircleOutline, PlaylistPlay, Repeat, Shuffle, SkipNext, SkipPrevious, VolumeDown } from '@material-ui/icons';
import { Grid, Slider } from '@material-ui/core';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__left">
                <img
                  className="footer__albumLogo"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/One_Direction_at_the_New_Jersey_concert_on_7.2.13_IMG_4238_%289206417991%29.jpg/800px-One_Direction_at_the_New_Jersey_concert_on_7.2.13_IMG_4238_%289206417991%29.jpg" 
                  alt=""
                />
                <div className="footer__songInfo">
                    <h4>Steal My Girl</h4>
                    <p>One Direction</p>
                </div>
            </div>
            <div className="footer__center">
                <Shuffle className="footer__green" />
                <SkipPrevious className="footer__icon" />
                <PlayCircleOutline fontSize="large" className="footer__icon" />
                <SkipNext className="footer__icon" />
                <Repeat className="footer__green" />
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlay />
                    </Grid>
                    <Grid item>
                        <VolumeDown />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Footer;
