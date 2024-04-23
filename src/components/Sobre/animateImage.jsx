import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
function JustifiedExample({
    titleOne,
    imgOne,
    titleTwo, 
    imgTwo, 
    titleThree,
    imgThree,
    defaultKey
}) {
    const imgStyle = {
        width:"100%"
    }
  return (
    <Tabs
      defaultActiveKey={defaultKey}
      id="justify-tab-example"
      className="mb-5"
      justify
    >
      <Tab eventKey={titleOne} title={titleOne}>
        <img style={imgStyle} src={imgOne} alt="photo" />
      </Tab>
      <Tab eventKey={titleTwo} title={titleTwo}>
      <img style={imgStyle} src={imgTwo} alt="photo" />
      </Tab>
      <Tab eventKey={titleThree} title={titleThree}>
      <img style={imgStyle} src={imgThree} alt="photo" />
      </Tab>
    </Tabs>
  );
}

export default JustifiedExample;