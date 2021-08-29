import React from 'react'
import PropTypes from 'prop-types'

export default function Header(props) {
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
  
  </div>
</nav>
        </div>
    )
}

Header.defaultProps ={
    title: "your title here"
}

Header.propTypes ={
    title: PropTypes.string
}