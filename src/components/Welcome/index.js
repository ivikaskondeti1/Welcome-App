import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {buttonText: 'Subscribe'}

  btnText = () => {
    const {buttonText} = this.state
    if (buttonText === 'Subscribe') {
      this.setState(() => ({buttonText: 'Subscribed'}))
    } else {
      this.setState(() => ({buttonText: 'Subscribe'}))
    }
  }

  render() {
    const {buttonText} = this.state
    return (
      <div className="Container">
        <h1 className="heading">Welcome</h1>
        <h1>Thank you! Happy Learning</h1>
        <div>
          <button type="submit" onClick={this.btnText}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
