import styles from "../../css files/HomePage2.module.css"
import Carousel from 'react-grid-carousel'

export default function HomePage2() {

    return (
        <div>
            <div className={styles.firstDiv}>
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

            <div className={styles.secondDiv}>
                <h2>Poor lifestyle is a major health concern today</h2>

                <div className={styles.secondDivImages}>
                    <div>
                        <img src="https://cdn.shopify.com/s/files/1/0645/9650/8925/files/stats_copy.jpg?v=1657796038&width=600"></img>
                    </div>

                    <div>
                        <img src="https://cdn.shopify.com/s/files/1/0645/9650/8925/files/hair_stat_copy.jpg?v=1657796037&width=400"></img>
                        <img src="https://cdn.shopify.com/s/files/1/0645/9650/8925/files/skin_stats.jpg?v=1657796035&width=400"></img>
                    </div>

                    <div>
                        <img src="https://cdn.shopify.com/s/files/1/0645/9650/8925/files/mental_illness_stats_copy.jpg?v=1657796035&width=400"></img>
                    </div>
                </div>

            </div>

            <div className={styles.thirddDivImages}>
                <div>
                    <h2>Health is Beauty</h2>
                    <hr />
                    <p>we offer both application-based and consumables for holistic healing inside out.</p>
                </div>

                <div>
                    <div>
                        <h2>30+ Years of Expertise</h2>
                        <p>Amrutam brings along decades-long experience and expertise in the Ayurveda <br />Industry. Inspired by the Vedic Principles and being in sync with nature, our unique <br />and authentic formulations are infused with raw herbs that address the root cause of<br />the problem instead of just treating the symptoms. </p>
                        <p>We are cruelty-free, ethically-sourced and lovingly curated one-stop solution for<br />your health and beauty needs. Certified by the Ministry of AYUSH, PETA and<br />USFDA.</p>
                    </div>

                    <div>
                        <img src="https://cdn.shopify.com/s/files/1/0645/9650/8925/files/amrutam_features2.jpg?v=1657712116&width=600"></img>
                    </div>
                </div>
            </div>

            <div className={styles.fourthDiv}>
                <div>
                    <h2>Authentic Ayurvedic <br />Formulations</h2>
                </div>

                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0645/9650/8925/files/Certifications.png?v=1657793077&width=600"></img>

                </div>

            </div>



        </div>
    )
}