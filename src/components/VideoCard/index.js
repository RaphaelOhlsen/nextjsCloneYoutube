import React from 'react';
import { Box, Typography, Avatar, makeStyles } from '@material-ui/core';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const useStyles = makeStyles(() => ({
  caption: {
    fontWeight: 500,
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
  },
}));

export default function VideoCard({ item }) {
  const classes = useStyles();

  return (
    <Box>
      <img alt={item.title} src={item.thumb} style={{ width: '100%' }} />
      <Box display="flex" mt={1}>
        <Box mr={1}>
          <Avatar alt={item.authorName} src={item.authorAvatar}>
            SS
          </Avatar>
        </Box>
        <Box>
          <Typography
            className={classes.capion}
            gutterBottom
            variant="body1"
            color="textPrimary"
          >
            {item.title}
          </Typography>
          <Typography display="block" variant="body2" color="textSecondary">
            {item.authorName}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {`${item.views} • ${dayjs(item.updatedAt).fromNow()}`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}