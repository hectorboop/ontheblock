import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import blogdata from './data/blogdata.json';
import Singleblogdata from './data/single-blogdata.json';
import HomeV1 from './components/home-v1';
import HomeV2 from './components/home-v2';
import HomeV3 from './components/home-v3';
import HomeV4 from './components/home-v4';
import Property from './components/property';
import AvilableProperty from './components/availavbe-property';
import PropertiesByCity from './components/properties-by-city';
import RecentProperties from './components/recent-properties';
import PropertyDetails from './components/property-details';
import About from './components/about';
import Advisor from './components/advisor';
import Pricing from './components/pricing';
import UserList from './components/user-list';
import Registraion from './components/registration';
import Error from './components/error';
import Faq from './components/faq';
import News from './components/news';
import NewsDetails from './components/news-details';
import Contact from './components/contact';
import SearchMap from './components/search-map';
import SearchGrid from './components/search-grid';
import SearchList from './components/search-list';
import AddNew from './components/add-property';

class Root extends Component {
    render() {
        return(
            <Router>
                <HashRouter basename="/">
                <div>
                <Switch>
                    <Route exact path="/" component={HomeV1} />
                    <Route path="/home-v2" component={HomeV2} />
                    <Route path="/home-v3" component={HomeV3} />
                    <Route path="/home-v4" component={HomeV4} />
                    <Route path="/property" component={Property} />
                    <Route path="/availavbe-property" component={AvilableProperty} />
                    <Route path="/properties-by-city" component={PropertiesByCity} />
                    <Route path="/recent-properties" component={RecentProperties} />
                    <Route path="/property-details" component={PropertyDetails} />
                    <Route path="/about" component={About} />
                    <Route path="/advisor" component={Advisor} />
                    <Route path="/pricing" component={Pricing} />
                    <Route path="/user-list" component={UserList} />
                    <Route path="/registration" component={Registraion} />
                    <Route path="/error" component={Error} />
                    <Route path="/faq" component={Faq} />
                    <Route path="/news" component={News} />
                    <Route path="/news-details" component={NewsDetails} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/search-map" component={SearchMap} />
                    <Route path="/search-grid" component={SearchGrid} />
                    <Route path="/search-list" component={SearchList} />
                    <Route path="/add-property" component={AddNew} />
                </Switch>
                </div>
                </HashRouter>
            </Router>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('realdeal'));
