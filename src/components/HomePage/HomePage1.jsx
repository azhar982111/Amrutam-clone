import { useState } from "react"
import styles from "../../css files/HomePage1.module.css"

export default function HomePage1() {
    let [count, setCount] = useState(1)

    function IncCount() {
        setCount((prev) => prev + 1)
    }

    function DecCount() {
        if (count > 1) {
            setCount((prev) => prev - 1)
        }

    }

    return (
        <div>
            <div className={styles.firstDiv}>
                <div><p>Hair Care</p></div>
                <div><p>Skin Care</p></div>
                <div><p>Health Care</p></div>
            </div>

            <div className={styles.secondDiv}>
                <div>
                    <div className={styles.secondDivImages}>
                        <img src="https://cdn.shopify.com/s/files/1/0645/9650/8925/products/Kuntal-Care-Hair-Spa-Re-shot-1-scaled.jpg?v=1658568746&width=600"></img>
                    </div>
                    <div className={styles.detailsPrice}>
                        <p>Amrutam Kuntal Care Hair Oil | For Hair  Revitalizing and Strengthening Shampoo</p>
                        <p>RS. 549.00/</p>
                    </div>
                </div>

                <div>
                    <div className={styles.secondDivImages}>
                        <img src="https://cdn.shopify.com/s/files/1/0645/9650/8925/products/DSC03631-3-1psd1-1_1eab3686-bd5e-45f4-9aae-bcf1b9517c5e.jpg?v=1655351629&width=600"></img>
                    </div>
                    <div className={styles.detailsPrice}>
                        <p>Amrutam Kuntal Care Herbal Shampoo |Healthy, Natural and Dynamic Hair</p>
                        <p>RS. 599.00/</p>
                    </div>
                </div>

                <div>
                    <div className={styles.secondDivImages}>
                        <img src="https://cdn.shopify.com/s/files/1/0645/9650/8925/products/KeyIngredients_a8b037a8-e31e-4659-94d5-efaeec63c9eb.jpg?v=1661848730&width=600"></img>
                    </div>
                    <div className={styles.detailsPrice}>
                        <p>Amrutam Kuntal Bhringraj Hair Therapy | 2-in-1 Conditioner and Shampoo</p>
                        <p>From RS. 749.00/</p>
                    </div>
                </div>

                <div>
                    <div className={styles.secondDivImages}>
                        <img src="https://cdn.shopify.com/s/files/1/0645/9650/8925/products/Kuntal-Care-Hair-Oil-1-min-scaled_144326e8-b8fe-430b-b79c-f7771f0fc2c6.jpg?v=1655351552&width=600"></img>
                    </div>
                    <div className={styles.detailsPrice}>
                        <p>Amrutam Kuntal Care Hair Oil | For Hair Revitalizing and Strengthening</p>
                        <p>RS. 549.00/</p>
                    </div>
                </div>
            </div>

            <div className={styles.thirdDiv}>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0645/9650/8925/products/Aloe-Vera-Gel--scaled_55b82e41-212e-41df-8132-e1511e2856d2.jpg?v=1655350092&width=600"></img>
                </div>

                <div>
                    <p>Amrutam Aloe Vera Gel</p>
                    <p>Rs. 449.00</p>
                    <div className={styles.thirdDivAloveraButtons}>
                        <div>
                            <p onClick={DecCount}>-</p>
                            <p>{count}</p>
                            <p onClick={IncCount}>+</p>
                        </div>

                        <div>ADD TO CART</div>

                        <div><svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"> <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" /> </svg></div>
                    </div>
                </div>

            </div>

            <div className={styles.fourthdDiv}>
                <h2>it is time to address the root cause,</h2>
                <hr className={styles.fourthdDivHrTag} />
                <p>you have been too busy treating the symptoms, and this is where we come in,</p>
            </div>
        </div>
    )
}