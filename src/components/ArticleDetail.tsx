import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import Article from './models/article';
const ArticleDetail = () => {
  const { id } = useParams();
  console.log(id);

  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getArticle = async () => {
    try {
      const response = await fetch(
        `https://api.spaceflightnewsapi.net/v4/articles/${id}`
      );
      const data = await response.json();
      setArticle(data);
      setLoading(false);
      console.log(data);
    } catch (err: any) {
      console.log('Error: ', err);
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getArticle();
  }, []);

  const date = new Date(article?.published_at || '');
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container>
      <Row>
        <Col md={12} className='p-4'>
          <Card>
            <Card.Img variant='top' src={article?.image_url} />
            <Card.Body>
              <Badge className='my-2'>{article?.news_site}</Badge>
              <Badge className='my-2 bg-secondary ms-2'>
                {date.toLocaleDateString()}
              </Badge>
              <Card.Title>{article?.title}</Card.Title>
              <Card.Text>{article?.summary}</Card.Text>
              <Link to={article?.url || ''} className='btn btn-primary'>
                Visit Website
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticleDetail;
