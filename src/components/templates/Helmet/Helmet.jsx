import PropTypes from 'prop-types'
import React from 'react'

const Helmet = props => {

    document.title = 'Netfarm - ' + props.title

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <div>
            {props.children}
        </div>
    )
}

Helmet.propTypes = {
    title: PropTypes.string.isRequired
}

export default Helmet