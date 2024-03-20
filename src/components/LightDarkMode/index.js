import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDark: true}

  clicksy = () => {
    this.setState(prevSate => ({isDark: !prevSate.isDark}))
  }

  render() {
    const {isDark} = this.state
    const mode = isDark ? 'inner' : 'inner1'
    const change = isDark ? 'Light Mode' : 'Dark Mode'
    const buttonChange = isDark ? 'buttons' : 'button1'
    return (
      <div className="back container">
        <div className={`${mode}`}>
          <h1>Click To change Mode</h1>
          <button
            type="button"
            onClick={this.clicksy}
            className={`${buttonChange}`}
          >
            {change}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
