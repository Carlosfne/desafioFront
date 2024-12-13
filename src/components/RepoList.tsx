import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Divider, List, ListItem, ListItemText, Typography } from '@mui/material';

interface RepoListProps {
  username: string;
  fullname: string;
  repos: any[];
}

export const RepoList: React.FC<RepoListProps> = ({ username, repos }) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Repositórios de {username}
      </Typography>
      <List>
        {repos.map((repo) => (
          <React.Fragment key={repo.id}>
            <ListItem component={Link} to={`/repo/${repo.full_name}`} sx={{ cursor: 'pointer' }}>
              <ListItemText primary={repo.name} />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};
