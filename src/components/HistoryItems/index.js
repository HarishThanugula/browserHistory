import './index.css'

const HistoryItems = props => {
  const {historyList, updateHistoryList} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyList

  const deleteItem = () => {
    updateHistoryList(id)
  }

  return (
    <li className="history-item-container">
      <div className="card">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="logoUrl" className="logo-image" />
        <p className="title">{title}</p>
        <p className="domain-name" alt="domain logo">
          {domainUrl}
        </p>
      </div>
      <button type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-image"
          onClick={deleteItem}
        />
      </button>
    </li>
  )
}

export default HistoryItems
