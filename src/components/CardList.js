import React, { useState } from "react";
import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import Card from "./Card";

const FilterContainer = styled("div")`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const SearchInput = styled("input")`
  margin-left: 5px;
  padding: 5px;
`;

const FilterOptions = styled("div")`
  position: relative;
  top: 30px;
  left: 30;
  z-index: 1;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
`;

const CardList = ({ data }) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [cardTypeFilter, setCardTypeFilter] = useState("");
  const [filterOptionsVisible, setFilterOptionsVisible] = useState(false);

  const handleSearchIconClick = () => {
    setSearchVisible(!searchVisible);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterIconClick = () => {
    setFilterOptionsVisible(!filterOptionsVisible);
  };

  const handleFilterChange = (event) => {
    setCardTypeFilter(event.target.value);
  };

  const filteredCards = data.filter((card) => {
    const cardName = card.name.toLowerCase();
    const searchQuery = searchTerm.toLowerCase();

    return cardName.includes(searchQuery);
  });

  const filteredAndFilteredCards = filteredCards.filter((card) => {
    if (cardTypeFilter === "") {
      return true;
    }
    return card.card_type === cardTypeFilter;
  });

  return (
    <div>
      <ul id="navbar" className="navbar-nav-1">

    <li className="nav-item">
      <a href="index.html">Your</a>
    </li>

    <li className="nav-item">
      <a href="index.html">All </a>
    </li>
    <li className="nav-item">
      <a href="index.html">Blocked</a>
    </li>
    </ul>
    <hr id="line"></hr>
      <FilterContainer id="nav">
        <SearchIcon onClick={handleSearchIconClick} className="navbar-nav-search" />
        {searchVisible && <SearchInput type="text" value={searchTerm} onChange={handleSearchChange} />}
        <FilterListIcon onClick={handleFilterIconClick}  className="navbar-nav-filter"/>
        {filterOptionsVisible && (
          <FilterOptions>
            <select value={cardTypeFilter} onChange={handleFilterChange}>
              <option value="">All</option>
              <option value="burner">Burner</option>
              <option value="subscription">Subscription</option>
            </select>
          </FilterOptions>
        )}
      </FilterContainer>
      <div className="card-list">
        {filteredAndFilteredCards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
