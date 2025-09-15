import Link from "next/link";
import headerStyles from "./header.module.css";
import logoIMG from "@/assets/logo.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <Link className={headerStyles.logo} href="/">
        <Image src={logoIMG} alt="Food Plate"  priority/>
        NextLevel Food
      </Link>

      <nav className={headerStyles.nav}>
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
  );
}
