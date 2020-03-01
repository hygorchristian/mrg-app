import React from 'react';
import { useNavigation } from 'react-navigation-hooks';

import {
  Container,
  HeaderButton,
  HeaderContainer,
  HeaderExtraSpace,
  HeaderGradient,
  Image,
  Icon,
  MIcon,
  ImageBackground,
  Content,
  Label,
  Percentage,
  Number,
  Title,
  Button,
  Controls,
  Slider,
  TimeText,
  TimeView,
} from './styles';
import { images } from '~/utils/dev';

function Header() {
  const { pop } = useNavigation();

  const handleBack = () => {
    pop();
  };

  return (
    <>
      <HeaderExtraSpace />
      <HeaderContainer>
        <HeaderGradient />
        <HeaderButton onPress={handleBack}>
          <Icon name="arrow-left" size={24} />
        </HeaderButton>
        <HeaderButton>
          <Icon name="dots-vertical" size={24} />
        </HeaderButton>
      </HeaderContainer>
    </>
  );
}

function PlayerScreen() {
  return (
    <Container>
      <ImageBackground source={{ uri: images._1917 }} />
      <Header />
      <Image source={{ uri: images._1917 }} />
      <Content>
        <Number>MRG 45</Number>
        <Title>Hollow Knight, nosso guerreirinho oco!</Title>

        <Slider>
          <Percentage />
        </Slider>

        <TimeView>
          <TimeText>56:36</TimeText>
          <TimeText>102:26</TimeText>
        </TimeView>
        <Controls>
          <Button>
            <Label>1x</Label>
          </Button>
          <Button>
            <MIcon name="replay-10" size={40} />
          </Button>
          <Button
            size={70}
            style={{
              marginHorizontal: 5,
            }}
          >
            <MIcon name="play-circle-filled" size={70} />
          </Button>
          <Button>
            <MIcon name="forward-10" size={40} />
          </Button>
          <Button>
            <MIcon name="playlist-play" size={28} />
          </Button>
        </Controls>
      </Content>
    </Container>
  );
}

export default PlayerScreen;
