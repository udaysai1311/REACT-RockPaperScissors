import {ImageTag, ButtonTag} from './styledComponents'

const EachImage = props => {
  const {image, clickBtn} = props
  const {imageUrl, id} = image
  // eslint-disable-next-line no-unused-vars
  const lower = id.toLowerCase()
  const onStartingGame = () => {
    clickBtn(id, imageUrl)
  }
  return (
    <ButtonTag
      type="button"
      onClick={onStartingGame}
      data-testid={`${lower}Button`}
    >
      <ImageTag src={imageUrl} alt={id} />
    </ButtonTag>
  )
}
export default EachImage
