import { VFC } from 'react';
import {
  Grid, Card, CardContent, Button, CardActions,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { ArticleModel } from '../model/article-model';

// 受け取る props の型を定義
interface WikiCardProps {
  articles: ArticleModel[];
 }

const WikiCard = (
  props: WikiCardProps,
) => {
  const { articles } = props;

  return (
    <>
      {/* <Typography component="div">
        {articles.map((article, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Box fontSize={20} m={1} fontStyle="oblique" key={index}>
            {article.title}
          </Box>
        ))}
      </Typography> */}
      {articles.map((article, index) => (
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" key={article.pageid}>
                {article.title}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">記事を読む</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default WikiCard;
