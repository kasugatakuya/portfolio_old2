import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'

const useStyles = makeStyles({
  root: {
    maxWidth: 280,
    marginBottom: 30,
    marginLeft: 10,
    marginRight: 10
  },
  media: {
    height: 160,
  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link href={'/posts/' + props.file} >
        <a>
          <CardActionArea>
            <CardMedia className={classes.media} >
              <Image 
                src={'/images/card/' + props.images}
                width={280}
                height={160}
                alt={props.title}
              />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </a>
      </Link>
    </Card>
  );
}
