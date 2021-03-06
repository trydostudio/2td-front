import * as S from './styles'

import MediaMatch from 'components/MediaMatch'

const VideoBg = () => {
  const videoSource = 'videos/video-large.mp4'

  return (
    <S.Wrapper>
      <MediaMatch lessThan="large">
        <S.VideoSmall>
          <S.VideoSmallContainer>
            <video autoPlay loop muted poster="images/video-bg.webp">
              <source src={videoSource} />
            </video>
          </S.VideoSmallContainer>
        </S.VideoSmall>
      </MediaMatch>
    </S.Wrapper>
  )
}

export default VideoBg
