import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from 'react-player';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
	height: '100vh',
    maxheight: '100vh',
    position: 'relative',
	overflow: 'hidden',
    '& video': {
      objectFit: 'cover',
    },
  },
  overlay: {
    position: 'absolute',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	padding: '10%',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    paddingBottom: theme.spacing(4),
	color: 'whitesmoke',
	fontStyle: 'none',
	fontSize: "12vw",
	fontFamily: "'thunderhouse-pro', sans-serif",
	':hover': {
		fontStyle: 'underline'
	}
  }
}));

const Index = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <ReactPlayer
        url="https://raulduke.com/Bong rip.mp4"
        playing
        loop
        muted
        width="100%"
        height="100%"
      />
      <div className={classes.overlay}>
			<Typography variant="h3" component="h1" className={classes.title}>
				<a href="https://www.youtube.com/channel/UCtn5rjH9-l1LeHULyc8udwQ">RICK NOISY</a>
				
			</Typography>
      </div>
    </section>
  );
};

export default Index;
