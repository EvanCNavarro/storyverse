'use client';

import { Box, Container, Typography, Paper } from '@mui/material';

export default function StoriesPage() {
  return (
    <Box 
      sx={{ 
        minHeight: '100vh', 
        py: 6,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Container maxWidth="lg">
        <Paper 
          elevation={3} 
          sx={{ 
            p: { xs: 2, md: 4 }, 
            mb: 4, 
            borderRadius: 2,
            backgroundColor: '#fff'
          }}
        >
          <Typography 
            variant="h3" 
            component="h1" 
            align="center" 
            gutterBottom
            sx={{ 
              fontWeight: 'bold',
              color: '#333',
              mb: 4
            }}
          >
            Stories Page
          </Typography>
          
          <Typography variant="body1" align="center" paragraph>
            This is a placeholder for the stories page. It will be expanded to include story creation, selection, and viewing functionality in future updates.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
} 