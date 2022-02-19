import { useState } from 'react';
import {
  Grid, Card, CardContent, Button, CardActions,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { ArticleModel } from '../model/article-model';
import WikiDialog from './WikiDialog';

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
      {articles.map((article, index) => (
        <Grid item xs={6} sm={3} key={article.pageid}>
          <Card>
            <Box borderColor="secondary.main" p={2}>
              <CardContent>
                <Typography color="textSecondary">
                  {article.title}
                </Typography>
              </CardContent>
              <CardActions>
                <WikiDialog
                  article={article}
                />
              </CardActions>
            </Box>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default WikiCard;
