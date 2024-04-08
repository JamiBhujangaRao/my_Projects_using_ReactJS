import './index.css'

const TabItem = props => {
  const {tabDetails, updateProjects, isActiveTab} = props
  const {displayText, tabId} = tabDetails

  const onClickTab = () => {
    updateProjects(tabId)
  }
  const tabClassName = isActiveTab ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${tabClassName}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
