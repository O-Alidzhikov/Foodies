import Link from "next/link";
import logoIMG from "@/assets/logo.png"

export default function Header(){

    return( 
        <header>
            <Link href="/"> NextLevel Food
            <img src={logoIMG.src} alt="Food Plate"/> 
             </Link>

             <nav>
                <ul>
                    <li>
                        <Link href="/meals"> Browse Meals</Link>
                    </li>

                    <li>
                        <Link href="/community"> Browse Community</Link>
                    </li>
                </ul>
             </nav>
        </header>
        
    )
}