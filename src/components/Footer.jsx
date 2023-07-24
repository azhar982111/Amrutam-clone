import styles from "../css files/Footer.module.css"


export default function Footer() {

    return (
        <div className={styles.footer}>
            <div>
                <div>
                    <p>Get in touch</p>
                    <p>support@amrutam.co.in</p>
                    <p>+91 9713171999</p>
                    <div className={styles.socialLogos}>
                        <a href="https://imgbb.com/"><img src="https://i.ibb.co/yk0c75d/flogo.png" alt="flogo" border="0" /></a>
                        <a href="https://imgbb.com/"><img src="https://i.ibb.co/r0BKgrY/twitter.png" alt="twitter" border="0" /></a>
                        <a href="https://imgbb.com/"><img src="https://i.ibb.co/GvvQ2Cz/instagram.png" alt="instagram" border="0" /></a>
                        <a href="https://imgbb.com/"><img src="https://i.ibb.co/ZYgJsg8/linkedin.png" alt="linkedin" border="0" /></a>
                        <a href="https://imgbb.com/"><img src="https://i.ibb.co/d7P0pkH/pinterest.png" alt="pinterest" border="0" /></a>
                        <a href="https://imgbb.com/"><img src="https://i.ibb.co/SdWPPzD/youtube.png" alt="youtube" border="0" /></a>
                    </div>
                </div>

                <div>
                    <p>Newsletter</p>
                    <h2>Subscribe to our Newsletter and<br />join Amrutam Family today!</h2>
                    <input type="email" placeholder="Your email address" value="" class="t4s-text-center t4s-text-md-start t4s-newsletter__email" required="required"></input>
                    <button className={styles.subscribeBtn}>subscribe</button>
                </div>
            </div>

            <div>
                <p>Categories</p>
                <p>Shop All</p>
                <p>Hair Care</p>
                <p>Skin Care</p>
                <p>Health Care</p>

                <p>Download Amrutam Home App</p>

                <img src="https://cdn.shopify.com/s/files/1/0645/9650/8925/files/google-play-badge.png?v=1676873119&width=400" />
                <img src="https://cdn.shopify.com/s/files/1/0645/9650/8925/files/app-store-badge.png?v=1676873119&width=400" />
            </div>

            <div className={styles.thirdDiv}>
                <p>Information</p>
                <p>About Us</p>
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
                <p>Shipping and Returns Policy</p>
                <p>International Delivery</p>
                <p>For Businesses, Hotels and Resorts</p>
            </div>

            <div className={styles.fourthdDiv}>
                <p>Quick Links</p>
                <p>My Account</p>
                <p>Track Your Order</p>
                <p>Recycle Project</p>
                <p>FAQs</p>
            </div>
        </div>
    )
}