import React from 'react'
import CountUp from 'react-countup';

class Summary extends React.Component {
    render() {
        const { summary, currentDate } = this.props;
        return (
            <div>
                <h1>Cases on: {new Date(currentDate).toDateString()}</h1>
                <br />
                <div className='row'>
                    <div className="NewConfirmed">
                        <h3>New Confirmed</h3>
                        <h1><CountUp start={0} end={summary.NewConfirmed} duration={2.75} separator="," /> </h1>                                                
                    </div>

                    <div className="NewDeaths">
                        <h3>New Deaths</h3>
                        <h1><CountUp start={0} end={summary.NewDeaths} duration={2.75} separator="," /> </h1>      
                                              
                    </div>

                    <div className="NewRecovered">
                        <h3>New Recovered</h3>
                        <h1><CountUp start={0} end={summary.NewRecovered} duration={2.75} separator="," /> </h1>      
                                           
                    </div>

                    <div className="TotalConfirmed">
                        <h3>Total Confirmed</h3>
                        <h1><CountUp start={0} end={summary.TotalConfirmed} duration={2.75} separator="," /> </h1>      
                        
                    </div>

                    <div className="TotalDeaths">
                        <h3>Total Deaths</h3>
                        <h1><CountUp start={0} end={summary.TotalDeaths} duration={2.75} separator="," /> </h1>      
                        
                    </div>

                    <div className="TotalRecovered">
                        <h3>Total Recovered</h3>
                        <h1><CountUp start={0} end={summary.TotalRecovered} duration={2.75} separator="," /> </h1>      
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Summary

