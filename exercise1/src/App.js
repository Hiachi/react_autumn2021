import './App.css';
import Header from './components/Header';
import Left from './components/Left';
import Notification from './components/Notification';
import Right from './components/Right';

function App() {
  return (
    <div>
      <Header />
      
      <Notification topic='Football' content='Ronaldo comeback MU' />
      <Notification topic='Technical' content='M2 of Macbook' />
      <Notification topic='World' content='Comming winter :v' />

      <div className='body'>
        <div style={{float: 'left', width: '680px', paddingLeft: '20px'}}> <Left /> </div>
        <div className='right' style={{float: 'left', width: '270px', paddingLeft: '20px', paddingTop: '36px'}}>
          <Right topic='Afghanistan: First foreigners fly out of Kabul since US pull-out' content='Dozens of international passengers - including UK citizens - have flown out of Kabul in the first such flight since US forces left the country.' />
          <Right topic='The Matrix 4: Trailer gives first taste of Keanu Reeves sci-fi comeback' content='Film fans have been given their first full taste of the fourth instalment in the Matrix franchise in a trailer that reintroduces Keanu Reeves hero Neo.' />
          <Right topic='Films showing the reality of marriage' content='Screen depictions of troubled relationships reflect a changing society, writes Caryn James, ...' />
        </div>
      </div>
    </div>
  );
}

export default App;
