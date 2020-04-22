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
import styles from './MediaCard.module.css';

const MediaCard = () => {
    return (
        <Card className={styles.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Startup Nation"
                    height="140"
                    image={bookImage}
                    title="Startup Nation"
                >
                </CardMedia>
                <CardContent className={styles.cardBody}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Startup Nation
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        With the savvy of foreign policy insiders, Senor and Singer examine the lessons of the country's adversity-driven culture, which flattens hierarchy and elevates informality - all backed up by government policies focused on innovation
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={styles.cardBody}>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    )
}

export default MediaCard;