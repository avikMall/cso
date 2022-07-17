import React from 'react';
import '../App.css';

export function Events() {

    return (
        <div className='events-all'>
            <div className='events-container'>
                <div className='events-item events-item-2 date ev1'>8/22</div>
                <div className='events-item events-item-3 event ev1'>
                    <div className='events-sub-title'>Move-in & Club Bonanza</div>
                    <div className='events-desc'>Meet the execs at our club bonanza station and move in to TAMS. Stop by our poster to learn more about CSO.</div>
                </div>
                <div className='events-item events-item-4 date ev2'>8/31</div>
                <div className='events-item events-item-5 event ev2'>
                <div className='events-sub-title'>Intro GA</div>
                    <div className='events-desc'>Find out more about us! We will be discussing what we do throughout the year, the events we are holding for the semester, and more!</div>
                </div>
                <div className='events-item events-item-6 date ev3'>2/18</div>
                <div className='events-item events-item-7 event ev3'>
                <div className='events-sub-title'>HackTAMS</div>
                    <div className='events-desc'>HackTAMS! HackTAMS is a 24-hour competitive programming event in which teams of students work together to “hack” a website, app, or tool. Whether you have never written a line of code or you are a seasoned programmer, HackTAMS is for everyone! </div>
                </div>
            </div>
        </div>
    );
}

export default Events;