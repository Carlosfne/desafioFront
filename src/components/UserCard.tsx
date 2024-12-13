import { Avatar, Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../types/User';

export const UserCard: React.FC<{ user: User }> = ({ user }) => {
  return (
    <Link to={`/user/${user.login}`} style={{ textDecoration: 'none' }}>
      <Card>
        <CardContent>
          <Box display="flex" alignItems="center">
            <Avatar src={user.avatar_url} alt={user.login} sx={{ width: 100, height: 100, marginRight: 2 }} />
            <Box>
              <Typography variant="h6">{user.login}</Typography>
              <Typography variant="body1">{user.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                Seguidores: {user.followers} | Seguindo: {user.following}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Localização: {user.location || 'N/A'}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};
