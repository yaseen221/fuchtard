import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import {Header} from 'components/header';
import {Footer} from 'components/footer';
import {SEOAbout} from 'components/seoabout';
import {Cart} from 'components/cart';
import {FoodMenu} from 'components/menu';
import {OrderForm} from 'components/order';
import {NavBar} from 'components/navbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// class NavBar extends React.Component {
//     render() {
//         return(
//             <div className="scrollbar navbar navbar-default navbar-fixed-top hidden">
//         <div className="container">
//           <div id="navbar-container" className="navbar-header">
//             <ul className="nav navbar-nav">
//               <li className="dropdown">
//                 <a id="current_category" href="#" data-target="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown
//                   <b className="caret" /></a>
//                 <ul className="dropdown-menu scrollable-menu">
//                   <li><a href="#scroll-to-top">В начало</a></li>
//                   <li className="divider" />
//                   {'{'}% for food_category in object_list %{'}'}
//                   {'{'}% if food_category.enabled and food_category.visible and food_category.fooditem_set.exists %{'}'}
//                   <li><a href="#{{ food_category.slug }}">{'{'}{'{'} food_category.title {'}'}{'}'}</a></li>
//                   {'{'}% endif %{'}'}
//                   {'{'}% endfor %{'}'}
//                 </ul>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//
//         )
//     }
// }



class CarouselItem extends React.Component {
    render() {
        return (
            <div className="item"
                 style={{backgroundImage: 'url(' + this.props.image + ')'}}>
                <div className="carousel-caption">
                    <h3>{this.props.heading}</h3>
                    <p>{this.props.subheading}</p>
                </div>
            </div>

        )
    }
}


class Carousel extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: [],
        }
    }

    loadCarouselsFromServer() {
        $.ajax({
            url: 'http://127.0.0.1:8000/api/banners/',
            dataType: 'json',
            success: (data) => {
                this.setState({data: data});
            },
            error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
            }
        });
    }

    componentDidMount() {
        this.loadCarouselsFromServer();
    }

    render() {
         const carousel_items = this.state.data.map((carousel_item) => {
            return <CarouselItem key={carousel_item.id}
                                 image={carousel_item.image}
                                 heading={carousel_item.heading}
                                 subheading={carousel_item.subheading}/>
        });
        return(
            <div>
                {carousel_items}
        <div id="banner_carousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#banner_carousel" data-slide-to="{{ forloop.counter0 }}" className="{% if forloop.first %}active {% endif %}" />
          </ol>
          <div className="carousel-inner" role="listbox">
              {carousel_items}
          </div>
          <a className="left carousel-control" href="#banner_carousel" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#banner_carousel" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

        )
    }
}


export class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Header />
                    {/*<Carousel/>*/}
                    <div>
                        {this.props.children}
                    </div>
                    {/*<Cart />*/}
                    {/*<OrderForm />*/}
                    {/*<FoodMenu />*/}
                    <SEOAbout/>
                    <NavBar />
                    {/*<StickyBar />*/}
                    <Footer />
                </div>
            </MuiThemeProvider>
        );
    }
}


export class Routs extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={FoodMenu}/>
                    <Route path="cart" component={Cart}/>
                    <Route path="checkout" component={OrderForm}/>
                </Route>
            </Router>
        )
    }
}