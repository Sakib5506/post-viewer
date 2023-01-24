import { Grid } from '@mui/material';
import React, { useContext } from 'react';
import { PostContext } from '../../App';
import UserPost from '../UserPost/UserPost';
import Header from '../Header/Header';
import { Container } from '@mui/system';

const TimeLine = () => {
    const [post, setPost] = useContext(PostContext);
    return (
        <>

            <Container style={{ marginTop: '30px', marginBottom: '30px' }}>
                <Grid container direction="row"
                    justifyContent="space-between"
                    alignItems="center" spacing={2}>
                    {
                        post.slice(0, 20).map((item) => (
                            <UserPost singlePost={item} key={item.id}></UserPost>
                        ))
                    }
                </Grid>
            </Container>
        </>

    );
};

export default TimeLine;