import axios from 'axios';
import { useEffect, useState } from 'react';

// Components;
import Tab from './components/Tab';

function App() {
  const [searchText, setSearchText] = useState('');

  const [data, setData] = useState([]);

  const handleSearch = async () => {
    axios.get(`http://localhost:5000/api/model?searchText=${searchText}`)
      .then((res) => {
        setData(res?.data?.data)
      })
  }

  useEffect(() => {
    handleSearch();
  }, [])

  return (
    <>
      <h1 className='bg-green-800 text-white text-2xl py-2 font-bold text-center'>Search Model</h1>
      <div className="flex mt-10 flex-col justify-center items-center gap-10 ">
        {/* Search & Button */}
        <div>
          <input placeholder='search model' onChange={e => setSearchText(e.target.value)}
            className="border-2 p-2 rounded"
          />{" "}
          <button className='bg-blue-500 py-2 px-5 rounded'
            onClick={handleSearch}
          > Search</button>
        </div>

        {/* Model List */}
        <div className='flex gap-2 mt-2 flex-wrap w-1/2'>
          {
            data?.map((itm, i) =>
              <Tab key={i} itm={itm} />)
          }
        </div>
      </div>
    </>
  );
}

export default App;
