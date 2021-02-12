import React from "react";
import Link from 'next/link'
import styles from "../styles/Article.module.css";

const ArticleItem: React.FC<{
  article: { id: string; title: string; body: string };
}> = ({ article: { id, title, body } }) => {
  return (
    <Link href="/article/[id]" as={`/article/${id}`}>
      <a className={styles.card}>
        <h3>{title} &rarr;</h3>
        <p>{body}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
