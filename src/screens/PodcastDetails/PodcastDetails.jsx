import React from 'react';

import { Container, Icon, Image, ImageGradient, Title, Info, Number, Percentage, Meta, Row, RoundButton, Description, Label, Content, Actions, PlayButton, Progress, HeaderButton, HeaderContainer, HeaderExtraSpace, HeaderGradient} from './styles';
import Player from "~/components/Player";
import BottomTabs from "~/components/BottomTabs";
import { useNavigation } from "react-navigation-hooks";

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
  )
}

function PodcastDetails() {
  return (
    <Container>
      <Header />
      <Content>
        <Image source={{ uri: 'https://www.matandorobosgigantes.com/wp-content/uploads/2019/11/Hollow_Knight_podcast_MRG.jpg' }}>
          <ImageGradient />
          <Number>MRG 477</Number>
          <Title>Hollow Knight, nosso guerreirinho oco!</Title>
        </Image>
        <Info>
          <Row>
            <Meta>8 NOV 2019  •  32 MIN RESTANTE(S)</Meta>
            <Progress>
              <Percentage />
            </Progress>
          </Row>
          <Row style={{ marginTop: 24 }}>
            <PlayButton>
              <Label>Play</Label>
            </PlayButton>
            <Actions>
              <RoundButton>
                <Icon name="share" />
              </RoundButton>
              <RoundButton>
                <Icon name="download" />
              </RoundButton>
            </Actions>
          </Row>
          <Description>
            Hollow Knight, sucesso indie após uma espetacular campanha de financiamento coletivo, desafia os dedos ágeis dos caveleiros-inseto Affonso Solano, Beto Estrada e Didi Braguinha neste podcast Matando Robôs Gigantes, onde o gênero metroidvania e alguns de seus maiores representantes do mundo dos videogames é debatido! Ouça, compartilhe e participe da discussão através das nossas redes sociais – incluindo o Twitter do MRG!
          </Description>
          <Description>
            Hollow Knight, sucesso indie após uma espetacular campanha de financiamento coletivo, desafia os dedos ágeis dos caveleiros-inseto Affonso Solano, Beto Estrada e Didi Braguinha neste podcast Matando Robôs Gigantes, onde o gênero metroidvania e alguns de seus maiores representantes do mundo dos videogames é debatido! Ouça, compartilhe e participe da discussão através das nossas redes sociais – incluindo o Twitter do MRG!
          </Description>
        </Info>
      </Content>
      <Player />
      <BottomTabs />
    </Container>
  )
}

export default PodcastDetails;
