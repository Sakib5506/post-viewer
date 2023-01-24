import { Avatar, Paper, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useEffect, useState } from 'react';

const Comments = (props) => {
    const { email, body, id } = props.postComment;
    const totalImg = props.totalImg;
    const [loading, setLoading] = useState(true);


    const [img, setImg] = useState([]);
    useEffect(() => {
        const url = `https://randomuser.me/api/?results=${totalImg}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setImg(data.results);
                setLoading(false)
                console.log('i fire once');
            })

    }, [])

    const pic = img.map((item) => item.picture.medium)

    return (
        <div>
            <Paper style={{ margin: '50px' }}>
                {loading && <Typography>Loading.....</Typography>}
                <Stack direction="row" spacing={2}>

                    <Avatar src={pic[0]} sx={{ width: 70, height: 70 }} alt="" />
                    <div>
                        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                            {email}
                        </Typography>
                        <Typography>
                            {body}
                        </Typography>
                    </div>
                </Stack>
            </Paper>
        </div>
    );
};

export default Comments;