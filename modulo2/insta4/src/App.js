import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/34'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Tiago'}
          fotoUsuario={'https://picsum.photos/50/53'}
          fotoPost={'https://picsum.photos/200/120'}
        />

<Post
          nomeUsuario={'Geovana'}
          fotoUsuario={'https://picsum.photos/50/24'}
          fotoPost={'https://picsum.photos/200/134'}
        />
      </MainContainer>
    );
  }
}

export default App;
