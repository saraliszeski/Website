import PropTypes from 'prop-types'
// import Button from './Button'
import Clock1 from './resources/clock.jpg'

const Header = () => {
    return (<div> <header className = 'header' >
        <h1 > Salud! </h1>
        <img src={Clock1}/>
         </header >
         </div>
        
    )
}

Header.defaultProps = {
    title: 'Title here!!',
}

Header.propTypes = {
    title: PropTypes.string,
}

// css in js
// const headingStyle = {
//     color: 'purple',
//     backgroundColor: 'white',
//     padding: 10,
// }
export default Header