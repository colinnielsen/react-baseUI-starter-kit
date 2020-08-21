import React from 'react';
import { Card, StyledBody, StyledAction } from 'baseui/card';
import { Button } from 'baseui/button';
import { styled } from 'baseui';

const Centered = styled('div', {
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   height: '100vh',
});

const App = () => {
   const [celebrationItems, setCelebrationItems] = React.useState('');
   const renderCelebration = () => {
      setCelebrationItems(`${celebrationItems} 🎉`);
   }

   return (
      <Centered>
         <Card>
            <StyledBody>
               Hi, you've selected the starter kit :)
               <br />
               {celebrationItems}
            </StyledBody>
            <StyledAction>
               <Button overrides={{
                  BaseButton: { style: { width: "100%" } }
               }} onClick={renderCelebration}>click to celebrate</Button>
            </StyledAction>
         </Card>
      </Centered>
   )
}

export default App;