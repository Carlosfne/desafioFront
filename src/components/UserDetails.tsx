import { Box, Card, CardContent, CircularProgress, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../services/githubService';

const UserDetails: React.FC = () => {
  const { username } = useParams();
  const [userDetails, setUserDetails] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(username)
  }, []);
  useEffect(() => {
    if (username) {
      setLoading(true);
      getUser(username)
        .then((data) => setUserDetails(data))
        .catch((error) => {
          console.error('Erro ao buscar detalhes do usuário:', error)
        })
        .finally(() => setLoading(false));
    }
  }, [username]);

  return (
    <Box my={4}>
      {loading ? (
        <CircularProgress />
      ) : (
        userDetails && (
          <Card>
            <CardContent>
              <Typography variant="h5">{userDetails.name}</Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {userDetails.bio}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Location: {userDetails.location}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Followers: {userDetails.followers} | Following: {userDetails.following}
              </Typography>
            </CardContent>
          </Card>
        )
      )}
    </Box>
  );
};

export default UserDetails;
