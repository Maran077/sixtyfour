import "./ContentCard.css";

type Props = {
  image: string;
  title: string;
  content: string;
};

function ContentCard({ content, image, title }: Props) {
  return (
    <div className="card">
      <img src={image} alt="thumbnail" />
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default ContentCard;
