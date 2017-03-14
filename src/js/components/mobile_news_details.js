import React, { Component } from 'react';
import { Row, Col, BackTop } from 'antd';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import CommonComment from './common_comments';

class MobileNewsDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsItem: ''
        }
    }
    componentDidMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    newsItem: json
                });
                document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
            })
    }

    createMarkup() {
        return {
            __html: this.state.newsItem.pagecontent
        }
    }
    render() {
        return (
            <div id='mobileDetailsContainer'>
                <MobileHeader />
                <div className="ucmobileList">
                    <Row>
                        <Col span={24} className='container'>
                            <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                            <hr/>
                            <CommonComment uniquekey={this.props.params.uniquekey}/>
                        </Col>
                    </Row>
                </div>
                <MobileFooter />
                <BackTop />
            </div >
        );
    }
}

export default MobileNewsDetails;