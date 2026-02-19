import { Box, Typography } from '@mui/material'
import type { ButtonAction } from '../../types'
import FeedbackDisplay from './FeedbackDisplay'

interface HapticScreenProps {
  action: ButtonAction
}

function HapticScreen({ action }: HapticScreenProps) {
  return (
    <Box sx={{
      height: '50vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#0f0f1a',
      borderRadius: 3,
      overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.1)',
    }}>

      {/* Header bar */}
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 20px',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}>
        <Typography sx={{ color: '#f1f5f9', fontWeight: 700, fontSize: 14 }}>
          ⚡ Haptic Feedback
        </Typography>
        <Typography sx={{ color: '#22c55e', fontSize: 12, fontFamily: 'monospace' }}>
          {action ? '● ACTIVE' : '○ IDLE'}
        </Typography>
      </Box>

      {/* Feedback area this is where the animation shows We'll need to work on this part have installed mui */}
      <FeedbackDisplay action={action} />

    </Box>
  )
}

export default HapticScreen