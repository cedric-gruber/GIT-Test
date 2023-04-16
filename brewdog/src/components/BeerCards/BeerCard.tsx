import {
  Card,
  CardBody,
  CardHeader,
  CardSubtitle,
  CardTitle,
} from "@progress/kendo-react-all";
import Image from "./Image";
import { Beer } from "../../types/beer/";

interface BeerCardProps {
  data: Beer;
}

const BeerCard = ({ data }: BeerCardProps): JSX.Element => (
  <Card orientation="horizontal" className="h-100">
    <div className="m-2 d-flex align-items-center">
      <Image src={data.image_url} />
    </div>
    <div className="k-vbox">
      <CardHeader>
        <CardTitle>
          {data.name} ({data.abv}%)
        </CardTitle>
        <CardSubtitle>{data.tagline}</CardSubtitle>
      </CardHeader>
      <CardBody>
        <p>{data.description}</p>
      </CardBody>
    </div>
  </Card>
);

export default BeerCard;
