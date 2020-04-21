import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Card, 
    CardMedia,
    CardContent,
    CardActionArea,
    CardActions,
    Button,
    Typography
} from '@material-ui/core';
// import bookImage from '../../images/startup_nation.jpg';
import bookImage from '../../images/book.jpg';

const useStyles = makeStyles({
    root: {
        maxWidth: 345
    },
    cardContent: {
        background: '#424242'
    },
})

const MediaCard = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Startup Nation"
                    height="140"
                    image={bookImage}
                    title="Startup Nation"
                >
                </CardMedia>
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Startup Nation
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        With the savvy of foreign policy insiders, Senor and Singer examine the lessons of the country's adversity-driven culture, which flattens hierarchy and elevates informality - all backed up by government policies focused on innovation
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardContent}>
                <Button size="small" color="secondary">
                    Share
                </Button>
                <Button size="small" color="secondary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    )
}

export default MediaCard;