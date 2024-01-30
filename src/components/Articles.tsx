import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ArticleCard from './ArticleCard';
import Article from './models/article';
const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const getArticles = async () => {
    try {
      const response = await fetch(
        'https://api.spaceflightnewsapi.net/v4/articles?limit=4'
      );
      const data = await response.json();
      setArticles(data.results);
      setLoading(false);
      console.log(data.results);
    } catch (err: any) {
      console.log('Error: ', err);
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (articles.length === 0) {
    return <div>No articles found</div>;
  }
  return (
    <Container>
      <Row>
        {articles.map((article: Article) => {
          return (
            <Col md={12} className='p-4'>
              <ArticleCard article={article} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Articles;
