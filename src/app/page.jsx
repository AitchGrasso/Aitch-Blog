import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "../components/featured/Featured";
import CategoryList from "../components/categoryList/CategoryList";
import CardList from "@/components/tempList/TempList";
import Menu from "../components/discoverList/DiscoverList";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  );
}