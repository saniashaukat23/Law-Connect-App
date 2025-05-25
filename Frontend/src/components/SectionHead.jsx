import "../Styles/SectionHead.css";
function SectionHead(props) {
  return (
    <div className="section-heading">
      <p className="head-top">{props.headTop}</p>
      <p className="heading">
        {props.heading}
        <span>{props.italic}</span>{" "}
      </p>
      <p className="head-text">{props.text}</p>
    </div>
  );
}

export default SectionHead;
