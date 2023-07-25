import { useEffect, useState } from "react"
import styles from "../../css files/ProductsPage4.module.css"

export default function ProductsPage4() {

    let styleobj = {
        paddingTop: "40px",
        display: "grid",
        gridTemplateColumns: "repeat(6,1fr)",
        gridGap: "22px",
        paddingLeft: "6%",
        paddingRight: "6%"
    }

    let [gridStyle, setgridStyle] = useState(styleobj)
    let [data, setData] = useState([])
    let [view, setView] = useState(0)

    let getData = async () => {
        let res = await fetch(`https://amrutam-json-server.vercel.app/data`)
        let fetchedData = await res.json()
        setData(fetchedData)
    }

    useEffect(() => {
        getData()
    }, [])

    function changeView(value) {
        if (value == 1) {
            setView(value)
        }
        else {
            setView(value)
            setgridStyle((prevStyle) => ({
                ...prevStyle,
                gridTemplateColumns: `repeat(${value},1fr)`
            }));
        }
    }

    // console.log(styles.gridBox4)

    return (
        <div>
            <div className={styles.pageChanger}>
                <img onClick={() => changeView(1)} src="https://i.ibb.co/ZNxNS4f/image.png" alt="image" border="0" />
                <img onClick={() => changeView(2)} src="https://i.ibb.co/RQQGHcG/image.png" alt="image" border="0" />
                <img onClick={() => changeView(3)} src="https://i.ibb.co/f89K473/image.png" alt="image" border="0" />
                <img onClick={() => changeView(4)} src="https://i.ibb.co/x1KSQ0n/image.png" alt="image" border="0" />
                <img onClick={() => changeView(5)} src="https://i.ibb.co/cJYTx3v/image.png" alt="image" border="0" />
                <img onClick={() => changeView(6)} src="https://i.ibb.co/q1y6rPy/image.png" alt="image" border="0" />
            </div>
            {view == 1?
                <div>
                    {data.map((ele) => (
                        <div className={styles.view1}>
                            <div><img src={ele.image} /></div>
                            <div>
                                <div>
                                    <p>{ele.title}</p>
                                    <div>
                                        <svg style={{ color: "rgb(58, 100, 59)" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" fill="#3a643b"></path> </svg>
                                        <svg style={{ color: "rgb(58, 100, 59)" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" fill="#3a643b"></path> </svg>
                                        <svg style={{ color: "rgb(58, 100, 59)" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" fill="#3a643b"></path> </svg>
                                        <svg style={{ color: "rgb(58, 100, 59)" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" fill="#3a643b"></path> </svg>
                                        <svg style={{ color: "rgb(58, 100, 59)" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" fill="#3a643b"></path> </svg>
                                        <span className={styles.reviews}>{`${ele.rating} reviews`}</span>
                                    </div>
                                    <p>{`Rs. ${ele.price}`}</p>
                                </div>
                                <div>
                                    <p>{ele.desc}</p>
                                </div>
                            </div>
                            <div><button>ADD TO CART</button></div>
                        </div>
                    ))}
                </div>
                :
                <div style={gridStyle}>
                    {data.map((ele) => (
                        <div className={styles.gridItems}>
                            <a><img src={ele.image} /></a>
                            <p>{ele.title}</p>
                            <div>
                                <svg style={{ color: "rgb(58, 100, 59)" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" fill="#3a643b"></path> </svg>
                                <svg style={{ color: "rgb(58, 100, 59)" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" fill="#3a643b"></path> </svg>
                                <svg style={{ color: "rgb(58, 100, 59)" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" fill="#3a643b"></path> </svg>
                                <svg style={{ color: "rgb(58, 100, 59)" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" fill="#3a643b"></path> </svg>
                                <svg style={{ color: "rgb(58, 100, 59)" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" fill="#3a643b"></path> </svg>
                                <span>{`${ele.rating} reviews`}</span>

                            </div>
                            <p>{`Rs. ${ele.price}`}</p>
                            <button>ADD TO CART</button>
                        </div>

                    ))}
                </div>
            }
        </div>
    )
}