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
    defaultKey,
    TopSvgFullScreen
}) {
    const imgStyle = {
        width:"100%",
    }

      
    function FullScreen(e) {

    }

  return (
    <>

    <Tabs
      defaultActiveKey={defaultKey}
      id="justify-tab-example"
      className="bg-light mb-5"
      justify
    >
      <Tab eventKey={titleOne} title={titleOne}>
        <img className='img-fluid' onClick={FullScreen} style={imgStyle} src={imgOne} alt="photo" />
        
      </Tab>
      <Tab eventKey={titleTwo} title={titleTwo}>
      <img className='img-fluid' onClick={FullScreen} style={imgStyle} src={imgTwo} alt="photo" />
     
      </Tab>
      <Tab eventKey={titleThree} title={titleThree}>
      <img className='img-fluid' onClick={FullScreen} style={imgStyle} src={imgThree} alt="photo" />
      
      </Tab>
    </Tabs>
    </>
  );
}

export default JustifiedExample;