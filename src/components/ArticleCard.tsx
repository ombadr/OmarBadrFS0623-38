import React from 'react';
import Article from './models/article';
import { Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }: { article: Article }) => {
  const date = new Date(article.published_at);
  return (
    <Card>
      <Card.Img variant='top' src={article.image_url} />
      <Card.Body>
        <Badge className='my-2'>{article.news_site}</Badge>
        <Badge className='my-2 bg-secondary ms-2'>
          {date.toLocaleDateString()}
        </Badge>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>{article.summary}</Card.Text>
        <Link to={`/${article.id}`} className='btn btn-primary'>
          Read More
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ArticleCard;
