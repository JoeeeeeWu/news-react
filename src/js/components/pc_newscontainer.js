import React, { Component } from 'react';
import { Row, Col, Tabs, Carousel } from 'antd';
import PCNewsBlock from './pc_news_block';
const TabPane = Tabs.TabPane;
import PCNewsImageBlock from './pc_news_image_block';

class PCNewsContainer extends Component {
    render() {
        const settings= {
            dots : true,
            infinite : true,
            speed : 500,
            slidesToShow : 1,
            autoplay : true
        };
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className='container'>
                        <div className="leftContainer">
                            <div className="carousel">
                                <Carousel {...settings}>
                                    <div>
                                        <img src='./src/images/carousel_1.jpg' alt=""/>
                                    </div>
                                    <div>
                                        <img src='./src/images/carousel_2.jpg' alt=""/>
                                    </div>
                                    <div>
                                        <img src='./src/images/carousel_3.jpg' alt=""/>
                                    </div>
                                    <div>
                                        <img src='./src/images/carousel_4.jpg' alt=""/>
                                    </div>
                                </Carousel>
                            </div>
                            <PCNewsImageBlock count={6} type='guoji' width='400px' cardTitle='国际头条' imageWidth='106px'/>
                        </div>
                        <Tabs className='tabs_news'>
                            <TabPane tab='头条新闻' key='1'>
                                <PCNewsBlock count='22' type='top' width='100%' bordered='false'/>
                            </TabPane>
                            <TabPane tab='国际' key='2'>
                                <PCNewsBlock count='22' type='guoji' width='100%' bordered='false'/>
                            </TabPane>
                        </Tabs>
                        <div>
                            <PCNewsImageBlock count={8} type='guonei' width='100%' cardTitle='国内新闻' imageWidth='122px'/>
                            <PCNewsImageBlock count={16} type='yule' width='100%' cardTitle='娱乐新闻' imageWidth='122px'/>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    }
}

export default PCNewsContainer;