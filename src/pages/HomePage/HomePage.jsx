import { Link } from "react-router-dom"; 

import Header from "../../components/Header/Header";
import s from "./HomePage.module.css";

export default function HomePage() {
    return (
        <div>
            <Header />
            <title>Home</title>
            <div className={s.bgWrapper}>
            <h1 className={s.heading}>Find your perfect rental car</h1>
            <p className={s.subheading}>Reliable and budget-friendly rentals for any journey</p>
            <Link to="/catalog">
                <button className={s.viewBtn}>View Catalog</button>
            </Link>
            </div>
        </div>
    );
}