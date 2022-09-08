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
  const {itemData} = props
  const {capitalDisplayText} = itemData

  return (
    <option
      className="capital-selection-dropdown-option"
      value={capitalDisplayText}
    >
      {capitalDisplayText}
    </option>
  )
}

export default class Capitals extends Component {
  state = {
    selectedCapital: countryAndCapitalsList[0].capitalDisplayText,
  }

  onCapitalNameSelection = capitalNameSelectionEvent => {
    const capitalNameSelectedByUser = capitalNameSelectionEvent.target.value

    this.setState({
      selectedCapital: capitalNameSelectedByUser,
    })
  }

  render() {
    const {selectedCapital} = this.state
    const capitalsCountryName = getCapitalsCountryName(selectedCapital)

    return (
      <div className="capitals-app-bg-container">
        <div className="content-container">
          <h1 className="content-header">Countries And Capitals</h1>
          <div className="capital-selection-container">
            <select
              className="capital-selection-dropdown"
              name="capital-name"
              value={selectedCapital}
              onChange={this.onCapitalNameSelection}
            >
              {countryAndCapitalsList.map(capitalCountryDataItem => (
                <CapitalItem
                  key={capitalCountryDataItem.id}
                  itemData={capitalCountryDataItem}
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
