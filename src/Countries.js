import React from 'react'

class Countries extends React.Component {
    render() {
        const {countries} = this.props;
        return (
            <tr>
                <td>{countries.Country}</td>
                <td className='NewConfirmed'>{countries.NewConfirmed}</td>
                <td className='NewDeaths'>{countries.NewDeaths}</td>
                <td className='NewRecovered'>{countries.NewRecovered}</td>
                <td className='TotalConfirmed'>{countries.TotalConfirmed}</td>                
                <td className='TotalDeaths'>{countries.TotalDeaths}</td>
                <td className='TotalRecovered'>{countries.TotalRecovered}</td>
            </tr>
        )
    }
}

export default Countries
