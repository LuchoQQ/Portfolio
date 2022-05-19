import React from 'react'
import { ListIcon, Box, Icon } from '@chakra-ui/react'

const RadialMenuItem = ({icon, translateY, translateX, display}) => {
  return (
    <>
        <Box
            justifyContent={'center'}
            position={'absolute'}
            transform={`${display ? 'translate(' + translateX + 'px, ' + translateY + 'px)' : 'translate(0, 0)'}`}
            transition={'all 0.5s ease-in-out'}
        >
            <Icon 
                as={icon} 
                fill={'white'}
                fontSize={'6xl'}
                _hover={{ fill: '#ad1d71', transform: 'scale(1.2)' }}
                transition={'all 0.2s ease-in-out'}
                transform={`rotate(${display ? '360deg' : '0deg'})`}
            />
                
        </Box>
    </>
  )
}

export default RadialMenuItem