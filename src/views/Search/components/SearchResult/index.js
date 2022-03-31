import "./style.css"
export default function SearchResult({results, searching}) {
  return(
    <div className="result-container">
      {!results?.length && searching && <p className="results-box-p no-results">No hay resultado</p>}
      {results?.map((value) => {
       return( <div key={value.id} className="results-box">
          <p className="results-box-p"><span className="results-box-p-span">Name :</span> {value.name}</p>
          <p className="results-box-p"><span className="results-box-p-span">Username : </span> {value.username}</p>
          <p className="results-box-p"><span className="results-box-p-span">Email : </span> {value.email}</p>
          <p className="results-box-p"><span className="results-box-p-span">Phone </span>{value.phone}</p>
          </div>)
      })}
    </div>
  )
}