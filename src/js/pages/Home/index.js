var React = require('react');
import "../../../css/Home/index.scss";
import HomeHeader from '../../components/Home/HomeHeader'
import HomeIntroduction from '../../components/Home/HomeIntroduction'
import HomeContent from '../../components/Home/HomeContent'

 export default class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <HomeHeader />
        <div className="home-middle-container">
          <HomeIntroduction />
          <HomeContent />
        </div>
      </div>
    )
  }
}