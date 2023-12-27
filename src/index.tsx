import ReactDOM from 'react-dom';
import UserSearch from './refs/UserSearch';
// import GuestList from './guest/GuestList';
// import UserSearch from './guest/UserSearch';
// import EventComponent from './events/EventComponent';

const App = () => {
  return (
    <div>
      {/* <GuestList /> */}
      {/* <UserSearch /> */}
      {/* <EventComponent /> */}
      {<UserSearch />}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
