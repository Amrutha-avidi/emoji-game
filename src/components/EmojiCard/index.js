// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {emoji, clickEmoji} = props
  const {id, emojiUrl, emojiName} = emoji

  const emojiClick = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-card">
      <button className="emoji-button" type="button" onClick={emojiClick}>
        <img className="image" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
