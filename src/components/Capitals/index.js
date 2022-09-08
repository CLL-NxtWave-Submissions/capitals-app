import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

const getCapitalsCountryName = capitalNameId => {
  const selectedItemCapitalCountryData = countryAndCapitalsList.find(
    countryAndCapitalListItem => countryAndCapitalListItem.id === capitalNameId,
  )

  return selectedItemCapitalCountryData.country
}

const CapitalItem = props => {
  const {itemData, isSelected} = props
  const {id, capitalDisplayText} = itemData

  const optionElementString = `<option className="capital-selection-dropdown-option" value=${id} ${
    isSelected ? 'selected' : ''
  }>${capitalDisplayText}</option>`
  return {optionElementString}
}

export default class Capitals extends Component {
  state = {
    selectedCapitalId: countryAndCapitalsList[0].id,
  }

  onCapitalNameSelection = capitalNameSelectionEvent => {
    const idOfCapitalNameSelectedByUser = capitalNameSelectionEvent.target.value

    this.setState({
      selectedCapitalId: idOfCapitalNameSelectedByUser,
    })
  }

  render() {
    const {selectedCapitalId} = this.state
    const capitalsCountryName = getCapitalsCountryName(selectedCapitalId)

    return (
      <div className="capitals-app-bg-container">
        <div className="content-container">
          <h1 className="content-header">Countries And Capitals</h1>
          <div className="capital-selection-container">
            <select className="capital-selection-dropdown" name="capital-name">
              {countryAndCapitalsList.map(capitalCountryDataItem => (
                <CapitalItem
                  key={capitalCountryDataItem.id}
                  itemData={capitalCountryDataItem}
                  isSelected={capitalCountryDataItem.id === selectedCapitalId}
                />
              ))}
            </select>
            <p className="capital-selection-question">
              is capital of which country?
            </p>
          </div>
          <p className="country-text">{capitalsCountryName}</p>
        </div>
      </div>
    )
  }
}
