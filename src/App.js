import './App.css';
import Directory from './components/directory/directory.component';

const categories = [
    {
      "id": 1,
      "title": "Hats",
      "imageUrl": "https://th.bing.com/th/id/OIP.rzdx-wLNah2pIFCYmxIDPAHaE7?pid=ImgDet&rs=1"
    },
    {
      "id": 2,
      "title": "Jackets",
      "imageUrl": "https://static.highsnobiety.com/thumbor/B4mPo0ikm9O-rIRgiV1O6UlJJQ0=/960x640/static.highsnobiety.com/wp-content/uploads/2021/03/09153316/the-north-face-special-report-main.jpg"
    },
    {
      "id": 3,
      "title": "Sneakers",
      "imageUrl": "https://th.bing.com/th/id/R.14b6390da22312bdf00050170a011762?rik=1Mkc0FLwcFDBgQ&pid=ImgRaw&r=0"
    },
    {
      "id": 4,
      "title": "Womens",
      "imageUrl": "https://th.bing.com/th/id/R.7c440a257a4f73dc9f064e2fd0c10f0a?rik=i%2bIR34OGdzTbSQ&riu=http%3a%2f%2fwww.ramadakamloops.com%2fContent%2fimages%2fshopping_o.jpg&ehk=%2fmDmHWXfr%2fTksEapuzhbBuECpL5xnmcfGOKKyS0fQQc%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      "id": 5,
      "title": "Mens",
      "imageUrl": "https://www.billionsinstitute.org/wp-content/uploads/2020/03/brand-image-for-clothing-shop-2-768x442.jpg"
    }
  ]
  

function App() {
  return (
    <Directory categories={categories}/>
  );
}

export default App;
