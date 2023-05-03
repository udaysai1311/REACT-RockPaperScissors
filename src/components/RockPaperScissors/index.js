import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'

import {
  MainCont,
  HeadCont,
  UnList,
  TitleCont,
  Headings,
  Hadings,
  ScoreCont,
  Heading,
  ReCont,
  RCont,
  Cont,
  Head,
  ImageTag,
  Image,
  PopupStyled,
  ModalContainer,
  Close,
  Container,
  RulesBtn,
  ResetBtn,
} from './styledComponents'
import EachImage from '../EachImage'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RockPaperScissors extends Component {
  state = {score: 0, resultText: '', gameOn: false, yourUrl: '', oppUrl: ''}

  renderGame = () => (
    <>
      <UnList>
        {choicesList.map(image => (
          <EachImage key={image.id} image={image} clickBtn={this.clickBtn} />
        ))}
      </UnList>
    </>
  )

  resetGame = () => {
    this.setState({gameOn: false})
  }

  renderFinish = () => {
    const {oppUrl, resultText, yourUrl} = this.state
    return (
      <>
        <ReCont>
          <RCont>
            <Cont>
              <Headings>YOU</Headings>
              <ImageTag src={yourUrl} alt="your choice" />
            </Cont>
            <Cont>
              <Headings>OPPONENT</Headings>
              <ImageTag src={oppUrl} alt="opponent choice" />
            </Cont>
          </RCont>
          <div>
            <Hadings>{resultText}</Hadings>
            <ResetBtn type="button" onClick={this.resetGame}>
              PLAY AGAIN
            </ResetBtn>
          </div>
        </ReCont>
      </>
    )
  }

  clickBtn = (id, imageUrl) => {
    const {score} = this.state
    const randomImage =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    console.log(id, randomImage.id)
    if (id === randomImage.id) {
      this.setState({
        gameOn: true,
        score,
        resultText: 'IT IS DRAW',
        yourUrl: imageUrl,
        oppUrl: randomImage.imageUrl,
      })
    } else if (
      (id === 'PAPER' && randomImage.id === 'ROCK') ||
      (id === 'ROCK' && randomImage.id === 'SCISSORS') ||
      (id === 'SCISSORS' && randomImage.id === 'PAPER')
    ) {
      this.setState({
        gameOn: true,
        resultText: 'YOU WON',
        yourUrl: imageUrl,
        oppUrl: randomImage.imageUrl,
      })
      this.setState(prev => ({score: prev.score + 1}))
    } else {
      this.setState({
        gameOn: true,
        resultText: 'YOU LOSE',
        yourUrl: imageUrl,
        oppUrl: randomImage.imageUrl,
      })
      this.setState(prev => ({score: prev.score - 1}))
    }
  }

  render() {
    const {score, gameOn} = this.state
    return (
      <MainCont>
        <div>
          <HeadCont>
            <TitleCont>
              <Headings>
                Rock <br />
                Paper <br />
                Scissors
              </Headings>
            </TitleCont>
            <ScoreCont>
              <Heading>Score</Heading>
              <Head>{score}</Head>
            </ScoreCont>
          </HeadCont>
          <div>{gameOn ? this.renderFinish() : this.renderGame()}</div>
        </div>
        <div>
          <PopupStyled
            modal
            focus
            closeOnDocumentClick
            trigger={<RulesBtn type="button">Rules</RulesBtn>}
          >
            {close => (
              <>
                <ModalContainer>
                  <Close type="button" onClick={() => close()}>
                    <RiCloseLine />
                  </Close>
                  <Container>
                    <Image
                      src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                      alt="rules"
                    />
                  </Container>
                </ModalContainer>
              </>
            )}
          </PopupStyled>
        </div>
      </MainCont>
    )
  }
}

export default RockPaperScissors
