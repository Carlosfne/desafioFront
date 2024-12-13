import { Box, Card, CardContent, CircularProgress, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRepoDetails } from '../services/githubService';
import { Repos } from '../types/Repos';

const RepoDetails: React.FC = () => {
  const { username, repo } = useParams();
  const [repoDetails, setRepoDetails] = useState<Repos | null>(null);
  const [loading, setLoading] = useState(false)
  const fullname = `${username}/${repo}`

  useEffect(() => {
    if (fullname) {
      setLoading(true);
      getRepoDetails(fullname)
        .then((data) => {
          setRepoDetails(data)
        })
        .catch((error) => console.error('Erro ao buscar detalhes do repositório:', error))
        .finally(() => setLoading(false));
    }
  }, [fullname]);

  return (
    <Box my={4}>
      {loading ? (
        <CircularProgress />
      ) : (
        repoDetails ? (
          <Card>
            <CardContent>
              <Typography variant="h5">{repoDetails.name}</Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {repoDetails.description}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Language: {repoDetails.language}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Stars: {repoDetails.stargazers_count}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Forks: {repoDetails.fork}
              </Typography>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent>
              <Typography variant="h5">Sem resultado encontrado</Typography>
            </CardContent>
          </Card>
        )
      )}
    </Box>
  );
};

export default RepoDetails;
