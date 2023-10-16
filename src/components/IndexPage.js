import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    useParams,
    useNavigate,
} from 'react-router-dom';

import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';

import { CardActions, CardMedia, Button } from '@mui/material';

function PostCard({ post, onDeletePost }) {
    return (
        <Card
            sx={{
                maxWidth: 300,
                ml: 6,
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 1)',
            }}>
            <CardMedia
                sx={{ height: 240 }}
                image='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1729749d-144e-4191-b39e-416758fa0e86/dfl7vfc-b3b78b41-0e04-4af6-bf8a-280a8d896cf5.png/v1/fill/w_1280,h_800/one_piece_strong_world__roronoa_zoro_wallpaper_by_shinreidulv_dfl7vfc-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvMTcyOTc0OWQtMTQ0ZS00MTkxLWIzOWUtNDE2NzU4ZmEwZTg2XC9kZmw3dmZjLWIzYjc4YjQxLTBlMDQtNGFmNi1iZjhhLTI4MGE4ZDg5NmNmNS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.e268QptKOgbnrTMlJsCmY75ylT4CLDjBYxwiSIQl63A'
                title={post.title}
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {post.title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {post.content}
                </Typography>
            </CardContent>
            <CardActions
                sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button
                    size='small'
                    component={Link}
                    to={`/posts/${post.id}/edit`}>
                    Edit
                </Button>
                <Button size='small' component={Link} to={`/posts/${post.id}`}>
                    Comment
                </Button>
                <Tooltip title='Delete' arrow>
                    <IconButton>
                        <DeleteIcon onClick={() => onDeletePost(post.id)} />
                    </IconButton>
                </Tooltip>
            </CardActions>
        </Card>
    );
}

export default function HomePage({ posts, onDeletePost }) {
    return (
        <Grid container spacing={2}>
            {posts.map((post) => (
                <Grid item xs={12} sm={6} md={4} key={post.id}>
                    <PostCard post={post} onDeletePost={onDeletePost} />
                </Grid>
            ))}
        </Grid>
    );
}
