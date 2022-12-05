import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Gallery = (props) => {
  return (
    <Card className="py-3 px-2 mb-4" style={{backgroundColor:"rgba(27, 26, 26, 0.76)", borderRadius:"1.2rem" }}>
      <Card.Img variant="top" src={props.src} className="mx-auto" style={{width:"70%", height:"375px", objectFit:"cover", objectPosition:"top"}} />
      <Card.Body className="text-white">
        <Card.Title> {props.title} </Card.Title>
        <Card.Text> {props.description} </Card.Text>
        <Button variant="primary">Ver mas</Button>
      </Card.Body>
    </Card>
  );
};

export default Gallery;
