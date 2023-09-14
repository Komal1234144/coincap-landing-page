// CryptoTable.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';
import './Table.scss'; // Import your SCSS stylesheet

const CryptoTable = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 50;

  useEffect(() => {
    fetchCryptoData();
  }, [currentPage]);

  const fetchCryptoData = async () => {
    try {
      const response = await axios.get(
        `https://api.coincap.io/v2/assets?limit=${pageSize}&page=${currentPage}`
      );
      // setCryptoData(response.data.data);
      console.log(response.data.data.length);
      let length = response.data.data.length;
      let data;

      if (length >= currentPage * 50) {

        // console.log('yess', currentPage)

        if (length >= (currentPage + 1) * 50) {
          // console.log('yes1')
          data = response.data.data.slice(currentPage * 50, (currentPage + 1) * 50)
        } else {
          // console.log('yess2')
          data = response.data.data.slice(currentPage * 50)

        }

        // console.log(data)
        if (data.length > 0) {
          setCryptoData(data)
        }
      }

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const loadMore = () => {
    setCurrentPage(currentPage + 1);
  };


  // useEffect(() => {
  //   // Fetch cryptocurrency data from the CoinCap API
  //   axios.get('https://api.coincap.io/v2/assets').then((response) => {
  //     setCryptoData(response.data.data);
  //   });
  // }, []);

  return (
    <div className="crypto-table">
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price (USD)</th>
            <th>Market Cap (USD)</th>
            <th>24h Change</th>
            <th>24h Volume</th>
            <th>Icon</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((crypto) => (
            <tr key={crypto.id}>
              <td>{crypto.name}</td>
              <td>{crypto.symbol}</td>
              <td>${parseFloat(crypto.priceUsd).toFixed(2)}</td>
              <td>${parseFloat(crypto.marketCapUsd).toFixed(2)}</td>
              <td>{`${parseFloat(crypto.changePercent24Hr).toFixed(2)}%`}</td>
              <td>${parseFloat(crypto.volumeUsd24Hr).toFixed(2)}</td>
              <td>
                <img
                  src={`https://assets.coincap.io/assets/icons/${crypto.symbol
                    .toLowerCase()
                    .replace(/\s+/g, '-') // Replace spaces with hyphens
                    }@2x.png`}
                  alt={crypto.name}
                />
              </td>
            </tr>
          ))}
        </tbody>

      </Table>

      <div className='load-btn'>
        <button className="load-more-button" onClick={loadMore}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default CryptoTable;
