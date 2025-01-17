export default function Button({ children, style, handleClick }){
  return(
    <button className={`button ${style}`} onClick={handleClick}>{children}</button>
  )
}