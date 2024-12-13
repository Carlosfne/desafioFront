import React, { useEffect, useState } from 'react';
import { UserCard } from '../components/UserCard';
import { RepoList } from '../components/RepoList';
import { Searchbar } from '../components/Searchbar';
import { getUser, getRepos } from '../services/githubService';
import { Box, CircularProgress, Container, Grid, Grid2, Typography } from '@mui/material';
import { User } from '../types/User';
import { Repos } from '../types/Repos';

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [user, setUser] = useState<User | null>(null);
  const [repos, setRepos] = useState<Repos[]>([]);
  const [fullname, setFullName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (searchQuery) {
      setLoading(true);
      setError(null);
      getUser(searchQuery)
        .then((data) => {
          setUser(data);
          return getRepos(searchQuery);
        })
        .then((repoData) => {
          setRepos(repoData);
          setFullName(repoData.full_name)
        })
        .catch((err) => {
          setError(err?.response?.data?.message || err.message || 'Erro inesperado ao buscar dados.');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [searchQuery]);

  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h6" align="center" gutterBottom>
          Procure aqui pelo usuário Github
        </Typography>
        <Searchbar setSearchQuery={setSearchQuery} />
        {loading && <CircularProgress />}
        {error && <Typography color="error">{error}</Typography>}
        <Grid2 container spacing={3}>
          <Grid item xs={12} md={4}>
            {user && <UserCard user={user} />}
          </Grid>
          <Grid item xs={12} md={8}>
            {repos.length > 0 && <RepoList username={user?.login ?? ''} repos={repos} fullname={fullname} />}
          </Grid>
        </Grid2>
      </Box>
    </Container>
  );
};

export default Home;
