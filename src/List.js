
const List = ({ data }) => {
  const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      {sortedData.map((element, index) => (
        <div className="container" key={index}>
          <h2 className="blue">HIGH SCORES: {element.name}</h2>
          <ul className="list">
            {element.scores
              .sort((a, b) => b.s - a.s)
              .map((score, index) => (
                <li className="items" key={index}>
                  <p className="black">{score.n.toUpperCase()}</p>{" "}
                  <p className="red">{score.s}</p>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default List;
