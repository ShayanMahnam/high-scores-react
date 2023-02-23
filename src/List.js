 

const List = ({ data }) =>
  data.map((element, index) => (
    <div className="container" key={index}>
      <h2 className="blue">HIGH SCORES: {element.name}</h2>
      <ul className="list">
        {element.scores.map((score, index) => (
          <li className="items" key={index}>
            <p className="black">{score.n.toUpperCase()}</p> <p className="red">{score.s}</p>
          </li>
        ))}
      </ul>
    </div>
  ));

export default List