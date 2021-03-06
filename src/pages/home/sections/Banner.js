import {Col, Row} from "react-bootstrap";
import BannerImageBlock from "../../../components/BannerImageBlock";
import Container from "react-bootstrap/Container";
import UuidGenerator from "../../../utils/UuidGenerator";

const Banner = ({banners}) => (
    <Container className="banner pt-40 pb-5" as="section">
        <Row className="justify-content-center">
            {banners.map(col => (
                <Col sm={10} md={8} lg={4} key={UuidGenerator.uuid4()}>
                    {col.map(item => (
                        <BannerImageBlock img={item.img} label={item.label} key={UuidGenerator.uuid4()}/>
                    ))}
                </Col>
            ))}
        </Row>
    </Container>
)

export default Banner