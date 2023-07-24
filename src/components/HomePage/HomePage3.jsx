import styles from "../../css files/HomePage3.module.css"
import Carousel from 'react-grid-carousel'


export default function HomePage3() {

    return (
        <div>
            <div className={styles.firstDiv}>
                <h2>People Trust Us</h2>
                <p>because we go one step ahead</p>
                <div className={styles.firstDivImageFlex1}>
                    <div>
                        <img src="https://cdn.shopify.com/s/files/1/0645/9650/8925/files/Lifestyle_Kit_2.4.jpg?v=1658141319&width=600"></img>
                        <div className={styles.flexBoxDisappearingDiv}>
                            <span class="t4s-text">🧠 Quizzes</span>
                        </div>
                    </div>

                    <div>
                        <img src="https://cdn.shopify.com/s/files/1/0645/9650/8925/files/Skinkey_Malt_1.jpg?v=1658128767&width=400"></img>
                        <div className={styles.flexBoxDisappearingDiv}>
                            <span class="t4s-text">📞 Doctors</span>
                        </div>
                    </div>

                    <div>
                        <img src="https://cdn.shopify.com/s/files/1/0645/9650/8925/files/Lifestyle_Kit_1.3.jpg?v=1658141838&width=600"></img>
                        <div className={styles.flexBoxDisappearingDiv}>
                            <span class="t4s-text">📖 Ebooks</span>
                        </div>
                    </div>

                    <div>
                        <img src="https://cdn.shopify.com/s/files/1/0645/9650/8925/files/Dentkey_Manjan_2.jpg?v=1658129215&width=600"></img>
                        <div className={styles.flexBoxDisappearingDiv}>
                            <span class="t4s-text">📝 Articles</span>
                        </div>
                    </div>


                </div>

                <div className={styles.secondDiv}>
                    <div>
                        <h2>Achievements & More</h2>
                    </div>
                    <div className={styles.secondDivFlexbox}>
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/0645/9650/8925/files/1663993437786.jpg?v=1664784731&width=400"></img>
                            <h2>Top 500 D2C Challenger Brands of <br /> India by YourStory Media</h2>
                        </div>
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/0645/9650/8925/files/WhatsApp_Image_2022-10-03_at_1.23.19_PM.jpg?v=1664784954&width=600"></img>
                            <h2>Top 100 D2C Brand 2022 by Indian<br /> Retailer</h2>
                        </div>
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/0645/9650/8925/files/1653842881366.jpg?v=1664785208&width=400"></img>
                            <h2>Forbes 30 Under 30</h2>
                        </div>
                    </div>
                </div>

                <div className={styles.thirdDiv}>
                    <h2>As Featured In</h2>

                    <div className={styles.thirdDivCarousels1}>
                        <Carousel cols={6} rows={1}  autoplay={2000} loop={true} hideArrow={true} scrollSnap={false}>
                           <Carousel.Item>
                                <img src="https://cdn.shopify.com/s/files/1/0645/9650/8925/files/yourstory_logo.png?v=1657782716" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="https://cdn.shopify.com/s/files/1/0645/9650/8925/files/logo_living-Etc.jpg?v=1657782716" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="https://cdn.shopify.com/s/files/1/0645/9650/8925/files/vogue_sqr-02.png?v=1657783951" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="https://cdn.shopify.com/s/files/1/0645/9650/8925/files/forbes-30-under-30-asia-honoree-badge-2022_Proxy.png?v=1657783503" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="https://cdn.shopify.com/s/files/1/0645/9650/8925/files/huffpost_logo.png?v=1657782716" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="https://cdn.shopify.com/s/files/1/0645/9650/8925/files/logo_cnt.png?v=1657782716" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="https://cdn.shopify.com/s/files/1/0645/9650/8925/files/Lifestyle-Asia.png?v=1657782716" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="https://cdn.shopify.com/s/files/1/0645/9650/8925/files/huffpost_logo.png?v=1657782716" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="https://cdn.shopify.com/s/files/1/0645/9650/8925/files/voice_of_fashion_logo.png?v=1657784231" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="https://cdn.shopify.com/s/files/1/0645/9650/8925/files/logo_cnt.png?v=1657782716" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="https://cdn.shopify.com/s/files/1/0645/9650/8925/files/Lifestyle-Asia.png?v=1657782716" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="https://cdn.shopify.com/s/files/1/0645/9650/8925/files/huffpost_logo.png?v=1657782716" />
                            </Carousel.Item>
                        </Carousel>
                    </div>

                    <div className={styles.thirdDivCarousels2}>
                    <Carousel cols={5} rows={1} gap={10} loop={false}>
                    <Carousel.Item>
                        <iframe width="285" height="500" src="https://cdn4.fireworktv.com/medias/2022/7/14/1657791918-wjobaflc/watermarked/540/10000000_3169424163270133_4593080676021649237_n.mp4" frameborder="0" allow="autoplay; picture-in-picture;" allowfullscreen></iframe>
                    </Carousel.Item>
                    <Carousel.Item>
                        <iframe width="285" height="500" src="https://cdn4.fireworktv.com/medias/2022/7/14/1657792357-tslbpnjq/watermarked/540/10000000_728499468114984_8139120134619675875_n.mp4" frameborder="0" allow="autoplay; picture-in-picture;" allowfullscreen></iframe>
                    </Carousel.Item>
                    <Carousel.Item>
                        <iframe width="285" height="500" src="https://cdn4.fireworktv.com/medias/2022/7/14/1657792120-acznwigx/watermarked/540/10000000_1220842515067374_9156743976455283835_n.mp4" frameborder="0" allow="autoplay; picture-in-picture;" allowfullscreen></iframe>
                    </Carousel.Item>
                    <Carousel.Item>
                        <iframe width="285" height="500" src="https://cdn4.fireworktv.com/medias/2022/7/14/1657791396-pirfnaot/watermarked/540/10000000_468799037753186_3138776627433085089_n.mp4" frameborder="0" allow="autoplay; picture-in-picture;" allowfullscreen></iframe>
                    </Carousel.Item>
                    <Carousel.Item>
                        <iframe width="285" height="500" src="https://cdn4.fireworktv.com/medias/2022/7/14/1657792613-fyrivnmq/watermarked/540/10000000_555824985962160_1494333877945714038_n.mp4" frameborder="0" allow="autoplay; picture-in-picture;" allowfullscreen></iframe>
                    </Carousel.Item>
                    <Carousel.Item>
                        <iframe width="285" height="500" src="https://cdn4.fireworktv.com/medias/2022/7/14/1657792357-tslbpnjq/watermarked/540/10000000_728499468114984_8139120134619675875_n.mp4" frameborder="0" allow="autoplay; picture-in-picture;" allowfullscreen></iframe>
                    </Carousel.Item>
                    <Carousel.Item>
                        <iframe width="285" height="500" src="https://cdn4.fireworktv.com/medias/2022/7/14/1657791918-wjobaflc/watermarked/540/10000000_3169424163270133_4593080676021649237_n.mp4" frameborder="0" allow="autoplay; picture-in-picture;" allowfullscreen></iframe>
                    </Carousel.Item>
                    <Carousel.Item>
                        <iframe width="285" height="500" src="https://cdn4.fireworktv.com/medias/2022/7/14/1657792357-tslbpnjq/watermarked/540/10000000_728499468114984_8139120134619675875_n.mp4" frameborder="0" allow="autoplay; picture-in-picture;" allowfullscreen></iframe>
                    </Carousel.Item>
                    <Carousel.Item>
                        <iframe width="285" height="500" src="https://cdn4.fireworktv.com/medias/2022/7/14/1657792120-acznwigx/watermarked/540/10000000_1220842515067374_9156743976455283835_n.mp4" frameborder="0" allow="autoplay; picture-in-picture;" allowfullscreen></iframe>
                    </Carousel.Item>
                    <Carousel.Item>
                        <iframe width="285" height="500" src="https://cdn4.fireworktv.com/medias/2022/7/14/1657791396-pirfnaot/watermarked/540/10000000_468799037753186_3138776627433085089_n.mp4" frameborder="0" allow="autoplay; picture-in-picture;" allowfullscreen></iframe>
                    </Carousel.Item>
                </Carousel>
                    </div>
                </div>


                <div className={styles.fourthDiv}>
                    <h2>Betting Big On Community</h2>
                    <hr />
                    <p>Gwalior, where Amrutam originated, a city at the heart of India, has a rich history of music. We featured 7 musicians from Gwalior Gharana to empower and uplift the <br />beauty of our cultural and architectural heritage.</p>

                    <div className={styles.fourthDivIframe}>
                        <iframe src="https://www.youtube.com/embed/yHqsa1HjRCk" title="Amrutam Raga Project Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                        <div>
                            <h2>Listen to our podcast - Rediscovering Self with Amrutam, where we <br />understand our body and mind through a holistic lens.</h2>
                            <strong><span className={styles.fourthDivIframeSpan}>Play Now</span> ▶️</strong>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}