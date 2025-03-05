'use client';

import { useState } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Paper,
  InputAdornment,
  IconButton,
  Alert
} from '@mui/material';
import { Visibility } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === 'storyverse') {
      localStorage.setItem('auth_token', 'authenticated');
      router.push('/profile');
    } else {
      setError('Invalid password');
    }
  };

  return (
    <Box 
      sx={{ 
        minHeight: '100vh', 
        width: '100%',
        backgroundColor: '#F8D68C', // Updated background color
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Main login card */}
      <Paper 
        elevation={3} 
        sx={{ 
          width: '90%', 
          maxWidth: 500,
          marginTop: 6,
          marginBottom: 2,
          padding: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'white',
          zIndex: 2,
          borderRadius: 1
        }}
      >
        <Typography 
          component="h1" 
          variant="h3" 
          sx={{ 
            mb: 3, 
            fontWeight: 'bold',
            color: '#000',
            textAlign: 'center'
          }}
        >
          StoryVerse
        </Typography>
        
        {error && (
          <Alert severity="error" sx={{ mb: 2, width: '100%' }}>
            {error}
          </Alert>
        )}
        
        <form onSubmit={handleLogin} style={{ width: '100%' }}>
          <TextField
            fullWidth
            variant="outlined"
            label="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ 
              mb: 3,
              '& .MuiOutlinedInput-root': {
                fontSize: '1.1rem',
                height: '55px'
              },
              '& .MuiInputLabel-root': {
                fontSize: '1rem'
              }
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton 
                    edge="end"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <Visibility />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          
          <Button 
            type="submit" 
            variant="contained" 
            size="large"
            fullWidth
            sx={{ 
              py: 1.5, 
              fontSize: '1rem',
              backgroundColor: '#3862e0',
              '&:hover': {
                backgroundColor: '#2748c4',
              }
            }}
          >
            ENTER
          </Button>
        </form>
      </Paper>
      
      {/* Rive Animation */}
      <Box sx={{ 
        width: '100%',
        flex: 1,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden' // Keep the animation contained
      }}>
        <iframe 
          style={{ 
            border: 'none', 
            width: '100%',
            height: 'calc(100% + 20px)', // Slightly taller to account for the clipping
            maxHeight: 'calc(100vh - 230px)',
            position: 'absolute',
            top: '-20px', // Move iframe up to clip the top portion
            left: 0
          }}
          src="https://rive.app/s/xVTnBKTp9k20R9P7V2Bqmw/embed?runtime=rive-renderer" 
          allowFullScreen 
          allow="autoplay"
          title="StoryVerse Animation"
        />
      </Box>
    </Box>
  );
} 