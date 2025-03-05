'use client';

import { useState } from 'react';
import { Box, Container, Typography, Paper, Button, Grid, Avatar, Card, CardContent, CardActions } from '@mui/material';
import { useRouter } from 'next/navigation';

interface ProfileCardProps {
  name: string;
  description: string;
  avatarSrc: string;
  selected: boolean;
  onSelect: () => void;
}

const ProfileCard = ({ name, description, avatarSrc, selected, onSelect }: ProfileCardProps) => (
  <Card 
    sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      border: selected ? '3px solid #1976d2' : '1px solid #e0e0e0',
      transform: selected ? 'scale(1.03)' : 'scale(1)',
      transition: 'all 0.2s ease-in-out',
      backgroundColor: selected ? '#f0f7ff' : 'white',
    }}
  >
    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 4 }}>
      <Avatar 
        alt={name} 
        src={avatarSrc} 
        sx={{ 
          width: 120, 
          height: 120, 
          mb: 2,
          border: selected ? '3px solid #1976d2' : '1px solid #e0e0e0',
        }} 
      />
      <Typography gutterBottom variant="h5" component="h2" textAlign="center">
        {name}
      </Typography>
      <Typography variant="body1" color="text.secondary" textAlign="center">
        {description}
      </Typography>
    </CardContent>
    <CardActions sx={{ justifyContent: 'center', pb: 3 }}>
      <Button 
        size="large" 
        variant={selected ? "contained" : "outlined"} 
        onClick={onSelect}
        fullWidth
        sx={{ mx: 2 }}
      >
        {selected ? 'Selected' : 'Select'}
      </Button>
    </CardActions>
  </Card>
);

export default function ProfilePage() {
  const router = useRouter();
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);

  const handleProfileSelect = (profile: string) => {
    setSelectedProfile(profile);
  };

  const handleContinue = () => {
    if (selectedProfile) {
      // In a real app, we would store the selected profile in context or state
      // For now, we'll just navigate to a stories page
      router.push('/stories');
    }
  };

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
            textAlign="center" 
            gutterBottom
            sx={{ 
              fontWeight: 'bold',
              color: '#333',
              mb: 4
            }}
          >
            Choose Your Profile
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={5}>
              <ProfileCard
                name="Ivan"
                description="Enter Ivan's magical world of adventure and fantasy. Perfect for younger storytellers with a big imagination!"
                avatarSrc="/assets/ivan-avatar.png"
                selected={selectedProfile === 'ivan'}
                onSelect={() => handleProfileSelect('ivan')}
              />
            </Grid>
            
            <Grid item xs={12} sm={6} md={5}>
              <ProfileCard
                name="Isaac"
                description="Join Isaac's realm of science fiction and mystery. Ideal for those who love intricate plots and fascinating characters!"
                avatarSrc="/assets/isaac-avatar.png"
                selected={selectedProfile === 'isaac'}
                onSelect={() => handleProfileSelect('isaac')}
              />
            </Grid>
          </Grid>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
            <Button 
              variant="contained" 
              color="primary" 
              size="large"
              disabled={!selectedProfile}
              onClick={handleContinue}
              sx={{ 
                px: 4, 
                py: 1.5, 
                borderRadius: 2,
                fontSize: '1.1rem',
                fontWeight: 'bold'
              }}
            >
              Continue to Stories
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
} 