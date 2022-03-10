import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articles = [
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Elizabeth Yuko",
            "title": "Enjoy These Pi Day Deals for Cheap and Free Food",
            "description": "If you only remember one thing from your high school geometry class, there’s a good chance that it’s the first three digits of Pi (“π”): 3.14. Sure, you may not have retained anything else about Pi, like what it means or does, but thanks to the popularity of …",
            "url": "https://lifehacker.com/enjoy-these-pi-day-deals-for-cheap-and-free-food-1848627755",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/a71447fe9d26fbe476528bcf9793b3b2.jpg",
            "publishedAt": "2022-03-10T13:30:00Z",
            "content": "If you only remember one thing from your high school geometry class, theres a good chance that its the first three digits of Pi (): 3.14. Sure, you may not have retained anything else about Pi, like … [+3395 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Mariella Moon",
            "title": "TikTok's SoundOn platform lets musicians directly share their own tracks",
            "description": "TikTok now has its own music distribution platform. The social network has launched SoundOn, which allows artists to upload their music directly to TikTok and to distribute it to various music streaming services. ByteDance, the app's parent company, won't be …",
            "url": "https://www.engadget.com/tiktok-soundon-music-distribution-platform-080515441.html",
            "urlToImage": "https://s.yimg.com/os/creatr-images/2019-10/dc6b3bc0-e653-11e9-af8b-f98569515174",
            "publishedAt": "2022-03-10T08:05:15Z",
            "content": "TikTok now has its own music distribution platform. The social network has launched SoundOn, which allows artists to upload their music directly to TikTok and to distribute it to various music stream… [+1526 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Chaim Gartenberg",
            "title": "The Mac Studio’s ports are a step back in all the right ways",
            "description": "Apple’s Mac Studio is the final nail in the coffin for the company’s exclusively USB-C dreams and a tacit admission that moving away from ports — at least for pricey pro machines — was never the right solution.",
            "url": "https://www.theverge.com/2022/3/10/22969574/mac-studio-apple-ports-hdmi-usb-c-design-dongles-back",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/Ianq36pcTHTZ2rV7q4r18FVJMpQ=/0x74:3584x1950/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23303484/hero__d0yd117u6qy6_large_2x.jpeg",
            "publishedAt": "2022-03-10T14:15:00Z",
            "content": "The ports have won. After years of Apple’s USB-C experiments, the past few months have seen a decisive victory for the concept of “being able to plug things into your computer without a complicated a… [+6015 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Andrew Liszewski",
            "title": "Hefty New PopSockets Can Charge Your Smartphone",
            "description": "You can turn your nose up at the thought of sticking a big button to the back of your smartphone, but PopSockets have probably saved millions of devices from falling to their doom, and the company’s latest innovation means PopSockets users don’t have to worry…",
            "url": "https://gizmodo.com/popsockets-releases-popgrip-jumpstart-lightning-battery-1848634167",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/fd03dd7b49309e30459ba33219a8b721.jpg",
            "publishedAt": "2022-03-10T15:07:44Z",
            "content": "You can turn your nose up at the thought of sticking a big button to the back of your smartphone, but PopSockets have probably saved millions of devices from falling to their doom, and the companys l… [+1771 chars]"
        },
        {
            "source": {
                "id": "ars-technica",
                "name": "Ars Technica"
            },
            "author": "Scharon Harding",
            "title": "2002 iMac resurrected with Apple’s M1 chip",
            "description": "A modder makes the iMac G4 feel new again.",
            "url": "https://arstechnica.com/gadgets/2022/03/2002-imac-resurrected-with-apples-m1-chip/",
            "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2022/03/listing-760x380.png",
            "publishedAt": "2022-03-10T16:42:56Z",
            "content": "Enlarge/ Optical drive included.\r\n8 with 8 posters participating\r\nYou may be disheartened about the discontinuation of the 27-inch iMac, but fans of 2002's iMac G4 have had to live much longer withou… [+2175 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Blog.google"
            },
            "author": "Jan JedrzejowiczGroup Product Manager,Messages and Phone by Google",
            "title": "Less to stress and more to love with Messages by Google",
            "description": "Messaging is how we stay in touch with friends, keep up with family, and get things done. But it’s not always as easy as it should be. Conversations with friends on other platforms can be unnecessarily challenging. Important messages slip through the cracks b…",
            "url": "https://blog.google/products/messages/updates-march-2022/",
            "urlToImage": "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/GMS_Blog_Illustration_Messages_v04_2096x87.max-1300x1300.jpg",
            "publishedAt": "2022-03-10T14:00:00Z",
            "content": "Messaging is how we stay in touch with friends, keep up with family, and get things done. But its not always as easy as it should be. Conversations with friends on other platforms can be unnecessaril… [+1937 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Amazon surges as stock split, buyback excite investors - Reuters.com",
            "description": "Shares of Amazon.com Inc jumped 6.3% after the e-commerce giant announced a massive stock split, making its equity more attractive to investors following a surge in its value since going public 25 years ago.",
            "url": "https://www.reuters.com/technology/amazon-surges-stock-split-buyback-excite-investors-2022-03-10/",
            "urlToImage": "https://www.reuters.com/resizer/cV8SnShl74qluzWBoDH_vVa18m4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5GESI4YOUNN5PP5TCKQEZSUB6E.jpg",
            "publishedAt": "2022-03-10T12:24:00Z",
            "content": "March 10 (Reuters) - Shares of Amazon.com Inc jumped 6.3% after the e-commerce giant announced a massive stock split, making its equity more attractive to investors following a surge in its value sin… [+1552 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Breakingviews - Disney investors make ESG activist must-watch TV - Reuters.com",
            "description": "If U.S. board directors have not heard of Arjuna Capital, chances are they soon will. The Boston-based investment manager on Wednesday <a href=\"https://arjuna-capital.com/press-releases-archive/2022/3/9/press-release-arjuna-capital-59-of-disney-investors-vote…",
            "url": "https://www.reuters.com/breakingviews/disney-investors-make-esg-activist-must-watch-tv-2022-03-10/",
            "urlToImage": "https://www.reuters.com/resizer/aZJwIde3-qdiCLlENHnYBlqG6O0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/6NEMO4WNJ5MJND3GC72BLVB4YI.jpg",
            "publishedAt": "2022-03-10T09:02:00Z",
            "content": "MELBOURNE, March 10 (Reuters Breakingviews) - If U.S. board directors have not heard of Arjuna Capital, chances are they soon will. The Boston-based investment manager on Wednesday persuaded sharehol… [+2138 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Futures fall on inflation nerves amid Ukraine crisis - Reuters.com",
            "description": "U.S. stock index futures fell on Thursday ahead of consumer price data that will likely cement the case for an interest rate hike by the Federal Reserve, while shares in Amazon.com climbed on a stock-split and share buyback plan.",
            "url": "https://www.reuters.com/business/futures-fall-inflation-nerves-amid-ukraine-crisis-2022-03-10/",
            "urlToImage": "https://www.reuters.com/resizer/vdS7IRknEnilmUfV1XxSDR5s9IA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5XSD632NPBP5ZMXIPLEZ4TXF3U.jpg",
            "publishedAt": "2022-03-10T12:15:00Z",
            "content": "March 10 (Reuters) - U.S. stock index futures fell on Thursday ahead of consumer price data that will likely cement the case for an interest rate hike by the Federal Reserve, while shares in Amazon.c… [+2628 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Rio first big miner to cut Russia ties; Sony, Nintendo halt console sales - Reuters.com",
            "description": "Rio Tinto became the first major mining company to cut ties with Russian businesses and Japan's Sony and Nintendo suspended deliveries of their gaming consoles, joining a global corporate exodus from Russia over its invasion of Ukraine.",
            "url": "https://www.reuters.com/business/rio-first-big-miner-cut-russia-ties-sony-nintendo-halt-console-sales-2022-03-10/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=79",
            "publishedAt": "2022-03-10T07:29:00Z",
            "content": "March 10 (Reuters) - Rio Tinto became the first major mining company to cut ties with Russian businesses and Japan's Sony and Nintendo suspended deliveries of their gaming consoles, joining a global … [+4812 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Analysis: Russian risk recalibration a wake-up call for investors - Reuters.com",
            "description": "For funds undeterred in their investment choices by the killing of Saudi journalist Jamal Khashoggi or China's treatment of the Uyghurs, Russia's invasion of Ukraine is proving a wake-up call.",
            "url": "https://www.reuters.com/markets/europe/russian-risk-recalibration-wake-up-call-investors-2022-03-10/",
            "urlToImage": "https://www.reuters.com/resizer/IgwLAM0c08dnpOVf5mvJkRE8YS8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2BOKLWIBIFJGRBJ7UFOPZD4HSQ.jpg",
            "publishedAt": "2022-03-10T05:00:00Z",
            "content": "LONDON, March 10 (Reuters) - For funds undeterred in their investment choices by the killing of Saudi journalist Jamal Khashoggi or China's treatment of the Uyghurs, Russia's invasion of Ukraine is p… [+6594 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "Michael L Hicks",
            "title": "The iPad Air with M1 silicon proves Samsung has a mid-range tablet problem",
            "description": "Samsung nailed the premium tablet form factor, but it needs to do better with the mid-range Tabs more people can afford",
            "url": "https://www.androidcentral.com/tablets/the-ipad-air-with-m1-silicon-proves-samsung-has-a-mid-range-tablet-problem",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/FyraFNzpR9PK3DYb4g4Leg-1200-80.jpg",
            "publishedAt": "2022-03-10T13:00:00Z",
            "content": "Anyone who read my Galaxy Tab S8+ review, or any Tab S8 reviews, will probably object to my headline. Samsung's new tablet series is excellent, coupling fast performance with a beautiful thin-bezel d… [+5430 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Presented by Max Rushden with Barry Glendenning, Lars Sivertsen and Philippe Auclair. Produced by Joel Grove and executive produced by Max Sanderson.",
            "title": "What next at Chelsea as Abramovich hit by sanctions? – Football Weekly Extra",
            "description": "Max Rushden is joined by Barry Glendenning, Lars Sivertsen and Philippe Auclair to discuss Chelsea’s future amid breaking newsRate, review, share on Apple Podcasts, Soundcloud, Audioboom, Mixcloud, Acast and Stitcher, and join the conversation on Facebook, Tw…",
            "url": "https://www.theguardian.com/football/audio/2022/mar/10/what-next-for-chelsea-roman-abramovich-football-weekly-extra",
            "urlToImage": "https://i.guim.co.uk/img/media/0460a33d98ef47a0da1255908a3914500b0d3ccf/0_191_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=0073538dee0c325af17e667d18531511",
            "publishedAt": "2022-03-10T15:23:54Z",
            "content": "Rate, review, share on Apple Podcasts, Soundcloud, Audioboom, Mixcloud, Acast and Stitcher, and join the conversation on Facebook, Twitter and email.\r\nOn the podcast today: we begin by discussing the… [+373 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Presented by John Harris with Rafael Behr and Zoe Williams, produced by Natalie Ktena, music and sound design by Axel Kacoutié, executive producers Maz Ebtehaj and Nicole Jackson",
            "title": "A continuing refugee crisis and the end of net zero?",
            "description": "Guardian political columnist John Harris is joined by Guardian columnists Rafael Behr and Zoe Williams to discuss the growing refugee crisis – more than 2 million people have now fled Ukraine – and the government’s ban on Russian oil imports. What could this …",
            "url": "https://www.theguardian.com/politics/audio/2022/mar/10/a-continuing-refugee-crisis-and-the-end-of-net-zero-politics-weekly-uk-podcast",
            "urlToImage": "https://i.guim.co.uk/img/media/e76d0bded0e121e9c6eda6a80a511a573c2cf65e/0_1_5741_3444/master/5741.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=d52f267a3a802ab15cbf36e354bd90c9",
            "publishedAt": "2022-03-10T05:00:04Z",
            "content": "Guardian political columnist John Harris is joined by Guardian columnists Rafael Behr and Zoe Williams to discuss the growing refugee crisis more than 2 million people have now fled Ukraine and the g… [+293 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Sami Fathi",
            "title": "11-Inch iPad Pro No Longer Expected to Gain Mini-LED Display in 2022",
            "description": "The updated 11-inch iPad Pro expected to launch sometime this year can no longer be expected to feature a mini-LED display like its larger 12.9-inch sibling, display analyst Ross Young said today on Twitter. \n\n\n\n\n\nEarlier rumors indicated that after keeping m…",
            "url": "https://www.macrumors.com/2022/03/10/11-inch-ipad-pro-no-mini-led/",
            "urlToImage": "https://images.macrumors.com/t/nqSPcZKB2bUM1zVxrD_p7QR0GLg=/1600x/article-new/2022/01/iPad-Pro-Big-Ol-Logo.jpg",
            "publishedAt": "2022-03-10T10:13:03Z",
            "content": "The updated 11-inch iPad Pro expected to launch sometime this year can no longer be expected to feature a mini-LED display like its larger 12.9-inch sibling, display analyst Ross Young said today on … [+1490 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Mitchel Broussard",
            "title": "Deals: Apple's 12.9-Inch iPad Pro Magic Keyboard on Sale for $293 ($56 Off)",
            "description": "Amazon today is offering the white version of Apple's 12.9-inch iPad Pro Magic Keyboard for $293.00, down from $349.00. The keyboard is in stock and sold directly from Amazon, and only the US English version of the accessory is receiving the discount.\n\n\n\nNote…",
            "url": "https://www.macrumors.com/2022/03/10/deals-12-9-inch-magic-keyboard/",
            "urlToImage": "https://images.macrumors.com/t/s1id0QlpOKfoiHwzvq0RBVsBYJQ=/2226x/article-new/2021/04/2021-Magic-Keyboard-Blue.jpg",
            "publishedAt": "2022-03-10T14:45:41Z",
            "content": "Amazon today is offering the white version of Apple's 12.9-inch iPad Pro Magic Keyboard for $293.00, down from $349.00. The keyboard is in stock and sold directly from Amazon, and only the US English… [+1064 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MarketBeat"
            },
            "author": "Sean Sechler",
            "title": "3 Iconic Tech Stocks to Buy and Hold",
            "description": "Many of the biggest technology companies could just be getting started in terms of their growth potential and innovation, which means that holding onto shares over the years could be...",
            "url": "https://www.marketbeat.com/originals/3-iconic-tech-stocks-to-buy-and-hold/?utm_source=entrepreneurcom&amp;amp;utm_medium=entrepreneurcom",
            "urlToImage": "https://assets.entrepreneur.com/providers/marketbeat/hero-image-marketbeat-421899.jpeg",
            "publishedAt": "2022-03-10T09:00:00Z",
            "content": "These 3 Tech Stocks Could Be Great Core Holdings\r\nBuy and hold investing can be one of the best ways to grow your wealth over time if you possess patience and are ok with the idea of holding through … [+5492 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Tim Hardwick",
            "title": "App Store and iTunes Purchases Reportedly 'Turned Off' in Russia",
            "description": "iPhones.ru is reporting that iTunes and App Store purchases can no longer be made by Apple device users located in Russia, leaving them unable to pay for apps, media, or Apple services. \n\n\n\n\n\nAccording to the Russia-based site, it is now impossible for users …",
            "url": "https://www.macrumors.com/2022/03/10/app-store-purchases-turned-off-russia/",
            "urlToImage": "https://images.macrumors.com/t/T_UM1WAGgAPG9k3AU2pCfBz9B6Y=/1794x/article-new/2021/04/app-store-blue-banner-russia.jpg",
            "publishedAt": "2022-03-10T12:39:49Z",
            "content": "iPhones.ru is reporting that iTunes and App Store purchases can no longer be made by Apple device users located in Russia, leaving them unable to pay for apps, media, or Apple services. \r\nAccording t… [+1248 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Joe Rossignol",
            "title": "First M2 Macs Expected to Launch Later This Year Using TSMC's 4nm Chip Process",
            "description": "Apple plans to launch a series of Macs with M2 chips based on TSMC's 4nm process later this year, according to Taiwanese publication DigiTimes. This advancement should allow for continued performance and power efficiency improvements.\n\n\n\n\n\n\"TSMC's 4nm process…",
            "url": "https://www.macrumors.com/2022/03/10/m2-macs-with-tsmc-4nm-process/",
            "urlToImage": "https://images.macrumors.com/t/RkIt98vbFYIJ48pLvsDvXqlf36o=/2316x/article-new/2022/02/13-inch-macbook-pro-m2-mock-feature-2.jpg",
            "publishedAt": "2022-03-10T15:30:05Z",
            "content": "Apple plans to launch a series of Macs with M2 chips based on TSMC's 4nm process later this year, according to Taiwanese publication DigiTimes. This advancement should allow for continued performance… [+1625 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Sami Fathi",
            "title": "Geekbench Scores of New iPhone SE Show On-Par Performance With iPhone 13",
            "description": "Geekbench scores for the new third-generation iPhone SE shows that Apple's most affordable iPhone features performance on par with the company's flagship iPhone 13, as they both feature the same A15 Bionic chip.\n\n\n\n\n\nGeekbench scores for an \"iPhone 14,6,\" the…",
            "url": "https://www.macrumors.com/2022/03/10/geekbench-scores-iphone-se/",
            "urlToImage": "https://images.macrumors.com/t/8eNWi8U_gBqJ-SII6huOi7uTumA=/1960x/article-new/2022/03/iPhone-SE-3-stacked.jpg",
            "publishedAt": "2022-03-10T11:27:33Z",
            "content": "Geekbench scores for the new third-generation iPhone SE shows that Apple's most affordable iPhone features performance on par with the company's flagship iPhone 13, as they both feature the same A15 … [+1138 chars]"
        }
    ]

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            disableNext : false,
            totalPages : 0
        }
    }

    async componentDidMount(){
        let url = "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7f475e502a36400486f58f220ce16f40";
        let data= await fetch(url);
        let parsedData = await data.json();

        this.setState({articles : parsedData.articles , loading : false , totalPages : Math.ceil(parsedData.totalResults/20),page:1})
    }

    handlePrev= async()=>{
        this.setState({loading : true});
        let url = `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7f475e502a36400486f58f220ce16f40&page=${this.state.page - 1}`;
        let data= await fetch(url);
        let parsedData = await data.json();   
        this.setState({articles : parsedData.articles , loading : false , page : this.state.page - 1})
    }

    handleNext= async()=>{

        if(this.state.page + 1 <= this.state.totalPages){
            this.setState({loading : true});
            let url = `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7f475e502a36400486f58f220ce16f40&page=${this.state.page + 1}`;
            let data= await fetch(url);
            let parsedData = await data.json();   
            let disableNext = this.state.page + 1 === this.state.totalPages ? true : false;
            this.setState({articles : parsedData.articles , loading : false , page : this.state.page + 1 ,disableNext: disableNext })
        }
        
    }

    render() {
        return (

            <>
                {
                    this.state.loading ?
                        <div className="text-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div> :
                        <>
                            <div>

                                <div className="container my-3">
                                    <div className="row">
                                        {this.state.articles.map((article) => {

                                            return <div className="col-md-4" key={article.publishedAt}>
                                                <NewsItem title={article.title} description={article.description}
                                                    imageUrl={article.urlToImage} url={article.url} />
                                            </div>
                                        })}

                                    </div>
                                    <div className="container" className="d-flex justify-content-between">
                                        <button type="button" disabled={this.state.page === 1} onClick={this.handlePrev} className="btn btn-primary">&larr; Prev</button>
                                        <button type="button" disabled={this.state.disableNext} className="btn btn-primary" onClick={this.handleNext}>Next &rarr;</button>
                                    </div>
                                </div>
                            </div>

                        </>
                }
            </>
        )
    }
}

export default News
