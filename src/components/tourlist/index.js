import React, { Component } from 'react';
import './TourList.scss';
import Tour from '../tour/Tour';
import {tourData} from '../data';

export default class TourList extends Component {
    state={
        tours:tourData
    };
    removeTour = id =>{
        const {tours} =this.state;
        const sortedTours =tours.filter(tour=>{
            return tour.id !==id;
        });
        this.setState({
            tours:sortedTours
        });
    }
    render() {
        const {tours} =this.state;

        return (
            <section className="tourlist">
                {tours.map(tour => {
                    return(
                        <Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>

                    )
                })}
            </section>
        )
    }
}
