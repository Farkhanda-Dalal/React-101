const Accordian = ({ data, handleSelection, selected }) => {
  const bodyId = selected[0];
  const buttonSymbol = selected[1];
  return (
    <>
      
      {data.map(item => (
        <div className="accordian">
          <h1 className="title" key={item.id}>{item.title}</h1>
          <span className="button" onClick={() => handleSelection(item.id)}>
            {bodyId === item.id ? "-" : "+"}
          </span>
          {bodyId === item.id ?
            <h1 className="accBody">{item.body}</h1>
            : null
          }
        </div >

      ))}
    </>
  )
}

export default Accordian;