import { Paper, Typography } from '@mui/material';
import { Container, padding } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PostContext } from '../../App';
import Comments from '../Comments/Comments';

const PostDetails = () => {
    const [comment, setComment] = useState([]);
    const { postId } = useParams();
    const postIdNumber = Number(postId);
    const [post, setPost] = useContext(PostContext);
    const currentPost = post.filter(item => item.id === postIdNumber);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        fetch(url)
            .then(res => res.json())
            .then(data => setComment(data))
    }, [])

    const totalImg = comment.length;

    return (
        <div>
            <Container>
                <Paper style={{ margin: '30px 0px 30px 0px', padding: '40px' }}>
                    <Typography sx={{ fontWeight: 'bold' }} variant='h4'>{currentPost?.[0]?.title}</Typography>

                    <Typography style={{ margin: '20px' }}>
                        {currentPost?.[0]?.body}
                    </Typography>

                    <hr style={{ margin: '30px 0px 50px 0px' }} />

                    <Typography variant='h5'>
                        {totalImg} Comments
                    </Typography>


                    {
                        comment.map((item) => (
                            <Comments
                                totalImg={totalImg}
                                postComment={item}
                                key={item.id}></Comments>
                        ))
                    }
                </Paper>

            </Container>
        </div>
    );
};

export default PostDetails;