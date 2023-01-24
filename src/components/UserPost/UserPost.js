import React, { useContext } from 'react';
import { PostContext } from '../../App';
import { Box, Card, CardContent, Typography, Button, Paper, CardActions, Grid } from '@mui/material';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';

const UserPost = (props) => {
    // const [post, setPost] = useContext(PostContext);
    const { title, id, body } = props.singlePost;
    return (
        <Grid item xs='auto' style={{ maxWidth: '280px' }}>
            <Box >
                <Card>
                    <CardContent>
                        <Typography sx={{ fontWeight: 'bold' }} variant='h6' component='div' gutterBottom>
                            {title}
                        </Typography>
                        <Typography style={{ padding: '0px 10px 0px 10px' }}>
                            {body}
                        </Typography>
                        <CardActions>
                            <Link to={`/postDetails/${id}`} style={{ textDecoration: 'none' }}>
                                <Button size='small'>Learn More</Button>
                            </Link>
                        </CardActions>
                    </CardContent>
                </Card>
            </Box>
        </Grid>



    );
};

export default UserPost;