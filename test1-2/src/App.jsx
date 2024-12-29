import './App.css';
// import Slots from './slots';
import PropertiesList from './propertiesList';

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

function App(){
  return (
    <div>
      {/* <Slots val1="a" val2="a" val3="a" /> */}
      {/* <Slots val1="a" val2="a" val3="b" /> */}
      <PropertiesList properties={properties} />
    </div>
  )
}

export default App;