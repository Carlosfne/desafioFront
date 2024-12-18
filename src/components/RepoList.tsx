import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Divider, List, ListItem, ListItemText, Typography } from '@mui/material';

interface RepoListProps {
  username: string;
  fullname: string;
  repos: any[];
  sortOrder: 'stars' | 'name'; 
  onSortChange: (order: 'stars' | 'name') => void;
}

export const RepoList: React.FC<RepoListProps> = ({ username, repos, sortOrder, onSortChange }) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Repositórios de {username}
      </Typography>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="body1">Ordenar por:</Typography>
        <Box>
          <button
            onClick={() => onSortChange('stars')}
            style={{ marginRight: '8px', color: sortOrder === 'stars' ? 'blue' : 'black' }}
          >
            Estrelas
          </button>
          <button
            onClick={() => onSortChange('name')}
            style={{ color: sortOrder === 'name' ? 'blue' : 'black' }}
          >
            Nome
          </button>
        </Box>
      </Box>
      <List>
        {repos.map((repo) => (
          <React.Fragment key={repo.id}>
            <ListItem component={Link} to={`/repo/${repo.full_name}`} sx={{ cursor: 'pointer' }}>
              <ListItemText
                primary={repo.name}
                secondary={`Estrelas: ${repo.stargazers_count}`}
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
    // <Box>
    //   <Typography variant="h6" gutterBottom>
    //     Repositórios de {username}
    //   </Typography>
    //   <List>
    //     {repos.map((repo) => (
    //       <React.Fragment key={repo.id}>
    //         <ListItem component={Link} to={`/repo/${repo.full_name}`} sx={{ cursor: 'pointer' }}>
    //           <ListItemText primary={repo.name} />
    //         </ListItem>
    //         <Divider />
    //       </React.Fragment>
    //     ))}
    //   </List>
    // </Box>
  );
};
