import { VFC, useEffect, useState } from 'react';
import {
  Grid, TextField, Button, Container,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import { WatchFileKind } from 'typescript';

import { ArticleModel } from '../model/article-model';

import WikiCard from './WikiCard';

// contentmodel: "wikitext"
// lastrevid: 68998672
// length: 2567
// ns: 0
// pageid: 3748819
// pagelanguage: "ja"
// pagelanguagedir: "ltr"
// pagelanguagehtmlcode: "ja"
// title: "トルガ・ゼンギン"
// touched: "2021-11-30T08:31:43Z"

interface responce {
  data: {
    query: {
      pages: {
        [key: string]: {
          contentmodel: string;
          lastrevid: number;
          length: number;
          ns: number;
          pageid: number;
          pagelanguage: string;
          pagelanguagehtmlcode: string;
          title: string;
          touched: string;
        }
      }
    }
  }
}

interface wiki<T> {
  T: {
    title: string
  }
}

const Form: VFC = () => {
  const [articles, setArticles] = useState<ArticleModel[]>([]);

  // query:
  // pages:
  // 966372:
  // contentmodel: "wikitext"
  // lastrevid: 76591130
  // length: 3308
  // ns: 0
  // pageid: 966372
  // pagelanguage: "ja"
  // pagelanguagedir: "ltr"
  // pagelanguagehtmlcode: "ja"
  // title: "サン・ジョルジョ・イン・ボスコ"
  // touched: "2022-01-20T09:41:15Z"

  // ランダムに wikipedea の情報を取得
  // useEffect(() => {
  //   axios.get('https://ja.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&grnlimit=2&prop=info&format=json&origin=*')
  //     .then((res) => {
  //       // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  //       const { data }: responce = res;
  //       // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  //       console.log(data.query.pages);
  //       // eslint-disable-next-line no-restricted-syntax
  //       for (const id in data.query.pages) {
  //         if (true) {
  //           // eslint-disable-next-line no-shadow
  //           const wiki = data.query.pages;
  //           console.log(wiki[id]);
  //           const responceData = wiki[id];
  //           setArticles([...articles, responceData]);
  //           console.log(articles);
  //         }
  //       }
  //     });
  // }, []);
  const submitButton = () => {
    axios.get('https://ja.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&grnlimit=2&prop=info&format=json&origin=*')
      .then((res) => {
        // TODO: map でしゅとくする
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const { data }: responce = res;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        console.log(data.query.pages);
        // eslint-disable-next-line no-restricted-syntax
        // data.query.pages.map((wikiinfo, index) => console.log(wikiinfo));
        // eslint-disable-next-line no-restricted-syntax
        for (const id in data.query.pages) {
          if (true) {
            // eslint-disable-next-line no-shadow
            const responceData = data.query.pages[id];
            // ランダムに取得した記事をセット
            setArticles((a) => [...a, responceData]);
          }
        }
      });
  };

  return (
    <Grid
      container
      spacing={3}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <form noValidate autoComplete="off">
          <TextField id="standard-basic" label="name" fullWidth />
        </form>
      </Grid>
      <Grid
        item
        xs={12}
      >
        <Box textAlign="center">
          <Button
            onClick={() => { submitButton(); }}
            variant="contained"
            color="primary"
            size="large"
          >
            Push!
          </Button>
        </Box>
        {/* <Typography component="div">
          {articles.map((article, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Box fontSize={20} m={1} fontStyle="oblique" key={index}>
              {article.title}
            </Box>
          ))}
        </Typography> */}
      </Grid>
      <WikiCard
        articles={articles}
      />
    </Grid>
  );
};

export default Form;
