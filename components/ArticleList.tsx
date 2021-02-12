import React from "react";
import ArticleItem from "./ArticleItem";
import styles from "../styles/Article.module.css";

const ArticleList: React.FC<{
  articles: { id: string; title: string; body: string }[];
}> = ({ articles }) => {
  return (
    <div className={styles.grid}>
      {articles.map((article) => {
        return <ArticleItem key={article.id} article={article} />;
      })}
    </div>
  );
};

export default ArticleList;
