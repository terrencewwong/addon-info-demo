import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children }) => <button>{children}</button>
Button.propTypes = {
  /** default export works */
  children: PropTypes.node
}
export default Button

export const ExportConstButton = ({ children }) => <button>{children}</button>
ExportConstButton.propTypes = {
  /** description for exported component as export const does not work :( */
  children: PropTypes.node
}

const NamedExportButton = ({ children }) => <button>{children}</button>
NamedExportButton.propTypes = {
  /** this isn't working either :( */
  children: PropTypes.node
}
export { NamedExportButton }
