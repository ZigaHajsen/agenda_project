import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Buckets, Files } from './components';
import { Navbar } from 'react-bootstrap';

const App = () => {
  const render = useSelector((state: any) => state.render.files);

  return (
    <Fragment>
      <Navbar bg='dark'>
        <Navbar.Brand>Secure cloud storage</Navbar.Brand>
      </Navbar>
      {render ? <Files /> : <Buckets />}
    </Fragment>
  );
};

export default App;
